import { useForm } from 'react-hook-form';

import type { ReactRenderer } from '@storybook/react-vite';
import type { DecoratorFunction } from 'storybook/internal/types';

import { RhfForm } from '@navikt/ft-form-hooks';

export const WithReactHookForm: DecoratorFunction<ReactRenderer> = Story => {
  const formMethods = useForm();
  return (
    <RhfForm formMethods={formMethods}>
      <Story />
    </RhfForm>
  );
};
