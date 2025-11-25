import type { BeregningAvklaringsbehovTilBekreftelse, Inntektskategori } from '@navikt/ft-types';

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

type NyoppstartetFLTransformedValues = {
  erNyoppstartetFL: boolean;
};

export type VurderteArbeidsforholdTransformedValues = {
  andelsnr: number;
  tidsbegrensetArbeidsforhold: boolean;
  opprinneligVerdi?: boolean;
};

type TidsbegrensetArbeidsforholdTransformedValues = {
  fastsatteArbeidsforhold: VurderteArbeidsforholdTransformedValues[];
};

type NyIArbeidslivetTransformedValues = {
  erNyIArbeidslivet: boolean;
};

type FastsettMånedsinntektFLTransformedValues = {
  maanedsinntekt: number;
};

type VurderLønnsendringTransformedValues = {
  erLønnsendringIBeregningsperioden: boolean;
};

export type FastsettMånedsinntektUtenInntektsmeldingAndelTransformedValues = {
  andelsnr: number;
  fastsattBeløp: number;
  inntektskategori?: string;
};

type FastsettMånedsinntektUtenInntektsmeldingTransformedValues = {
  andelListe: FastsettMånedsinntektUtenInntektsmeldingAndelTransformedValues[];
};

export type VurderATFLISammeOrAndelTransformedValues = {
  andelsnr: number;
  arbeidsinntekt: number;
};

type VurderATFLISammeOrgTransformedValues = {
  vurderATogFLiSammeOrganisasjonAndelListe: VurderATFLISammeOrAndelTransformedValues[];
};

type FastsatteVerdierForBesteberegningTransformedValues = {
  fastsattBeløp: number;
  inntektskategori: Inntektskategori;
};

export type BesteberegningFødendeKvinneAndelTransformedValues = {
  andelsnr?: number;
  nyAndel: boolean;
  lagtTilAvSaksbehandler: boolean;
  fastsatteVerdier: FastsatteVerdierForBesteberegningTransformedValues;
};

type DagpengeAndelLagtTilBesteberegningTransformedValues = {
  fastsatteVerdier: FastsatteVerdierForBesteberegningTransformedValues;
};

type BesteberegningFødendeKvinneTransformedValues = {
  besteberegningAndelListe: BesteberegningFødendeKvinneAndelTransformedValues[];
  nyDagpengeAndel?: DagpengeAndelLagtTilBesteberegningTransformedValues;
};

type FastsattBrukersAndelTransformedValues = {
  nyAndel: boolean;
  fastsattBeløp: number;
  inntektskategori: Inntektskategori;
  andelsnr?: number;
  lagtTilAvSaksbehandler?: boolean;
};

type FastsettBgKunYtelseTransformedValues = {
  andeler: FastsattBrukersAndelTransformedValues[];
  skalBrukeBesteberegning: boolean | null;
};

type VurderEtterlønnSluttpakkeTransformedValues = {
  erEtterlønnSluttpakke: boolean;
};

type FastsettEtterlønnSluttpakkeTransformedValues = {
  fastsattPrMnd: number;
};

type ArbeidstakerandelUtenIMMottarYtelseTransformedValues = {
  andelsnr: number;
  mottarYtelse: boolean;
};

type MottarYtelseTransformedValues = {
  frilansMottarYtelse: boolean;
  arbeidstakerUtenIMMottarYtelse: ArbeidstakerandelUtenIMMottarYtelseTransformedValues[];
};

type VurderMilitærTransformedValues = {
  harMilitaer: boolean;
};

type RefusjonskravPrArbeidsgiverVurderingTransformedValues = {
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

type FastsatteVerdierTransformedValues = {
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
