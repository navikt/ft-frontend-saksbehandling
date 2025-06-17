import {
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  FaktaOmBeregning,
  KortvarigAndel,
  KunYtelse,
  VurderMottarYtelse,
} from '@navikt/ft-types';

import { AndelFieldValue } from './FieldValues';

export type TidsbegrensetandelValues = {
  [key: string]: boolean;
};

export type VurderMilitærValues = {
  vurderMilitær?: boolean;
};

export type NyIArbeidslivetValues = {
  erSNNyIArbeidslivet?: boolean;
};

export type LønnsendringValues = {
  lonnsendringField?: boolean;
};

export type NyoppstartetFLValues = {
  NyoppstartetFLField?: boolean;
};
export type VurderBesteberegningMedKunYtelseValues = {
  besteberegningField?: boolean;
};

export type VurderBesteberegningValues = {
  vurderbesteberegningField?: boolean;
};

export type VurderEtterlønnSluttpakkeValues = {
  vurderEtterlønnSluttpakke?: boolean;
};

export type ErOverstyringValues = {
  manuellOverstyringRapportertInntekt?: boolean;
};

export type VurderOgFastsettATFLValues = ErOverstyringValues & {
  inntektFieldArray?: AndelFieldValue[];
};

export type GenerellAndelInfo = {
  andel: string;
  aktivitetStatus: string;
  andelsnr?: number;
  nyAndel: boolean;
  inntektskategori: string;
  lagtTilAvSaksbehandler: boolean;
};

export type BrukersAndelValues = GenerellAndelInfo & {
  fastsattBelop: string;
};

export type KunYtelseValues = VurderBesteberegningMedKunYtelseValues & {
  brukersAndelBG?: BrukersAndelValues[];
};

export type VurderMottarYtelseValues = {
  [key: string]: boolean | undefined;
};

export type VurderRefusjonValues = {
  [key: string]: boolean | undefined;
};

export type FrilansinntektValues = {
  fastsattBelop: number;
};

export type ArbeidUnderAAPValues = {
  fastsattBelop: number;
};

export type KunstigAndelValues = {
  fastsattBelop: number;
};

export type SelvstendigNæringsdrivendeInntektValues = {
  fastsattBelop: number;
};

export type MilitærEllerSivilInntektValues = {
  fastsattBelop: number;
};

export type DagpengerinntektValues = {
  fastsattBelop: number;
};

export type ArbeidstakerInntektValues = {
  fastsattBelop?: number;
  arbeidsgiverIdent?: string;
};

export type TilfellerValues = VurderMilitærValues &
  NyIArbeidslivetValues &
  LønnsendringValues &
  NyoppstartetFLValues &
  KunYtelseValues &
  VurderEtterlønnSluttpakkeValues &
  VurderBesteberegningValues &
  VurderOgFastsettATFLValues & {
    tidsbegrensetValues?: TidsbegrensetandelValues;
    vurderMottarYtelseValues?: VurderMottarYtelseValues;
    vurderRefusjonValues?: VurderRefusjonValues;
    kunstigAndelInntektValues?: KunstigAndelValues;
    frilansInntektValues?: FrilansinntektValues;
    arbeidUnderAAPInntektValues?: ArbeidUnderAAPValues;
    arbeidstakerInntektValues?: ArbeidstakerInntektValues[];
    dagpengerInntektValues?: DagpengerinntektValues;
    selvstendigNæringsdrivendeInntektValues?: SelvstendigNæringsdrivendeInntektValues;
    militærEllerSivilInntektValues?: MilitærEllerSivilInntektValues;
  };

export type FaktaOmBeregningValues = TilfellerValues & {
  tilfeller: string[];
  kortvarigeArbeidsforhold: KortvarigAndel[];
  faktaOmBeregning: FaktaOmBeregning;
  beregningsgrunnlag: Beregningsgrunnlag;
  vurderMottarYtelse?: VurderMottarYtelse;
  kunYtelse?: KunYtelse;
};

export type FaktaOmBeregningAksjonspunktValues = FaktaOmBeregningValues & {
  avklaringsbehov?: BeregningAvklaringsbehov[];
  erTilVurdering: boolean;
  periode: { fom: string; tom: string };
  begrunnelseFaktaTilfeller?: string;
};
