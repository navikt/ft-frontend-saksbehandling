import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { TextAreaField, Datepicker, Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import {
  dateBeforeOrEqualToToday,
  hasValidText,
  maxLength,
  minLength,
  required,
  hasValidDate,
} from '@navikt/ft-form-validators';
import { TilbakekrevingKodeverkType, ForeldelseVurderingType } from '@navikt/ft-kodeverk';
import { AlleKodeverkTilbakekreving } from '@navikt/ft-types';

import ForeldelsesresultatActivity from '../types/foreldelsesresultatActivitytsType';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export type FormValues = ForeldelsesresultatActivity;

interface OwnProps {
  periode: ForeldelsesresultatActivity;
  alleKodeverk: AlleKodeverkTilbakekreving;
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

const ForeldelsePeriodeForm: FunctionComponent<OwnProps> = ({
  skjulPeriode,
  readOnly,
  periode,
  oppdaterPeriode,
  alleKodeverk,
}) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(periode),
  });

  const foreldet = formMethods.watch('foreldet');

  const erForeldet = foreldet && foreldet === ForeldelseVurderingType.FORELDET;
  const erMedTilleggsfrist = foreldet && foreldet === ForeldelseVurderingType.TILLEGGSFRIST;
  const foreldelseVurderingTyper = alleKodeverk[TilbakekrevingKodeverkType.FORELDELSE_VURDERING].filter(
    fv => fv.kode !== ForeldelseVurderingType.IKKE_VURDERT,
  );

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => oppdaterPeriode(values)}>
      <VerticalSpacer twentyPx />
      <Row>
        <Column md="8">
          <TextAreaField
            name="begrunnelse"
            label={intl.formatMessage({ id: 'ForeldelsePeriodeForm.Vurdering' })}
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
          />
        </Column>
      </Row>
      <VerticalSpacer twentyPx />
      <Row>
        <Column md="5">
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
        </Column>
        <Column md="3">
          {(erForeldet || erMedTilleggsfrist) && (
            <Datepicker
              name="foreldelsesfrist"
              label={intl.formatMessage({ id: 'ForeldelsePeriodeForm.Foreldelsesfrist' })}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
            />
          )}
          {erMedTilleggsfrist && (
            <>
              <VerticalSpacer eightPx />
              <Datepicker
                name="oppdagelsesDato"
                label={intl.formatMessage({ id: 'ForeldelsePeriodeForm.OppdagelsesDato' })}
                validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                isReadOnly={readOnly}
                disabledDays={{ before: moment('1970-01-01').toDate(), after: moment(moment.now()).toDate() }}
              />
            </>
          )}
        </Column>
      </Row>
      <VerticalSpacer twentyPx />
      <FlexRow>
        <FlexColumn>
          <Hovedknapp
            mini
            htmlType="submit"
            disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting || readOnly}
            spinner={formMethods.formState.isSubmitting}
          >
            <FormattedMessage id="ForeldelsePeriodeForm.Oppdater" />
          </Hovedknapp>
        </FlexColumn>
        <FlexColumn>
          <Knapp mini htmlType="button" onClick={skjulPeriode}>
            <FormattedMessage id="ForeldelsePeriodeForm.Avbryt" />
          </Knapp>
        </FlexColumn>
      </FlexRow>
    </Form>
  );
};

export default ForeldelsePeriodeForm;
