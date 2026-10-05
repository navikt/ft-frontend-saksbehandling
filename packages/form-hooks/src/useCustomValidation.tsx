import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

type ErrorMessageType = {
  notRegisteredInput?: boolean;
};

/**
 * Bruk denne når en må validere og vise feilmelding som ikke er knyttet til ett spesifikt felt.
 */
export const useCustomValidation = (stateName: string, message?: string): string | undefined => {
  const { setError, clearErrors, formState } = useFormContext<{ [key: string]: ErrorMessageType }>();
  useEffect(() => {
    if (message) {
      setError(`${stateName}.notRegisteredInput`, {
        type: 'custom',
        message,
      });
    } else {
      clearErrors(`${stateName}.notRegisteredInput`);
    }
    return () => clearErrors(`${stateName}.notRegisteredInput`);
  }, [message, stateName, setError, clearErrors]);

  if (!formState.isSubmitted) {
    return undefined;
  }

  const parts = stateName.split('.');

  const errors = parts.reduce((prev, current) => prev[current] || {}, formState.errors);

  return errors?.['notRegisteredInput']?.message;
};
