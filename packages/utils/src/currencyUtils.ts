export const formatCurrencyWithKr = (value: number | string): string | undefined => {
  const formattedValue = formatCurrencyNoKr(value);
  return formattedValue ? `${formattedValue} kr` : undefined;
};

const NEGATIVE_SIGN = '\u2212';
const DASH_SIGN = '-';

export const formatCurrencyNoKr = (value: string | number | undefined | null): string | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }
  // Fjerner mellomrom i tilfelle vi får inn tall med det
  const newVal = value
    .toString()
    .replaceAll(/\s/g, '')
    .replaceAll(',', '.')
    .replaceAll(NEGATIVE_SIGN, DASH_SIGN)
    .replaceAll(/[a-zA-ZæøåÆØÅ]/g, '');

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

  const inputNoSpace = input
    .toString()
    .replaceAll(/\s/g, '')
    .replaceAll(',', '.')
    .replaceAll(NEGATIVE_SIGN, DASH_SIGN)
    .replaceAll(/[a-zA-ZæøåÆØÅ]/g, '');

  const parsedValue = Number(inputNoSpace);
  return Number.isNaN(parsedValue) ? (input as number) : parsedValue;
};

export const parseCurrencyInput = (input: string | number): string => {
  const inputNoSpace = input
    .toString()
    .replaceAll(/\s/g, '')
    .replaceAll(',', '.')
    .replaceAll(NEGATIVE_SIGN, DASH_SIGN)
    .replaceAll(/[a-zA-ZæøåÆØÅ]/g, '');

  if (inputNoSpace === '' || Number.isNaN(Number(inputNoSpace))) {
    return inputNoSpace;
  }
  const formattedValue = formatCurrencyNoKr(inputNoSpace);

  return formattedValue ?? '';
};
