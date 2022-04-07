import React, { FunctionComponent, useEffect, useState } from 'react';

import AlertStripe from 'nav-frontend-alertstriper';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import { Knapp } from 'nav-frontend-knapper';

import { useFormContext } from 'react-hook-form';
import { getError } from '@navikt/ft-form-hooks/src/formUtils';
import aksjonspunktCodes, {
  hasAvklaringsbehov,
  isAvklaringsbehovOpen,
} from '@navikt/ft-kodeverk/src/aksjonspunktCodes';
import {
  AksjonspunktHelpTextTemp, FlexColumn,
  FlexContainer,
  FlexRow,
  OverstyringKnapp,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteterMap,
  BeregningAvklaringsbehov,
} from '@navikt/ft-types';
import Vilkarperiode from '@navikt/ft-types/src/vilkarperiodeTsType';
import AvklarAktiviteterValues from '../../typer/AvklarAktivitetTypes';
import {
  formNameAvklarAktiviteter
} from '../BeregningFormUtils';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';
import styles from './avklareAktiviteterPanel.less';
import {
  erSubmittable,
  findBegrunnelse,
  skalKunneLoseAvklaringsbehov,
  skalViseSubmitKnappEllerBegrunnelse,
} from './avklareAktiviteterHjelpefunksjoner';
import FaktaBegrunnelseTextField from '../../felles/FaktaBegrunnelseTextField';
import { FaktaSubmitButton } from '../../felles/FaktaSubmitButton';

const {
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = aksjonspunktCodes;

const BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME = 'begrunnelseAvklareAktiviteter';
const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

// TODO bytt navn aksjonspunkter till avklaringsbegov (alle metoder, navn osv)

export const buildInitialValues = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  avklarAktiviteter: AvklarBeregningAktiviteterMap,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  vilkårsperiode: Vilkarperiode,
  ): AvklarAktiviteterValues => {
  const harAvklarAksjonspunkt = hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov);
  const erOverstyrt = hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov);
  const begrunnelse = findBegrunnelse(avklaringsbehov);
  let aktiviteterValues;

  if (avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping) {
    aktiviteterValues = VurderAktiviteterPanel.buildInitialValues(avklarAktiviteter.aktiviteterTomDatoMapping,
      alleKodeverk, erOverstyrt, harAvklarAksjonspunkt, arbeidsgiverOpplysningerPerId);
  }

  return {
    [MANUELL_OVERSTYRING_FIELD]: erOverstyrt,
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
  readOnly: boolean;
  submittable: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  harAndreAksjonspunkterIPanel: boolean;
  fieldId: string;
  intl: any;
}

const AvklareAktiviteterField: FunctionComponent<OwnProps> = ({
  avklarAktiviteter,
  avklaringsbehov,
  erOverstyrer,
  readOnly,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  submittable,
  fieldId,
  intl,
}) => {
  const harOverstyrAksjonspunkt = hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov);
  const [erOverstyrtKnappTrykket, setErOverstyrtKnappTrykket] = useState<boolean>(harOverstyrAksjonspunkt);
  const [submitEnabled, setSubmitEnabled] = useState<boolean>(false);

  const { watch, resetField, formState: { isDirty, isSubmitting, errors } } = useFormContext();

  useEffect(() => {
    if (!submitEnabled) {
      setSubmitEnabled(true);
    }
  }, []);

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
          {(erOverstyrer || harOverstyrAksjonspunkt) && (
            <FlexColumn>
              <OverstyringKnapp
                onClick={() => initializeForm()}
                erOverstyrt={erOverstyrtKnappTrykket}
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

      {errors && (
        <>
          <VerticalSpacer sixteenPx />
          <AlertStripe type="feil">
            {getError(errors, fieldId)}
          </AlertStripe>
        </>
      )}

      {erOverstyrtKnappTrykket && (
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
          erOverstyrt={erOverstyrtKnappTrykket}
          alleKodeverk={alleKodeverk}
          values={watch(fieldId)}
          harAksjonspunkt={hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov)}
          formNameAvklarAktiviteter={formNameAvklarAktiviteter}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      )}

      <VerticalSpacer twentyPx />

      {skalViseSubmitKnappEllerBegrunnelse(avklaringsbehov, erOverstyrtKnappTrykket) && (
        <>
          <FaktaBegrunnelseTextField
            name={BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME}
            isSubmittable={submittable}
            isReadOnly={readOnly}
            hasBegrunnelse={findBegrunnelse(avklaringsbehov) !== null}
          />
          {(hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov) || erOverstyrtKnappTrykket) && (
            <>
              <VerticalSpacer twentyPx />
              <FlexContainer>
                <FlexRow>
                  <FlexColumn>
                    <FaktaSubmitButton
                      buttonText={intl.formatMessage({ id: erOverstyrtKnappTrykket ? 'AvklarAktivitetPanel.OverstyrText' : 'AvklarAktivitetPanel.ButtonText' })}
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

export default injectIntl(AvklareAktiviteterField);
