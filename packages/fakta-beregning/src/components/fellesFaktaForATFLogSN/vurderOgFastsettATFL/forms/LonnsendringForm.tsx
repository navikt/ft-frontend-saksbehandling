import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, BeregningsgrunnlagAndel, FaktaOmBeregning } from '@navikt/ft-types';
import { Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { FaktaOmBeregningAksjonspunktValues, LønnsendringValues } from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import { parseStringToBoolean } from '../../vurderFaktaBeregningHjelpefunksjoner';
import VurderFaktaContext from '../../VurderFaktaContext';

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
  readOnly: boolean;
};

interface StaticFunctions {
  buildInitialValues: (beregningsgrunnlag: Beregningsgrunnlag) => LønnsendringValues;
  transformValues: (
    values: FaktaOmBeregningAksjonspunktValues,
    faktaOmBeregning: FaktaOmBeregning,
  ) => FaktaBeregningTransformedValues;
}

const LonnsendringForm: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly }) => {
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const intl = useIntl();

  return (
    <div>
      <RadioGroupPanel
        label={
          <Normaltekst>
            <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.HarSokerEndring" />
          </Normaltekst>
        }
        name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.lonnsendringField`}
        isReadOnly={readOnly}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
        ]}
        validate={[required]}
        parse={parseStringToBoolean}
        isHorizontal
      />
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
