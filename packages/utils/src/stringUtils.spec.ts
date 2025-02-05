import { formaterFritekst } from './stringUtils';

describe('formaterFritekst', () => {
  it.each([
    ['\uFE58', '-'],
    ['—', '-'],
    ['\t', ' '],
    ['\u202F', ' '],
    ['“sitat”', '"sitat"'],
    ['‘sitat’', "'sitat'"],
    ['<script>malicious code</script>', '&lt;script&gt;malicious code&lt;/script&gt;'],
  ])(`skal erstatte ugyldige karakter (%s) i tekst`, (fritekst, formatertFritekst) => {
    expect(formaterFritekst(fritekst)).toEqual(formatertFritekst);
  });
});
