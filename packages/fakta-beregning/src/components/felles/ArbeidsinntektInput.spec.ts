import { OpptjeningAktivitetType } from '@navikt/ft-kodeverk';
import { AndelForFaktaOmBeregning } from '@navikt/ft-types';

import { ArbeidsinntektInput } from './ArbeidsinntektInput';

describe('<ArbeidsinntektInput>', () => {
  it('skal sette initial values fra alle andeler som ardeidstaker', () => {
    const andelerForFaktaOmBeregning = [
      {
        fastsattBelop: 40000,
        inntektskategori: 'ARBEIDSTAKER',
        aktivitetStatus: 'AT',
        arbeidsforhold: {
          arbeidsgiverIdent: '947064649',
          startdato: '2002-04-20',
          arbeidsforholdType: OpptjeningAktivitetType.ARBEID,
        },
        andelsnr: 1,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
      },
      {
        fastsattBelop: 3000,
        inntektskategori: 'FRILANSER',
        aktivitetStatus: 'FL',
        arbeidsforhold: {
          arbeidsforholdType: OpptjeningAktivitetType.FRILANS,
        },
        andelsnr: 2,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
      },
    ] satisfies AndelForFaktaOmBeregning[];
    const initialValues = ArbeidsinntektInput.buildInitialValues(andelerForFaktaOmBeregning);
    expect(initialValues).toEqual([
      {
        fastsattBelop: 40000,
        arbeidsgiverIdent: '947064649',
      },
    ]);
  });

  it('skal håndtere at det ikke blir satt initial values med andre andeler enn ardeidstaker', () => {
    const andelerForFaktaOmBeregning = [
      {
        inntektskategori: 'DAGPENGER',
        aktivitetStatus: 'DP',
        andelsnr: 1,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
        belopReadOnly: 30000,
      },
      {
        fastsattBelop: 3000,
        inntektskategori: 'FRILANSER',
        aktivitetStatus: 'FL',
        arbeidsforhold: {
          arbeidsforholdType: OpptjeningAktivitetType.FRILANS,
        },
        andelsnr: 2,
        skalKunneEndreAktivitet: false,
        lagtTilAvSaksbehandler: false,
      },
    ] satisfies AndelForFaktaOmBeregning[];
    const initialValues = ArbeidsinntektInput.buildInitialValues(andelerForFaktaOmBeregning);
    expect(initialValues).toEqual([]);
  });
});
