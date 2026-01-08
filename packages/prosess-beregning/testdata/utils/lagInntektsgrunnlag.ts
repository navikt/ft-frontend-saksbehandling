import dayjs from 'dayjs';

import { InntektAktivitetType } from '@navikt/ft-kodeverk';
import type { InntektsgrunnlagInntekt, InntektsgrunnlagMåned } from '@navikt/ft-types';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

export const lagInntektsgrunnlagMåned = (
  fom: string,
  inntekter: InntektsgrunnlagInntekt[] = [],
): InntektsgrunnlagMåned => {
  const tom = dayjs(fom).endOf('month').format(ISO_DATE_FORMAT);
  return {
    fom,
    tom,
    inntekter,
  };
};

export const lagArbeidInntekt = (beløp: number, arbeidsgiverIdent: string): InntektsgrunnlagInntekt => ({
  inntektAktivitetType: InntektAktivitetType.ARBEID,
  beløp,
  arbeidsgiverIdent,
});

export const lagFrilansInntekt = (beløp: number): InntektsgrunnlagInntekt => ({
  inntektAktivitetType: InntektAktivitetType.FRILANS,
  beløp,
});

export const lagYtelseInntekt = (beløp: number): InntektsgrunnlagInntekt => ({
  inntektAktivitetType: InntektAktivitetType.YTELSE,
  beløp,
});
