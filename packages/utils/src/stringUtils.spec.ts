import { formaterFritekst } from './stringUtils';

describe('formaterFritekst', () => {
  it.each([
    ['\uFE58', '-'],
    ['—', '-'],
    ['\t', ' '],
    ['\u202F', ' '],
    ['“sitat”', '"sitat"'],
    ['‘sitat’', "'sitat'"],
    ['Ola & co', "Ola &amp; co"],
    ['<script>malicious code</script>','&lt;script&gt;malicious code&lt;&quot;script&gt;'],
    ['Flere / som / skal / erstattes', 'Flere &quot; som &quot; skal &quot; erstattes'],

  ])(`skal erstatte ugyldige karakter (%s) i tekst`, (fritekst, formatertFritekst) => {
    expect(formaterFritekst(fritekst)).toEqual(formatertFritekst);
  });
});
