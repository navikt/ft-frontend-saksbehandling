import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './CheckboxField.stories';

export const { Default } = composeStories(stories);

describe('<CheckboxField>', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er en checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText('Dette er en checkbox')).not.toBeChecked();
    await userEvent.click(screen.getByText('Dette er en checkbox'));
    expect(await screen.getByLabelText('Dette er en checkbox')).toBeChecked();
  });
});
