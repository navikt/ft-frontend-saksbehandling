import type {
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagAndel,
  FordelBeregningsgrunnlagPeriode,
} from '@navikt/ft-types';

import type { BGFordelArbeidsforhold } from '../../types/FordelBeregningsgrunnlagPanelValues';

const arbeidsforholdEksistererIListen = (
  arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  arbeidsgiverList: BGFordelArbeidsforhold[],
): boolean => {
  if (arbeidsforhold.arbeidsforholdId === null) {
    return arbeidsgiverList
      .map(({ arbeidsgiverIdent }) => arbeidsgiverIdent)
      .includes(arbeidsforhold.arbeidsgiverIdent);
  }
  return arbeidsgiverList.map(({ arbeidsforholdId }) => arbeidsforholdId).includes(arbeidsforhold.arbeidsforholdId);
};

const finnBgAndelMedSammeArbeidsforhold = (
  bgAndeler: BeregningsgrunnlagAndel[],
  andel: FordelBeregningsgrunnlagAndel,
): BeregningsgrunnlagAndel => {
  const matchetAndel = bgAndeler.find(
    bga =>
      !!bga.arbeidsforhold &&
      bga.arbeidsforhold.arbeidsgiverIdent === andel.arbeidsforhold?.arbeidsgiverIdent &&
      bga.arbeidsforhold.arbeidsforholdId === andel.arbeidsforhold?.arbeidsforholdId,
  );
  if (!matchetAndel) {
    throw new Error(`Finner ikke forventet andel med arbeidsgiverId ${andel.arbeidsforhold?.arbeidsgiverIdent}`);
  }
  return matchetAndel;
};

const getUniqueListOfArbeidsforholdFromAndeler = (
  andeler: FordelBeregningsgrunnlagAndel[],
  bgAndeler: BeregningsgrunnlagAndel[],
): BGFordelArbeidsforhold[] => {
  const arbeidsgiverList: BGFordelArbeidsforhold[] = [];
  if (andeler === undefined) {
    return arbeidsgiverList;
  }
  andeler.forEach(andel => {
    if (andel.arbeidsforhold && !arbeidsforholdEksistererIListen(andel.arbeidsforhold, arbeidsgiverList)) {
      const bgAndel = finnBgAndelMedSammeArbeidsforhold(bgAndeler, andel);
      const arbeidsforholdObject = {
        andelsnr: andel.andelsnr,
        nyttArbeidsforhold: andel.nyttArbeidsforhold,
        beregningsperiodeTom: bgAndel.beregningsperiodeTom,
        beregningsperiodeFom: bgAndel.beregningsperiodeFom,
        ...andel.arbeidsforhold,
      } as BGFordelArbeidsforhold;
      arbeidsgiverList.push(arbeidsforholdObject);
    }
  });
  return arbeidsgiverList;
};

const finnAndelerFraFordelingperioder = (
  fordelPerioder: FordelBeregningsgrunnlagPeriode[],
): FordelBeregningsgrunnlagAndel[] =>
  fordelPerioder.length > 0 ? fordelPerioder.flatMap(p => p.fordelBeregningsgrunnlagAndeler || []) : [];

const finnAndelerFraBgperioder = (bgPerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagAndel[] =>
  bgPerioder.length > 0 ? bgPerioder.flatMap(p => p.beregningsgrunnlagPrStatusOgAndel || []) : [];

const getUniqueListOfArbeidsforholdFromPerioder = (
  fordelPerioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
): BGFordelArbeidsforhold[] =>
  getUniqueListOfArbeidsforholdFromAndeler(
    finnAndelerFraFordelingperioder(fordelPerioder),
    finnAndelerFraBgperioder(bgPerioder),
  );

export const finnUnikeArbeidsforhold = (beregningsgrunnlag: Beregningsgrunnlag): BGFordelArbeidsforhold[] => {
  const fordelBGPerioder =
    beregningsgrunnlag.faktaOmFordeling?.fordelBeregningsgrunnlag?.fordelBeregningsgrunnlagPerioder || [];
  const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  return getUniqueListOfArbeidsforholdFromPerioder(fordelBGPerioder, bgPerioder);
};
