import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon, TrashIcon } from '@navikt/aksel-icons';
import { Box, Button, ErrorMessage, HStack, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { RhfDatepicker, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidDecimal, maxValueFormatted, minValue, required } from '@navikt/ft-form-validators';
import { notEmpty, periodFormat, sortPeriodsByFom, TIDENES_ENDE } from '@navikt/ft-utils';

import type { UtfallÅrsak } from '../../../types/aksjonspunkt';
import type { RefusjonsandelDto } from '../../../types/dataTypes';
import type { OverstyrRefusjonFormValues } from '../formValues';
import { erGyldigOppdeling } from './erGyldigOppdeling';
import { utledRefusjonsperioder } from './utledRefusjonsperioder';

interface Props {
  andelIndex: number;
  opprinneligAndel: RefusjonsandelDto;
  readOnly: boolean;
}

export const RefusjonskravOverstyring = ({ andelIndex, opprinneligAndel, readOnly }: Props) => {
  const intl = useIntl();
  const { control, setValue } = useFormContext<OverstyrRefusjonFormValues>();
  const name = `refusjonsandeler.${andelIndex}.refusjonsperioder` as const;
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });
  const perioder = useWatch({ control, name });
  const sisteOriginal = opprinneligAndel.refusjonsperioder.toSorted(sortPeriodsByFom).at(-1);
  const utlededePerioder = utledRefusjonsperioder(perioder, opprinneligAndel);
  const harGyldigOppdeling = erGyldigOppdeling(utlededePerioder, opprinneligAndel.refusjonsperioder);
  const endredePerioder = utlededePerioder.filter(
    periode =>
      !opprinneligAndel.refusjonsperioder.some(
        original => original.fom === periode.fom && original.refusjonPrMnd === periode.refusjonPrMnd,
      ),
  );

  const fjernPeriode = (index: number) => {
    const sortertePerioder = perioder
      .map((periode, periodeIndex) => ({ ...periode, index: periodeIndex }))
      .filter(periode => periode.fom && !hasValidDate(periode.fom))
      .toSorted(sortPeriodsByFom);
    const siste = sortertePerioder.at(-1);
    const forrige = sortertePerioder.at(-2);
    const tom = siste?.tom || TIDENES_ENDE;
    if (siste?.index === index && forrige && (tom === TIDENES_ENDE || !hasValidDate(tom)) && siste.fom <= tom) {
      setValue(`${name}.${forrige.index}.tom`, tom, { shouldDirty: true });
    }
    remove(index);
  };

  return (
    <VStack gap="space-8" paddingInline="space-16">
      {fields.map((field, index) => (
        <HStack
          as="section"
          key={field.id}
          gap="space-16"
          align="start"
          aria-label={intl.formatMessage({ id: 'RefusjonskravOverstyring.Periode' }, { nummer: index + 1 })}
        >
          <Box width="138px">
            <RhfDatepicker
              control={control}
              name={`${name}.${index}.fom`}
              label={<FormattedMessage id="RefusjonskravOverstyring.Fom" />}
              validate={[required, hasValidDate]}
              readOnly={readOnly || index === 0}
              defaultMonth={finnStandardMåned(perioder, index, opprinneligAndel.refusjonsperioder[0]?.fom)}
            />
          </Box>

          <RhfTextField
            control={control}
            name={`${name}.${index}.refusjonPrMnd`}
            label={<FormattedMessage id="RefusjonskravForm.RefusjonsbeløpPrMnd" />}
            parse={value => value.toString().replaceAll(/\s/g, '').replace(',', '.')}
            validate={[required, hasValidDecimal, minValue(0), maxValueFormatted(178956970)]}
            readOnly={readOnly}
          />

          {endredePerioder.some(p => p.fom === perioder[index]?.fom) && (
            <RhfSelect
              control={control}
              name={`${name}.${index}.overstyringsÅrsak`}
              label={<FormattedMessage id="RefusjonskravForm.Årsak" />}
              readOnly={readOnly}
              selectValues={[
                <option key="KONKURS" value={'KONKURS' satisfies UtfallÅrsak}>
                  <FormattedMessage id="RefusjonskravForm.Årsak.KONKURS" />
                </option>,
                <option key="UTMELDT" value={'UTMELDT' satisfies UtfallÅrsak}>
                  <FormattedMessage id="RefusjonskravForm.Årsak.UTMELDT" />
                </option>,
                <option key="AVTALT_MED_ARBEIDSGIVER" value={'AVTALT_MED_ARBEIDSGIVER' satisfies UtfallÅrsak}>
                  <FormattedMessage id="RefusjonskravForm.Årsak.AVTALT_MED_ARBEIDSGIVER" />
                </option>,
              ]}
            />
          )}
          {!readOnly && index > 0 && (
            <Box asChild marginBlock="space-28 space-0">
              <Button
                type="button"
                variant="tertiary"
                size="small"
                icon={<TrashIcon aria-hidden />}
                onClick={() => fjernPeriode(index)}
                aria-label={intl.formatMessage({ id: 'RefusjonskravOverstyring.FjernPeriode' }, { nummer: index + 1 })}
              />
            </Box>
          )}
        </HStack>
      ))}

      {!readOnly && !harGyldigOppdeling && (
        <ErrorMessage role="alert" size="small">
          <FormattedMessage
            id="RefusjonskravOverstyring.UgyldigOppdeling"
            values={{
              perioder: intl.formatList(
                opprinneligAndel.refusjonsperioder.map(({ fom, tom }) => periodFormat(fom, tom)),
              ),
            }}
          />
        </ErrorMessage>
      )}

      {!readOnly && (
        <div>
          <Button
            type="button"
            variant="tertiary"
            size="small"
            icon={<PlusCircleIcon aria-hidden />}
            onClick={() =>
              append({
                ...notEmpty(sisteOriginal),
                fom: '',
                tom: perioder.toSorted(sortPeriodsByFom).at(-1)?.tom || TIDENES_ENDE,
                refusjonPrMnd: undefined,
              })
            }
          >
            <FormattedMessage id="RefusjonskravOverstyring.LeggTilPeriode" />
          </Button>
        </div>
      )}
    </VStack>
  );
};

const finnStandardMåned = (perioder: { fom: string }[], index: number, opprinneligFom?: string) =>
  dayjs(
    perioder.slice(0, index + 1).findLast(periode => periode.fom && !hasValidDate(periode.fom))?.fom ?? opprinneligFom,
  ).toDate();
