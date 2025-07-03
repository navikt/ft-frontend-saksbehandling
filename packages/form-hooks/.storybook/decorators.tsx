import React from 'react';
import { useForm, UseFormProps } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import type { Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { RhfForm } from './../src/RhfForm';

export const rhfDecorator =
  (defaultValues: UseFormProps['defaultValues']): Meta['decorators'] =>
  // eslint-disable-next-line react/display-name
  Story => {
    const formMethods = useForm({
      defaultValues,
    });

    return (
      <RhfForm formMethods={formMethods} onSubmit={action('button-click') as (data: unknown) => Promise<unknown>}>
        <VStack gap="4">
          <Story />
          <div>
            <Button size="small" type="submit">
              Submit
            </Button>
          </div>
        </VStack>
      </RhfForm>
    );
  };
