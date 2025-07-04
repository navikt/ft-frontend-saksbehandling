import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import type { FaktaOmBeregning } from '@navikt/ft-types';

import type { FaktaOmBeregningAksjonspunktValues } from '../../../typer/FaktaBeregningTypes';
import type { InntektTransformed } from '../../../typer/FieldValues';
import type { FaktaBeregningTransformedValues } from '../../../typer/interface/BeregningFaktaAP';
import { VurderBesteberegningForm } from './VurderBesteberegningForm';

export const vurderBesteberegningTransform =
  (faktaOmBeregning: FaktaOmBeregning) =>
  (
    values: FaktaOmBeregningAksjonspunktValues,
    inntektPrAndel: InntektTransformed[],
  ): FaktaBeregningTransformedValues => {
    const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ?? [];
    if (
      !(
        tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING) ||
        tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)
      )
    ) {
      return {};
    }
    const besteberegningValues = VurderBesteberegningForm.transformValues(values, faktaOmBeregning, inntektPrAndel);
    const faktaOmBeregningTilfeller = [FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING];
    if (
      besteberegningValues.besteberegningAndeler?.besteberegningAndelListe &&
      besteberegningValues.besteberegningAndeler.besteberegningAndelListe.length > 0
    ) {
      faktaOmBeregningTilfeller.push(FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE);
    }
    return {
      faktaOmBeregningTilfeller,
      ...besteberegningValues,
    };
  };
