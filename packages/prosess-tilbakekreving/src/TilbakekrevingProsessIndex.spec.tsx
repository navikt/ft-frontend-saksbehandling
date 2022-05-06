import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import Modal from 'nav-frontend-modal';
import * as stories from './TilbakekrevingProsessIndex.stories';

const { Default, MedToPerioder } = composeStories(stories);

describe('<TilbakekrevingProsessIndex>', () => {
  Modal.setAppElement('body');
  it('skal vurdere perioden som God Tro og så bekrefte', async () => {
    const lagre = jest.fn(() => Promise.resolve());
    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Tilbakekreving')).toBeInTheDocument();
    expect(screen.getByText('Fastsett tilbakekreving etter §22-15. Del opp perioden ved behov for ulik vurdering')).toBeInTheDocument();
    expect(screen.getByText('Detaljer for valgt periode')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019 - 01.04.2019')).toBeInTheDocument();
    expect(screen.getByText('13 uker')).toBeInTheDocument();
    expect(screen.getByText('Feilutbetaling:')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('§14-2 Medlemskap')).toBeInTheDocument();

    expect(screen.getByText('Aktivitet')).toBeInTheDocument();
    expect(screen.getByText('Arbeidstaker')).toBeInTheDocument();
    expect(screen.getByText('Feilutbetalt beløp')).toBeInTheDocument();
    expect(screen.getByText('1 050')).toBeInTheDocument();

    userEvent.type(utils.getByLabelText('Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes'), 'Dette er en vurdering');

    userEvent.click(screen.getByText('Nei, mottaker har mottatt beløpet i god tro (1. ledd)'));

    userEvent.type(utils.getByLabelText('Begrunn hvorfor mottaker er i god tro'), 'Dette er en vurdering a god tro');

    userEvent.click(screen.getByText('Ja'));

    userEvent.type(utils.getByLabelText('Angi beløp som skal tilbakekreves'), '100');

    userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Beløp kan ikke være større enn feilutbetalingen')).toBeInTheDocument();

    userEvent.type(utils.getByLabelText('Angi beløp som skal tilbakekreves'), '{backspace}');

    userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Detaljer for valgt periode')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5002',
      vilkarsVurdertePerioder: [{
        begrunnelse: 'Dette er en vurdering',
        fom: '2019-01-01',
        tom: '2019-04-01',
        vilkarResultat: 'GOD_TRO',
        vilkarResultatInfo: {
          '@type': 'godTro',
          begrunnelse: 'Dette er en vurdering a god tro',
          erBelopetIBehold: true,
          tilbakekrevesBelop: 10,
        },
      }],
    });
  });

  it('skal vurdere perioden som Forsto eller burde forstått og så bekrefte', async () => {
    const lagre = jest.fn(() => Promise.resolve());

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Tilbakekreving')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    userEvent.type(utils.getByLabelText('Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes'), 'Dette er en vurdering');

    // Velg først 'Feil opplysninger' for å sjekke at denne informasjonen blir resatt når en bytter
    userEvent.click(screen.getByText(
      'Ja, mottaker har forårsaket feilutbetalingen ved forsett eller uaktsomt gitt mangelfulle opplysninger (1. ledd, 2 punkt)'));
    userEvent.click(screen.getByText('Forsett'));
    expect(await screen.findByText('Andel som skal tilbakekreves')).toBeInTheDocument();
    expect(screen.getByText('100 %')).toBeInTheDocument();
    expect(screen.getByText('Det legges til 10 % renter')).toBeInTheDocument();

    // Velg så 'Forsto eller burde forstått'
    userEvent.click(screen.getByText('Ja, mottaker forsto eller burde forstått at utbetalingen skyldtes en feil (1. ledd, 1. punkt)'));

    // Velg først 'Forsto' får å sjekk at dette blir resatt korrekt ved bytte
    userEvent.click(screen.getByText('Forsto'));
    expect(await screen.findByText('Skal det tillegges renter?')).toBeInTheDocument();
    userEvent.click(screen.getByText('Ja'));

    userEvent.click(screen.getByText('Må ha forstått'));
    expect(await screen.findByText('Særlige grunner 4. ledd')).toBeInTheDocument();
    expect(screen.queryByText('Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?')).not.toBeInTheDocument();

    userEvent.type(utils.getByLabelText('Vurder i hvilken grad mottaker har handlet uaktsomt'), 'Dette er en vurdering a god tro');

    userEvent.click(screen.getByText('Burde ha forstått'));
    expect(await screen.findByText('Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?')).toBeInTheDocument();
    userEvent.click(screen.getByText('Ja'));

    userEvent.type(utils.getByLabelText('Vurder særlige grunner du har vektlagt for resultatet'), 'Begrunnelse for særlige grunner');

    userEvent.click(screen.getAllByText('Ja')[1]);
    userEvent.selectOptions(screen.getByRole('combobox', { hidden: true }), '30');

    userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Du må velge minst en Særlig grunn')).toBeInTheDocument();
    userEvent.click(screen.getByText('Graden av uaktsomhet hos den kravet retter seg mot'));

    userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Detaljer for valgt periode')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5002',
      vilkarsVurdertePerioder: [{
        begrunnelse: 'Dette er en vurdering',
        fom: '2019-01-01',
        tom: '2019-04-01',
        vilkarResultat: 'FORSTO_BURDE_FORSTAATT',
        vilkarResultatInfo: {
          '@type': 'annet',
          aktsomhet: 'SIMPEL_UAKTSOM',
          aktsomhetInfo: {
            andelTilbakekreves: 30,
            annetBegrunnelse: undefined,
            harGrunnerTilReduksjon: true,
            ileggRenter: undefined,
            sarligGrunner: [
              'GRAD_UAKTSOMHET',
            ],
            sarligGrunnerBegrunnelse: 'Begrunnelse for særlige grunner',
            tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: true,
            tilbakekrevesBelop: undefined,
          },
          begrunnelse: 'Dette er en vurdering a god tro',
        },
      }],
    });
  });

  it('skal splitte en periode i to, kopier valg fra periode, og så bekrefte', async () => {
    const lagre = jest.fn(() => Promise.resolve());

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Detaljer for valgt periode')).toBeInTheDocument();

    userEvent.click(screen.getByAltText('Del opp perioden'));

    expect(await screen.findAllByText('Del opp perioden')).toHaveLength(2);

    const datoForFørstePeriodeInput = utils.getByLabelText('Angi t.o.m. dato for første periode');
    userEvent.type(datoForFørstePeriodeInput, '11.03.2018');
    fireEvent.blur(datoForFørstePeriodeInput);

    userEvent.click(screen.getByText('Ok'));

    expect(await screen.findByText('Dato må være innenfor perioden')).toBeInTheDocument();

    userEvent.type(datoForFørstePeriodeInput, '{backspace}9');
    fireEvent.blur(datoForFørstePeriodeInput);

    userEvent.click(screen.getByText('Ok'));

    await waitFor(() => expect(screen.queryByText('Ok')).not.toBeInTheDocument());

    userEvent.click(screen.getByAltText('Åpne info om første periode'));

    expect(await screen.findByText('01.01.2019 - 11.03.2019')).toBeInTheDocument();
    userEvent.type(utils.getByLabelText('Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes'), 'Dette er en vurdering');
    userEvent.click(screen.getByText('Nei, mottaker har mottatt beløpet i god tro (1. ledd)'));
    userEvent.type(utils.getByLabelText('Begrunn hvorfor mottaker er i god tro'), 'Dette er en vurdering a god tro');
    userEvent.click(screen.getByText('Ja'));
    userEvent.type(utils.getByLabelText('Angi beløp som skal tilbakekreves'), '10');
    userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('12.03.2019 - 01.04.2019')).toBeInTheDocument();
    userEvent.selectOptions(screen.getByRole('combobox', { hidden: true }), '2019-01-01_2019-03-11');
    userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Ok')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5002',
      vilkarsVurdertePerioder: [{
        begrunnelse: 'Dette er en vurdering',
        fom: '2019-01-01',
        tom: '2019-03-11',
        vilkarResultat: 'GOD_TRO',
        vilkarResultatInfo: {
          '@type': 'godTro',
          begrunnelse: 'Dette er en vurdering a god tro',
          erBelopetIBehold: true,
          tilbakekrevesBelop: 10,
        },
      }, {
        begrunnelse: 'Dette er en vurdering',
        fom: '2019-03-12',
        tom: '2019-04-01',
        vilkarResultat: 'GOD_TRO',
        vilkarResultatInfo: {
          '@type': 'godTro',
          begrunnelse: 'Dette er en vurdering a god tro',
          erBelopetIBehold: true,
          tilbakekrevesBelop: 10,
        },
      }],
    });
  });

  it.skip('skal vurdere at totalbeløpet er over 4 rettsgebyr, og ved bruk av 6.ledd må alle periodene behandles likt', async () => {
    const lagre = jest.fn(() => Promise.resolve());

    const utils = render(<MedToPerioder submitCallback={lagre} />);

    expect(await screen.findByText('Tilbakekreving')).toBeInTheDocument();

    userEvent.type(utils.getByLabelText('Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes'), 'Dette er en vurdering');
    userEvent.click(screen.getByText('Forsto eller burde forstått'));
    userEvent.type(utils.getByLabelText('Vurder i hvilken grad mottaker har handlet uaktsomt'), 'Dette er en vurdering a god tro');
    userEvent.click(screen.getByText('Burde ha forstått'));
    expect(await screen.findByText('Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?')).toBeInTheDocument();
    userEvent.click(screen.getByText('Nei'));
    expect(await screen.findByText('Når 6. ledd anvendes må alle perioder behandles likt')).toBeInTheDocument();

    userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText(
      'Totalbeløpet er under 4 rettsgebyr. Dersom 6.ledd skal anvendes for å frafalle tilbakekrevingen, må denne anvendes likt på alle periodene.',
    )).toBeInTheDocument();
    userEvent.click(screen.getByText('OK'));

    expect(await screen.findByText(
      'Totalbeløpet er under 4 rettsgebyr. Dersom 6.ledd skal anvendes for å frafalle tilbakekrevingen, må denne anvendes likt på alle periodene.',
    )).toBeInTheDocument();

    userEvent.type(utils.getByLabelText('Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes'), 'Dette er en vurdering');
    userEvent.click(screen.getByText('God tro'));
    userEvent.type(utils.getByLabelText('Begrunn hvorfor mottaker er i god tro'), 'Begrunnelse for god tro');
    userEvent.click(screen.getByText('Nei'));

    userEvent.click(screen.getByText('Oppdater'));

    expect(screen.getByText(
      'Totalbeløpet er under 4 rettsgebyr. Dersom 6.ledd skal anvendes for å frafalle tilbakekrevingen, må denne anvendes likt på alle periodene.',
    )).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    userEvent.click(screen.getByAltText('Åpne info om første periode'));
    expect(await screen.findByText('13 uker')).toBeInTheDocument();
    const nestePeriodeKnapp = screen.getByAltText('Neste periode');
    userEvent.click(nestePeriodeKnapp);

    userEvent.click(screen.getByText('Forsto eller burde forstått'));
    userEvent.type(utils.getByLabelText('Vurder i hvilken grad mottaker har handlet uaktsomt'), 'Dette er en vurdering a god tro');
    userEvent.click(screen.getByText('Burde ha forstått'));
    expect(await screen.findByText('Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?')).toBeInTheDocument();
    userEvent.click(screen.getByText('Nei'));
    expect(await screen.findByText('Når 6. ledd anvendes må alle perioder behandles likt')).toBeInTheDocument();

    userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText(
      'Totalbeløpet er under 4 rettsgebyr. Dersom 6.ledd skal anvendes for å frafalle tilbakekrevingen, må denne anvendes likt på alle periodene.',
    )).not.toBeInTheDocument());
    expect(screen.getByText('Bekreft og fortsett')).toBeEnabled();

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5002',
      vilkarsVurdertePerioder: [{
        begrunnelse: 'Dette er en vurdering',
        fom: '2019-01-01',
        tom: '2019-04-01',
        vilkarResultat: 'FORSTO_BURDE_FORSTAATT',
        vilkarResultatInfo: {
          '@type': 'annet',
          aktsomhet: 'SIMPEL_UAKTSOM',
          aktsomhetInfo: {
            andelTilbakekreves: 30,
            annetBegrunnelse: undefined,
            harGrunnerTilReduksjon: true,
            ileggRenter: undefined,
            sarligGrunner: [
              'GRAD_AV_UAKTSOMHET',
            ],
            sarligGrunnerBegrunnelse: 'Begrunnelse for særlige grunner',
            tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: true,
            tilbakekrevesBelop: undefined,
          },
          begrunnelse: 'Dette er en vurdering a god tro',
        },
      }],
    });
  });
});
