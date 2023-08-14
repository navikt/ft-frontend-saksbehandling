import { List, ReadMore } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, BeregningsgrunnlagAndel, FaktaOmBeregning } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { FaktaOmBeregningAksjonspunktValues, LønnsendringValues } from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';
import VurderFaktaBeregningFormValues from '../../../../typer/VurderFaktaBeregningFormValues';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import ArbeidsinntektInput from '../../../felles/ArbeidsinntektInput';
import { BeregningsgrunnlagIndexContext } from '../../VurderFaktaContext';
import { parseStringToBoolean } from '../../vurderFaktaBeregningHjelpefunksjoner';

/**
 * LonnsendringForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for tilfelle VURDER_LØNNSENDRING som ber
 * bruker fastsette lønnsendring for en liste med arbeidsforhold.
 * Tilhørende tilfelle for å fastsette FL inntekt er FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING.
 * Denne komponenten kan vise intektstabell under radioknappene dersom skalViseInntektstabell er satt
 */

export const lonnsendringField = 'lonnsendringField';

type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
};

interface StaticFunctions {
  buildInitialValues: (beregningsgrunnlag: Beregningsgrunnlag) => LønnsendringValues;
  transformValues: (
    values: FaktaOmBeregningAksjonspunktValues,
    faktaOmBeregning: FaktaOmBeregning,
  ) => FaktaBeregningTransformedValues;
}

const LonnsendringForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  beregningsgrunnlag,
  readOnly,
  isAksjonspunktClosed,
}) => {
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const skalRedigereInntekt = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${lonnsendringField}`);
  const intl = useIntl();
  const andelerMedArbeidsinntekt = beregningsgrunnlag.faktaOmBeregning.andelerForFaktaOmBeregning.filter(
    andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER,
  );

  return (
    <div>
      <RadioGroupPanel
        label={
          <>
            <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.HarSokerEndring" />
            <ReadMore size="small" header="Hva betyr dette?">
              <List>
                <List.Item>
                  En arbeidstaker som får en varig lønnsendring i eller etter beregningsperioden, men før
                  skjæringstidsspunktet, skal ha lønnsendringen med i beregningsgrunnlaget.
                </List.Item>
                <List.Item>
                  Med varig lønnsendring menes alle lønnsendringer som ikke er midlertidige, og gjelder både ved
                  lønnsøkning og lønnsreduksjon.
                </List.Item>
                <List.Item>
                  Dette kan eksempelvis være endring av lønn etter lokale lønnsforhandlinger eller tariffendringer. Det
                  kan også være en varig endring av stillingsprosent med dertil endret lønn.
                </List.Item>
              </List>
            </ReadMore>
          </>
        }
        name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.lonnsendringField`}
        isReadOnly={readOnly}
        radios={[
          {
            value: 'true',
            label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes' }),
          },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt' }) },
        ]}
        validate={[required]}
        parse={parseStringToBoolean}
      />
      {skalRedigereInntekt
        ? andelerMedArbeidsinntekt.map(andel => (
            <ArbeidsinntektInput
              key={andel.arbeidsforhold.arbeidsgiverId}
              arbeidsgiver={andel}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              label={
                <>
                  <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.FastsettNyManedsinntekt" />
                  <ReadMore size="small" header="Hvordan går jeg frem?">
                    <List>
                      <List.Item>Bruk A-inntekt til å fastsette ny månedsinntekt hvis mulig.</List.Item>
                      <List.Item>
                        Hvis ny inntekt ikke fremgår av A-inntekt, kontakt arbeidsgiver og be de sende oppdatert
                        inntektsmelding. Eventuelt kan du kontakte søker og be de dokumentere varig lønnsøkning med
                        kontrakt, lønnslipp eller lignende.
                      </List.Item>
                      <List.Item>
                        Eksempel: En person får en varig lønnsendring med virkning fra 5. oktober. Vedkommende har
                        første fraværsdato 20. oktober og beregningsperioden er september, august og juli. Ved
                        fastsettelse av inntekt skal tidsrommet etter lønnsendringen 5. oktober legges til grunn.
                      </List.Item>
                    </List>
                  </ReadMore>
                </>
              }
            />
          ))
        : null}
      <VerticalSpacer twentyPx />
    </div>
  );
};

const buildInitialLonnsendring = (alleATAndeler: BeregningsgrunnlagAndel[]): boolean | undefined => {
  const harSattLonnsendringTilTrue =
    alleATAndeler.find(andel => andel.lonnsendringIBeregningsperioden === true) !== undefined;
  const harSattLonnsendringTilFalse =
    alleATAndeler.find(andel => andel.lonnsendringIBeregningsperioden === false) !== undefined;
  return harSattLonnsendringTilTrue || (harSattLonnsendringTilFalse ? false : undefined);
};

LonnsendringForm.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag): LønnsendringValues => {
  const initialValues = {};
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode) {
    return initialValues;
  }
  const alleAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;
  if (!alleAndeler || alleAndeler.length < 1) {
    return initialValues;
  }
  const alleATAndeler = alleAndeler.filter(andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER);
  if (!alleATAndeler || alleATAndeler.length < 1) {
    return initialValues;
  }
  initialValues[lonnsendringField] = buildInitialLonnsendring(alleATAndeler);
  return initialValues;
};

export const harFieldLønnsendring = (
  field: InntektTransformed,
  faktaOmBeregning: FaktaOmBeregning,
  values: FaktaOmBeregningAksjonspunktValues,
): boolean =>
  values[lonnsendringField] &&
  !!faktaOmBeregning.arbeidsforholdMedLønnsendringUtenIM &&
  faktaOmBeregning.arbeidsforholdMedLønnsendringUtenIM.find(andel => andel.andelsnr === field.andelsnr) !== undefined;

LonnsendringForm.transformValues = (
  values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning,
): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
  if (!tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING)) {
    return {};
  }
  return {
    faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_LONNSENDRING],
    vurdertLonnsendring: { erLønnsendringIBeregningsperioden: values[lonnsendringField] },
  };
};

export default LonnsendringForm;
