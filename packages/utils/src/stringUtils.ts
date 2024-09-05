// Erstatter ugyldige karakterer limt inn fra Word
export const formaterFritekst = (value: string | number) =>
  value
    .toString()
    .replaceAll(/\p{Dash_Punctuation}/gu, '-')
    .replace(/[\u00A0\u202F]/g, ' ') // non-breaking space og narrow non-breaking space
    .replaceAll('\t', ' ');
