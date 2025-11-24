import type { AktivitetStatus, Inntektskategori, OpptjeningAktivitetType } from '@navikt/ft-types';

export type AndelFieldIdentifikator = {
  aktivitetStatus: AktivitetStatus;
  andelsnr?: number;
  arbeidsgiverId?: string;
  arbeidsforholdType?: OpptjeningAktivitetType;
  arbeidsforholdId?: string;
};

export type AndelFieldValue = AndelFieldIdentifikator & {
  andel: string;
  kanRedigereInntekt?: boolean;
  nyAndel?: boolean;
  inntektskategori?: Inntektskategori;
  lagtTilAvSaksbehandler?: boolean;
  arbeidsforholdId?: string;
  arbeidsperiodeFom?: string;
  arbeidsperiodeTom?: string;
  skalKunneEndreAktivitet?: boolean;
  fastsattBelop?: string;
  belopReadOnly?: string;
  refusjonskrav?: string;
};

export type InntektTransformed = {
  andelsnr?: number;
  fastsattBelop: number;
  inntektskategori?: string;
  nyAndel?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  aktivitetStatus?: AktivitetStatus;
  arbeidsforholdId?: string;
  arbeidsgiverId?: string;
};
