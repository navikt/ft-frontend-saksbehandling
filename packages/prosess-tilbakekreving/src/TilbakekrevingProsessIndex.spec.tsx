import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './TilbakekrevingProsessIndex.stories';

const { Default, MedToPerioder } = composeStories(stories);

window.ResizeObserver =
  window.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));

describe('<TilbakekrevingProsessIndex>', () => {
  it('skal vurdere perioden som God Tro og så bekrefte', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Tilbakekreving')).toBeInTheDocument();
    expect(
      screen.getByText('Fastsett tilbakekreving etter §22-15. Del opp perioden ved behov for ulik vurdering'),
    ).toBeInTheDocument();
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

    await userEvent.type(
      utils.getByLabelText('Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes'),
      'Dette er en vurdering',
    );

    await userEvent.click(screen.getByText('Nei, mottaker har mottatt beløpet i god tro (1. ledd)'));

    await userEvent.type(
      utils.getByLabelText('Begrunn hvorfor mottaker er i god tro'),
      'Dette er en vurdering a god tro',
    );

    await userEvent.click(screen.getByText('Ja'));

    await userEvent.type(utils.getByLabelText('Angi beløp som skal tilbakekreves'), '100');

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Beløp kan ikke være større enn feilutbetalingen')).toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Angi beløp som skal tilbakekreves'), '{backspace}');

    await userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Detaljer for valgt periode')).not.toBeInTheDocument());

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5002',
      vilkarsVurdertePerioder: [
        {
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
        },
      ],
    });
  });

  it('skal vurdere perioden som Forsto eller burde forstått og så bekrefte', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Tilbakekreving')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.type(
      utils.getByLabelText('Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes'),
      'Dette er en vurdering',
    );

    // Velg først 'Feil opplysninger' for å sjekke at denne informasjonen blir resatt når en bytter
    await userEvent.click(
      screen.getByText(
        'Ja, mottaker har forårsaket feilutbetalingen ved forsett eller uaktsomt gitt mangelfulle opplysninger (1. ledd, 2 punkt)',
      ),
    );
    await userEvent.click(screen.getByText('Forsett'));
    expect(await screen.findByText('Andel som skal tilbakekreves')).toBeInTheDocument();
    expect(screen.getByText('100 %')).toBeInTheDocument();
    expect(screen.getByText('Det legges til 10 % renter')).toBeInTheDocument();

    // Velg så 'Forsto eller burde forstått'
    await userEvent.click(
      screen.getByText('Ja, mottaker forsto eller burde forstått at utbetalingen skyldtes en feil (1. ledd, 1. punkt)'),
    );

    // Velg først 'Forsto' får å sjekk at dette blir resatt korrekt ved bytte
    await userEvent.click(screen.getByText('Forsto'));
    expect(await screen.findByText('Skal det tillegges renter?')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Ja'));

    await userEvent.click(screen.getByText('Må ha forstått'));
    expect(await screen.findByText('Særlige grunner 4. ledd')).toBeInTheDocument();
    expect(
      screen.queryByText('Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?'),
    ).not.toBeInTheDocument();

    await userEvent.type(
      utils.getByLabelText(
        'Vurder hvorfor mottaker burde forstått, må ha forstått eller forsto at utbetalingen skyldtes en feil',
      ),
      'Dette er en vurdering a god tro',
    );

    await userEvent.click(screen.getByText('Burde ha forstått'));
    expect(
      await screen.findByText('Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?'),
    ).toBeInTheDocument();
    await userEvent.click(screen.getByText('Ja'));

    await userEvent.type(
      utils.getByLabelText('Vurder særlige grunner du har vektlagt for resultatet'),
      'Begrunnelse for særlige grunner',
    );

    await userEvent.click(screen.getAllByText('Ja')[1]);
    await userEvent.selectOptions(screen.getByRole('combobox', { hidden: true }), '30');

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Du må velge minst en Særlig grunn')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Graden av uaktsomhet hos den kravet retter seg mot'));

    await userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Detaljer for valgt periode')).not.toBeInTheDocument());

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5002',
      vilkarsVurdertePerioder: [
        {
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
              sarligGrunner: ['GRAD_UAKTSOMHET'],
              sarligGrunnerBegrunnelse: 'Begrunnelse for særlige grunner',
              tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: true,
              tilbakekrevesBelop: undefined,
            },
            begrunnelse: 'Dette er en vurdering a god tro',
          },
        },
      ],
    });
  });

  it('skal splitte en periode i to, kopier valg fra periode, og så bekrefte', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Detaljer for valgt periode')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Del opp perioden'));

    expect(await screen.findAllByText('Del opp perioden')).toHaveLength(2);

    const datoForFørstePeriodeInput = utils.getByLabelText('Angi t.o.m. dato for første periode');
    await userEvent.type(datoForFørstePeriodeInput, '11.03.2018');

    await userEvent.click(screen.getByText('Ok'));

    expect(await screen.findByText('Dato må være innenfor perioden')).toBeInTheDocument();

    await userEvent.type(datoForFørstePeriodeInput, '{backspace}9');

    await userEvent.click(screen.getByText('Ok'));

    await waitFor(() => expect(screen.queryByText('Ok')).not.toBeInTheDocument());

    // Trykk på første periode
    await userEvent.click(screen.getAllByRole('button')[0]);

    expect(await screen.findByText('01.01.2019 - 11.03.2019')).toBeInTheDocument();
    await userEvent.type(
      utils.getByLabelText('Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes'),
      'Dette er en vurdering',
    );
    await userEvent.click(screen.getByText('Nei, mottaker har mottatt beløpet i god tro (1. ledd)'));
    await userEvent.type(
      utils.getByLabelText('Begrunn hvorfor mottaker er i god tro'),
      'Dette er en vurdering a god tro',
    );
    await userEvent.click(screen.getByText('Ja'));
    await userEvent.type(utils.getByLabelText('Angi beløp som skal tilbakekreves'), '10');
    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('12.03.2019 - 01.04.2019')).toBeInTheDocument();
    await userEvent.selectOptions(screen.getByRole('combobox', { hidden: true }), '2019-01-01_2019-03-11');
    await userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Ok')).not.toBeInTheDocument());

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5002',
      vilkarsVurdertePerioder: [
        {
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
        },
        {
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
        },
      ],
    });
  });

  it('skal vurdere at totalbeløpet er over 4 rettsgebyr, og ved bruk av 6.ledd må alle periodene behandles likt', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<MedToPerioder submitCallback={lagre} />);

    expect(await screen.findByText('Tilbakekreving')).toBeInTheDocument();

    await userEvent.type(
      utils.getByLabelText('Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes'),
      'Dette er en vurdering',
    );
    await userEvent.click(
      screen.getByText('Ja, mottaker forsto eller burde forstått at utbetalingen skyldtes en feil (1. ledd, 1. punkt)'),
    );
    await userEvent.type(
      utils.getByLabelText(
        'Vurder hvorfor mottaker burde forstått, må ha forstått eller forsto at utbetalingen skyldtes en feil',
      ),
      'Dette er en vurdering a god tro',
    );
    await userEvent.click(screen.getByText('Burde ha forstått'));
    expect(
      await screen.findByText('Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?'),
    ).toBeInTheDocument();
    await userEvent.click(screen.getByText('Nei'));
    expect(await screen.findByText('Når 6. ledd anvendes må alle perioder behandles likt')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Oppdater'));

    expect(
      await screen.findByText(
        'Totalbeløpet er under 4 rettsgebyr. Dersom 6.ledd skal anvendes for å frafalle tilbakekrevingen, må denne anvendes likt på alle periodene.',
      ),
    ).toBeInTheDocument();
    await userEvent.click(screen.getByText('OK'));

    expect(
      await screen.findByText(
        'Totalbeløpet er under 4 rettsgebyr. Dersom 6.ledd skal anvendes for å frafalle tilbakekrevingen, må denne anvendes likt på alle periodene.',
      ),
    ).toBeInTheDocument();

    await userEvent.type(
      utils.getByLabelText('Vurder hvilken hjemmel i § 22-15 1. ledd som skal benyttes'),
      'Dette er en vurdering',
    );
    await userEvent.click(screen.getByText('Nei, mottaker har mottatt beløpet i god tro (1. ledd)'));
    await userEvent.type(utils.getByLabelText('Begrunn hvorfor mottaker er i god tro'), 'Begrunnelse for god tro');
    await userEvent.click(screen.getByText('Nei'));

    await userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Oppdater')).not.toBeInTheDocument());

    expect(
      screen.getByText(
        'Totalbeløpet er under 4 rettsgebyr. Dersom 6.ledd skal anvendes for å frafalle tilbakekrevingen, må denne anvendes likt på alle periodene.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Trykk på første periode
    await userEvent.click(screen.getAllByRole('button')[0]);

    expect(await screen.findByText('13 uker')).toBeInTheDocument();
    const nestePeriodeKnapp = screen.getByText('Neste');
    await userEvent.click(nestePeriodeKnapp);

    await userEvent.click(
      screen.getByText('Ja, mottaker forsto eller burde forstått at utbetalingen skyldtes en feil (1. ledd, 1. punkt)'),
    );
    await userEvent.type(
      utils.getByLabelText(
        'Vurder hvorfor mottaker burde forstått, må ha forstått eller forsto at utbetalingen skyldtes en feil',
      ),
      'Dette er en vurdering a god tro',
    );
    await userEvent.click(screen.getByText('Burde ha forstått'));
    expect(
      await screen.findByText('Totalbeløpet er under 4 rettsgebyr (6. ledd). Skal det tilbakekreves?'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Nei'));
    expect(await screen.findByText('Når 6. ledd anvendes må alle perioder behandles likt')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('OK')).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeEnabled();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5002',
      vilkarsVurdertePerioder: [
        {
          begrunnelse: 'Dette er en vurdering',
          fom: '2019-01-01',
          tom: '2019-04-01',
          vilkarResultat: 'FORSTO_BURDE_FORSTAATT',
          vilkarResultatInfo: {
            '@type': 'annet',
            aktsomhet: 'SIMPEL_UAKTSOM',
            aktsomhetInfo: {
              annetBegrunnelse: undefined,
              harGrunnerTilReduksjon: undefined,
              ileggRenter: undefined,
              sarligGrunner: undefined,
              sarligGrunnerBegrunnelse: undefined,
              tilbakekrevesBelop: undefined,
              tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: false,
            },
            begrunnelse: 'Dette er en vurdering a god tro',
          },
        },
        {
          begrunnelse: 'Dette er en vurdering',
          fom: '2019-04-01',
          tom: '2019-10-01',
          vilkarResultat: 'FORSTO_BURDE_FORSTAATT',
          vilkarResultatInfo: {
            '@type': 'annet',
            aktsomhet: 'SIMPEL_UAKTSOM',
            aktsomhetInfo: {
              annetBegrunnelse: undefined,
              harGrunnerTilReduksjon: undefined,
              ileggRenter: undefined,
              sarligGrunner: undefined,
              sarligGrunnerBegrunnelse: undefined,
              tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: false,
              tilbakekrevesBelop: undefined,
            },
            begrunnelse: 'Begrunnelse for god troDette er en vurdering a god tro',
          },
        },
      ],
    });
  });
});
