// Erstatter ugyldige karakterer limt inn fra Word
export const formaterTekst = (value: string | number) =>
  value
    .toString()
    .replaceAll(/\p{Dash_Punctuation}/gu, '-')
    .replaceAll('\t', ' ');
