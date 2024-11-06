import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './CheckboxPanel.stories';

export const { Default } = composeStories(stories);

describe('<CheckboxPanel>', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er en checkboxpanel')).toBeInTheDocument();
    expect(screen.getByText('Dette er en beskrivelse')).toBeInTheDocument();

    const checkboxes = screen.getAllByLabelText(/Verdi /);

    expect(checkboxes).toHaveLength(3);
    checkboxes.forEach(checkbox => {
      expect(checkbox).not.toBeChecked();
    });

    await userEvent.click(screen.getByText('Verdi 1'));
    expect(screen.getByLabelText('Verdi 1')).toBeChecked();
  });
});
