import { useForm } from 'react-hook-form';

import type { ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

import { Form } from '@navikt/ft-form-hooks';

export const WithReactHookForm: DecoratorFunction<ReactRenderer> = Story => {
  const formMethods = useForm();
  return (
    <Form formMethods={formMethods}>
      <Story />
    </Form>
  );
};
