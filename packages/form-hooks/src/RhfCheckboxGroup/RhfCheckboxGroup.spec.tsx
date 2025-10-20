import { composeStories } from '@storybook/react-vite';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './RhfCheckboxGroup.stories';

const { Default, MedValidering } = composeStories(stories);

describe('RhfCheckboxGroup', () => {
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

  it('skal gi feil ved ingen valgte elementer', async () => {
    await MedValidering.run();
    expect(screen.getByText('Dette er en checkboks med validering')).toBeInTheDocument();

    const checkboxes = screen.getAllByLabelText(/Verdi /);

    await userEvent.click(checkboxes[0]);
    await userEvent.click(checkboxes[2]);

    await userEvent.click(screen.getByText('Submit'));

    expect(await screen.findByText('Du må velge minst ett element')).toBeInTheDocument();

    await userEvent.click(checkboxes[0]);
    await userEvent.click(checkboxes[1]);

    expect(screen.getByText('Verdi 1 og 2 kan ikke velges samtidig')).toBeInTheDocument();
  });
});
