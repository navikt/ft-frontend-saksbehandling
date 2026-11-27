import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon, TrashIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, ErrorMessage, HStack, Tag, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { RhfDatepicker, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidInteger, maxValueFormatted, minValue, required } from '@navikt/ft-form-validators';
import { DateLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT, notEmpty, periodFormat, sortPeriodsByFom, TIDENES_ENDE } from '@navikt/ft-utils';

import type { UtfallÅrsak } from '../../../types/aksjonspunkt';
import type { RefusjonsandelDto } from '../../../types/dataTypes';
import { erAvslåttEtterFrist } from '../erAvslåttEtterFrist';
import type { OverstyrRefusjonFormValues } from '../formValues';
import { erGyldigeLåstePerioder } from './erGyldigeLåstePerioder';
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
  const opprinneligePerioder = opprinneligAndel.refusjonsperioder.toSorted(sortPeriodsByFom);
  const låstePerioder = opprinneligePerioder.filter(erAvslåttEtterFrist);
  const låsteStartdatoer = new Set([
    opprinneligePerioder[0]?.fom,
    ...låstePerioder.flatMap(periode => [
      periode.fom,
      dayjs(periode.tom || TIDENES_ENDE)
        .add(1, 'day')
        .format(ISO_DATE_FORMAT),
    ]),
  ]);
  const sisteOverstyrbareOriginal = opprinneligePerioder.findLast(periode => !erAvslåttEtterFrist(periode));
  const utlededePerioder = utledRefusjonsperioder(perioder, opprinneligAndel);
  const harGyldigOppdeling = erGyldigOppdeling(utlededePerioder, opprinneligAndel.refusjonsperioder);
  const harGyldigeLåstePerioder = erGyldigeLåstePerioder(perioder, opprinneligAndel);
  const endredePerioder = utlededePerioder.filter(
    periode =>
      !opprinneligAndel.refusjonsperioder.some(
        original => original.fom === periode.fom && original.refusjonPrMnd === periode.refusjonPrMnd,
      ),
  );

  const fjernPeriode = (periodeIndexSomSkalFjernes: number) => {
    const perioderSortertEtterFom = perioder
      .map((periode, skjemaIndex) => ({ ...periode, skjemaIndex }))
      .filter(periode => periode.fom && !hasValidDate(periode.fom))
      .toSorted(sortPeriodsByFom);
    const sistePeriode = perioderSortertEtterFom.at(-1);
    const nestSistePeriode = perioderSortertEtterFom.at(-2);
    const sistePeriodesSluttdato = sistePeriode?.tom || TIDENES_ENDE;
    const skalVidereføreSluttdato =
      sistePeriode?.skjemaIndex === periodeIndexSomSkalFjernes &&
      nestSistePeriode &&
      (sistePeriodesSluttdato === TIDENES_ENDE || !hasValidDate(sistePeriodesSluttdato)) &&
      sistePeriode.fom <= sistePeriodesSluttdato;
    if (skalVidereføreSluttdato) {
      setValue(`${name}.${nestSistePeriode.skjemaIndex}.tom`, sistePeriodesSluttdato, { shouldDirty: true });
    }
    remove(periodeIndexSomSkalFjernes);
  };

  return (
    <Box asChild background="neutral-soft" borderRadius="8" padding="space-16">
      <VStack gap="space-8">
        {fields.map((field, index) => {
          const låstPeriode = låstePerioder.find(periode => periode.fom === perioder[index]?.fom);
          const erStartdatoLåst = index === 0 || låsteStartdatoer.has(perioder[index]?.fom);

          return (
            <VStack
              as="section"
              key={field.id}
              gap="space-8"
              aria-label={intl.formatMessage({ id: 'RefusjonskravOverstyring.Periode' }, { nummer: index + 1 })}
            >
              <HStack gap="space-16" align="start">
                <Box width="138px">
                  <RhfDatepicker
                    control={control}
                    name={`${name}.${index}.fom`}
                    label={<FormattedMessage id="RefusjonskravOverstyring.Fom" />}
                    validate={[required, hasValidDate]}
                    readOnly={readOnly || erStartdatoLåst}
                    defaultMonth={finnStandardMåned(perioder, index, opprinneligePerioder[0]?.fom)}
                  />
                </Box>

                {låstPeriode && (
                  <Box width="138px">
                    <LabeledValue
                      label={<FormattedMessage id="RefusjonskravOverstyring.Tom" />}
                      value={
                        låstPeriode.tom && låstPeriode.tom !== TIDENES_ENDE ? (
                          <DateLabel dateString={låstPeriode.tom} />
                        ) : (
                          <FormattedMessage id="RefusjonskravOverstyring.Løpende" />
                        )
                      }
                    />
                  </Box>
                )}

                <RhfTextField
                  control={control}
                  name={`${name}.${index}.refusjonPrMnd`}
                  label={<FormattedMessage id="RefusjonskravForm.RefusjonsbeløpPrMnd" />}
                  parse={value => value.toString().replaceAll(/\s/g, '').replace(',', '.')}
                  validate={[required, hasValidInteger, minValue(0), maxValueFormatted(178956970)]}
                  readOnly={readOnly || !!låstPeriode}
                />

                {låstPeriode ? (
                  <Box asChild marginBlock="space-28 space-0">
                    <Tag size="small" variant="moderate" data-color="danger">
                      <FormattedMessage id="RefusjonskravOverstyring.AvslåttPeriode" />
                    </Tag>
                  </Box>
                ) : (
                  endredePerioder.some(p => p.fom === perioder[index]?.fom) && (
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
                  )
                )}
                {!readOnly && !erStartdatoLåst && (
                  <Box asChild marginBlock="space-28 space-0">
                    <Button
                      type="button"
                      variant="tertiary"
                      size="small"
                      icon={<TrashIcon aria-hidden />}
                      onClick={() => fjernPeriode(index)}
                      aria-label={intl.formatMessage(
                        { id: 'RefusjonskravOverstyring.FjernPeriode' },
                        { nummer: index + 1 },
                      )}
                    />
                  </Box>
                )}
              </HStack>
              {låstPeriode && (
                <BodyShort size="small">
                  <FormattedMessage id="RefusjonskravOverstyring.AvslåttEtterFrist" />
                </BodyShort>
              )}
            </VStack>
          );
        })}

        {!readOnly && !harGyldigeLåstePerioder && (
          <ErrorMessage role="alert" size="small">
            <FormattedMessage id="RefusjonskravOverstyring.EndretLåstPeriode" />
          </ErrorMessage>
        )}

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

        {!readOnly && sisteOverstyrbareOriginal && (
          <div>
            <Button
              type="button"
              variant="tertiary"
              size="small"
              icon={<PlusCircleIcon aria-hidden />}
              onClick={() =>
                append({
                  ...notEmpty(sisteOverstyrbareOriginal),
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
    </Box>
  );
};

const finnStandardMåned = (perioder: { fom: string }[], index: number, opprinneligFom?: string) =>
  dayjs(
    perioder.slice(0, index + 1).findLast(periode => periode.fom && !hasValidDate(periode.fom))?.fom ?? opprinneligFom,
  ).toDate();
