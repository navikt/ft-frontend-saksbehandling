import { composeStories } from '@storybook/react-vite';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './RhfRadioGroup.stories';

const { Default, ReadOnlyMedOverstyrtMarkering, MedValidering } = composeStories(stories);

describe('RhfRadioGroup', () => {
  it('skal fokusere første aktive radioknapp ved valideringsfeil', async () => {
    await MedValidering.run();

    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByText('Velg en verdi')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Verdi' })).toHaveFocus();
  });

  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Legend')).toBeInTheDocument();
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

    expect(screen.getByText('Legend')).toBeInTheDocument();

    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-readonly', 'true');
    expect(screen.getByLabelText('Oppfylt')).not.toBeChecked();
    await userEvent.click(screen.getByText('Oppfylt'));
    expect(screen.getByLabelText('Oppfylt')).not.toBeChecked();
  });
});
