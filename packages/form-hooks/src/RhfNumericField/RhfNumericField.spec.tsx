import { composeStories } from '@storybook/react-vite';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, vi } from 'vitest';

import * as stories from './RhfNumericField.stories';

export const { Default, MedVerdi, ReadOnly, MedValidering } = composeStories(stories);

describe('RhfNumericField', () => {
  it('skal begrense til to desimaler og sende verdien som tekst med punktum', async () => {
    const onSubmit = vi.fn();
    await Default.run({ parameters: { onSubmit } });

    const input = screen.getByRole('textbox', { name: 'Label' });
    expect(input).toHaveValue('');
    expect(screen.getByText('Dette er et nummerfelt')).toBeInTheDocument();
    await userEvent.type(input, '27,667');
    expect(input).toHaveValue('27,66');

    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ field: '27.66' }));
  });

  it('skal vise startverdien med desimalkomma', async () => {
    await MedVerdi.run();

    expect(screen.getByRole('textbox', { name: 'Label' })).toHaveValue('45,1');
  });

  it('skal vise startverdien uten et redigerbart felt i lesemodus', async () => {
    await ReadOnly.run();

    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByText('45.1')).toBeInTheDocument();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it.each([
    ['27,666', 27.66],
    ['0,05', 0.05],
    ['0', 0],
  ])('skal sende %s som tallet %s når returnAsNumber er satt', async (inputValue, expectedValue) => {
    const onSubmit = vi.fn();
    await Default.run({
      args: { ...Default.args, returnAsNumber: true },
      parameters: { onSubmit },
    });

    await userEvent.type(screen.getByRole('textbox', { name: 'Label' }), inputValue);
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ field: expectedValue }));
  });

  it.each([false, true])('skal sende null ved sletting når returnAsNumber er %s', async returnAsNumber => {
    const onSubmit = vi.fn();
    await MedVerdi.run({
      args: { ...MedVerdi.args, returnAsNumber },
      parameters: { ...MedVerdi.parameters, onSubmit },
    });

    const input = screen.getByRole('textbox', { name: 'Label' });
    expect(input).toHaveValue('45,1');
    await userEvent.clear(input);
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ field: null }));
  });

  it.each([
    [false, '27.0'],
    [true, 27],
  ])('skal fullføre et avsluttende desimalkomma når returnAsNumber er %s', async (returnAsNumber, expectedValue) => {
    const onSubmit = vi.fn();
    await Default.run({
      args: { ...Default.args, returnAsNumber },
      parameters: { onSubmit },
    });

    const input = screen.getByRole('textbox', { name: 'Label' });
    await userEvent.type(input, '27,');
    await userEvent.tab();

    expect(input).toHaveValue('27,00');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ field: expectedValue }));
  });

  it('skal fokusere feltet ved valideringsfeil og tillate innsending etter retting', async () => {
    const onSubmit = vi.fn();
    await MedValidering.run({ parameters: { onSubmit } });

    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByText('Skriv inn et tall')).toBeInTheDocument();
    const input = screen.getByRole('textbox', { name: 'Label' });
    expect(input).toHaveFocus();
    expect(onSubmit).not.toHaveBeenCalled();

    await userEvent.type(input, '0');
    await waitFor(() => expect(screen.queryByText('Skriv inn et tall')).not.toBeInTheDocument());
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ field: '0' }));
  });
});
