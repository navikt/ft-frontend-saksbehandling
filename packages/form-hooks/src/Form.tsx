import React, { ReactNode, useEffect } from 'react';
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

export interface Props<FormValues extends FieldValues> {
  formMethods: UseFormReturn<FormValues>;
  onSubmit?: SubmitHandler<FormValues>;
  children: ReactNode;
  className?: string;
  setDataOnUnmount?: (data?: any) => void;
}

const Form = <FormValues extends FieldValues>({
  formMethods,
  onSubmit,
  children,
  className,
  setDataOnUnmount,
}: Props<FormValues>) => {
  const { handleSubmit, getValues } = formMethods;

  useEffect(
    () => () => {
      if (setDataOnUnmount) {
        setDataOnUnmount(getValues());
      }
    },
    [],
  );

  return (
    <FormProvider {...formMethods}>
      <form className={className} onSubmit={onSubmit ? handleSubmit(values => onSubmit(values)) : undefined}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
