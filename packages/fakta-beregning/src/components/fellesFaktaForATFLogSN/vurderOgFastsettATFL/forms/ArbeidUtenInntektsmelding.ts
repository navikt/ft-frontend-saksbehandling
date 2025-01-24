import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, FaktaOmBeregning } from '@navikt/ft-types';
import { removeSpacesFromNumber } from '@navikt/ft-utils';

import { FaktaOmBeregningAksjonspunktValues } from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import { erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse } from './AvsluttetArbeidsforhold';
import { harFieldKunstigArbeidsforhold } from './KunstigArbeidsforhold';
import { harFieldLønnsendring } from './LonnsendringForm';

export const transformValuesArbeidUtenInntektsmelding = (
  values: FaktaOmBeregningAksjonspunktValues,
  inntektVerdier: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  bg: Beregningsgrunnlag,
  fastsatteAndelsnr: number[],
): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];

  if (
    !tilfeller
      .map(kode => kode)
      .includes(FaktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING) &&
    !tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING)
  ) {
    return {};
  }
  if (!inntektVerdier) {
    return {};
  }
  const arbeidUtenInntektsmelding = inntektVerdier
    .filter(field => !fastsatteAndelsnr.includes(field.andelsnr))
    .filter(
      field =>
        erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse(field, bg, field.arbeidsforholdId) ||
        harFieldKunstigArbeidsforhold(field, bg) ||
        harFieldLønnsendring(field, faktaOmBeregning, values),
    );

  arbeidUtenInntektsmelding.forEach(field => fastsatteAndelsnr.push(field.andelsnr));
  const fastsattInntekt = arbeidUtenInntektsmelding.map(field => ({
    andelsnr: field.andelsnr,
    fastsattBeløp: removeSpacesFromNumber(field.fastsattBelop),
    inntektskategori: field.inntektskategori,
  }));
  if (fastsattInntekt.length > 0) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],
      fastsattUtenInntektsmelding: { andelListe: fastsattInntekt },
    };
  }
  return {};
};
