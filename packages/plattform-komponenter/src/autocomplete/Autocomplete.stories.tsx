import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import AutocompleteComponent from './Autocomplete';

export default {
  title: 'Autocomplete',
  component: AutocompleteComponent,
};

const AutocompleteTemplate: StoryFn<ComponentProps<typeof AutocompleteComponent>> = () => (
  <AutocompleteComponent
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

export const Autocomplete = AutocompleteTemplate.bind({});
Autocomplete.args = {};
