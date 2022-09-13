import React, { ReactNode, FunctionComponent, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { getError, getValidationRules } from './formUtils';

interface NavFieldGroupProps {
  name: string;
  errorMessage?: string | ReactNode;
  description?: string;
  children: ReactNode[] | ReactNode;
  className?: string;
  validate?: ((value: string) => any)[];
}

/**
 * @deprecated Bruk heller useCustomValidation og ErrorMessage-komponenten for å vise feil som ikke er knyttet til ett felt
 */
const SkjemaGruppeMedFeilviser: FunctionComponent<NavFieldGroupProps> = ({
  name,
  errorMessage,
  description,
  children,
  className,
  validate,
}) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field } = useController({
    name,
    rules: validate
      ? {
          validate: useMemo(() => getValidationRules(validate), [validate]),
        }
      : undefined,
  });

  if (!name) {
    return (
      <SkjemaGruppe description={description} className={className} feil={errorMessage}>
        {children}
      </SkjemaGruppe>
    );
  }

  return (
    <SkjemaGruppe description={description} feil={getError(errors, name)} className={className} {...field}>
      {children}
    </SkjemaGruppe>
  );
};

export default SkjemaGruppeMedFeilviser;
