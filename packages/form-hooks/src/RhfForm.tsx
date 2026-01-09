import { type ReactNode, useEffect } from 'react';
import { type FieldValues, FormProvider, type SubmitHandler, type UseFormReturn } from 'react-hook-form';

interface Props<FormValues extends FieldValues> {
  formMethods: UseFormReturn<FormValues>;
  onSubmit?: SubmitHandler<FormValues>;
  children: ReactNode;
  className?: string;
  setDataOnUnmount?: (data?: any) => void;
}

export const RhfForm = <FormValues extends FieldValues>({
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
