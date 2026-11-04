import { composeStories } from '@storybook/react-vite';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, vi } from 'vitest';

import * as stories from './RhfSelect.stories';

export const { Default, MedVerdi, ReadOnly, Deaktivert, MedValidering } = composeStories(stories);

describe('RhfSelect', () => {
  it('skal sende valgt verdi, ikke visningsteksten', async () => {
    const onSubmit = vi.fn();
    await Default.run({ parameters: { ...Default.parameters, onSubmit } });

    const select = screen.getByRole('combobox', { name: 'Label' });
    expect(select).toHaveAccessibleDescription('Dette er en dropdown');
    expect(select).toHaveValue('');
    await userEvent.selectOptions(select, 'value1');
    expect(select).toHaveValue('value1');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ field: 'value1' }));
  });

  it('skal kunne endre en forhåndsvalgt verdi', async () => {
    const onSubmit = vi.fn();
    await MedVerdi.run({ parameters: { ...MedVerdi.parameters, onSubmit } });

    const select = screen.getByRole('combobox', { name: 'Label' });
    expect(select).toHaveAccessibleDescription('Dette er en dropdown der verdi er valgt');
    expect(select).toHaveValue('value3');
    await userEvent.selectOptions(select, 'value4');
    expect(select).toHaveValue('value4');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ field: 'value4' }));
  });

  it('skal vise teksten til valgt alternativ uten et select-felt i lesemodus', async () => {
    await ReadOnly.run();

    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByText('Test 3')).toBeInTheDocument();
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
  });

  it('skal deaktivere select-feltet når disabled er satt', async () => {
    await Deaktivert.run();

    const select = screen.getByRole('combobox', { name: 'Label' });
    expect(select).toHaveAccessibleDescription('Dette er en dropdown som er deaktivert');
    expect(select).toBeDisabled();
    expect(select).toHaveValue('value3');
    await userEvent.selectOptions(select, 'value4');
    expect(select).toHaveValue('value3');
  });

  it('skal skjule verdien ved deaktivering uten å slette skjemaverdien', async () => {
    const onSubmit = vi.fn();
    await Deaktivert.run({
      args: { ...Deaktivert.args, hideValueOnDisable: true },
      parameters: { ...Deaktivert.parameters, onSubmit },
    });

    expect(screen.getByRole('combobox')).toBeDisabled();
    expect(screen.getByRole('combobox')).toHaveValue('');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ field: 'value3' }));
  });

  it('skal fokusere select-feltet ved valideringsfeil og tillate innsending etter retting', async () => {
    const onSubmit = vi.fn();
    await MedValidering.run({ parameters: { ...MedValidering.parameters, onSubmit } });

    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByText('Velg en verdi')).toBeInTheDocument();
    const select = screen.getByRole('combobox', { name: 'Label' });
    expect(select).toHaveFocus();
    expect(onSubmit).not.toHaveBeenCalled();

    await userEvent.selectOptions(select, 'value2');
    await waitFor(() => expect(screen.queryByText('Velg en verdi')).not.toBeInTheDocument());
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ field: 'value2' }));
  });
});
