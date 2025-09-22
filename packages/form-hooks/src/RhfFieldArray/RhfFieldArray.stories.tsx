import { useFieldArray, useFormContext } from 'react-hook-form';

import { HStack } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { rhfDecorator } from '../../.storybook/decorators';
import { RhfDatepicker } from '../RhfDatepicker/RhfDatepicker';
import { RhfTextField } from '../RhfTextField/RhfTextField';
import { RhfFieldArray } from './RhfFieldArray.tsx';

type StoryFormValues = {
  test: { periodeFom: string; periodeTom: string }[];
  personer: {
    fornavn: string;
    etternavn: string;
    adresse: string;
  }[];
};
const meta = {
  component: RhfFieldArray,
  decorators: rhfDecorator({
    test: [{ periodeFom: '', periodeTom: '' }],
    personer: [
      { fornavn: 'Ola', etternavn: 'Nordmann', adresse: 'Karl Johans Gate 1' },
      { fornavn: 'Sven', etternavn: 'Svensen', adresse: 'Slottsbacken 1' },
    ],
  }),
  args: {
    readOnly: false,
    size: 'small',
    titleText: 'Perioder',
    addButtonText: 'Legg til periode',
    emptyTemplate: { periodeFom: '', periodeTom: '' },
    // these are required for the component to work, but not used in this story
    children: () => <></>,
    fields: [],
    remove: () => undefined,
    append: () => undefined,
  },
} satisfies Meta<typeof RhfFieldArray<StoryFormValues>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ size, readOnly, ...rest }) => {
    const { control } = useFormContext<StoryFormValues>();
    const { fields, remove, append } = useFieldArray({
      control,
      name: 'test',
    });

    return (
      <RhfFieldArray
        {...rest}
        fields={fields}
        append={append}
        remove={remove}
        emptyTemplate={{ periodeFom: '', periodeTom: '' }}
        titleText="Perioder"
        addButtonText="Legg til periode"
        size={size}
        readOnly={readOnly}
      >
        {(field, index, removeButton) => (
          <HStack gap="2" key={field.id} align="end">
            <RhfDatepicker
              size={size}
              isReadOnly={readOnly}
              name={`test.${index}.periodeFom`}
              label="Fra og med"
              control={control}
            />
            <RhfDatepicker
              size={size}
              isReadOnly={readOnly}
              name={`test.${index}.periodeTom`}
              label="Til og med"
              control={control}
            />
            {removeButton}
          </HStack>
        )}
      </RhfFieldArray>
    );
  },
};

export const MedAnnenType: Story = {
  render: ({ size, readOnly, ...rest }) => {
    const { control } = useFormContext<StoryFormValues>();
    const { fields, remove, append } = useFieldArray({
      control,
      name: 'personer',
    });

    return (
      <RhfFieldArray
        {...rest}
        fields={fields}
        append={append}
        remove={remove}
        titleText="Personer"
        addButtonText="Legg til person"
        size={size}
        readOnly={readOnly}
        emptyTemplate={{ fornavn: '', etternavn: '', adresse: '' }}
      >
        {(field, index, removeButton) => (
          <HStack gap="2" key={field.id} align="end">
            <RhfTextField
              name={`personer.${index}.fornavn`}
              control={control}
              label="Fornavn"
              size={size}
              readOnly={readOnly}
            />
            <RhfTextField
              name={`personer.${index}.etternavn`}
              control={control}
              label="Etternavn"
              size={size}
              readOnly={readOnly}
            />
            <RhfTextField
              name={`personer.${index}.adresse`}
              control={control}
              label="Adresse"
              size={size}
              readOnly={readOnly}
            />
            {removeButton}
          </HStack>
        )}
      </RhfFieldArray>
    );
  },
};
