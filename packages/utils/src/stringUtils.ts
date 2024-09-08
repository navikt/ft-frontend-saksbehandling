// Erstatter ugyldige karakterer limt inn fra Word
export const formaterFritekst = (value: string | number) =>
  value
    .toString()
    .replace(/\p{Dash_Punctuation}/gu, '-')
    .replace(/[\p{Space_Separator}\t]/gu, ' ');
