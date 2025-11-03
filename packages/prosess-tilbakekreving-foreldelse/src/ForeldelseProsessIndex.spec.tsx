import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './ForeldelseProsessIndex.stories';

const { Default, UtenAksjonspunkt } = composeStories(stories);

class MockResizeObserver {
  disconnect = vi.fn();
  observe = vi.fn();
  unobserve = vi.fn();
}

window.ResizeObserver = window.ResizeObserver || MockResizeObserver;

describe('ForeldelseProsessIndex', () => {
  it('skal vurdere to perioder og så bekrefte', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    render(<Default submitCallback={lagre} />);

    expect(
      await screen.findByText(/kan være foreldet. Del opp perioden ved behov og fastsett foreldelse/),
    ).toBeInTheDocument();
    expect(screen.getByText('Detaljer for valgt periode')).toBeInTheDocument();
    expect(screen.getByText('01.03.2019 - 31.03.2019')).toBeInTheDocument();
    expect(screen.getByText('4 uker 1 dag')).toBeInTheDocument();
    expect(screen.getByText('Feilutbetaling:')).toBeInTheDocument();
    expect(screen.getByText('3 000')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.type(screen.getByLabelText('Vurdering'), 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Foreldet'));

    const foreldelsesfristInput = screen.getByLabelText('Foreldelsesfrist');
    await userEvent.type(foreldelsesfristInput, '14.09.2021');

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('01.04.2019 - 30.04.2019')).toBeInTheDocument();
    expect(screen.getByText('4 uker 2 dager')).toBeInTheDocument();
    expect(screen.getByText('Feilutbetaling:')).toBeInTheDocument();
    expect(screen.getByText('4 000')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.type(screen.getByLabelText('Vurdering'), 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Ikke foreldet, med tilleggsfrist'));

    const foreldelsesfristInputV2 = screen.getByLabelText('Foreldelsesfrist');
    await userEvent.type(foreldelsesfristInputV2, '14.10.2021');

    const datoNårOppdagetInput = screen.getByLabelText('Dato for når feilutbetaling ble oppdaget');
    await userEvent.type(datoNårOppdagetInput, '16.10.2021');

    await userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Detaljer for valgt periode')).not.toBeInTheDocument());

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      foreldelsePerioder: [
        {
          begrunnelse: 'Foreldet',
          foreldelseVurderingType: 'FORELDET',
          foreldelsesfrist: '2020-04-01',
          fraDato: '2019-01-01',
          oppdagelsesDato: undefined,
          tilDato: '2019-01-31',
        },
        {
          begrunnelse: 'Over foreldelsesfrist, med tillegsfrist brukes',
          foreldelseVurderingType: 'TILLEGGSFRIST',
          foreldelsesfrist: '2020-04-01',
          fraDato: '2019-02-01',
          oppdagelsesDato: '2019-11-01',
          tilDato: '2019-02-28',
        },
        {
          begrunnelse: 'Dette er en vurdering',
          foreldelseVurderingType: 'FORELDET',
          foreldelsesfrist: '2021-09-14',
          fraDato: '2019-03-01',
          oppdagelsesDato: undefined,
          tilDato: '2019-03-31',
        },
        {
          begrunnelse: 'Dette er en vurdering',
          foreldelseVurderingType: 'TILLEGGSFRIST',
          foreldelsesfrist: '2021-10-14',
          fraDato: '2019-04-01',
          oppdagelsesDato: '2021-10-16',
          tilDato: '2019-04-30',
        },
      ],
      kode: '5003',
    });
  });

  it('skal splitte en periode i to og så bekrefte', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<Default submitCallback={lagre} />);

    expect(
      await screen.findByText(/kan være foreldet. Del opp perioden ved behov og fastsett foreldelse/),
    ).toBeInTheDocument();
    expect(screen.getByText('01.03.2019 - 31.03.2019')).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText('Vurdering'), 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Foreldet'));

    const foreldelsesfristInput = screen.getByLabelText('Foreldelsesfrist');
    await userEvent.type(foreldelsesfristInput, '14.09.2021');

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('01.04.2019 - 30.04.2019')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Del opp perioden'));

    expect(await screen.findAllByText('Del opp perioden')).toHaveLength(2);

    const datoForFørstePeriodeInput = screen.getByLabelText('Angi t.o.m. dato for første periode');
    await userEvent.type(datoForFørstePeriodeInput, '11.04.2018');

    await userEvent.click(screen.getByText('Ok'));

    expect(await screen.findByText('Dato må være innenfor perioden')).toBeInTheDocument();

    await userEvent.type(datoForFørstePeriodeInput, '{backspace}9');

    await userEvent.click(screen.getByText('Ok'));

    await waitFor(() => expect(screen.queryByText('Ok')).not.toBeInTheDocument());

    // Trykk på første periode
    await userEvent.click(screen.getAllByRole('button')[0]);

    expect(await screen.findByText('Detaljer for valgt periode')).toBeInTheDocument();

    const nestePeriodeKnapp = screen.getByText('Neste');
    await userEvent.click(nestePeriodeKnapp);
    await userEvent.click(nestePeriodeKnapp);
    await userEvent.click(nestePeriodeKnapp);

    expect(await screen.findByText('01.04.2019 - 11.04.2019')).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText('Vurdering'), 'Dette er en vurdering på del 2');

    await userEvent.click(screen.getByText('Ikke foreldet'));

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('12.04.2019 - 30.04.2019')).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText('Vurdering'), 'Dette er en vurdering på del 2');

    await userEvent.click(screen.getByText('Ikke foreldet'));

    await userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Ok')).not.toBeInTheDocument());

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      foreldelsePerioder: [
        {
          begrunnelse: 'Foreldet',
          foreldelseVurderingType: 'FORELDET',
          foreldelsesfrist: '2020-04-01',
          fraDato: '2019-01-01',
          oppdagelsesDato: undefined,
          tilDato: '2019-01-31',
        },
        {
          begrunnelse: 'Over foreldelsesfrist, med tillegsfrist brukes',
          foreldelseVurderingType: 'TILLEGGSFRIST',
          foreldelsesfrist: '2020-04-01',
          fraDato: '2019-02-01',
          oppdagelsesDato: '2019-11-01',
          tilDato: '2019-02-28',
        },
        {
          begrunnelse: 'Dette er en vurdering',
          foreldelseVurderingType: 'FORELDET',
          foreldelsesfrist: '2021-09-14',
          fraDato: '2019-03-01',
          oppdagelsesDato: undefined,
          tilDato: '2019-03-31',
        },
        {
          begrunnelse: 'Dette er en vurdering på del 2',
          foreldelseVurderingType: 'IKKE_FORELDET',
          foreldelsesfrist: undefined,
          fraDato: '2019-04-01',
          oppdagelsesDato: undefined,
          tilDato: '2019-04-11',
        },
        {
          begrunnelse: 'Dette er en vurdering på del 2',
          foreldelseVurderingType: 'IKKE_FORELDET',
          foreldelsesfrist: undefined,
          fraDato: '2019-04-12',
          oppdagelsesDato: undefined,
          tilDato: '2019-04-30',
        },
      ],
      kode: '5003',
    });
  });

  it('skal vise panel uten aksjonspunkt', async () => {
    render(<UtenAksjonspunkt />);
    expect(await screen.findByText('Foreldelsesloven §§ 2 og 3')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vurdert')).toBeInTheDocument();
  });
});
