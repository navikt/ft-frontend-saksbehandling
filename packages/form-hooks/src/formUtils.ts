//TODO (TOR) Trur ein bør fjerna undefined her
export type ValidationReturnType = string | null | undefined;

export const getValidationRules = (validate: ((value: any) => ValidationReturnType)[]) =>
  validate.reduce(
    (acc, fn, index) => ({
      ...acc,
      [index]: (value: any) => fn(value) || true,
    }),
    {},
  );

export const getError = (errors: { [x: string]: any }, name: string): string | undefined => {
  const error = name.split('.').reduce((o, i) => (o !== undefined ? o[i] : o), errors);
  return error?.message;
};
