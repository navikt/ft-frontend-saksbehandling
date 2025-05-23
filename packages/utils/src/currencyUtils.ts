export const formatCurrencyWithKr = (value: number | string): string => {
  const formattedValue = Number(value).toLocaleString('nb-NO').replace(/,|\s/g, ' ');
  return `${formattedValue} kr`;
};

export const formatCurrencyNoKr = (value: string | number | undefined | null): string | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  // Fjerner mellomrom i tilfelle vi får inn tall med det
  const newVal = value.toString().replace(/\s/g, '');
  if (Number.isNaN(newVal)) {
    return undefined;
  }
  return Number(Math.round(parseFloat(newVal)))
    .toLocaleString('nb-NO')
    .replace(/,|\s/g, ' ');
};

export const removeSpacesFromNumber = (input: number | string | undefined): number => {
  if (!input || input === Number(input)) {
    return input as number;
  }
  const parsedValue = parseInt((input as string).replace(/\s/g, ''), 10);
  return Number.isNaN(parsedValue) ? (input as number) : parsedValue;
};

export const parseCurrencyInput = (input: string | number): string | number => {
  const inputNoSpace = input.toString().replace(/\s/g, '');
  const parsedValue = parseInt(inputNoSpace, 10);
  if (Number.isNaN(parsedValue)) {
    return '';
  }
  const formattedValue = formatCurrencyNoKr(parsedValue);
  return formattedValue === undefined ? '' : formattedValue;
};
