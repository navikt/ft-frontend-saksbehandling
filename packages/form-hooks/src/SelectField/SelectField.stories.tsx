import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import SelectField from './SelectField';
import { rhfDecorator } from '../../.storybook/decorators';

const meta = {
  component: SelectField,
  tags: ['autodocs'],
  decorators: rhfDecorator({ testSelectFieldpre: 'value3' }),
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Dette er en dropdown',
    name: 'testSelectField',
    description: 'Dette er en nærmere beskrivelse',
    selectValues: [
      <option value="value1" key="1">
        Test 1
      </option>,
      <option value="value2" key="2">
        Test 2
      </option>,
    ],
  },
};

export const MedVerdi: Story = {
  args: {
    label: 'Dette er en dropdown der verdi er valgt',
    name: 'testSelectFieldpre',
    selectValues: [
      <option value="value3" key="1">
        Test 3
      </option>,
      <option value="value4" key="2">
        Test 4
      </option>,
    ],
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Dette er en dropdown som er readonly',
    name: 'testSelectFieldpre',
    readOnly: true,
    selectValues: [
      <option value="value3" key="1">
        Test 3
      </option>,
      <option value="value4" key="2">
        Test 4
      </option>,
    ],
  },
};