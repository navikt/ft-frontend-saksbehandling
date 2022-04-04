import React, { FunctionComponent, useState } from 'react';
import {
  AksjonspunktHelpTextTemp,
  OverstyringKnapp,
  VerticalSpacer,
} from '@ft-frontend-saksbehandling/shared-components';
import aksjonspunktCodes, {
  hasAksjonspunkt,
  hasAvklaringsbehov, isAvklaringsbehovOpen,
} from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';
import AlertStripe from 'nav-frontend-alertstriper';
import { FormattedMessage } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@ft-frontend-saksbehandling/fakta-felles';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/fp-react-components';
import { Knapp } from 'nav-frontend-knapper';
import Aksjonspunkt from '@ft-frontend-saksbehandling/types/src/aksjonspunktTsType';
import { createSelector } from 'reselect';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteter,
  AvklarBeregningAktiviteterMap,
  BeregningAvklaringsbehov,
} from '@ft-frontend-saksbehandling/types';
import Vilkarperiode from '@ft-frontend-saksbehandling/types/src/vilkarperiodeTsType';
import AvklarAktiviteterValues from '../../typer/AvklarAktivitetTypes';
import {
  formNameAvklarAktiviteter,
  getFormInitialValuesForAvklarAktiviteter,
  getFormValuesForAvklarAktiviteter,
} from '../BeregningFormUtils';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';
import styles from './avklareAktiviteterPanel.less';
import {
  erSubmittable,
  findAksjonspunktMedBegrunnelse, findBegrunnelse,
  skalKunneLoseAvklaringsbehov,
  skalViseOverstyringsknapp,
  skalViseSubmitKnappEllerBegrunnelse,
  skalViseSubmitknappForPanel, skalViseSubmitknappInneforBorderBox,
} from './avklareAktiviteterHjelpefunksjoner';
import { isAksjonspunktOpen } from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktStatus';
import { useFormContext } from 'react-hook-form';

const {
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = aksjonspunktCodes;

const BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME = 'begrunnelseAvklareAktiviteter';
const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

const getAvklarAktiviteter = createSelector(
  [(ownProps: OwnProps) => ownProps.beregningsgrunnlag.faktaOmBeregning],
  (faktaOmBeregning): AvklarBeregningAktiviteterMap => (faktaOmBeregning ? faktaOmBeregning.avklarAktiviteter : undefined),
);

const erEndring = (avklaringsbehov: BeregningAvklaringsbehov[],
  erOverstyrt: boolean,
  avklarAktiviteter: AvklarBeregningAktiviteterMap,
  values, initialValues) => {
  if (!hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov) && (!values || !values[MANUELL_OVERSTYRING_FIELD])) {
    return false;
  }
  if (!!values[MANUELL_OVERSTYRING_FIELD] !== hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov)) {
    return true;
  }
  let harEndring = false;
  if (values && avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping) {
    harEndring = VurderAktiviteterPanel.hasValueChangedFromInitial(avklarAktiviteter.aktiviteterTomDatoMapping,
      values,
      initialValues,
      erOverstyrt);
  }
  if (values && !harEndring) {
    harEndring = initialValues[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] !== values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME];
  }
  return harEndring;
};

export const erAvklartAktivitetEndret = createSelector(
  [(state, ownProps: OwnProps) => ownProps.avklaringsbehov,
    (state, ownProps) => ownProps.erOverstyrt,
    (state, ownProps: OwnProps) => getAvklarAktiviteter(ownProps),
    getFormValuesForAvklarAktiviteter,
    getFormInitialValuesForAvklarAktiviteter], erEndring
);

// TODO bytt navn aksjonspunkter till avklaringsbegov (alle metoder, navn osv)

const buildInitialValues = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  avklarAktiviteter: AvklarBeregningAktiviteterMap,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  vilkårsperiode: Vilkarperiode,
  harOverstyrt = false): AvklarAktiviteterValues => {
  // FERDIG
  const harAvklarAksjonspunkt = hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov);
  const erOverstyrt = hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov);
  const begrunnelse = findBegrunnelse(avklaringsbehov);
  let aktiviteterValues;

  if (avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping) {
    aktiviteterValues = VurderAktiviteterPanel.buildInitialValues(avklarAktiviteter.aktiviteterTomDatoMapping,
      alleKodeverk, erOverstyrt, harAvklarAksjonspunkt, arbeidsgiverOpplysningerPerId);
  }

  return {
    [MANUELL_OVERSTYRING_FIELD]: erOverstyrt || harOverstyrt,
    periode: vilkårsperiode.periode,
    erTilVurdering: vilkårsperiode.vurdersIBehandlingen,
    avklaringsbehov,
    avklarAktiviteter,
    aktiviteterValues,
    ...FaktaBegrunnelseTextField.buildInitialValues(begrunnelse, BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME),
  };
};

const transformValues = (values) => {
  // FERDIG
  const skalOverstyre = values[MANUELL_OVERSTYRING_FIELD];
  const skalLoseAvklaringsbehov = skalKunneLoseAvklaringsbehov(skalOverstyre, values.avklaringsbehov, values.erTilVurdering);
  const { avklarAktiviteter } = values;

  if (!skalLoseAvklaringsbehov) {
    return null;
  }

  const vurderAktiviteterTransformed = VurderAktiviteterPanel.transformValues(
    values,
    avklarAktiviteter.aktiviteterTomDatoMapping,
    skalOverstyre,
  );

  return {
    ...vurderAktiviteterTransformed,
    kode: skalOverstyre ? OVERSTYRING_AV_BEREGNINGSAKTIVITETER : AVKLAR_AKTIVITETER,
    periode: values.periode,
    begrunnelse: values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME],
  };
};

interface OwnProps {
  avklarAktiviteter: AvklarBeregningAktiviteterMap;
  avklaringsbehov: BeregningAvklaringsbehov[];
  erOverstyrer: boolean;
  erOverstyrt: boolean;
  readOnly: boolean;
  submittable: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  harAndreAksjonspunkterIPanel: boolean;
  fieldId: string,
}

const AvklareAktiviteterField: FunctionComponent<OwnProps> = ({
  avklarAktiviteter,
  avklaringsbehov,
  erOverstyrer,
  erOverstyrt,
  readOnly,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  submittable,
  fieldId,
}) => {
  const [erOverstyrtKnappTrykket, setErOverstyrtKnappTrykket] = useState<boolean>(false);
  const { watch, resetField, formState: { isDirty, isSubmitting, errors } } = useFormContext();


  // Sjekke så att submit enable er false fram tills komponenten er mounted


  const initializeForm = () => {
    setErOverstyrtKnappTrykket(!erOverstyrtKnappTrykket);
    resetField(fieldId);
  };

  const isAvklaringsbehovClosed: boolean = avklaringsbehov.filter((ap) => ap.definisjon === aksjonspunktCodes.AVKLAR_AKTIVITETER
    || ap.definisjon === aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSAKTIVITETER)
    .filter((ap) => isAvklaringsbehovOpen(ap.status)).length === 0;

  return (
    <>
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Element className={styles.avsnittOverskrift}>
              <FormattedMessage id="AvklarAktivitetPanel.Overskrift" />
            </Element>
          </FlexColumn>
          {skalViseOverstyringsknapp(erOverstyrer, erOverstyrt) && (
            <FlexColumn>
              <OverstyringKnapp
                onClick={() => initializeForm()}
                erOverstyrt={erOverstyrt}
              />
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>

      <VerticalSpacer sixteenPx />

      {hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov) && (
        <AksjonspunktHelpTextTemp isAksjonspunktOpen={!isAvklaringsbehovClosed}>
          {[<FormattedMessage
            key="VurderFaktaForBeregningen"
            id="BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter"
          />]}
        </AksjonspunktHelpTextTemp>
      )}

      {/* TODO, GENERERE ERROR MED INTL ID
      {formProps.error && (
        <>
          <VerticalSpacer sixteenPx />
          <AlertStripe type="feil">
            <FormattedMessage id={formProps.error} />
          </AlertStripe>
        </>
      )} */}

      {erOverstyrt && (
        <Element>
          <FormattedMessage id="AvklareAktiviteter.OverstyrerAktivitetAdvarsel" />
        </Element>
      )}

      <VerticalSpacer twentyPx />

      {avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping && (
        <VurderAktiviteterPanel
          aktiviteterTomDatoMapping={avklarAktiviteter.aktiviteterTomDatoMapping}
          readOnly={readOnly}
          isAksjonspunktClosed={isAvklaringsbehovClosed}
          erOverstyrt={erOverstyrt}
          alleKodeverk={alleKodeverk}
          values={watch(fieldId)}
          harAksjonspunkt={hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov)}
          formNameAvklarAktiviteter={formNameAvklarAktiviteter}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      )}

      <VerticalSpacer twentyPx />

      {skalViseSubmitKnappEllerBegrunnelse(avklaringsbehov, erOverstyrt) && (
        <>
          <FaktaBegrunnelseTextField
            name={BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME}
            isSubmittable={submittable}
            isReadOnly={readOnly}
            hasBegrunnelse={findBegrunnelse(avklaringsbehov) !== null}
          />
          {(hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov) || erOverstyrt) && (
            <>
              <VerticalSpacer twentyPx />
              <FlexContainer>
                <FlexRow>
                  <FlexColumn>
                    <FaktaSubmitButton
                      buttonText={intl.formatMessage({ id: erOverstyrt ? 'AvklarAktivitetPanel.OverstyrText' : 'AvklarAktivitetPanel.ButtonText' })}
                      formName={formNameAvklarAktiviteter}
                      isSubmittable={erSubmittable(submittable, true, !!errors[fieldId])}
                      isReadOnly={readOnly}
                      hasOpenAksjonspunkter={!isAvklaringsbehovClosed}
                    />
                  </FlexColumn>
                  {isDirty && (
                    <FlexColumn>
                      <Knapp
                        htmlType="button"
                        spinner={isSubmitting}
                        disabled={isSubmitting}
                        onClick={() => initializeForm()}
                        mini
                      >
                        <FormattedMessage id="AvklareAktiviteter.Avbryt" />
                      </Knapp>
                    </FlexColumn>
                  )}
                </FlexRow>
              </FlexContainer>
            </>
          )}
        </>
      )}
    </>
  );
};

export default AvklareAktiviteterField;
