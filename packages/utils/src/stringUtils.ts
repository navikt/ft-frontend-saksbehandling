export const formaterFritekst = (value: string | number) =>
  value.toString()
    .replace(/\p{Dash_Punctuation}/gu, '-')
    .replace(/[\p{Space_Separator}\t]/gu, ' ')
    .replace(/\u00AD/g, '')
    .replace(/[“”]/g, '"')
    .replace(/[‘’`]/g, "'")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
