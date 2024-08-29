import { formaterFritekst } from './stringUtils';

describe('formaterFritekst', () => {
  it.each([
    ['\uFE58', '-'],
    ['—', '-'],
    ['\t', ' '],
  ])(`skal erstatte ugyldige karakter (%s) i tekst`, (fritekst, formatertFritekst) => {
    expect(formaterFritekst(fritekst)).toEqual(formatertFritekst);
  });
});
