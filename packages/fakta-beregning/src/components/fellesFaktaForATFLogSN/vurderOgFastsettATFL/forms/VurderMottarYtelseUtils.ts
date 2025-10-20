import { AktivitetStatus } from '@navikt/ft-kodeverk';
import type { ArbeidstakerUtenIMAndel, Beregningsgrunnlag, VurderMottarYtelse } from '@navikt/ft-types';

import type { AndelMottarYtelseMap } from '../../../../typer/AndelMottarYtelseMap';
import type { FaktaOmBeregningAksjonspunktValues } from '../../../../typer/FaktaBeregningTypes';

const mottarYtelseFieldPrefix = 'mottarYtelseField';
const frilansSuffix = '_frilans';
export const utledArbeidsforholdFieldName = (andel: ArbeidstakerUtenIMAndel): string =>
  mottarYtelseFieldPrefix + andel.andelsnr;
export const frilansFieldName = mottarYtelseFieldPrefix + frilansSuffix;

export const skalFastsetteInntektATUtenInntektsmelding = (
  values: FaktaOmBeregningAksjonspunktValues,
  vurderMottarYtelse: VurderMottarYtelse | undefined,
): boolean => {
  const atAndelerUtenIM =
    vurderMottarYtelse && vurderMottarYtelse.arbeidstakerAndelerUtenIM
      ? vurderMottarYtelse.arbeidstakerAndelerUtenIM
      : [];
  return (
    atAndelerUtenIM
      .map(
        andel =>
          values.vurderMottarYtelseValues && values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)],
      )
      .find(mottarYtelse => mottarYtelse) !== undefined
  );
};

export const frilansMottarYtelse = (values: FaktaOmBeregningAksjonspunktValues): boolean | undefined =>
  values.vurderMottarYtelseValues ? values.vurderMottarYtelseValues[frilansFieldName] : undefined;

export const andelsnrMottarYtelseMap = (
  values: FaktaOmBeregningAksjonspunktValues,
  vurderMottarYtelse: VurderMottarYtelse | undefined,
  beregningsgrunnlag: Beregningsgrunnlag | undefined,
): AndelMottarYtelseMap => {
  if (!vurderMottarYtelse) {
    return {};
  }
  const mottarYtelseMap: AndelMottarYtelseMap = {};
  const atAndelerUtenIM = vurderMottarYtelse.arbeidstakerAndelerUtenIM
    ? vurderMottarYtelse.arbeidstakerAndelerUtenIM
    : [];
  atAndelerUtenIM.forEach(andel => {
    const mottarYtelse = values.vurderMottarYtelseValues
      ? values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)]
      : undefined;
    if (andel.andelsnr) mottarYtelseMap[andel.andelsnr] = mottarYtelse;
  });
  if (!beregningsgrunnlag) {
    return mottarYtelseMap;
  }
  const frilansAndel = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel?.find(
    andel => andel.aktivitetStatus === AktivitetStatus.FRILANSER,
  );
  if (frilansAndel) {
    mottarYtelseMap[frilansAndel.andelsnr] = frilansMottarYtelse(values);
  }
  return mottarYtelseMap;
};

export const harVurdertMottarYtelse = (
  values: FaktaOmBeregningAksjonspunktValues,
  vurderMottarYtelse: VurderMottarYtelse,
): boolean => {
  if (vurderMottarYtelse.erFrilans) {
    const flMottarYtelse = frilansMottarYtelse(values);
    if (flMottarYtelse === undefined || flMottarYtelse === null) {
      return false;
    }
  }
  const atAndelerUtenIM = vurderMottarYtelse.arbeidstakerAndelerUtenIM
    ? vurderMottarYtelse.arbeidstakerAndelerUtenIM
    : [];
  if (atAndelerUtenIM.length > 0) {
    const harAndelSomIkkeErVurdert = atAndelerUtenIM
      .map(
        andel =>
          values.vurderMottarYtelseValues && values.vurderMottarYtelseValues[utledArbeidsforholdFieldName(andel)],
      )
      .some(mottarYtelse => mottarYtelse === undefined || mottarYtelse === null);
    if (harAndelSomIkkeErVurdert) {
      return false;
    }
  }
  return true;
};
