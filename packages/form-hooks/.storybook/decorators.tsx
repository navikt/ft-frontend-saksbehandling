import React from 'react';
import { useForm, UseFormProps } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';

import { Form } from './../src/Form';

export const rhfDecorator =
  (defaultValues: UseFormProps['defaultValues']): Meta['decorators'] =>
  // eslint-disable-next-line react/display-name
  Story => {
    const formMethods = useForm({
      defaultValues,
    });

    return (
      <Form formMethods={formMethods} onSubmit={action('button-click') as (data: any) => Promise<any>}>
        <VStack gap="4">
          <Story />
          <div>
            <Button size="small" type="submit">
              Submit
            </Button>
          </div>
        </VStack>
      </Form>
    );
  };
