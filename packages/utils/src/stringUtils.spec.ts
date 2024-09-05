import { formaterFritekst } from './stringUtils';

describe('formaterFritekst', () => {
  it.each([
    ['\uFE58', '-'],
    ['—', '-'],
    ['\t', ' '],
    ['\u202F', ' '], // narrow non-breaking space til space
  ])(`skal erstatte ugyldige karakter (%s) i tekst`, (fritekst, formatertFritekst) => {
    expect(formaterFritekst(fritekst)).toEqual(formatertFritekst);
  });
});
