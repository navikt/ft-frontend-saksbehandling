import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaOmBeregningTilfelle, isAksjonspunktOpen, OpptjeningAktivitetType as OAType } from '@navikt/ft-kodeverk';
import { BeregningAvklaringsbehov, Beregningsgrunnlag, FaktaOmBeregning } from '@navikt/ft-types';
import 'core-js/features/array/flat-map';
import { Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  FaktaOmBeregningAksjonspunktValues,
  VurderEtterlønnSluttpakkeValues,
} from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import { parseStringToBoolean } from '../../vurderFaktaBeregningHjelpefunksjoner';
import VurderFaktaContext from '../../VurderFaktaContext';

/**
 * VurderEtterlønnSluttpakkeForm
 *
 * Presentasjonskomponent. Setter opp fakta om beregning tilfelle VURDER_ETTERLØNN_SLUTTPAKKE som ber
 * saksbehandler bestemme om en søker har inntekt fra etterlønn eller sluttpakke.
 */
export const harEtterlonnSluttpakkeField = 'vurderEtterlønnSluttpakke';

type OwnProps = {
  readOnly: boolean;
};

interface StaticFunctions {
  buildInitialValues: (
    beregningsgrunnlag: Beregningsgrunnlag,
    faktaAksjonspunkt: BeregningAvklaringsbehov,
  ) => VurderEtterlønnSluttpakkeValues;
  transformValues: (
    values: FaktaOmBeregningAksjonspunktValues,
    inntektPrMnd: InntektTransformed[],
    faktaOmBeregning: FaktaOmBeregning,
    fastsatteAndelsnr: number[],
  ) => FaktaBeregningTransformedValues;
}

const VurderEtterlonnSluttpakkeForm: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly }) => {
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const intl = useIntl();

  return (
    <div>
      <RadioGroupPanel
        label={
          <Normaltekst>
            <FormattedMessage id="BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt" />
          </Normaltekst>
        }
        name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.${harEtterlonnSluttpakkeField}`}
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
VurderEtterlonnSluttpakkeForm.buildInitialValues = (
  beregningsgrunnlag: Beregningsgrunnlag,
  faktaAksjonspunkt: BeregningAvklaringsbehov,
): VurderEtterlønnSluttpakkeValues => {
  const initialValues = {};
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode || !faktaAksjonspunkt) {
    return {};
  }
  const apErTidligereLost = !isAksjonspunktOpen(faktaAksjonspunkt.status);
  const relevanteAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode
    .flatMap(periode => periode.beregningsgrunnlagPrStatusOgAndel)
    .filter(
      ({ arbeidsforhold }) => arbeidsforhold && arbeidsforhold.arbeidsforholdType === OAType.ETTERLONN_SLUTTPAKKE,
    );
  if (relevanteAndeler.length > 0) {
    initialValues[harEtterlonnSluttpakkeField] = apErTidligereLost ? relevanteAndeler[0].beregnetPrAar > 0 : undefined;
  }
  return initialValues;
};

const finnEtterlønnSluttpakkeAndelNr = (faktaOmBeregning: FaktaOmBeregning): number | undefined => {
  if (!faktaOmBeregning.andelerForFaktaOmBeregning) {
    return undefined;
  }
  const etterlønnSluttpakkeAndel = faktaOmBeregning.andelerForFaktaOmBeregning.find(
    andel =>
      andel.arbeidsforhold &&
      andel.arbeidsforhold.arbeidsforholdType &&
      andel.arbeidsforhold.arbeidsforholdType === OAType.ETTERLONN_SLUTTPAKKE,
  );

  return etterlønnSluttpakkeAndel ? etterlønnSluttpakkeAndel.andelsnr : undefined;
};

VurderEtterlonnSluttpakkeForm.transformValues = (
  values: FaktaOmBeregningAksjonspunktValues,
  inntektPrMnd: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  fastsatteAndelsnr: number[],
): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
  if (!tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE)) {
    return {};
  }
  if (!inntektPrMnd || inntektPrMnd.length === 0) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE],
      vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: values[harEtterlonnSluttpakkeField] },
    };
  }
  const etterlønnSluttpakkeAndelsnr = finnEtterlønnSluttpakkeAndelNr(faktaOmBeregning);
  if (!etterlønnSluttpakkeAndelsnr) {
    return {};
  }
  const etterlonnSluttpakkeField = inntektPrMnd.find(field => field.andelsnr === etterlønnSluttpakkeAndelsnr);
  if (!etterlonnSluttpakkeField) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE],
      vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: values[harEtterlonnSluttpakkeField] },
    };
  }
  if (fastsatteAndelsnr.includes(etterlonnSluttpakkeField.andelsnr)) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE],
      vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: values[harEtterlonnSluttpakkeField] },
    };
  }
  fastsatteAndelsnr.push(etterlonnSluttpakkeField.andelsnr);
  const inntekt = {
    fastsettEtterlønnSluttpakke: { fastsattPrMnd: etterlonnSluttpakkeField.fastsattBelop },
  };
  return {
    faktaOmBeregningTilfeller: [
      FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE,
      FaktaOmBeregningTilfelle.FASTSETT_ETTERLONN_SLUTTPAKKE,
    ],
    ...inntekt,
    vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: values[harEtterlonnSluttpakkeField] },
  };
};

export default VurderEtterlonnSluttpakkeForm;
