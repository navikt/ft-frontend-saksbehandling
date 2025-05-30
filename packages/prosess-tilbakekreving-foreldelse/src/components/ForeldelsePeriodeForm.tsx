import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, HStack, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { Datepicker, Form, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import {
  dateBeforeOrEqualToToday,
  hasValidDate,
  hasValidText,
  maxLength,
  minLength,
  required,
} from '@navikt/ft-form-validators';
import { ForeldelseVurderingType } from '@navikt/ft-kodeverk';

import { ForeldelsesresultatActivity } from '../types/ForeldelsesresultatActivity';
import { KodeverkFpTilbakeForPanel } from '../types/KodeverkFpTilbakeForPanelTf';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export type FormValues = ForeldelsesresultatActivity;

export interface Props {
  periode: ForeldelsesresultatActivity;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
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
  oppdaterPeriode,
  kodeverkSamlingFpTilbake,
}: Props) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(periode),
  });

  const foreldet = formMethods.watch('foreldet');

  const erForeldet = foreldet && foreldet === ForeldelseVurderingType.FORELDET;
  const erMedTilleggsfrist = foreldet && foreldet === ForeldelseVurderingType.TILLEGGSFRIST;
  const foreldelseVurderingTyper = kodeverkSamlingFpTilbake['ForeldelseVurderingType'].filter(
    fv => fv.kode !== ForeldelseVurderingType.IKKE_VURDERT,
  );

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => oppdaterPeriode(values)}>
      <VStack gap="4">
        <TextAreaField
          name="begrunnelse"
          label={intl.formatMessage({ id: 'ForeldelsePeriodeForm.Vurdering' })}
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
        />
        <HStack gap="10">
          <RadioGroupPanel
            name="foreldet"
            label={<FormattedMessage id="ForeldelsePeriodeForm.RadioGroup.Foreldet" />}
            validate={[required]}
            radios={foreldelseVurderingTyper.map(type => ({
              label: type.navn,
              value: type.kode,
            }))}
            isReadOnly={readOnly}
          />
          <VStack gap="5">
            {(erForeldet || erMedTilleggsfrist) && (
              <Datepicker
                name="foreldelsesfrist"
                label={intl.formatMessage({ id: 'ForeldelsePeriodeForm.Foreldelsesfrist' })}
                validate={[required, hasValidDate]}
                isReadOnly={readOnly}
              />
            )}
            {erMedTilleggsfrist && (
              <Datepicker
                name="oppdagelsesDato"
                label={intl.formatMessage({ id: 'ForeldelsePeriodeForm.OppdagelsesDato' })}
                validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                isReadOnly={readOnly}
                fromDate={dayjs('1970-01-01').toDate()}
                toDate={dayjs().toDate()}
              />
            )}
          </VStack>
        </HStack>
        <HStack gap="4">
          <Button
            size="small"
            variant="primary"
            disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting || readOnly}
            loading={formMethods.formState.isSubmitting}
          >
            <FormattedMessage id="ForeldelsePeriodeForm.Oppdater" />
          </Button>
          <Button size="small" variant="secondary" onClick={skjulPeriode} type="button">
            <FormattedMessage id="ForeldelsePeriodeForm.Avbryt" />
          </Button>
        </HStack>
      </VStack>
    </Form>
  );
};
