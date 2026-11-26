export const formaterFritekst = (value: string | number) =>
  value
    .toString()
    .replace(/\p{Dash_Punctuation}/gu, '-')
    .replace(/[\p{Space_Separator}\t]/gu, ' ')
    .replaceAll('\u00AD', '')
    .replace(/[“”]/g, '"')
    .replace(/[‘’`]/g, "'")
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

export const capitalizeFirstLetter = (text: string): string => {
  if (text.length === 0) {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
};
