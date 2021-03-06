import { formatCurrencyNoKr, formatCurrencyWithKr, parseCurrencyInput, removeSpacesFromNumber } from './currencyUtils';

describe('Currency-utils', () => {
  it('skal teste at beloep er korrekt formatert med krone-notasjon', () => {
    expect(formatCurrencyWithKr('120000')).toEqual('120 000 kr');
  });
  it('skal teste at beloep er korrekt formatert uten krone-notasjon', () => {
    expect(formatCurrencyNoKr('120000')).toEqual('120 000');
    expect(formatCurrencyNoKr(120000)).toEqual('120 000');
  });
  it('skal teste metoden som fjerner mellomrom fra tall og gjør de til number og ikke string', () => {
    expect(removeSpacesFromNumber('450 000')).toEqual(450000);
  });
  it('skal teste metoden som brukes i formatering av inputfelter der vi ønsker tall i løsningen', () => {
    expect(parseCurrencyInput('500000')).toEqual('500 000');
  });
});
