import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect } from 'vitest';

import * as stories from './PeriodFieldArray.stories';

const { MedAnnenType } = composeStories(stories);

describe('PeriodFieldArray', () => {
  it('skal rendre field array', async () => {
    render(<MedAnnenType />);

    expect(screen.getByText('Personer')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText('Legg til person')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Fjern element' })).toBeInTheDocument();

    const firstNameInput = screen.getAllByLabelText(/Fornavn/i);
    const lastNameInput = screen.getAllByLabelText(/Etternavn/i);
    const addressInput = screen.getAllByLabelText(/Adresse/i);

    expect(firstNameInput).toHaveLength(2);

    expect(firstNameInput[0]).toHaveValue('Ola');
    expect(lastNameInput[0]).toHaveValue('Nordmann');
    expect(addressInput[0]).toHaveValue('Karl Johans Gate 1');

    expect(firstNameInput[1]).toHaveValue('Sven');
    expect(lastNameInput[1]).toHaveValue('Svensen');
    expect(addressInput[1]).toHaveValue('Slottsbacken 1');
  });

  it('legg til rad', async () => {
    render(<MedAnnenType />);

    await userEvent.click(screen.getByText('Legg til person'));

    const firstNameInput = screen.getAllByLabelText(/Fornavn/i);
    const lastNameInput = screen.getAllByLabelText(/Etternavn/i);
    const addressInput = screen.getAllByLabelText(/Adresse/i);

    expect(firstNameInput).toHaveLength(3);

    await userEvent.type(firstNameInput[2], 'Jens');
    await userEvent.type(lastNameInput[2], 'Jensen');
    await userEvent.type(addressInput[2], 'Amalienborg Slotsplads 1');

    await userEvent.click(screen.getByText('Submit'));

    expect(screen.getByDisplayValue('Jens')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Jensen')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Amalienborg Slotsplads 1')).toBeInTheDocument();

    expect(screen.getAllByLabelText(/Fornavn/i)).toHaveLength(3);
  });

  it('fjern rad', async () => {
    render(<MedAnnenType />);

    expect(screen.getAllByLabelText(/Fornavn/i)).toHaveLength(2);
    await userEvent.click(screen.getByRole('button', { name: 'Fjern element' }));
    expect(screen.getAllByLabelText(/Fornavn/i)).toHaveLength(1);
  });

  it('skal rendre read only visning', async () => {
    render(<MedAnnenType readOnly={true} />);

    expect(screen.getAllByText('Fornavn')).toHaveLength(2);
    expect(screen.queryByText('Legg til person')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Fjern element' })).not.toBeInTheDocument();
  });
});
