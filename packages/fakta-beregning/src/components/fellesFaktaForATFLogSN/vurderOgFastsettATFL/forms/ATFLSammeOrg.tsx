import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { FaktaOmBeregning } from '@navikt/ft-types';

import { InntektTransformed } from '../../../../typer/FieldValues';
import {
  FaktaBeregningTransformedValues,
  VurderATFLISammeOrAndelTransformedValues
} from '../../../../typer/interface/BeregningFaktaAP';

const krevVerdi = (andelsnr: number | undefined): number => {
  if (!andelsnr) {
    throw new Error("Verdi er ikke satt for atfl samme org.");
  }
  return andelsnr;
}

export const transformValuesForATFLISammeOrg = (
  inntektVerdier: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  fastsatteAndelsnr: number[],
): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
  if (
    tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON) &&
    inntektVerdier
  ) {
    const andelsliste: VurderATFLISammeOrAndelTransformedValues[] = inntektVerdier
      .filter(field => field.andelsnr && !fastsatteAndelsnr.includes(field.andelsnr))
      .filter(field =>
        faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe && faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe
          .map(({ andelsnr }) => andelsnr)
          .includes(field.andelsnr),
      )
      .map(field => ({
        andelsnr: krevVerdi(field.andelsnr),
        arbeidsinntekt: field.fastsattBelop,
      }));

    if (faktaOmBeregning.frilansAndel?.andelsnr && !fastsatteAndelsnr.includes(faktaOmBeregning.frilansAndel.andelsnr)) {
      const frilansVerdi = inntektVerdier.find(verdi => verdi.andelsnr === faktaOmBeregning.frilansAndel?.andelsnr);
      andelsliste.push({
        andelsnr: faktaOmBeregning.frilansAndel.andelsnr,
        arbeidsinntekt: krevVerdi(frilansVerdi?.fastsattBelop),
      });
    }
    andelsliste.forEach(andel => fastsatteAndelsnr.push(andel.andelsnr));
    if (andelsliste.length > 0) {
      return {
        faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
        vurderATogFLiSammeOrganisasjon: { vurderATogFLiSammeOrganisasjonAndelListe: andelsliste },
      };
    }
  }
  return { faktaOmBeregningTilfeller: [] };
};
