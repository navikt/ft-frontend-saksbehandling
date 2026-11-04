import { type DefaultValues, type FieldValues, type SubmitHandler, useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import type { Decorator } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { RhfForm } from '../src/RhfForm';

declare module 'storybook/internal/csf' {
  interface Parameters {
    defaultValues?: DefaultValues<FieldValues>;
    onSubmit?: SubmitHandler<FieldValues>;
  }
}

export const rhfDecorator: Decorator = function RhfDecorator(Story, { args, parameters }) {
  const { defaultValues = {}, onSubmit } = parameters;
  const formMethods = useForm({ defaultValues });

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={async data => {
        await onSubmit?.(data);
        action('submit')(data);
      }}
    >
      <VStack gap="space-16">
        <Story args={{ ...args, control: formMethods.control }} />
        <div>
          <Button size="small" type="submit">
            Submit
          </Button>
        </div>
      </VStack>
    </RhfForm>
  );
};
