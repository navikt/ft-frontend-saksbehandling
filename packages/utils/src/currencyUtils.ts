export const formatCurrencyWithKr = (value: number | string): string | undefined => {
  const formattedValue = formatCurrencyNoKr(value);
  return formattedValue ? `${formattedValue} kr` : undefined;
};

const NEGATIVE_SIGN = '\u2212';
const DASH_SIGN = '-';

const normalizeCurrencyInput = (input: string | number): string =>
  input
    .toString()
    .replaceAll(/\s/g, '')
    .replaceAll(',', '.')
    .replaceAll(NEGATIVE_SIGN, DASH_SIGN)
    .replaceAll(/[a-zA-ZæøåÆØÅ]/g, '');

export const formatCurrencyNoKr = (value: string | number | undefined | null): string | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  const newVal = normalizeCurrencyInput(value);

  if (Number.isNaN(Number(newVal))) {
    return undefined;
  }

  return Number(newVal)
    .toLocaleString('nb-NO', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replaceAll(/\s/g, ' ');
};

export const removeSpacesFromNumber = (input: number | string | undefined | null): number => {
  if (!input || input === Number(input)) {
    return input as number;
  }

  const inputNoSpace = normalizeCurrencyInput(input);

  const parsedValue = Number(inputNoSpace);
  return Number.isNaN(parsedValue) ? (input as number) : parsedValue;
};

export const parseCurrencyInput = (input: string | number): string => {
  const inputNoSpace = normalizeCurrencyInput(input);

  if (inputNoSpace === '' || Number.isNaN(Number(inputNoSpace))) {
    return inputNoSpace;
  }
  const formattedValue = formatCurrencyNoKr(inputNoSpace);

  return formattedValue ?? '';
};
