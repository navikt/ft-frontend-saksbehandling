import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import Modal from 'nav-frontend-modal';
import * as stories from './ForeldelseProsessIndex.stories';

const { Default, UtenAksjonspunkt } = composeStories(stories);

describe('<ForeldelseProsessIndex>', () => {
  Modal.setAppElement('body');
  it('skal vurdere to perioder og så bekrefte', async () => {
    const lagre = jest.fn(() => Promise.resolve());
    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText(/kan være foreldet. Del opp perioden ved behov og fastsett foreldelse/)).toBeInTheDocument();
    expect(screen.getByText('Detaljer for valgt periode')).toBeInTheDocument();
    expect(screen.getByText('01.03.2019 - 31.03.2019')).toBeInTheDocument();
    expect(screen.getByText('4 uker 1 dag')).toBeInTheDocument();
    expect(screen.getByText('Feilutbetaling:')).toBeInTheDocument();
    expect(screen.getByText('3 000')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en vurdering');

    userEvent.click(screen.getByText('Foreldet'));

    const foreldelsesfristInput = utils.getByLabelText('Foreldelsesfrist');
    userEvent.type(foreldelsesfristInput, '14.09.2021');
    fireEvent.blur(foreldelsesfristInput);

    userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('01.04.2019 - 30.04.2019')).toBeInTheDocument();
    expect(screen.getByText('4 uker 2 dager')).toBeInTheDocument();
    expect(screen.getByText('Feilutbetaling:')).toBeInTheDocument();
    expect(screen.getByText('4 000')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en vurdering');

    userEvent.click(screen.getByText('Ikke foreldet, med tilleggsfrist'));

    const foreldelsesfristInputV2 = utils.getByLabelText('Foreldelsesfrist');
    userEvent.type(foreldelsesfristInputV2, '14.10.2021');
    fireEvent.blur(foreldelsesfristInputV2);

    const datoNårOppdagetInput = utils.getByLabelText('Dato for når feilutbetaling ble oppdaget');
    userEvent.type(datoNårOppdagetInput, '16.10.2021');
    fireEvent.blur(datoNårOppdagetInput);

    userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Detaljer for valgt periode')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Bekreft og fortsett'));

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
    const lagre = jest.fn(() => Promise.resolve());

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText(/kan være foreldet. Del opp perioden ved behov og fastsett foreldelse/)).toBeInTheDocument();
    expect(screen.getByText('01.03.2019 - 31.03.2019')).toBeInTheDocument();

    userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en vurdering');

    userEvent.click(screen.getByText('Foreldet'));

    const foreldelsesfristInput = utils.getByLabelText('Foreldelsesfrist');
    userEvent.type(foreldelsesfristInput, '14.09.2021');
    fireEvent.blur(foreldelsesfristInput);

    userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('01.04.2019 - 30.04.2019')).toBeInTheDocument();

    userEvent.click(screen.getByAltText('Del opp perioden'));

    expect(await screen.findAllByText('Del opp perioden')).toHaveLength(2);

    const datoForFørstePeriodeInput = utils.getByLabelText('Angi t.o.m. dato for første periode');
    userEvent.type(datoForFørstePeriodeInput, '11.04.2018');
    fireEvent.blur(datoForFørstePeriodeInput);

    userEvent.click(screen.getByText('Ok'));

    expect(await screen.findByText('Dato må være innenfor perioden')).toBeInTheDocument();

    userEvent.type(datoForFørstePeriodeInput, '{backspace}9');
    fireEvent.blur(datoForFørstePeriodeInput);

    userEvent.click(screen.getByText('Ok'));

    await waitFor(() => expect(screen.queryByText('Ok')).not.toBeInTheDocument());

    userEvent.click(screen.getByAltText('Åpne info om første periode'));

    expect(await screen.findByText('Detaljer for valgt periode')).toBeInTheDocument();

    const nestePeriodeKnapp = screen.getByAltText('Neste periode');
    userEvent.click(nestePeriodeKnapp);
    userEvent.click(nestePeriodeKnapp);
    userEvent.click(nestePeriodeKnapp);

    expect(await screen.findByText('01.04.2019 - 11.04.2019')).toBeInTheDocument();

    userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en vurdering på del 2');

    userEvent.click(screen.getByText('Ikke foreldet'));

    userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('12.04.2019 - 30.04.2019')).toBeInTheDocument();

    userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en vurdering på del 2');

    userEvent.click(screen.getByText('Ikke foreldet'));

    userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Ok')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      foreldelsePerioder: [{
        begrunnelse: 'Foreldet',
        foreldelseVurderingType: 'FORELDET',
        foreldelsesfrist: '2020-04-01',
        fraDato: '2019-01-01',
        oppdagelsesDato: undefined,
        tilDato: '2019-01-31',
      }, {
        begrunnelse: 'Over foreldelsesfrist, med tillegsfrist brukes',
        foreldelseVurderingType: 'TILLEGGSFRIST',
        foreldelsesfrist: '2020-04-01',
        fraDato: '2019-02-01',
        oppdagelsesDato: '2019-11-01',
        tilDato: '2019-02-28',
      }, {
        begrunnelse: 'Dette er en vurdering',
        foreldelseVurderingType: 'FORELDET',
        foreldelsesfrist: '2021-09-14',
        fraDato: '2019-03-01',
        oppdagelsesDato: undefined,
        tilDato: '2019-03-31',
      }, {
        begrunnelse: 'Dette er en vurdering på del 2',
        foreldelseVurderingType: 'IKKE_FORELDET',
        foreldelsesfrist: undefined,
        fraDato: '2019-04-01',
        oppdagelsesDato: undefined,
        tilDato: '2019-04-11',
      }, {
        begrunnelse: 'Dette er en vurdering på del 2',
        foreldelseVurderingType: 'IKKE_FORELDET',
        foreldelsesfrist: undefined,
        fraDato: '2019-04-12',
        oppdagelsesDato: undefined,
        tilDato: '2019-04-30',
      }],
      kode: '5003',
    });
  });

  it('skal vise panel uten aksjonspunkt', async () => {
    render(<UtenAksjonspunkt />);
    expect(await screen.findByText('Foreldelsesloven §§ 2 og 3')).toBeInTheDocument();
    expect(screen.getByText('Automatisk vurdert')).toBeInTheDocument();
  });
});
