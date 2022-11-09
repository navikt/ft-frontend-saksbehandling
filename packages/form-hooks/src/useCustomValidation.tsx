import { useEffect } from 'react';

import formHooks from './formHooksWrapper';

type ErrorMessageType = {
  notRegisteredInput?: boolean;
};

/**
 * Bruk denne når en må validere og vise feilmelding som ikke er knyttet til ett spesifikt felt.
 */
const useCustomValidation = (stateName: string, message?: string): string | undefined => {
  const { setError, clearErrors, formState } = formHooks.useFormContext<{ [key: string]: ErrorMessageType }>();
  const hasError = !!message;

  useEffect(() => {
    if (hasError) {
      setError(`${stateName}.notRegisteredInput`, {
        type: 'custom',
        message,
      });
    }
    if (!hasError) {
      clearErrors(`${stateName}.notRegisteredInput`);
    }
  }, [message]);

  if (!formState.isSubmitted) {
    return undefined;
  }

  const parts = stateName.split('.');
  // @ts-ignore Fiks
  const errors = parts.reduce((prev, current) => prev[current] || {}, formState.errors);

  // @ts-ignore Fiks
  const errorMessage = errors?.notRegisteredInput?.message;
  return errorMessage;
};

export default useCustomValidation;
