import { useFieldArray, useForm, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';

import { RhfForm, RhfTextarea, SubmitButton } from '@navikt/ft-form-hooks';
import { maxLength, minLength, required } from '@navikt/ft-form-validators';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { isDateWithinInterval, notEmpty, sortPeriodsByFom } from '@navikt/ft-utils';

import type { AksjonspunktRefusjon, AksjonspunktSubmitType } from '../../types/aksjonspunkt';
import type { RefusjonsAndel } from '../../types/dataTypes';
import { Utbetaling } from '../Utbetaling';
import type { AvklarRefusjonsKravFormValues, RefusjonskravFormRad, RefusjonskravVurdering } from './formValues';
import { RefusjonskravDetaljer } from './RefusjonskravDetaljer';
import { RefusjonskravRadVurdering } from './RefusjonskravRadVurdering';
import { RefusjonskravTabell } from './RefusjonskravTabell';
import { useDirtyRows } from './useDirtyRows';
import { useOpenRows } from './useOpenRows';

interface Props {
  aksjonspunkt: AksjonspunktRefusjon[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  refusjonsandeler: RefusjonsAndel[];
  readOnly: boolean;
  submitCallback: (aksjonspunktData: AksjonspunktSubmitType) => Promise<void>;
  formData?: AvklarRefusjonsKravFormValues;
  setFormData: (data: AvklarRefusjonsKravFormValues) => void;
}

export const RefusjonskravForm = ({
  aksjonspunkt,
  arbeidsgiverOpplysningerPerId,
  refusjonsandeler,
  readOnly,
  submitCallback,
  formData,
  setFormData,
}: Props) => {
  const formMethods = useForm<AvklarRefusjonsKravFormValues>({
    mode: 'onChange',
    defaultValues: formData ?? buildInitialValues(aksjonspunkt, refusjonsandeler, arbeidsgiverOpplysningerPerId),
  });

  const { fields } = useFieldArray({
    control: formMethods.control,
    name: 'refusjonskrav',
  });
  const refusjonskrav = useWatch({
    control: formMethods.control,
    name: 'refusjonskrav',
  });

  const rader = fields.map((field, index) => ({
    ...field,
    ...refusjonskrav[index],
  }));

  const erAlleRaderFerdigVurdert = refusjonskrav.every(erRadFerdigVurdert);
  const { openRowsIndices, onOpenChange, closeRow } = useOpenRows(fields);
  const { hasDirtyRows, onDirtyChange } = useDirtyRows();

  const onSave = (index: number, values: RefusjonskravVurdering) => {
    formMethods.setValue(`refusjonskrav.${index}.kilde`, 'SAKSBEHANDLER', { shouldDirty: true });
    formMethods.setValue(`refusjonskrav.${index}.utfall`, values.utfall, { shouldDirty: true });
    formMethods.setValue(
      `refusjonskrav.${index}.utfallÅrsak`,
      values.utfall === 'AVSLÅTT' ? values.utfallÅrsak : undefined,
      { shouldDirty: true },
    );
    onDirtyChange(index, false);
    closeRow(index);
  };

  return (
    <RhfForm
      formMethods={formMethods}
      setDataOnUnmount={setFormData}
      onSubmit={values =>
        !hasDirtyRows &&
        values.refusjonskrav.every(erRadFerdigVurdert) &&
        submitCallback(transformValues(values, refusjonsandeler))
      }
    >
      <VStack gap="space-20">
        <Utbetaling />

        <RefusjonskravTabell
          rader={rader}
          åpneRader={openRowsIndices}
          onOpenChange={onOpenChange}
          renderRowContent={(krav, index) =>
            krav.utfall === undefined || krav.kilde === 'SAKSBEHANDLER' ? (
              <VStack key={fields[index].id} gap="space-16" paddingInline="space-16">
                <RefusjonskravDetaljer krav={krav} />
                <RefusjonskravRadVurdering
                  index={index}
                  krav={krav}
                  readOnly={readOnly}
                  onSave={onSave}
                  onDirtyChange={onDirtyChange}
                />
              </VStack>
            ) : null
          }
        />

        <RhfTextarea
          control={formMethods.control}
          name="begrunnelse"
          label={<FormattedMessage id="RefusjonskravForm.Begrunnelse" />}
          readOnly={readOnly}
          validate={[required, minLength(3), maxLength(1000)]}
        />

        <div>
          <SubmitButton
            isReadOnly={readOnly}
            isDirty={formMethods.formState.isDirty}
            isSubmitting={formMethods.formState.isSubmitting}
            isSubmittable={formMethods.formState.isValid && erAlleRaderFerdigVurdert && !hasDirtyRows}
            hasErrors={Object.keys(formMethods.formState.errors).length > 0}
          />
        </div>
      </VStack>
    </RhfForm>
  );
};

const erRadFerdigVurdert = (rad: RefusjonskravFormRad) =>
  rad.utfall !== undefined && (rad.utfall !== 'AVSLÅTT' || !!rad.utfallÅrsak);

const buildInitialValues = (
  aksjonspunkt: AksjonspunktRefusjon[],
  refusjonsandeler: RefusjonsAndel[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): AvklarRefusjonsKravFormValues => ({
  begrunnelse: aksjonspunkt.find(ap => ap.kode === 'AVKLAR_REFUSJONSKRAV')?.begrunnelse ?? '',
  refusjonskrav: refusjonsandeler
    .flatMap<RefusjonskravFormRad>(andel =>
      andel.refusjonsperioder.map(periode => ({
        arbeidsgiverIdent: andel.arbeidsgiverIdent,
        arbeidsgiverNavn: arbeidsgiverOpplysningerPerId[andel.arbeidsgiverIdent]?.navn || andel.arbeidsgiverIdent,
        kilde: andel.kilde,
        fom: periode.fom,
        tom: periode.tom,
        refusjonsbeløpPrMnd: periode.refusjonsbeløpPrMnd,
        datoForInnsendtEllerEndretIM: periode.datoForInnsendtEllerEndretIM,
        fristForInnsendingAvRefusjonskrav: periode.fristForInnsendingAvRefusjonskrav,
        tidligsteMuligeDatoMedRefusjonEtterFrist: periode.tidligsteMuligeDatoMedRefusjonEtterFrist,
        utfall: periode.utfall,
        utfallÅrsak: periode.utfallÅrsak,
      })),
    )
    .sort(sortPeriodsByFom),
});

const transformValues = (
  values: AvklarRefusjonsKravFormValues,
  originalRefusjonsandeler: RefusjonsAndel[],
): AksjonspunktSubmitType => ({
  begrunnelse: values.begrunnelse,
  refusjonskrav: Map.groupBy(values.refusjonskrav, rad => rad.arbeidsgiverIdent)
    .entries()
    .toArray()
    .map(([arbeidsgiverIdent, rader]) => {
      const originalAndel = originalRefusjonsandeler.find(andel => andel.arbeidsgiverIdent === arbeidsgiverIdent);

      return {
        arbeidsgiverIdent,
        perioder: rader.map(rad => {
          const originalPeriode = originalAndel?.refusjonsperioder.find(isDateWithinInterval(rad.fom));
          const erBeløpetUendret = rad.refusjonsbeløpPrMnd === originalPeriode?.refusjonsbeløpPrMnd;

          return {
            kilde: rad.kilde,
            refusjonsbeløpPrMnd: rad.refusjonsbeløpPrMnd,
            fom: rad.fom,
            tom: rad.tom,
            utfall: erBeløpetUendret ? notEmpty(rad.utfall) : 'REDUSERT',
            utfallÅrsak: rad.utfallÅrsak,
          };
        }),
      };
    }),
});
