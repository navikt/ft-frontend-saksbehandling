import { type SubmitHandler, useForm } from 'react-hook-form';

import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, vi } from 'vitest';

import { RhfForm } from '../RhfForm';
import { RhfDatepicker } from './RhfDatepicker';
import * as stories from './RhfDatepicker.stories';

export const { Default } = composeStories(stories);

const TestForm = ({ onSubmit }: { onSubmit: SubmitHandler<{ dato: string }> }) => {
  const formMethods = useForm<{ dato: string }>({
    defaultValues: {
      dato: '',
    },
  });

  return (
    <RhfForm formMethods={formMethods} onSubmit={onSubmit}>
      <RhfDatepicker
        control={formMethods.control}
        name="dato"
        label="Dato"
        inputFormats={['DD-MM-YYYY', 'DDMMYY']}
      />
      <button type="submit">Submit</button>
    </RhfForm>
  );
};

const submitDatoOgHentPayload = async (datoInput: string) => {
  const onSubmit = vi.fn();
  const { container } = render(<TestForm onSubmit={onSubmit} />);

  const input = within(container).getByLabelText('Dato');
  await userEvent.type(input, datoInput);
  fireEvent.blur(input);
  await userEvent.click(within(container).getByRole('button', { name: 'Submit' }));

  expect(onSubmit).toHaveBeenCalled();
  return onSubmit.mock.calls[0][0];
};

describe('RhfDatepicker', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Dette er en datepicker')).toBeInTheDocument();
    expect(screen.getByText('Dette er en nærmere beskrivelse')).toBeInTheDocument();
    const datofelt = screen.getByText('Dette er en datepicker');
    await userEvent.type(datofelt, '01.02.2020');
    fireEvent.blur(datofelt);

    expect(screen.getByLabelText('Dette er en datepicker')).toHaveValue('01.02.2020');
  });

  it.each([
    ['DD-MM-YYYY', '01-02-2020'],
    ['DDMMYY', '010220'],
  ])('skal parse %s til ISO ved submit', async (_, datoInput) => {
    const payload = await submitDatoOgHentPayload(datoInput);

    expect(payload).toEqual({
      dato: '2020-02-01',
    });
  });

  it('skal automatisk sette inn punktum når brukeren skriver 8 sifre', async () => {
    const onSubmit = vi.fn();
    const { container } = render(<TestForm onSubmit={onSubmit} />);

    const input = within(container).getByLabelText('Dato');
    await userEvent.type(input, '26082025');

    expect(input).toHaveValue('26.08.2025');

    fireEvent.blur(input);
    await userEvent.click(within(container).getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toEqual({
      dato: '2025-08-26',
    });
  });
});
