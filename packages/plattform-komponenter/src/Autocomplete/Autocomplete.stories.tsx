import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { Autocomplete } from './Autocomplete';

const meta = {
  component: Autocomplete,
} satisfies Meta<typeof Autocomplete>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Verdi',
    onChange: action('onChange'),
    ariaLabel: 'ariaLabel',
    id: 'autocompleteId',
    placeholder: '',
    suggestions: [{ key: 'testItem', value: 'Test Item' }],
    onSelect: action('onSelect'),
  },
};
