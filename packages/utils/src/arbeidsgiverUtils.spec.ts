import { formaterArbeidsgiver } from './arbeidsgiverUtils';

describe('formaterArbeidsgiver', () => {
  it('skal lage visningsnavn uten arbeidsforhold', () => {
    const visningsnavn = formaterArbeidsgiver({
      erPrivatPerson: false,
      identifikator: '321',
      navn: 'Andeby bank',
    });
    expect(visningsnavn).toBe('Andeby bank (321)');
  });

  it('skal lage visningsnavn med arbeidsforholdId', () => {
    const visningsnavn = formaterArbeidsgiver(
      {
        erPrivatPerson: false,
        identifikator: '321',
        navn: 'Andeby bank',
      },
      '56789',
    );
    expect(visningsnavn).toBe('Andeby bank (321)...6789');
  });

  it('skal lage visningsnavn for privat arbeidsgiver med arbeidsforholdId', () => {
    const visningsnavn = formaterArbeidsgiver(
      {
        erPrivatPerson: true,
        navn: 'Beate Hansen',
        fødselsdato: '1960-01-01',
      },
      '56789',
    );
    expect(visningsnavn).toBe('Beate Hansen (01.01.1960)...6789');
  });
});
