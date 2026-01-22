import { formatCurrencyNoKr, formatCurrencyWithKr, parseCurrencyInput, removeSpacesFromNumber } from './currencyUtils';

describe('Currency-utils', () => {
  it('skal teste at beløp er korrekt formatert med krone-notasjon', () => {
    expect(formatCurrencyWithKr(120000)).toBe('120 000 kr');
    expect(formatCurrencyWithKr('120000')).toBe('120 000 kr');
    expect(formatCurrencyWithKr(-120000)).toBe('−120 000 kr');
    expect(formatCurrencyWithKr(-138450)).toBe('−138 450 kr');
    expect(formatCurrencyWithKr('−96 164')).toBe('−96 164 kr');
    expect(formatCurrencyWithKr('-1 456 123.659999')).toBe('−1 456 124 kr');
    expect(formatCurrencyWithKr(1456123.659999)).toBe('1 456 124 kr');
  });

  it('skal formatere tall uten kr', () => {
    expect(formatCurrencyNoKr(120000)).toBe('120 000');
    expect(formatCurrencyNoKr('120000')).toBe('120 000');
    expect(formatCurrencyNoKr(-120000)).toBe('−120 000');
    expect(formatCurrencyNoKr(-138450)).toBe('−138 450');
    expect(formatCurrencyNoKr('−96 164')).toBe('−96 164');
    expect(formatCurrencyNoKr('-1 456 123.659999')).toBe('−1 456 124');
    expect(formatCurrencyNoKr(1456123.659999)).toBe('1 456 124');
  });

  it('skal teste metoden som parser tall og gjør de til number', () => {
    expect(removeSpacesFromNumber('450 000')).toEqual(450000);
    expect(removeSpacesFromNumber(' 0 ')).toEqual(0);
    expect(removeSpacesFromNumber(' -1 ')).toEqual(-1);
    expect(removeSpacesFromNumber(' -1 456 123.6599')).toEqual(-1456123.6599);
    expect(removeSpacesFromNumber(-1456123.6)).toEqual(-1456123.6);
    expect(removeSpacesFromNumber('−96 164 ')).toEqual(-96164);
    expect(removeSpacesFromNumber('En tekst')).toEqual(0);
    expect(removeSpacesFromNumber(' −1 124 kr')).toEqual(-1124);
  });

  it('skal teste metoden som brukes i formatering av inputfelter der vi ønsker tall i løsningen', () => {
    expect(parseCurrencyInput('500000')).toEqual('500 000');
    expect(parseCurrencyInput('-500000')).toEqual('−500 000');
    expect(parseCurrencyInput('−96 164')).toEqual('−96 164');
    expect(parseCurrencyInput('−150 000')).toEqual('−150 000');
    expect(parseCurrencyInput('-1 456 123.659999')).toEqual('−1 456 124');

    expect(parseCurrencyInput('-')).toEqual('-');
    expect(parseCurrencyInput('-5,')).toEqual('−5');
    expect(parseCurrencyInput('-5.')).toEqual('−5');
  });

  it('currency utils skal kunne brukes om hverandre med komplisert tallverdi', () => {
    const parsetTilFormatertInputString = parseCurrencyInput(' -1 456 123.659999 kr');
    expect(parsetTilFormatertInputString).toEqual('−1 456 124');
    expect(removeSpacesFromNumber(parsetTilFormatertInputString)).toEqual(-1456124);

    expect(formatCurrencyWithKr(parsetTilFormatertInputString)).toEqual('−1 456 124 kr');
    expect(formatCurrencyNoKr(parsetTilFormatertInputString)).toEqual('−1 456 124');
  });
});
