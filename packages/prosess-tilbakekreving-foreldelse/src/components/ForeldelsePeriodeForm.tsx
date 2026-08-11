import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, HStack, Radio, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { RhfDatepicker, RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import {
  dateBeforeOrEqualToToday,
  hasValidDate,
  hasValidText,
  maxLength,
  minLength,
  required,
} from '@navikt/ft-form-validators';
import { ForeldelseVurderingType } from '@navikt/ft-kodeverk';

import type { ForeldelsesresultatActivity } from '../types/ForeldelsesresultatActivity';
import type { KodeverkTilbakeForPanel } from '../types/KodeverkTilbakeForPanel';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export type FormValues = ForeldelsesresultatActivity;

// Mellomlagret, men ikke bekreftet (dvs. ikke trykt "Oppdater" på), skjemadata for perioden som til enhver tid
// er åpen i detaljpanelet. periodeKey brukes for å vite hvilken periode kladden gjelder for.
export type PeriodeKladd = {
  periodeKey: string;
  verdier: FormValues;
};

const periodeNøkkel = (periode: { fom: string; tom: string }): string => `${periode.fom}_${periode.tom}`;

interface Props {
  periode: ForeldelsesresultatActivity;
  periodeKladd?: PeriodeKladd;
  setPeriodeKladd: (kladd: PeriodeKladd | undefined) => void;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
  oppdaterPeriode: (values: FormValues) => void;
  skjulPeriode: (event: React.MouseEvent) => void;
  readOnly: boolean;
}

const oldForeldetValue = (fvType: string): string | undefined =>
  fvType !== ForeldelseVurderingType.UDEFINERT ? fvType : undefined;
const checkForeldetValue = (selectedItemData: ForeldelsesresultatActivity): string | undefined =>
  selectedItemData.foreldet ? selectedItemData.foreldet : oldForeldetValue(selectedItemData.foreldelseVurderingType);

const buildInitialValues = (periode: ForeldelsesresultatActivity): FormValues => ({
  ...periode,
  foreldet: checkForeldetValue(periode),
});

export const ForeldelsePeriodeForm = ({
  skjulPeriode,
  readOnly,
  periode,
  periodeKladd,
  setPeriodeKladd,
  oppdaterPeriode,
  kodeverkSamlingFpTilbake,
}: Props) => {
  const intl = useIntl();

  const harKladdForPeriode = periodeKladd?.periodeKey === periodeNøkkel(periode);
  const formMethods = useForm<FormValues>({
    defaultValues: harKladdForPeriode ? periodeKladd.verdier : buildInitialValues(periode),
  });

  // Brukes for å hindre at kladd blir lagret på nytt når vi allerede har bekreftet (Oppdater) eller
  // eksplisitt forkastet (Avbryt) endringene.
  const kladdErHåndtertRef = useRef(false);

  const forkastKladd = () => {
    kladdErHåndtertRef.current = true;
    setPeriodeKladd(undefined);
  };

  const avbrytOgSkjulPeriode = (event: React.MouseEvent) => {
    forkastKladd();
    skjulPeriode(event);
  };

  const foreldet = formMethods.watch('foreldet');

  const erForeldet = foreldet && foreldet === ForeldelseVurderingType.FORELDET;
  const erMedTilleggsfrist = foreldet && foreldet === ForeldelseVurderingType.TILLEGGSFRIST;
  const foreldelseVurderingTyper = kodeverkSamlingFpTilbake['ForeldelseVurderingType'].filter(
    fv => fv.kode !== ForeldelseVurderingType.IKKE_VURDERT && fv.kode !== ForeldelseVurderingType.UDEFINERT,
  );

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => {
        forkastKladd();
        oppdaterPeriode(values);
      }}
      setDataOnUnmount={verdier => {
        // Kladden er allerede forkastet/erstattet ved eksplisitt Oppdater/Avbryt - ikke skriv den tilbake her.
        if (kladdErHåndtertRef.current) {
          return;
        }
        if (formMethods.formState.isDirty) {
          setPeriodeKladd({ periodeKey: periodeNøkkel(periode), verdier });
        }
      }}
    >
      <VStack gap="space-16">
        <RhfTextarea
          name="begrunnelse"
          control={formMethods.control}
          label={intl.formatMessage({ id: 'ForeldelsePeriodeForm.Vurdering' })}
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
        />
        <HStack gap="space-40">
          <RhfRadioGroup
            name="foreldet"
            control={formMethods.control}
            legend={<FormattedMessage id="ForeldelsePeriodeForm.RadioGroup.Foreldet" />}
            validate={[required]}
            readOnly={readOnly}
          >
            {foreldelseVurderingTyper.map(type => (
              <Radio key={type.kode} value={type.kode} size="small">
                {type.navn}
              </Radio>
            ))}
          </RhfRadioGroup>
          <VStack gap="space-20">
            {(erForeldet || erMedTilleggsfrist) && (
              <RhfDatepicker
                name="foreldelsesfrist"
                control={formMethods.control}
                label={intl.formatMessage({ id: 'ForeldelsePeriodeForm.Foreldelsesfrist' })}
                validate={[required, hasValidDate]}
                readOnly={readOnly}
              />
            )}
            {erMedTilleggsfrist && (
              <RhfDatepicker
                name="oppdagelsesDato"
                control={formMethods.control}
                label={intl.formatMessage({ id: 'ForeldelsePeriodeForm.OppdagelsesDato' })}
                validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                readOnly={readOnly}
                fromDate={dayjs('1970-01-01').toDate()}
                toDate={dayjs().toDate()}
              />
            )}
          </VStack>
        </HStack>
        <HStack gap="space-16">
          <Button
            size="small"
            variant="primary"
            disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting || readOnly}
            loading={formMethods.formState.isSubmitting}
          >
            <FormattedMessage id="ForeldelsePeriodeForm.Oppdater" />
          </Button>
          <Button size="small" variant="secondary" onClick={avbrytOgSkjulPeriode} type="button">
            <FormattedMessage id="ForeldelsePeriodeForm.Avbryt" />
          </Button>
        </HStack>
      </VStack>
    </RhfForm>
  );
};
