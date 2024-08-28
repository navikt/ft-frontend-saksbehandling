import { formaterTekst } from './stringUtils';

describe('formaterTekst', () => {
  it.each([
    ['\uFE58', '-'],
    ['—', '-'],
    ['\t', ' '],
  ])(`skal erstatte ugyldige karakter (%s) i tekst`, (råTekst, formatertTekst) => {
    expect(formaterTekst(råTekst)).toEqual(formatertTekst);
  });
});
