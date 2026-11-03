import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon, TrashIcon } from '@navikt/aksel-icons';
import { Box, Button, ErrorMessage, HStack, VStack } from '@navikt/ds-react';

import { RhfDatepicker, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidDecimal, maxValueFormatted, minValue, required } from '@navikt/ft-form-validators';
import { notEmpty, parseCurrencyInput, periodFormat } from '@navikt/ft-utils';

import type { RefusjonsAndel, UtfallÅrsak } from '../../../types/dataTypes';
import type { OverstyrRefusjonFormValues } from '../formValues';
import { erGyldigOppdeling } from './erGyldigOppdeling';
import { utledRefusjonsperioder } from './utledRefusjonsperioder';

interface Props {
  andelIndex: number;
  opprinneligAndel: RefusjonsAndel;
  readOnly: boolean;
}

export const RefusjonskravOverstyring = ({ andelIndex, opprinneligAndel, readOnly }: Props) => {
  const intl = useIntl();
  const { control } = useFormContext<OverstyrRefusjonFormValues>();
  const name = `refusjonsandeler.${andelIndex}.refusjonsperioder` as const;
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });
  const perioder = useWatch({ control, name });
  const utlededePerioder = utledRefusjonsperioder(perioder, opprinneligAndel);
  const harGyldigOppdeling = erGyldigOppdeling(utlededePerioder, opprinneligAndel.refusjonsperioder);
  const endredePerioder = utlededePerioder.filter(
    periode =>
      !opprinneligAndel.refusjonsperioder.some(
        original =>
          original.fom === periode.fom &&
          original.tom === periode.tom &&
          original.refusjonsbeløpPrMnd === periode.refusjonsbeløpPrMnd,
      ),
  );

  return (
    <VStack gap="space-16" paddingInline="space-16">
      {fields.map((field, index) => (
        <HStack
          as="section"
          key={field.id}
          gap="space-16"
          align="start"
          aria-label={intl.formatMessage({ id: 'RefusjonskravOverstyring.Periode' }, { nummer: index + 1 })}
        >
          <RhfDatepicker
            control={control}
            name={`${name}.${index}.fom`}
            label={<FormattedMessage id="RefusjonskravOverstyring.Fom" />}
            validate={[required, hasValidDate]}
            readOnly={readOnly || index === 0}
          />
          <RhfTextField
            control={control}
            name={`${name}.${index}.refusjonsbeløpPrMnd`}
            label={<FormattedMessage id="RefusjonskravOverstyring.Beløp" />}
            parse={parseCurrencyInput}
            validate={[required, hasValidDecimal, minValue(0), maxValueFormatted(178956970)]}
            readOnly={readOnly}
          />
          {(perioder[index]?.utfallÅrsak || endredePerioder.some(periode => periode.fom === perioder[index]?.fom)) && (
            <RhfSelect
              control={control}
              name={`${name}.${index}.utfallÅrsak`}
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
                onClick={() => remove(index)}
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
                ...notEmpty(opprinneligAndel.refusjonsperioder.at(-1)),
                fom: '',
                tom: '',
                refusjonsbeløpPrMnd: undefined,
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
