import { composeStories } from '@storybook/react-vite';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './RhfNumericField.stories';

const {
  Default,
  ReadOnly,
  Høyrestilt,
  Deaktivert,
  OrganisasjonsnummerMedValidering,
  BeløpMedDesimalValidering,
  BeløpMedHeltallValidering,
} = composeStories(stories);

describe('RhfNumericField', () => {
  it('skal vise label og starte med tomt felt', async () => {
    await Default.run();
    expect(screen.getByText('Dette er et numberfelt')).toBeInTheDocument();
    expect(screen.getByLabelText('Dette er et numberfelt')).toHaveValue(null);
  });

  it('skal akseptere heltall', async () => {
    await Default.run();
    await userEvent.type(screen.getByLabelText('Dette er et numberfelt'), '42');
    expect(screen.getByLabelText('Dette er et numberfelt')).toHaveValue(42);
  });

  it('skal akseptere desimaltall', async () => {
    await Default.run();
    await userEvent.type(screen.getByLabelText('Dette er et numberfelt'), '12.5');
    expect(screen.getByLabelText('Dette er et numberfelt')).toHaveValue(12.5);
  });

  it('skal avvise bokstaver og spesialtegn', async () => {
    await Default.run();
    const input = screen.getByLabelText('Dette er et numberfelt');
    await userEvent.type(input, 'abc!@#');
    expect(input).toHaveValue(null);
  });

  it('skal vise forhåndsutfylt verdi', async () => {
    await Høyrestilt.run();
    expect(screen.getByLabelText('Høyrestilt tall')).toHaveValue(45.1);
  });

  it('skal vise readonly-verdi som tekst og ikke som inputfelt', async () => {
    await ReadOnly.run();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByText('45.1')).toBeInTheDocument();
  });

  it('skal vise deaktivert inputfelt', async () => {
    await Deaktivert.run();
    expect(screen.getByLabelText('Deaktivert tallfelt')).toBeDisabled();
  });

  it('skal vise valideringsfeil ved innsending uten verdi', async () => {
    await BeløpMedHeltallValidering.run();

    await userEvent.clear(screen.getByLabelText('Beløp'));
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();
  });

  it('skal ikke vise valideringsfeil når feltet er fylt ut', async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    await BeløpMedHeltallValidering.run({ parameters: { onSubmit } });
    await userEvent.type(screen.getByLabelText('Beløp'), '5');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ tomtfelt: 5 }));
  });

  it('skal gi valideringsfeil for ugyldig organisasjonsnummer', async () => {
    await OrganisasjonsnummerMedValidering.run();
    await userEvent.type(screen.getByLabelText('Organisasjonsnummer'), '123');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(
      await screen.findByText('Ugyldig organisasjonsnummer. Organisasjonsnummer må være 9 siffer.'),
    ).toBeInTheDocument();
  });

  it('skal sende inn gyldig organisasjonsnummer som tall ved submit', async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    await OrganisasjonsnummerMedValidering.run({ parameters: { onSubmit } });
    await userEvent.type(screen.getByLabelText('Organisasjonsnummer'), '123456789');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ tomtfelt: 123456789 }));
  });

  it('skal gi valideringsfeil for beløp med for mange desimaler', async () => {
    await BeløpMedDesimalValidering.run();
    await userEvent.type(screen.getByLabelText('Beløp'), '12.567');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(await screen.findByText('Tallet kan ikke inneholde mer enn to desimaler')).toBeInTheDocument();
  });

  it('skal sende inn beløp med to desimaler som tall ved submit', async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    await BeløpMedDesimalValidering.run({ parameters: { onSubmit } });
    await userEvent.type(screen.getByLabelText('Beløp'), '12.56');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ tomtfelt: 12.56 }));
  });

  it('skal sende inn negativt beløp som tall ved submit', async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    await BeløpMedHeltallValidering.run({ parameters: { onSubmit } });
    await userEvent.type(screen.getByLabelText('Beløp'), '-42');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ tomtfelt: -42 }));
  });

  it('skal gi valideringsfeil for beløp uten desimaler når desimal skrives inn', async () => {
    await BeløpMedHeltallValidering.run();
    await userEvent.type(screen.getByLabelText('Beløp'), '12.5');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(await screen.findByText('Tallet kan ikke ha desimaler')).toBeInTheDocument();
  });

  it('skal sende inn heltall uten desimaler som tall ved submit', async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    await BeløpMedHeltallValidering.run({ parameters: { onSubmit } });
    await userEvent.type(screen.getByLabelText('Beløp'), '100');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ tomtfelt: 100 }));
  });

  it('skal lime inn desimaltall', async () => {
    await BeløpMedHeltallValidering.run();
    await userEvent.click(screen.getByLabelText('Beløp'));
    await userEvent.paste('150 000.56');
    expect(screen.getByLabelText('Beløp')).toHaveValue(150000.56);
  });

  it('skal lime inn negativt tall', async () => {
    await BeløpMedHeltallValidering.run();
    await userEvent.click(screen.getByLabelText('Beløp'));
    await userEvent.paste('−96 164');
    expect(screen.getByLabelText('Beløp')).toHaveValue(-96164);
  });
});
