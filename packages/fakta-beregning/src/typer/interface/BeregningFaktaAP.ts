import type { BeregningAvklaringsbehovTilBekreftelse } from '@navikt/ft-types';

import { FaktaBeregningAvklaringsbehovCode } from './FaktaBeregningAvklaringsbehovCode';

export type BeregningAktivitetTransformedValues = {
  opptjeningAktivitetType: string;
  fom: string;
  tom?: string;
  oppdragsgiverOrg?: string;
  arbeidsgiverIdentifikator?: string;
  arbeidsforholdRef?: string;
  skalBrukes: boolean;
};

export type BeregningAktiviteterTransformedValues = {
  beregningsaktivitetLagreDtoList: BeregningAktivitetTransformedValues[];
};

export type OverstyrBeregningsaktiviteterAP = BeregningAvklaringsbehovTilBekreftelse<
  FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  BeregningAktiviteterTransformedValues
>;

export type AvklarBeregningsaktiviteterAP = BeregningAvklaringsbehovTilBekreftelse<
  FaktaBeregningAvklaringsbehovCode.AVKLAR_AKTIVITETER,
  BeregningAktiviteterTransformedValues
>;

export type NyoppstartetFLTransformedValues = {
  erNyoppstartetFL: boolean;
};

export type VurderteArbeidsforholdTransformedValues = {
  andelsnr: number;
  tidsbegrensetArbeidsforhold: boolean;
  opprinneligVerdi?: boolean;
};

export type TidsbegrensetArbeidsforholdTransformedValues = {
  fastsatteArbeidsforhold: VurderteArbeidsforholdTransformedValues[];
};

export type NyIArbeidslivetTransformedValues = {
  erNyIArbeidslivet: boolean;
};

export type FastsettMånedsinntektFLTransformedValues = {
  maanedsinntekt: number;
};

export type VurderLønnsendringTransformedValues = {
  erLønnsendringIBeregningsperioden: boolean;
};

export type FastsettMånedsinntektUtenInntektsmeldingAndelTransformedValues = {
  andelsnr: number;
  fastsattBeløp: number;
  inntektskategori?: string;
};

export type FastsettMånedsinntektUtenInntektsmeldingTransformedValues = {
  andelListe: FastsettMånedsinntektUtenInntektsmeldingAndelTransformedValues[];
};

export type VurderATFLISammeOrAndelTransformedValues = {
  andelsnr: number;
  arbeidsinntekt: number;
};

export type VurderATFLISammeOrgTransformedValues = {
  vurderATogFLiSammeOrganisasjonAndelListe: VurderATFLISammeOrAndelTransformedValues[];
};

export type FastsatteVerdierForBesteberegningTransformedValues = {
  fastsattBeløp: number;
  inntektskategori: string;
};

export type BesteberegningFødendeKvinneAndelTransformedValues = {
  andelsnr?: number;
  nyAndel: boolean;
  lagtTilAvSaksbehandler: boolean;
  fastsatteVerdier: FastsatteVerdierForBesteberegningTransformedValues;
};

export type DagpengeAndelLagtTilBesteberegningTransformedValues = {
  fastsatteVerdier: FastsatteVerdierForBesteberegningTransformedValues;
};

export type BesteberegningFødendeKvinneTransformedValues = {
  besteberegningAndelListe: BesteberegningFødendeKvinneAndelTransformedValues[];
  nyDagpengeAndel?: DagpengeAndelLagtTilBesteberegningTransformedValues;
};

export type FastsattBrukersAndelTransformedValues = {
  nyAndel: boolean;
  fastsattBeløp: number;
  inntektskategori: string;
  andelsnr?: number;
  lagtTilAvSaksbehandler?: boolean;
};

export type FastsettBgKunYtelseTransformedValues = {
  andeler: FastsattBrukersAndelTransformedValues[];
  skalBrukeBesteberegning: boolean | null;
};

export type VurderEtterlønnSluttpakkeTransformedValues = {
  erEtterlønnSluttpakke: boolean;
};

export type FastsettEtterlønnSluttpakkeTransformedValues = {
  fastsattPrMnd: number;
};

export type ArbeidstakerandelUtenIMMottarYtelseTransformedValues = {
  andelsnr: number;
  mottarYtelse: boolean;
};

export type MottarYtelseTransformedValues = {
  frilansMottarYtelse: boolean;
  arbeidstakerUtenIMMottarYtelse: ArbeidstakerandelUtenIMMottarYtelseTransformedValues[];
};

export type VurderMilitærTransformedValues = {
  harMilitaer: boolean;
};

export type RefusjonskravPrArbeidsgiverVurderingTransformedValues = {
  arbeidsgiverId: string;
  skalUtvideGyldighet: boolean;
};

export type FaktaBeregningTransformedValues = {
  faktaOmBeregningTilfeller?: string[];
  vurderNyoppstartetFL?: NyoppstartetFLTransformedValues;
  vurderTidsbegrensetArbeidsforhold?: TidsbegrensetArbeidsforholdTransformedValues;
  vurderNyIArbeidslivet?: NyIArbeidslivetTransformedValues;
  fastsettMaanedsinntektFL?: FastsettMånedsinntektFLTransformedValues;
  vurdertLonnsendring?: VurderLønnsendringTransformedValues;
  fastsattUtenInntektsmelding?: FastsettMånedsinntektUtenInntektsmeldingTransformedValues;
  vurderATogFLiSammeOrganisasjon?: VurderATFLISammeOrgTransformedValues;
  besteberegningAndeler?: BesteberegningFødendeKvinneTransformedValues;
  kunYtelseFordeling?: FastsettBgKunYtelseTransformedValues;
  vurderEtterlønnSluttpakke?: VurderEtterlønnSluttpakkeTransformedValues;
  fastsettEtterlønnSluttpakke?: FastsettEtterlønnSluttpakkeTransformedValues;
  mottarYtelse?: MottarYtelseTransformedValues;
  vurderMilitaer?: VurderMilitærTransformedValues;
  refusjonskravGyldighet?: RefusjonskravPrArbeidsgiverVurderingTransformedValues[];
};

export type FastsatteVerdierTransformedValues = {
  refusjon?: number;
  refusjonPrÅr?: number;
  fastsattBeløp?: number;
  fastsattÅrsbeløp?: number;
  fastsattÅrsbeløpInklNaturalytelse?: number;
  inntektskategori?: string;
  skalHaBesteberegning?: boolean;
};

export type FastsettBeregningsgrunnlagAndelTransformedValues = {
  andelsnr?: number;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  nyAndel: boolean;
  aktivitetStatus?: string;
  arbeidsforholdType?: string;
  lagtTilAvSaksbehandler?: boolean;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
  forrigeInntektskategori?: string;
  forrigeRefusjonPrÅr?: number;
  forrigeArbeidsinntektPrÅr?: number;
  fastsatteVerdier: FastsatteVerdierTransformedValues;
};

export type BeregningFaktaTransformedValues = {
  fakta: FaktaBeregningTransformedValues;
  overstyrteAndeler?: FastsettBeregningsgrunnlagAndelTransformedValues[];
};

export type BeregningFaktaAP = BeregningAvklaringsbehovTilBekreftelse<
  FaktaBeregningAvklaringsbehovCode.VURDER_FAKTA_FOR_ATFL_SN,
  BeregningFaktaTransformedValues
>;

export type BeregningOverstyringAP = BeregningAvklaringsbehovTilBekreftelse<
  FaktaBeregningAvklaringsbehovCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  BeregningFaktaTransformedValues
>;

export type BeregningFaktaOgOverstyringAP = BeregningFaktaAP | BeregningOverstyringAP;
