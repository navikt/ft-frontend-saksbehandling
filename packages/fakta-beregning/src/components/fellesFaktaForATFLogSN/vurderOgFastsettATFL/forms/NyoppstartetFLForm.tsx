import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import { Normaltekst } from 'nav-frontend-typografi';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FaktaOmBeregningTilfelle, AktivitetStatus } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, FaktaOmBeregning } from '@navikt/ft-types';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaOmBeregningAksjonspunktValues, NyoppstartetFLValues } from '../../../../typer/FaktaBeregningTypes';
import VurderFaktaContext from '../../VurderFaktaContext';

/**
 * NyOppstartetFLForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for tilfelle VURDER_NYOPPSTARTET_FL som ber
 * bruker bestemme om en søker er nyoppstartet frilanser med en radioknapp.
 * Tilhørende tilfelle for å fastsette FL inntekt er FASTSETT_MAANEDSINNTEKT_FL.
 * Denne komponenten kan vise intektstabell under radioknappene dersom skalViseInntektstabell er satt
 */

export const erNyoppstartetFLField = 'NyoppstartetFLField';

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
};

interface StaticFunctions {
  buildInitialValues: (beregningsgrunnlag: Beregningsgrunnlag) => NyoppstartetFLValues;
  transformValues: (
    values: FaktaOmBeregningAksjonspunktValues,
    inntektPrMnd: InntektTransformed[],
    faktaOmBeregning: FaktaOmBeregning,
    fastsatteAndelsnr: number[],
  ) => FaktaBeregningTransformedValues;
}

const NyoppstartetFLForm: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly, isAksjonspunktClosed }) => {
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);

  return (
    <div>
      <Normaltekst>
        <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.ErSokerNyoppstartetFL" />
      </Normaltekst>
      <VerticalSpacer eightPx />
      <RadioGroupField
        name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.erNyoppstartetFLField`}
        validate={[required]}
        readOnly={readOnly}
        isEdited={isAksjonspunktClosed}
      >
        {/* @ts-ignore */}
        <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />} value />
        {/* @ts-ignore */}
        <RadioOption label={<FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />} value={false} />
      </RadioGroupField>
    </div>
  );
};
NyoppstartetFLForm.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag): NyoppstartetFLValues => {
  const initialValues = {};
  if (beregningsgrunnlag === undefined || beregningsgrunnlag.beregningsgrunnlagPeriode === undefined) {
    return initialValues;
  }
  const alleAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode.map(
    periode => periode.beregningsgrunnlagPrStatusOgAndel,
  );
  const flAndeler = alleAndeler.flat().filter(andel => andel.aktivitetStatus === AktivitetStatus.FRILANSER);
  if (flAndeler.length > 0) {
    initialValues[erNyoppstartetFLField] = flAndeler[0].erNyoppstartet;
  }
  return initialValues;
};

NyoppstartetFLForm.transformValues = (
  values: FaktaOmBeregningAksjonspunktValues,
  inntektPrMnd: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  fastsatteAndelsnr: number[],
): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
  if (!tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)) {
    return {};
  }
  if (!inntektPrMnd || inntektPrMnd.length === 0) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
      vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
    };
  }
  const frilansField = inntektPrMnd.find(field => field.aktivitetStatus === AktivitetStatus.FRILANSER);
  if (!frilansField) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
      vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
    };
  }
  if (fastsatteAndelsnr.includes(frilansField.andelsnr)) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
      vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
    };
  }
  fastsatteAndelsnr.push(frilansField.andelsnr);
  const inntekt = {
    fastsettMaanedsinntektFL: { maanedsinntekt: frilansField.fastsattBelop },
  };
  return {
    faktaOmBeregningTilfeller: [
      FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL,
      FaktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL,
    ],
    ...inntekt,
    vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
  };
};

export default NyoppstartetFLForm;
