import { useForm } from 'react-hook-form';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, vi } from 'vitest';

import { RhfForm } from './RhfForm';
import { useCustomValidation } from './useCustomValidation';

const Validering = ({ navn, melding }: { navn: string; melding?: string }) => {
  const feil = useCustomValidation(navn, melding);
  return <span>{feil}</span>;
};

const TestForm = ({
  vis = true,
  navn = 'periode',
  melding = 'Perioden må avklares',
  onSubmit = vi.fn(),
}: {
  vis?: boolean;
  navn?: string;
  melding?: string;
  onSubmit?: () => void;
}) => {
  const formMethods = useForm();
  return (
    <RhfForm formMethods={formMethods} onSubmit={onSubmit}>
      {vis && <Validering navn={navn} melding={melding} />}
      <button type="button" onClick={() => formMethods.setError('periode.annet', { message: 'En annen feil' })}>
        Sett annen feil
      </button>
      <output>{JSON.stringify(formMethods.formState.errors)}</output>
      <button type="submit">Lagre</button>
    </RhfForm>
  );
};

describe('useCustomValidation', () => {
  it('skal tillate innsending når komponenten med feilen fjernes', async () => {
    const onSubmit = vi.fn();
    const { rerender } = render(<TestForm onSubmit={onSubmit} />);
    await userEvent.click(screen.getByRole('button', { name: 'Lagre' }));
    expect(onSubmit).not.toHaveBeenCalled();
    expect(screen.getByText('Perioden må avklares')).toBeInTheDocument();

    rerender(<TestForm vis={false} onSubmit={onSubmit} />);
    await userEvent.click(screen.getByRole('button', { name: 'Lagre' }));
    expect(onSubmit).toHaveBeenCalledOnce();
  });

  it('skal fjerne feilen fra forrige navn når navnet endres', () => {
    const { rerender } = render(<TestForm />);
    rerender(<TestForm navn="nyPeriode" />);

    expect(JSON.parse(screen.getByRole('status').textContent ?? '')).toEqual({
      nyPeriode: { notRegisteredInput: { type: 'custom', message: 'Perioden må avklares' } },
    });
  });

  it('skal fjerne feilen når meldingen tømmes', async () => {
    const onSubmit = vi.fn();
    const { rerender } = render(<TestForm onSubmit={onSubmit} />);
    rerender(<TestForm melding="" onSubmit={onSubmit} />);
    await userEvent.click(screen.getByRole('button', { name: 'Lagre' }));
    expect(onSubmit).toHaveBeenCalledOnce();
  });

  it('skal beholde andre feil når valideringen fjernes', async () => {
    const onSubmit = vi.fn();
    const { rerender } = render(<TestForm onSubmit={onSubmit} />);
    await userEvent.click(screen.getByRole('button', { name: 'Sett annen feil' }));
    rerender(<TestForm vis={false} onSubmit={onSubmit} />);
    await userEvent.click(screen.getByRole('button', { name: 'Lagre' }));

    expect(onSubmit).not.toHaveBeenCalled();
    expect(JSON.parse(screen.getByRole('status').textContent ?? '')).toEqual({
      periode: { annet: { message: 'En annen feil' } },
    });
  });
});
