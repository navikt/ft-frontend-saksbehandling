import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  FaktaOmBeregning,
  KortvarigAndel,
  KunYtelse,
  RefusjonskravSomKommerForSentListe,
  VurderBesteberegning,
  VurderMottarYtelse,
} from '@navikt/ft-types';
import AndelFieldValue from './FieldValues';
import KodeverkForPanel from './kodeverkForPanel';

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
  besteberegningField: boolean;
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

export type KunYtelseValues =
  | VurderBesteberegningMedKunYtelseValues
  | {
      brukersAndelBG?: BrukersAndelValues[];
    };

export type VurderMottarYtelseValues = {
  [key: string]: boolean;
};

export type VurderRefusjonValues = {
  [key: string]: boolean;
};

export type FrilansinntektValues = {
  fastsattBelop: number;
};

export type ArbeidstakerInntektValues = {
  [key: string]: number;
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
    frilansinntektValues?: FrilansinntektValues;
    arbeidstakerInntektValues?: ArbeidstakerInntektValues;
  };

export type FaktaOmBeregningValues = TilfellerValues & {
  tilfeller?: string[];
  kortvarigeArbeidsforhold?: KortvarigAndel[];
  faktaOmBeregning?: FaktaOmBeregning;
  beregningsgrunnlag?: Beregningsgrunnlag;
  vurderMottarYtelse?: VurderMottarYtelse;
  kunYtelse?: KunYtelse;
};

export type FaktaOmBeregningAksjonspunktValues = FaktaOmBeregningValues & {
  avklaringsbehov?: BeregningAvklaringsbehov[];
  erTilVurdering: boolean;
  periode: { fom: string; tom: string };
  begrunnelseFaktaTilfeller?: string;
};

export type FaktaStateProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
  kortvarigeArbeidsforhold: KortvarigAndel[];
  vurderFaktaAP: BeregningAvklaringsbehov;
  kunYtelse: KunYtelse;
  tilfeller: string[];
  vurderMottarYtelse: VurderMottarYtelse;
  vurderBesteberegning: VurderBesteberegning;
  kodeverkSamling: KodeverkForPanel;
  avklaringsbehov: BeregningAvklaringsbehov[];
  faktaOmBeregning: FaktaOmBeregning;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  refusjonskravSomKommerForSentListe: RefusjonskravSomKommerForSentListe[];
  erOverstyrt: boolean;
};

export type FaktaBeregningError = {
  id: string;
};
