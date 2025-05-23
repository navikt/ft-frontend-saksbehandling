import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { FaktaOmBeregning } from '@navikt/ft-types';
import { removeSpacesFromNumber } from '@navikt/ft-utils';

import { FaktaOmBeregningAksjonspunktValues } from '../../../../typer/FaktaBeregningTypes';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';

export const arbeidUnderAapField = 'arbeidUnderAAPInntektValues';

export const transformValuesArbeidUnderAap = (
  values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning,
): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ?? [];
  const verdi = values[arbeidUnderAapField]?.fastsattBelop;
  if (!verdi || !tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.FASTSETT_INNTEKT_FOR_ARBEID_UNDER_AAP)) {
    return {};
  }
  return {
    faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.FASTSETT_INNTEKT_FOR_ARBEID_UNDER_AAP],
    fastsettArbeidUnderAap: { fastsattPrMnd: removeSpacesFromNumber(verdi) },
  };
};
