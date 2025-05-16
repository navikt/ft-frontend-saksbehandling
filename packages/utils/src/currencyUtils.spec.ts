import { formatCurrencyNoKr, formatCurrencyWithKr, parseCurrencyInput, removeSpacesFromNumber } from './currencyUtils';

describe('Currency-utils', () => {
  it('skal teste at beløp er korrekt formatert med krone-notasjon', () => {
    expect(formatCurrencyWithKr('120000')).toEqual('120 000 kr');
  });
  it.each([
    ['heltall', 120000, '120 000'],
    ['tall som er string', '120000', '120 000'],
    ['negativt heltall', -120000, '−120 000'],
    ['negativt tall som er string', '-138450', '−138 450'],
  ])('skal formatere %s', (_, input, expected) => {
    expect(formatCurrencyNoKr(input)).toBe(expected);
  });

  it('skal teste metoden som fjerner mellomrom fra tall og gjør de til number og ikke string', () => {
    expect(removeSpacesFromNumber('450 000')).toEqual(450000);
    expect(removeSpacesFromNumber(' 0 ')).toEqual(0);
    expect(removeSpacesFromNumber(' -1 ')).toEqual(-1);
  });
  it('skal teste metoden som brukes i formatering av inputfelter der vi ønsker tall i løsningen', () => {
    expect(parseCurrencyInput('500000')).toEqual('500 000');
    expect(parseCurrencyInput('-500000')).toEqual('−500 000');
  });
});
