import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, FaktaOmBeregning } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { FaktaOmBeregningAksjonspunktValues, NyoppstartetFLValues } from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import { parseStringToBoolean } from '../../vurderFaktaBeregningHjelpefunksjoner';
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

const NyoppstartetFLForm: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly }) => {
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const intl = useIntl();

  return (
    <div>
      <Normaltekst>
        <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.ErSokerNyoppstartetFL" />
      </Normaltekst>
      <VerticalSpacer eightPx />
      <RadioGroupPanel
        name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.erNyoppstartetFLField`}
        validate={[required]}
        isReadOnly={readOnly}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
        ]}
        parse={parseStringToBoolean}
        isHorizontal
      />
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
