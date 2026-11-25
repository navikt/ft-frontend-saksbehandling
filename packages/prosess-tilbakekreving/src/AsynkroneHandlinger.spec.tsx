import { composeStories } from '@storybook/react-vite';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SubmitButton } from '@navikt/ft-form-hooks';

import { DelOppPeriodeModal } from './components/splittePerioder/DelOppPeriodeModal';
import * as stories from './TilbakekrevingProsessIndex.stories';

vi.mock('@navikt/ft-form-hooks', async importOriginal => ({
  ...(await importOriginal<typeof import('@navikt/ft-form-hooks')>()),
  SubmitButton: vi.fn(() => null),
}));

vi.mock('./components/splittePerioder/DelOppPeriodeModal', () => ({
  DelOppPeriodeModal: vi.fn(() => null),
}));

const { Default } = composeStories(stories);

describe('asynkrone handlinger i tilbakekreving', () => {
  it('skal åpne for nytt lagringsforsøk og sende feilen videre', async () => {
    const feil = new Error('Lagring feilet');
    const lagring = Promise.withResolvers<void>();
    const submitCallback = vi.fn(() => lagring.promise);
    render(<Default submitCallback={submitCallback} />);

    const lagre = vi.mocked(SubmitButton).mock.lastCall![0].onClick as () => Promise<void>;
    let resultat: Promise<void>;
    act(() => {
      resultat = lagre();
    });
    expect(vi.mocked(SubmitButton).mock.lastCall![0].isSubmitting).toBe(true);

    await act(async () => {
      lagring.reject(feil);
      await expect(resultat).rejects.toBe(feil);
    });
    expect(vi.mocked(SubmitButton).mock.lastCall![0].isSubmitting).toBe(false);

    submitCallback.mockResolvedValueOnce();
    await act(async () => lagre());
    expect(submitCallback).toHaveBeenCalledTimes(2);
    expect(submitCallback.mock.calls[1]).toEqual(submitCallback.mock.calls[0]);
    expect(vi.mocked(SubmitButton).mock.lastCall![0].isSubmitting).toBe(true);
  });

  it('skal beholde delingsdialogen ved feil og kunne prøve igjen', async () => {
    const feil = new Error('Beregning feilet');
    const beregnBelop = vi
      .fn()
      .mockRejectedValueOnce(feil)
      .mockResolvedValueOnce({
        perioder: [{ belop: 4 }, { belop: 6 }],
      });
    render(<Default beregnBelop={beregnBelop} />);
    await userEvent.click(screen.getByRole('button', { name: 'Del opp perioden' }));

    const splitPeriod = vi.mocked(DelOppPeriodeModal).mock.lastCall![0].splitPeriod;
    const perioder = {
      forstePeriode: { fom: '2019-01-01', tom: '2019-01-15' },
      andrePeriode: { fom: '2019-01-16', tom: '2019-04-01' },
    };
    await act(async () => {
      await expect(splitPeriod(perioder)).rejects.toBe(feil);
    });
    expect(vi.mocked(DelOppPeriodeModal).mock.lastCall![0].showModal).toBe(true);
    expect(screen.getByText('01.01.2019 - 01.04.2019')).toBeInTheDocument();

    await act(async () => splitPeriod(perioder));
    expect(beregnBelop).toHaveBeenCalledTimes(2);
    expect(beregnBelop.mock.calls[1]).toEqual(beregnBelop.mock.calls[0]);
    expect(screen.queryByText('01.01.2019 - 01.04.2019')).not.toBeInTheDocument();
  });
});
