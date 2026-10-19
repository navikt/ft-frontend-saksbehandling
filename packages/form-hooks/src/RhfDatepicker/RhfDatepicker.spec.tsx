import { type SubmitHandler, useForm } from 'react-hook-form';

import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import { expect, vi } from 'vitest';

import { RhfForm } from '../RhfForm';
import { RhfDatepicker } from './RhfDatepicker';
import * as stories from './RhfDatepicker.stories';

export const { Default } = composeStories(stories);

const TestForm = ({
  onSubmit,
  defaultDato = '',
  readOnly,
}: {
  onSubmit: SubmitHandler<{ dato: string }>;
  defaultDato?: string;
  readOnly?: boolean;
}) => {
  const formMethods = useForm<{ dato: string }>({
    defaultValues: {
      dato: defaultDato,
    },
  });

  return (
    <RhfForm formMethods={formMethods} onSubmit={onSubmit}>
      <RhfDatepicker
        control={formMethods.control}
        name="dato"
        label="Dato"
        inputFormats={['DD-MM-YYYY', 'DDMMYY']}
        validate={[value => (dayjs(value, 'YYYY-MM-DD', true).isValid() ? null : 'Ugyldig dato')]}
        readOnly={readOnly}
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

  it('skal formatere på nytt når samme 8 sifre erstatter en allerede formatert dato', async () => {
    const { container } = render(<TestForm onSubmit={vi.fn()} />);

    const input = within(container).getByLabelText('Dato');
    await userEvent.type(input, '26082025');
    expect(input).toHaveValue('26.08.2025');

    // Bruker markerer alt og limer inn den samme sifferrekken – skal fortsatt få punktum
    fireEvent.change(input, { target: { value: '26082025' } });
    expect(input).toHaveValue('26.08.2025');
  });

  it('skal ikke krasje og skal vise råverdien når startverdien er en ugyldig dato', async () => {
    const onSubmit = vi.fn();
    const { container } = render(<TestForm onSubmit={onSubmit} defaultDato="31092026" />);

    const input = within(container).getByLabelText('Dato');
    expect(input).toHaveValue('31092026');

    await userEvent.click(within(container).getByRole('button', { name: 'Submit' }));

    expect(await screen.findByText('Ugyldig dato')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('skal vise råverdien i lesemodus når verdien er en ugyldig dato', () => {
    render(<TestForm onSubmit={vi.fn()} defaultDato="31092026" readOnly />);

    expect(screen.getByText('31092026')).toBeInTheDocument();
  });

  it('skal vise gyldig startverdi formatert', () => {
    const { container } = render(<TestForm onSubmit={vi.fn()} defaultDato="2026-09-30" />);

    expect(within(container).getByLabelText('Dato')).toHaveValue('30.09.2026');
  });
});
