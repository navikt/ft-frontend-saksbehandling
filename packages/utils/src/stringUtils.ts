// Erstatter ugyldige karakterer limt inn fra Word
export const formaterFritekst = (value: string | number) =>
  value
    .toString()
    .replaceAll(/\p{Dash_Punctuation}/gu, '-')
    .replaceAll('\t', ' ');
