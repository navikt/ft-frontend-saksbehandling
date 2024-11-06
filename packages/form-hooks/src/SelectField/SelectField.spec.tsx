import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './SelectField.stories';

export const { Default } = composeStories(stories);

describe('<SelectField>', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er en dropdown')).toBeInTheDocument();
    await userEvent.selectOptions(screen.getByLabelText('Dette er en dropdown'), 'value1');
    expect((screen.getByText('Test 1') as HTMLOptionElement).selected).toBeTruthy();
  });
});
