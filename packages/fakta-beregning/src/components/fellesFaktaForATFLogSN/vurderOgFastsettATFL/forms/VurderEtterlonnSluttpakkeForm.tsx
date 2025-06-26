import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ReadMore, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaOmBeregningTilfelle, isAksjonspunktOpen, OpptjeningAktivitetType as OAType } from '@navikt/ft-kodeverk';
import { Aksjonspunkt, Beregningsgrunnlag, FaktaOmBeregning } from '@navikt/ft-types';

import {
  FaktaOmBeregningAksjonspunktValues,
  VurderEtterlønnSluttpakkeValues,
} from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import { parseStringToBoolean } from '../../vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext } from '../../VurderFaktaContext';

import 'core-js/features/array/flat-map';

/**
 * VurderEtterlønnSluttpakkeForm
 *
 * Presentasjonskomponent. Setter opp fakta om beregning tilfelle VURDER_ETTERLØNN_SLUTTPAKKE som ber
 * saksbehandler bestemme om en søker har inntekt fra etterlønn eller sluttpakke.
 */
export const harEtterlonnSluttpakkeField = 'vurderEtterlønnSluttpakke';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
}

export const VurderEtterlonnSluttpakkeForm = ({ readOnly }: Props) => {
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const intl = useIntl();
  return (
    <div>
      <RhfRadioGroup
        label={
          <VStack gap="2">
            <FormattedMessage id="BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt" />
            <ReadMore
              size="small"
              header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
            >
              <FormattedMessage id="BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1" />
            </ReadMore>
          </VStack>
        }
        name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${harEtterlonnSluttpakkeField}`}
        validate={[required]}
        isReadOnly={readOnly}
        radios={[
          {
            value: 'true',
            label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes' }),
          },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt' }) },
        ]}
        parse={parseStringToBoolean}
      />
    </div>
  );
};
VurderEtterlonnSluttpakkeForm.buildInitialValues = (
  beregningsgrunnlag: Beregningsgrunnlag,
  faktaAksjonspunkt?: Aksjonspunkt,
): VurderEtterlønnSluttpakkeValues => {
  const initialValues: VurderEtterlønnSluttpakkeValues = {};
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode || !faktaAksjonspunkt) {
    return {};
  }
  const apErTidligereLost = !isAksjonspunktOpen(faktaAksjonspunkt.status);
  const relevanteAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode
    .flatMap(periode => periode.beregningsgrunnlagPrStatusOgAndel)
    .filter(andel => andel?.arbeidsforhold && andel?.arbeidsforhold.arbeidsforholdType === OAType.ETTERLONN_SLUTTPAKKE);
  if (relevanteAndeler.length > 0) {
    initialValues[harEtterlonnSluttpakkeField] =
      apErTidligereLost && (relevanteAndeler[0]?.beregnetPrAar || relevanteAndeler[0]?.beregnetPrAar === 0)
        ? relevanteAndeler[0]?.beregnetPrAar > 0
        : undefined;
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
  inntektPrMnd: InntektTransformed[] | null,
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
      vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: !!values[harEtterlonnSluttpakkeField] },
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
      vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: !!values[harEtterlonnSluttpakkeField] },
    };
  }
  if (etterlonnSluttpakkeField.andelsnr && fastsatteAndelsnr.includes(etterlonnSluttpakkeField.andelsnr)) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE],
      vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: !!values[harEtterlonnSluttpakkeField] },
    };
  }
  if (etterlonnSluttpakkeField.andelsnr) fastsatteAndelsnr.push(etterlonnSluttpakkeField.andelsnr);
  const inntekt = {
    fastsettEtterlønnSluttpakke: { fastsattPrMnd: etterlonnSluttpakkeField.fastsattBelop },
  };
  return {
    faktaOmBeregningTilfeller: [
      FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE,
      FaktaOmBeregningTilfelle.FASTSETT_ETTERLONN_SLUTTPAKKE,
    ],
    ...inntekt,
    vurderEtterlønnSluttpakke: { erEtterlønnSluttpakke: !!values[harEtterlonnSluttpakkeField] },
  };
};
