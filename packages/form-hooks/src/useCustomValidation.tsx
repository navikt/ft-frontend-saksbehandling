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
  const hasError = !!message;

  /* eslint-disable react-you-might-not-need-an-effect/no-event-handler -- synker custom valideringsfeil mot react-hook-form */
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
  /* eslint-enable react-you-might-not-need-an-effect/no-event-handler */

  if (!formState.isSubmitted) {
    return undefined;
  }

  const parts = stateName.split('.');

  const errors = parts.reduce((prev, current) => prev[current] || {}, formState.errors);

  return errors?.['notRegisteredInput']?.message;
};
