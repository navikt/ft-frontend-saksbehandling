import { capitalizeFirstLetter, formaterFritekst } from './stringUtils';

describe('stringUtils', () => {
  describe('formaterFritekst', () => {
    it.each([
      ['\uFE58', '-'],
      ['—', '-'],
      ['\u00AD', ''], // soft hyphen er en control character
      ['\t', ' '],
      ['\u202F', ' '],
      ['“sitat”', '"sitat"'],
      ['‘sitat’', "'sitat'"],
      ['<script>malicious code</script>', '&lt;script&gt;malicious code&lt;/script&gt;'],
    ])(`skal erstatte ugyldige karakter (%s) i tekst`, (fritekst, formatertFritekst) => {
      expect(formaterFritekst(fritekst)).toEqual(formatertFritekst);
    });
  });

  describe('capitalizeFirstLetter', () => {
    it('skal returnere tom streng hvis input er tom streng', () => {
      expect(capitalizeFirstLetter('')).toEqual('');
    });

    it('skal returnere setning med stor forbokstav', () => {
      expect(capitalizeFirstLetter('velkommen hjem til jul')).toEqual('Velkommen hjem til jul');
    });

    it('skal kunne brukes i som callback function', () => {
      expect('new delhi'.split(' ').map(capitalizeFirstLetter).join(' ')).toEqual('New Delhi');
    });
  });
});
