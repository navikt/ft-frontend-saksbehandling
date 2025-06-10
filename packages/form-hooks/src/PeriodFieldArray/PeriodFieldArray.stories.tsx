import { useFieldArray, useFormContext } from 'react-hook-form';

import { HStack } from '@navikt/ds-react';
import { Meta, StoryObj } from '@storybook/react';

import { rhfDecorator } from '../../.storybook/decorators';
import { Datepicker } from '../Datepicker/Datepicker';
import { PeriodFieldArray } from './PeriodFieldArray';

const FIELD_ARRAY_NAME = 'periodFieldArray';
const defaultValues = {
  [FIELD_ARRAY_NAME]: [
    { fom: '', tom: '' },
    { fom: '', tom: '' },
  ],
};

const meta = {
  component: PeriodFieldArray,
  args: {
    shouldShowAddButton: true,
    readOnly: false,
    titleText: 'Perioder',
    size: 'small',
    addButtonText: 'Legg til periode',
    emptyPeriodTemplate: { fom: '', tom: '' },

    // these are required for the component to work, but not used in this story
    children: () => <></>,
    fields: [],
    remove: () => undefined,
    append: () => undefined,
  },
  decorators: rhfDecorator(defaultValues),
  render: args => {
    const { control } = useFormContext<typeof defaultValues>();
    const { fields, remove, append } = useFieldArray<typeof defaultValues>({
      control,
      name: FIELD_ARRAY_NAME,
    });

    return (
      <PeriodFieldArray {...args} fields={fields} append={append} remove={remove}>
        {(field, index, { removeButton, size }) => (
          <HStack gap="2" key={field.id} align="end">
            <Datepicker name={`${FIELD_ARRAY_NAME}.${index}.fom`} label="Fom" size={size} />
            <Datepicker name={`${FIELD_ARRAY_NAME}.${index}.tom`} label="Tom" size={size} />
            {removeButton}
          </HStack>
        )}
      </PeriodFieldArray>
    );
  },
} satisfies Meta<typeof PeriodFieldArray<typeof defaultValues>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
