import React, { FunctionComponent, useEffect, useState } from 'react';

import AlertStripe from 'nav-frontend-alertstriper';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import { Knapp } from 'nav-frontend-knapper';

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
import { hasAvklaringsbehov, AksjonspunktCode, isAvklaringsbehovOpen } from '@navikt/ft-kodeverk';
import { formHooks } from '@navikt/ft-form-hooks';
import AvklarAktiviteterValues from '../../typer/AvklarAktivitetTypes';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';
import styles from './avklareAktiviteterPanel.less';
import {
  erSubmittable,
  findBegrunnelse,
  skalKunneLoseAvklaringsbehov,
  skalViseSubmitKnappEllerBegrunnelse,
} from './avklareAktiviteterHjelpefunksjoner';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import SubmitButton from '../felles/SubmitButton';
import AvklarAktiviteterFormValues from '../../typer/AvklarAktiviteterFormValues';
import { formNameAvklarAktiviteter } from '../BeregningFormUtils';

const {
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = AksjonspunktCode;

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

export const transformFieldValue = (values) => {
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
  fieldId: number;
  intl: any;
  updateOverstyring: (index : number, skalOverstyre : boolean) => void;
}

type ErrorMessages = {
  [key:string]: {
    type: string;
    message: string;
  }
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
  updateOverstyring,
}) => {
  const {
    resetField, watch, getValues, formState: { isDirty, isSubmitting, errors },
  } = formHooks.useFormContext<AvklarAktiviteterFormValues | ErrorMessages>();

  const harOverstyrAksjonspunkt = hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov);
  const erOverstyrtErAktivt = getValues(`avklarAktiviteterForm.${fieldId}`).manuellOverstyringBeregningAktiviteter;
  const [erOverstyrtKnappTrykket, setErOverstyrtKnappTrykket] = useState<boolean>(harOverstyrAksjonspunkt || erOverstyrtErAktivt);
  const [submitEnabled, setSubmitEnabled] = useState<boolean>(false);

  const finnesFeilForBegrunnelse = !!errors.avklarAktiviteterForm?.[fieldId]?.begrunnelseAvklareAktiviteter;

  const formFeil: {
    type: string;
    message: string;
  }[] = Object.values(errors?.avklarAktiviteterForm?.[fieldId] || {}).filter((err) => err.type === 'custom');

  useEffect(() => {
    if (!submitEnabled) {
      setSubmitEnabled(true);
    }
  }, []);

  const initializeForm = (skalOverstyre: boolean) => {
    if (skalOverstyre) {
      setErOverstyrtKnappTrykket(!erOverstyrtKnappTrykket);
    } else if (!skalOverstyre && erOverstyrtKnappTrykket) {
      setErOverstyrtKnappTrykket(false);
    }

    updateOverstyring(fieldId, skalOverstyre);
    resetField(`avklarAktiviteterForm.${fieldId}.${BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME}`);
  };

  const isAvklaringsbehovClosed: boolean = avklaringsbehov.filter((ap) => ap.definisjon === AksjonspunktCode.AVKLAR_AKTIVITETER
    || ap.definisjon === AksjonspunktCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER)
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
                onClick={() => initializeForm(true)}
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

      {formFeil.length > 0 && (
        <>
          <VerticalSpacer sixteenPx />
          <AlertStripe type="feil">
            { formFeil.length > 1
              ? <ul>{formFeil.map((err) => <li>{err.message}</li>)}</ul>
              : formFeil.map((err) => err.message)}
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
          values={watch(`avklarAktiviteterForm.${fieldId}`)}
          harAksjonspunkt={hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov)}
          formNameAvklarAktiviteter={formNameAvklarAktiviteter}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          fieldId={fieldId}
        />
      )}
      <VerticalSpacer twentyPx />

      {skalViseSubmitKnappEllerBegrunnelse(avklaringsbehov, erOverstyrtKnappTrykket) && (
        <>
          <FaktaBegrunnelseTextField
            name={`avklarAktiviteterForm.${fieldId}.${BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME}`}
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
                    <SubmitButton
                      text={intl.formatMessage({ id: erOverstyrtKnappTrykket ? 'AvklarAktivitetPanel.OverstyrText' : 'AvklarAktivitetPanel.ButtonText' })}
                      isSubmittable={erSubmittable(submittable, true, finnesFeilForBegrunnelse)}
                      isDirty={isDirty}
                      isSubmitting={isSubmitting}
                      isReadOnly={readOnly || (isAvklaringsbehovClosed && !isDirty)}
                      hasEmptyRequiredFields={finnesFeilForBegrunnelse}
                    />
                  </FlexColumn>
                  {isDirty && (
                    <FlexColumn>
                      <Knapp
                        htmlType="button"
                        spinner={isSubmitting}
                        disabled={isSubmitting}
                        onClick={() => initializeForm(false)}
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
