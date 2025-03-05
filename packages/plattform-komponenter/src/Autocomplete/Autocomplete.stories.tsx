import React, { ComponentProps } from 'react';

import { StoryFn } from '@storybook/react';

import { Autocomplete } from './Autocomplete';

export default {
  component: Autocomplete,
};

const AutocompleteTemplate: StoryFn<ComponentProps<typeof Autocomplete>> = () => (
  <Autocomplete
    value="Verdi"
    onChange={v => v}
    ariaLabel="ariaLabel"
    id="autocompleteId"
    placeholder=""
    suggestions={[{ key: 'testItem', value: 'Test Item' }]}
    // eslint-disable-next-line no-console
    onSelect={() => console.log('Selected')}
  />
);

export const Default = AutocompleteTemplate.bind({});
Default.args = {};
