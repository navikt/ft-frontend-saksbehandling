import { composeStories } from '@storybook/react-vite';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './RhfRadioGroup.stories';

const { Default, ReadOnlyMedOverstyrtMarkering } = composeStories(stories);

describe('RhfRadioGroup', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er en radiogruppe')).toBeInTheDocument();
    expect(screen.getByText('Dette er en beskrivelse')).toBeInTheDocument();

    const radios = screen.getAllByLabelText(/ppfylt$/);
    expect(radios).toHaveLength(3);
    radios.forEach(radio => {
      expect(radio).not.toBeChecked();
    });

    await userEvent.click(screen.getByText('Ikke oppfylt'));
    expect(screen.getByLabelText('Ikke oppfylt')).toBeChecked();
  });

  it('skal vise readonly verdier', async () => {
    await ReadOnlyMedOverstyrtMarkering.run();
    expect(screen.getByRole('group')).toHaveAttribute('aria-readonly', 'true');
    expect(screen.getByLabelText('Oppfylt')).not.toBeChecked();
    await userEvent.click(screen.getByText('Oppfylt'));
    expect(screen.getByLabelText('Oppfylt')).not.toBeChecked();
  });
});
