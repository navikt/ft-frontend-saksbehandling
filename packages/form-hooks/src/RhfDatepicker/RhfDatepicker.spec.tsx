import { composeStories } from '@storybook/react-vite';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, vi } from 'vitest';

import * as stories from './RhfDatepicker.stories';

export const { Default, MedVerdi, MedValidering } = composeStories(stories);

describe('RhfDatepicker', () => {
  it('skal sette verdi', async () => {
    await Default.run();
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByText('Dette er en nærmere beskrivelse')).toBeInTheDocument();
    const datofelt = screen.getByText('Label');
    await userEvent.type(datofelt, '01.02.2020');
    fireEvent.blur(datofelt);

    expect(screen.getByLabelText('Label')).toHaveValue('01.02.2020');
  });

  it.each([
    ['DD-MM-YYYY', '01-02-2020'],
    ['DDMMYY', '010220'],
  ])('skal parse %s til ISO ved submit', async (_, datoInput) => {
    const onSubmit = vi.fn();
    await MedValidering.run({ parameters: { onSubmit } });
    const input = screen.getByLabelText('Label');
    await userEvent.type(input, datoInput);
    fireEvent.blur(input);
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledWith({ field: '2020-02-01' });
  });

  it('skal automatisk sette inn punktum når brukeren skriver 8 sifre', async () => {
    const onSubmit = vi.fn();
    await Default.run({ parameters: { onSubmit } });

    const input = screen.getByLabelText('Label');
    await userEvent.type(input, '26082025');

    expect(input).toHaveValue('26.08.2025');

    fireEvent.blur(input);
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toEqual({ field: '2025-08-26' });
  });

  it('skal ikke krasje og skal vise råverdien når startverdien er en ugyldig dato', async () => {
    const onSubmit = vi.fn();
    await MedValidering.run({ parameters: { defaultValues: { field: '31092026' }, onSubmit } });

    const input = screen.getByLabelText('Label');
    expect(input).toHaveValue('31092026');

    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByText('Ugyldig dato')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('skal vise råverdien i lesemodus når verdien er en ugyldig dato', async () => {
    await MedValidering.run({
      args: { ...MedValidering.args, readOnly: true },
      parameters: { defaultValues: { field: '31092026' } },
    });

    expect(screen.getByText('31092026')).toBeInTheDocument();
  });

  it('skal vise gyldig startverdi formatert', async () => {
    await MedVerdi.run();

    expect(screen.getByLabelText('Label')).toHaveValue('11.10.2022');
  });

  it('skal fokusere datofeltet ved valideringsfeil', async () => {
    await MedValidering.run();

    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByText('Ugyldig dato')).toBeInTheDocument();
    const input = screen.getByRole('textbox', { name: 'Label' });
    expect(input).toHaveFocus();

    await userEvent.type(input, '01.02.2020');

    await waitFor(() => expect(screen.queryByText('Ugyldig dato')).not.toBeInTheDocument());
  });
});
