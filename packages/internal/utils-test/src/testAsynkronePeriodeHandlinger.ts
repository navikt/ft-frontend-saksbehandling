import type { MouseEvent } from 'react';

import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, vi } from 'vitest';

type Perioder = {
  forstePeriode: { fom: string; tom: string };
  andrePeriode: { fom: string; tom: string };
};

interface Oppsett {
  renderSkjema: (callbacks: {
    submitCallback?: () => Promise<void>;
    beregnBelop?: () => Promise<{ perioder: { belop: number }[] }>;
  }) => void;
  hentLagreknapp: () => { onClick?: (event: MouseEvent) => void; isSubmitting: boolean };
  hentDelingsdialog: () => { splitPeriod: (perioder: Perioder) => Promise<void>; showModal: boolean };
  perioder: Perioder;
  opprinneligPeriode: string;
  beløp: [number, number];
}

export const testAsynkronePeriodeHandlinger = ({
  renderSkjema,
  hentLagreknapp,
  hentDelingsdialog,
  perioder,
  opprinneligPeriode,
  beløp,
}: Oppsett) => {
  it('skal åpne for nytt lagringsforsøk og sende feilen videre', async () => {
    const feil = new Error('Lagring feilet');
    const lagring = Promise.withResolvers<void>();
    const submitCallback = vi.fn(() => lagring.promise);
    renderSkjema({ submitCallback });

    const lagre = hentLagreknapp().onClick as () => Promise<void>;
    let resultat: Promise<void>;
    act(() => {
      resultat = lagre();
    });
    expect(hentLagreknapp().isSubmitting).toBe(true);

    await act(async () => {
      lagring.reject(feil);
      await expect(resultat).rejects.toBe(feil);
    });
    expect(hentLagreknapp().isSubmitting).toBe(false);

    submitCallback.mockResolvedValueOnce();
    await act(async () => lagre());
    expect(submitCallback).toHaveBeenCalledTimes(2);
    expect(submitCallback.mock.calls[1]).toEqual(submitCallback.mock.calls[0]);
    expect(hentLagreknapp().isSubmitting).toBe(true);
  });

  it('skal beholde delingsdialogen ved feil og kunne prøve igjen', async () => {
    const feil = new Error('Beregning feilet');
    const beregnBelop = vi
      .fn()
      .mockRejectedValueOnce(feil)
      .mockResolvedValueOnce({ perioder: beløp.map(belop => ({ belop })) });
    renderSkjema({ beregnBelop });
    await userEvent.click(screen.getByRole('button', { name: 'Del opp perioden' }));

    const { splitPeriod } = hentDelingsdialog();
    await act(async () => {
      await expect(splitPeriod(perioder)).rejects.toBe(feil);
    });
    expect(hentDelingsdialog().showModal).toBe(true);
    expect(screen.queryByText(opprinneligPeriode)).not.toBeNull();

    await act(async () => splitPeriod(perioder));
    expect(beregnBelop).toHaveBeenCalledTimes(2);
    expect(beregnBelop.mock.calls[1]).toEqual(beregnBelop.mock.calls[0]);
    expect(screen.queryByText(opprinneligPeriode)).toBeNull();
  });
};
