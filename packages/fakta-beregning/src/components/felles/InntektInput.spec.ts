import { OpptjeningAktivitetType } from '@navikt/ft-kodeverk';
import { AndelForFaktaOmBeregning } from '@navikt/ft-types';

import { InntektInput } from './InntektInput';

describe('<InntektInput>', () => {
  it('skal sette initial values for typen aktivitetsstatus som er angitt', () => {
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
    const initialValues = InntektInput.buildInitialValues(andelerForFaktaOmBeregning, 'FL');
    expect(initialValues).toEqual({
      fastsattBelop: 3000,
    });
  });

  it('skal håndtere at det ikke blir satt initial values med andre andeler enn angitt', () => {
    const andelerForFaktaOmBeregning = [
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
    ];
    const initialValues = InntektInput.buildInitialValues(andelerForFaktaOmBeregning, 'DP');
    expect(initialValues).toEqual(undefined);
  });
});
