import type { ComponentProps } from 'react';
import { RawIntlProvider } from 'react-intl';

import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { createIntl, TIDENES_ENDE } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidgiverOpplysningerPerId';
import { dokumenterPåSaken } from '../../../testdata/dokumenter';
import { refusjonsandelerForTreArbeidsgivere } from '../../../testdata/refusjonsandeler';
import type { AksjonspunktRefusjon } from '../../types/aksjonspunkt';
import { RefusjonskravForm } from './RefusjonskravForm';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

const getTidslinjePerioder = () =>
  within(screen.getByRole('region', { name: 'Utbetaling' }))
    .getAllByRole('listitem')
    .map(periode => within(periode).getAllByRole('button')[0]);

describe('RefusjonskravForm', () => {
  it('beholder DTO-strukturen i skjemadata og sorterer periodene innenfor hver andel', () => {
    const setFormData = vi.fn();
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    const refusjonsandeler = [
      {
        ...andel,
        refusjonsperioder: [
          { ...andel.refusjonsperioder[1], utfallBegrunnelse: 'Tidligere vurdert' },
          andel.refusjonsperioder[0],
        ],
      },
    ];
    const { unmount } = renderForm({ refusjonsandeler, setFormData });

    unmount();

    expect(setFormData).toHaveBeenCalledWith({
      erOverstyring: false,
      begrunnelse: '',
      refusjonsandeler: [
        {
          ...andel,
          arbeidsgiverNavn: 'Brunostfabrikken AS',
          refusjonsperioder: [
            andel.refusjonsperioder[0],
            { ...andel.refusjonsperioder[1], utfallBegrunnelse: 'Tidligere vurdert' },
          ],
        },
      ],
    });
    expect(refusjonsandeler[0].refusjonsperioder[0].fom).toBe('2025-04-01');
  });

  it('samler periodene i én rad per andel uten å åpne aksjonspunktvurderinger', () => {
    renderForm();

    const tabell = within(screen.getByRole('table'));
    const brunostRad = tabell.getByRole('row', { name: /Brunostfabrikken AS/ });
    expect(tabell.getAllByRole('row', { name: /Brunostfabrikken AS/ })).toHaveLength(1);
    expect(tabell.getAllByRole('row', { name: /Ostehøvel Outlet AS/ })).toHaveLength(1);
    expect(tabell.getAllByRole('row', { name: /Nordlys Teknologi AS/ })).toHaveLength(1);

    const celler = within(brunostRad).getAllByRole('cell');
    expect(celler).toHaveLength(5);
    expect(celler[1]).toHaveTextContent('01.01.2025 - 31.03.2025');
    expect(celler[1]).toHaveTextContent('01.04.2025 - 30.06.2025');
    expect(celler[2].textContent).toMatch(/42\s000.*37\s500/);
    expect(tabell.queryByRole('columnheader', { name: 'Sendt inn' })).not.toBeInTheDocument();
    expect(tabell.queryByRole('columnheader', { name: 'Utfall' })).not.toBeInTheDocument();
    expect(tabell.queryByText('Overstyrt')).not.toBeInTheDocument();
    expect(within(celler[3]).getByRole('button', { name: 'Inntektsmelding' })).toBeInTheDocument();
    expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Utfall mangler')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Vis mindre' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Bekreft og fortsett' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Overstyr' })).toBeEnabled();
  });

  it.each([false, true])('viser overstyringskolonnen bare når minst én rad er overstyrt: %s', erOverstyrt => {
    renderForm({
      refusjonsandeler: [
        {
          ...refusjonsandelerForTreArbeidsgivere[0],
          ...(erOverstyrt ? { kilde: 'SAKSBEHANDLER' as const } : {}),
        },
        ...refusjonsandelerForTreArbeidsgivere.slice(1),
      ],
    });
    const tabell = within(screen.getByRole('table'));
    const antallKolonner = erOverstyrt ? 6 : 5;

    expect(tabell.getAllByRole('columnheader')).toHaveLength(antallKolonner);
    for (const rad of tabell.getAllByRole('row').slice(1)) {
      expect(within(rad).getAllByRole('cell')).toHaveLength(antallKolonner);
    }
    expect(tabell.queryAllByText('Overstyrt')).toHaveLength(erOverstyrt ? 1 : 0);
  });

  it.each([
    { aksjonspunkt: [], harVærtOverstyrt: false },
    {
      aksjonspunkt: [{ kode: 'OVERSTYR_REFUSJONSKRAV', status: 'UTFO', begrunnelse: 'Tidligere overstyrt' }],
      harVærtOverstyrt: true,
    },
  ] satisfies { aksjonspunkt: AksjonspunktRefusjon[]; harVærtOverstyrt: boolean }[])(
    'sender overstyring med og uten tidligere aksjonspunkt: $aksjonspunkt',
    async ({ aksjonspunkt, harVærtOverstyrt }) => {
      const submitCallback = vi.fn().mockResolvedValue(undefined);
      renderForm({ aksjonspunkt, submitCallback });
      if (!harVærtOverstyrt) {
        await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
      }
      const rad = within(screen.getByRole('row', { name: /Brunostfabrikken AS/ }));
      expect(screen.queryByRole('button', { name: 'Overstyr' })).not.toBeInTheDocument();
      expect(screen.queryAllByRole('button', { name: 'Avbryt overstyring' })).toHaveLength(harVærtOverstyrt ? 0 : 1);
      if (harVærtOverstyrt) {
        await userEvent.click(rad.getByRole('button', { name: 'Vis mer' }));
      }
      const begrunnelse = screen.getByRole('textbox', { name: 'Begrunnelse' });
      await userEvent.clear(begrunnelse);
      await userEvent.type(begrunnelse, 'Overstyrt');
      expect(
        within(getÅpentAndelInnhold('Brunostfabrikken AS')).getAllByRole('textbox', { name: 'Periode fra og med' }),
      ).toHaveLength(1);
      await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));

      await waitFor(() =>
        expect(submitCallback).toHaveBeenCalledWith(
          expect.objectContaining({
            '@type': 'OVERSTYR_REFUSJONSKRAV',
            kode: 'OVERSTYR_REFUSJONSKRAV',
            begrunnelse: 'Overstyrt',
            refusjonskrav: expect.arrayContaining([
              expect.objectContaining({
                arbeidsgiverIdent: '999999999',
                perioder: expect.arrayContaining([
                  expect.objectContaining({ fom: '2025-01-01', refusjonsbeløpPrMnd: 42000 }),
                ]),
              }),
            ]),
          }),
        ),
      );
    },
  );

  it('bruker aktør-id som arbeidsgiverident', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    renderOverstyring({
      submitCallback,
      refusjonsandeler: [
        {
          ...refusjonsandelerForTreArbeidsgivere[0],
          arbeidsgiverIdent: '1234567890123',
        },
      ],
    });

    expect(screen.getByRole('row', { name: /1234567890123/ })).toBeInTheDocument();
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));

    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
    expect(submitCallback.mock.calls[0][0].refusjonskrav[0].arbeidsgiverIdent).toBe('1234567890123');
  });

  it('skiller andeler for samme arbeidsgiver med ulik kilde', async () => {
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    renderOverstyring({
      refusjonsandeler: [
        {
          ...andel,
          refusjonsperioder: [andel.refusjonsperioder[0]],
        },
        {
          ...andel,
          kilde: 'SAKSBEHANDLER',
          refusjonsperioder: [{ ...andel.refusjonsperioder[0], fom: '2025-02-01', tom: '2025-02-28' }],
        },
      ],
    });
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
    const [førsteRad, andreRad] = screen.getAllByRole('row', { name: /Brunostfabrikken AS/ });
    const åpneKnapp = within(andreRad).getByRole('button', { name: 'Vis mer' });
    await userEvent.click(åpneKnapp);
    const innhold = within(getÅpentAndelInnhold('Brunostfabrikken AS', 1));
    await userEvent.click(innhold.getByRole('button', { name: 'Legg til periode' }));
    const dato = innhold.getByRole('textbox', { name: 'Periode fra og med' });
    await userEvent.type(dato, '15.01.2025');
    await userEvent.type(innhold.getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[1], '0');
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeDisabled();
    expect(innhold.getByRole('alert')).toHaveTextContent('01.02.2025 - 28.02.2025');

    await userEvent.clear(dato);
    await userEvent.type(dato, '15.02.2025');

    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeEnabled();
    expect(within(førsteRad).getByText('01.01.2025 - 31.03.2025')).toBeInTheDocument();
    expect(within(andreRad).getByText('01.02.2025 - 14.02.2025')).toBeInTheDocument();
    expect(within(andreRad).getByText('15.02.2025 - 28.02.2025')).toBeInTheDocument();
  });

  it.each(['IKKE_INNENFOR_FRIST', 'UTMELDT', 'ALLEREDE_DIREKTE_UTBETALT'] as const)(
    'bevarer mottatt utfallsårsak %s uten å sende den som en manuell overstyringsårsak',
    async utfallÅrsak => {
      const submitCallback = vi.fn().mockResolvedValue(undefined);
      const setFormData = vi.fn();
      const andel = refusjonsandelerForTreArbeidsgivere[0];
      const { unmount } = renderOverstyring({
        submitCallback,
        setFormData,
        refusjonsandeler: [{ ...andel, refusjonsperioder: [{ ...andel.refusjonsperioder[0], utfallÅrsak }] }],
      });
      await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
      const innhold = within(getÅpentAndelInnhold('Brunostfabrikken AS'));
      const beløp = innhold.getByRole('textbox', { name: 'Refusjonsbeløp per måned' });
      await userEvent.clear(beløp);
      await userEvent.type(beløp, '50000');
      expect(innhold.getByRole('combobox', { name: 'Årsak til overstyring' })).toHaveValue('');
      await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
      await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));

      await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
      expect(submitCallback.mock.calls[0][0].refusjonskrav[0].perioder[0].utfallÅrsak).toBeUndefined();
      unmount();
      expect(setFormData.mock.calls[0][0].refusjonsandeler[0].refusjonsperioder[0].utfallÅrsak).toBe(utfallÅrsak);
    },
  );

  it.each([
    { readOnly: true, erOverstyrer: true },
    { readOnly: false, erOverstyrer: false },
    { readOnly: true, erOverstyrer: false },
  ])('hindrer redigering og innsending uten tilgang: $readOnly / $erOverstyrer', async props => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    renderOverstyring({
      ...props,
      submitCallback,
      refusjonsandeler: [
        {
          ...andel,
          refusjonsperioder: [{ ...andel.refusjonsperioder[0], utfall: 'AVSLÅTT', utfallÅrsak: 'IKKE_INNENFOR_FRIST' }],
        },
      ],
    });
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = getÅpentAndelInnhold('Brunostfabrikken AS');

    expect(screen.queryByRole('button', { name: /Overstyr|Har overstyrt/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Bekreft og fortsett' })).not.toBeInTheDocument();
    expect(within(innhold).queryByRole('textbox')).not.toBeInTheDocument();
    expect(within(innhold).queryByRole('button', { name: 'Legg til periode' })).not.toBeInTheDocument();
    expect(within(innhold).queryByRole('button', { name: 'Lagre' })).not.toBeInTheDocument();
    expect(within(innhold).getByText('01.01.2025')).toBeInTheDocument();
    expect(within(innhold).getByText('42000')).toBeInTheDocument();
    expect(within(innhold).queryByText('Årsak til overstyring')).not.toBeInTheDocument();
    expect(within(innhold).queryByText('Konkurs')).not.toBeInTheDocument();
    expect(within(innhold).queryByRole('combobox')).not.toBeInTheDocument();
    await submitForm();
    expect(submitCallback).not.toHaveBeenCalled();
  });

  it('viser tidligere overstyring med utført aksjonspunkt uten overstyringsrolle', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    renderForm({
      aksjonspunkt: [{ kode: 'OVERSTYR_REFUSJONSKRAV', status: 'UTFO' }],
      erOverstyrer: false,
      submitCallback,
      refusjonsandeler: [{ ...refusjonsandelerForTreArbeidsgivere[0], kilde: 'SAKSBEHANDLER' }],
    });
    expect(within(screen.getByRole('row', { name: /Brunostfabrikken AS/ })).getByText('Overstyrt')).toBeVisible();
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = within(getÅpentAndelInnhold('Brunostfabrikken AS'));

    expect(innhold.queryByRole('textbox')).not.toBeInTheDocument();
    expect(innhold.getByText('42000')).toBeInTheDocument();
    expect(innhold.queryByText('Årsak til overstyring')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Overstyr' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Avbryt overstyring' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Bekreft og fortsett' })).not.toBeInTheDocument();
    await submitForm();
    expect(submitCallback).not.toHaveBeenCalled();
  });

  it('gjenopptar en aktiv overstyring fra mellomlagrede skjemadata', async () => {
    const setFormData = vi.fn();
    const { unmount } = renderOverstyring({ setFormData });
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Mellomlagret overstyring');
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = within(getÅpentAndelInnhold('Brunostfabrikken AS'));
    await userEvent.clear(innhold.getByRole('textbox', { name: 'Refusjonsbeløp per måned' }));
    await userEvent.type(innhold.getByRole('textbox', { name: 'Refusjonsbeløp per måned' }), '50000');
    await userEvent.selectOptions(innhold.getByRole('combobox', { name: 'Årsak til overstyring' }), 'UTMELDT');
    await userEvent.click(innhold.getByRole('button', { name: 'Legg til periode' }));
    await userEvent.type(innhold.getByRole('textbox', { name: 'Periode fra og med' }), '01.02.2025');
    await userEvent.type(innhold.getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[1], '0');
    await userEvent.click(screen.getByRole('button', { name: 'Vis mindre' }));
    unmount();

    renderOverstyring({ formData: setFormData.mock.calls[0][0] });
    expect(screen.queryByRole('button', { name: 'Overstyr' })).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Begrunnelse' })).toHaveValue('Mellomlagret overstyring');
    expect(screen.queryByRole('button', { name: 'Avbryt overstyring' })).not.toBeInTheDocument();
    expect(getTidslinjePerioder()).toHaveLength(2);
    await userEvent.click(getTidslinjePerioder()[1]);
    expect(
      within(getÅpentAndelInnhold('Brunostfabrikken AS'))
        .getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })
        .map(felt => (felt as HTMLInputElement).value),
    ).toEqual(['50000', '0']);
    expect(
      within(getÅpentAndelInnhold('Brunostfabrikken AS')).getAllByRole('combobox', {
        name: 'Årsak til overstyring',
      })[0],
    ).toHaveValue('UTMELDT');
    await waitFor(() => expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeEnabled());
  });

  it('avbryter alle endringer og lar overstyring aktiveres på nytt', async () => {
    renderOverstyring({ aksjonspunkt: [] });
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    expect(screen.getByRole('button', { name: 'Avbryt overstyring' })).toBeVisible();
    const innhold = getÅpentAndelInnhold('Brunostfabrikken AS');
    await userEvent.clear(within(innhold).getByRole('textbox', { name: 'Refusjonsbeløp per måned' }));
    await userEvent.type(within(innhold).getByRole('textbox', { name: 'Refusjonsbeløp per måned' }), '50000');
    await userEvent.selectOptions(within(innhold).getByRole('combobox', { name: 'Årsak til overstyring' }), 'KONKURS');
    await userEvent.click(within(innhold).getByRole('button', { name: 'Legg til periode' }));
    await userEvent.type(within(innhold).getByRole('textbox', { name: 'Periode fra og med' }), '01.02.2025');
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[1], '0');
    expect(getTidslinjePerioder()).toHaveLength(2);

    await userEvent.click(getTidslinjePerioder()[1]);
    await userEvent.click(
      within(getÅpentAndelInnhold('Brunostfabrikken AS')).getByRole('button', { name: 'Legg til periode' }),
    );
    await userEvent.clear(screen.getByRole('textbox', { name: 'Begrunnelse' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Endret begrunnelse');
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeDisabled();
    await userEvent.click(screen.getByRole('button', { name: 'Avbryt overstyring' }));

    expect(screen.queryByRole('button', { name: 'Bekreft og fortsett' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Overstyr' })).toBeEnabled();
    expect(getTidslinjePerioder()).toHaveLength(1);
    expect(screen.getByRole('row', { name: /Brunostfabrikken AS/ })).toHaveTextContent('01.01.2025 - 31.03.2025');
    expect(screen.queryByTitle('Endret av saksbehandler')).not.toBeInTheDocument();
    expect(within(screen.getByRole('table')).queryByText('Overstyrt')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));

    const gjenåpnet = getÅpentAndelInnhold('Brunostfabrikken AS');
    expect(within(gjenåpnet).queryByRole('textbox', { name: 'Periode fra og med' })).not.toBeInTheDocument();
    expect(within(gjenåpnet).getByText('01.01.2025')).toBeInTheDocument();
    expect(within(gjenåpnet).getByRole('textbox', { name: 'Refusjonsbeløp per måned' })).toHaveValue('42000');
    expect(within(gjenåpnet).queryByRole('combobox')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Begrunnelse' })).toHaveValue('');
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Ny begrunnelse');
    await waitFor(() => expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeEnabled());
  });

  it('åpner riktig andel fra tidslinjen med mus og tastatur uten å lukke ved gjentatt klikk', async () => {
    renderOverstyring({
      refusjonsandeler: refusjonsandelerForTreArbeidsgivere.map(andel => ({
        ...andel,
        refusjonsperioder: andel.refusjonsperioder.map(periode => ({ ...periode, utfall: 'INNVILGET' })),
      })),
    });
    const perioder = getTidslinjePerioder();
    const brunostRad = screen.getByRole('row', { name: /Brunostfabrikken AS/ });
    const ostehøvelRad = screen.getByRole('row', { name: /Ostehøvel Outlet AS/ });
    const nordlysRad = screen.getByRole('row', { name: /Nordlys Teknologi AS/ });

    await userEvent.click(perioder[2]);
    expect(within(ostehøvelRad).getByRole('button', { name: 'Vis mindre' })).toBeInTheDocument();
    expect(within(brunostRad).getByRole('button', { name: 'Vis mer' })).toBeInTheDocument();
    expect(within(nordlysRad).getByRole('button', { name: 'Vis mer' })).toBeInTheDocument();
    await userEvent.click(perioder[2]);
    expect(within(ostehøvelRad).getByRole('button', { name: 'Vis mindre' })).toBeInTheDocument();
    await act(async () => perioder[3].focus());
    await userEvent.keyboard(' ');
    expect(within(nordlysRad).getByRole('button', { name: 'Vis mindre' })).toBeInTheDocument();
    expect(within(ostehøvelRad).getByRole('button', { name: 'Vis mindre' })).toBeInTheDocument();
  });

  it('deler opp refusjonsperioder, oppdaterer tidslinjen og lagrer både høyere beløp og null ved overstyring', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    renderOverstyring({ submitCallback });
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
    const submitButton = screen.getByRole('button', { name: 'Bekreft og fortsett' });
    expect(submitButton).toBeEnabled();
    await userEvent.click(getTidslinjePerioder()[0]);
    const innhold = getÅpentAndelInnhold('Brunostfabrikken AS');
    expect(within(innhold).queryByRole('combobox')).not.toBeInTheDocument();
    expect(within(innhold).queryByRole('heading')).not.toBeInTheDocument();
    expect(within(innhold).queryByRole('textbox', { name: 'Til og med' })).not.toBeInTheDocument();
    expect(within(innhold).queryByRole('button', { name: /Lagre|Angre|Avbryt/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Avbryt overstyring' })).not.toBeInTheDocument();

    await userEvent.clear(within(innhold).getByRole('textbox', { name: 'Refusjonsbeløp per måned' }));
    await userEvent.type(within(innhold).getByRole('textbox', { name: 'Refusjonsbeløp per måned' }), '50000');
    await userEvent.selectOptions(within(innhold).getByRole('combobox', { name: 'Årsak til overstyring' }), 'KONKURS');
    await userEvent.click(within(innhold).getByRole('button', { name: 'Legg til periode' }));
    expect(submitButton).toBeDisabled();
    await submitForm();
    expect(submitCallback).not.toHaveBeenCalled();
    await userEvent.type(within(innhold).getByRole('textbox', { name: 'Periode fra og med' }), '01.02.2025');
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[1], '0');
    await userEvent.selectOptions(
      within(within(innhold).getByRole('region', { name: 'Periode 2' })).getByRole('combobox', {
        name: 'Årsak til overstyring',
      }),
      'AVTALT_MED_ARBEIDSGIVER',
    );
    expect(screen.getByRole('button', { name: 'Vis mindre' })).toBeInTheDocument();
    expect(submitButton).toBeEnabled();
    const rad = screen.getByRole('row', { name: /Brunostfabrikken AS/ });
    expect(within(rad).getByText('01.01.2025 - 31.01.2025')).toBeInTheDocument();
    expect(within(rad).getByText('01.02.2025 - 31.03.2025')).toBeInTheDocument();
    expect(getTidslinjePerioder()).toHaveLength(2);
    await userEvent.click(submitButton);

    await waitFor(() =>
      expect(submitCallback).toHaveBeenCalledWith({
        '@type': 'OVERSTYR_REFUSJONSKRAV',
        kode: 'OVERSTYR_REFUSJONSKRAV',
        begrunnelse: 'Overstyrt',
        refusjonskrav: [
          {
            arbeidsgiverIdent: '999999999',
            perioder: [
              {
                fom: '2025-01-01',
                tom: '2025-01-31',
                refusjonsbeløpPrMnd: 50000,
                utfallÅrsak: 'KONKURS',
              },
              {
                fom: '2025-02-01',
                tom: '2025-03-31',
                refusjonsbeløpPrMnd: 0,
                utfallÅrsak: 'AVTALT_MED_ARBEIDSGIVER',
              },
            ],
          },
        ],
      }),
    );

    await userEvent.click(getTidslinjePerioder()[1]);
    const gjenåpnet = getÅpentAndelInnhold('Brunostfabrikken AS');
    expect(
      within(gjenåpnet)
        .getAllByRole('textbox', { name: 'Periode fra og med' })
        .map(felt => (felt as HTMLInputElement).value),
    ).toEqual(['01.02.2025']);
    expect(within(gjenåpnet).getByText('01.01.2025')).toBeInTheDocument();
    expect(
      within(gjenåpnet)
        .getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })
        .map(felt => (felt as HTMLInputElement).value),
    ).toEqual(['50000', '0']);
    await userEvent.click(within(gjenåpnet).getByRole('button', { name: 'Fjern periode 2' }));
    expect(within(rad).getByText('01.01.2025 - 31.03.2025')).toBeInTheDocument();
    expect(within(rad).queryByText('01.01.2025 - 31.01.2025')).not.toBeInTheDocument();
    expect(within(rad).queryByText('01.02.2025 - 31.03.2025')).not.toBeInTheDocument();
    expect(getTidslinjePerioder()).toHaveLength(1);
    await userEvent.click(submitButton);
    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(2));
    expect(submitCallback.mock.calls[1][0].refusjonskrav[0].perioder).toEqual([
      expect.objectContaining({ fom: '2025-01-01', tom: '2025-03-31', refusjonsbeløpPrMnd: 50000 }),
    ]);
  });

  it('viser årsak bare ved endret fom eller beløp, ikke når tom utledes på nytt', async () => {
    renderOverstyring();
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = within(getÅpentAndelInnhold('Brunostfabrikken AS'));
    const førstePeriode = within(innhold.getByRole('region', { name: 'Periode 1' }));
    const beløp = førstePeriode.getByRole('textbox', { name: 'Refusjonsbeløp per måned' });
    expect(innhold.queryByRole('combobox')).not.toBeInTheDocument();

    await userEvent.clear(beløp);
    await userEvent.type(beløp, '50000');
    expect(førstePeriode.getByRole('combobox', { name: 'Årsak til overstyring' })).toBeInTheDocument();
    await userEvent.clear(beløp);
    await userEvent.type(beløp, '42000');
    expect(innhold.queryByRole('combobox')).not.toBeInTheDocument();

    await userEvent.click(innhold.getByRole('button', { name: 'Legg til periode' }));
    const nyPeriode = within(innhold.getByRole('region', { name: 'Periode 2' }));
    const fjernPeriode = nyPeriode.getByRole('button', { name: 'Fjern periode 2' });
    expect(fjernPeriode.querySelector('svg')).toBeInTheDocument();
    expect(nyPeriode.getByRole('combobox', { name: 'Årsak til overstyring' })).toBeInTheDocument();
    expect(førstePeriode.queryByRole('combobox')).not.toBeInTheDocument();
    await userEvent.type(nyPeriode.getByRole('textbox', { name: 'Periode fra og med' }), '01.02.2025');
    await userEvent.type(nyPeriode.getByRole('textbox', { name: 'Refusjonsbeløp per måned' }), '0');
    expect(førstePeriode.queryByRole('combobox')).not.toBeInTheDocument();
    await userEvent.click(fjernPeriode);
    expect(innhold.queryByRole('combobox')).not.toBeInTheDocument();
  });

  it('skjuler en forhåndsutfylt årsak når fom og beløp er uendret', async () => {
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    renderOverstyring({
      formData: {
        erOverstyring: true,
        begrunnelse: 'Tidligere overstyrt',
        refusjonsandeler: [
          {
            ...andel,
            arbeidsgiverNavn: 'Brunostfabrikken AS',
            refusjonsperioder: [{ ...andel.refusjonsperioder[0], overstyringsÅrsak: 'KONKURS' }],
          },
        ],
      },
    });
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = within(getÅpentAndelInnhold('Brunostfabrikken AS'));
    expect(innhold.queryByRole('combobox')).not.toBeInTheDocument();
    const beløp = innhold.getByRole('textbox', { name: 'Refusjonsbeløp per måned' });
    await userEvent.clear(beløp);
    await userEvent.type(beløp, '50000');
    expect(innhold.getByRole('combobox', { name: 'Årsak til overstyring' })).toHaveValue('KONKURS');
  });

  it.each([
    ['Konkurs', 'KONKURS'],
    ['Utmeldt', 'UTMELDT'],
    ['Avtalt med arbeidsgiver', 'AVTALT_MED_ARBEIDSGIVER'],
  ])('bevarer valgt årsak %s når beløpet tilbakestilles og skjuler årsaksfeltet', async (navn, utfallÅrsak) => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    renderOverstyring({ submitCallback });
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = within(getÅpentAndelInnhold('Brunostfabrikken AS'));
    const beløp = innhold.getByRole('textbox', { name: 'Refusjonsbeløp per måned' });
    await userEvent.clear(beløp);
    await userEvent.type(beløp, '50000');
    await userEvent.selectOptions(innhold.getByRole('combobox', { name: 'Årsak til overstyring' }), utfallÅrsak);
    expect(innhold.getByRole('combobox', { name: 'Årsak til overstyring' })).toHaveDisplayValue(navn);
    await userEvent.clear(beløp);
    await userEvent.type(beløp, '42000');
    expect(innhold.queryByRole('combobox')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Vis mindre' }));
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
    expect(submitCallback.mock.calls[0][0].refusjonskrav[0].perioder).toEqual([
      expect.objectContaining({ refusjonsbeløpPrMnd: 42000, utfallÅrsak }),
    ]);
  });

  it.each(['2025-02-28', '2025-05-31'])('sender siste tom %s når sluttdatoen er flyttet', async tom => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    renderOverstyring({
      submitCallback,
      formData: {
        erOverstyring: true,
        begrunnelse: 'Overstyrt',
        refusjonsandeler: [
          {
            ...andel,
            arbeidsgiverNavn: 'Brunostfabrikken AS',
            refusjonsperioder: [{ ...andel.refusjonsperioder[0], tom }],
          },
        ],
      },
    });

    const submitButton = screen.getByRole('button', { name: 'Bekreft og fortsett' });
    await waitFor(() => expect(submitButton).toBeEnabled());
    await userEvent.click(submitButton);

    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
    expect(submitCallback.mock.calls[0][0].refusjonskrav[0].perioder).toEqual([
      expect.objectContaining({ fom: '2025-01-01', tom }),
    ]);
  });

  it.each([undefined, '', TIDENES_ENDE])('viser og sender perioder med åpen slutt når tom er %s', async tom => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    renderOverstyring({
      submitCallback,
      refusjonsandeler: [
        {
          ...andel,
          refusjonsperioder: [
            {
              ...andel.refusjonsperioder[0],
              tom: TIDENES_ENDE,
            },
          ],
        },
      ],
      formData: {
        erOverstyring: true,
        begrunnelse: '',
        refusjonsandeler: [
          {
            ...andel,
            arbeidsgiverNavn: 'Brunostfabrikken AS',
            refusjonsperioder: [{ ...andel.refusjonsperioder[0], tom }],
          },
        ],
      },
    });

    expect(
      within(screen.getByRole('row', { name: /Brunostfabrikken AS/ })).getByText('01.01.2025 -'),
    ).toBeInTheDocument();
    expect(getTidslinjePerioder()).toHaveLength(1);
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = within(getÅpentAndelInnhold('Brunostfabrikken AS'));
    await userEvent.click(innhold.getByRole('button', { name: 'Legg til periode' }));
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeDisabled();
    const nyPeriode = within(innhold.getByRole('region', { name: 'Periode 2' }));
    await userEvent.type(nyPeriode.getByRole('textbox', { name: 'Periode fra og med' }), '01.08.2025');
    await userEvent.type(nyPeriode.getByRole('textbox', { name: 'Refusjonsbeløp per måned' }), '0');
    expect(getTidslinjePerioder()).toHaveLength(2);
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));

    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
    expect(submitCallback.mock.calls[0][0].refusjonskrav[0].perioder).toEqual([
      expect.objectContaining({ fom: '2025-01-01', tom: '2025-07-31' }),
      expect.objectContaining({ fom: '2025-08-01', tom: TIDENES_ENDE }),
    ]);
  });

  it('skiller tomt beløp fra null og sender desimalbeløp direkte fra hovedskjemaet', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    renderOverstyring({ submitCallback });
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const beløp = within(getÅpentAndelInnhold('Brunostfabrikken AS')).getByRole('textbox', {
      name: 'Refusjonsbeløp per måned',
    });
    await userEvent.clear(beløp);
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeDisabled();
    await userEvent.click(screen.getByRole('button', { name: 'Vis mindre' }));
    await submitForm();
    expect(submitCallback).not.toHaveBeenCalled();
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    await userEvent.type(beløp, '37 500,50');
    expect(beløp).toHaveValue('37500.50');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
    expect(submitCallback.mock.calls[0][0].refusjonskrav[0].perioder).toEqual([
      expect.objectContaining({ refusjonsbeløpPrMnd: 37500.5 }),
    ]);
  });

  it.each([
    { forrigeDato: '01.02.2025', måned: 'februar 2025' },
    { forrigeDato: '01.02.', måned: 'januar 2025' },
    { forrigeDato: '', måned: 'januar 2025' },
  ])('åpner ny datovelger i $måned når forrige dato er "$forrigeDato"', async ({ forrigeDato, måned }) => {
    renderOverstyring();
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = within(getÅpentAndelInnhold('Brunostfabrikken AS'));
    await userEvent.click(innhold.getByRole('button', { name: 'Legg til periode' }));
    if (forrigeDato) {
      await userEvent.type(innhold.getByRole('textbox', { name: 'Periode fra og med' }), forrigeDato);
    }

    await userEvent.click(innhold.getByRole('button', { name: 'Legg til periode' }));
    const nyPeriode = within(innhold.getByRole('region', { name: 'Periode 3' }));
    await userEvent.click(nyPeriode.getByRole('button', { name: 'Åpne datovelger' }));

    expect(screen.getByText(måned, { exact: true })).toBeInTheDocument();
    expect(nyPeriode.getByRole('textbox', { name: 'Periode fra og med' })).toHaveValue('');
  });

  it('utelater ufullstendige og ugyldige datoer fra visningen uten å tillate innsending', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    renderOverstyring({ submitCallback });
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = within(getÅpentAndelInnhold('Brunostfabrikken AS'));
    await userEvent.click(innhold.getByRole('button', { name: 'Legg til periode' }));
    const dato = innhold.getByRole('textbox', { name: 'Periode fra og med' });
    await userEvent.type(innhold.getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[1], '0');

    for (const verdi of ['', '01.02.', '32.02.2025', '31.12.2024', '01.04.2025']) {
      await userEvent.clear(dato);
      if (verdi) {
        await userEvent.type(dato, verdi);
      }
      expect(getTidslinjePerioder()).toHaveLength(1);
      expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeDisabled();
      await submitForm();
      expect(submitCallback).not.toHaveBeenCalled();
    }

    await userEvent.clear(dato);
    await userEvent.type(dato, '01.02.2025');
    expect(getTidslinjePerioder()).toHaveLength(2);
    expect(screen.getByRole('row', { name: /Brunostfabrikken AS/ })).toHaveTextContent('01.01.2025 - 31.01.2025');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
  });

  it.each([undefined, 'INNVILGET', 'AVSLÅTT', 'REDUSERT'] as const)(
    'bevarer utfallet %s i skjemadata uten å sende det ved overstyring',
    async utfall => {
      const submitCallback = vi.fn().mockResolvedValue(undefined);
      const setFormData = vi.fn();
      const andel = refusjonsandelerForTreArbeidsgivere[0];
      const { unmount } = renderOverstyring({
        submitCallback,
        setFormData,
        formData: {
          erOverstyring: true,
          begrunnelse: 'Overstyrt',
          refusjonsandeler: [
            {
              ...andel,
              arbeidsgiverNavn: 'Brunostfabrikken AS',
              refusjonsperioder: [{ ...andel.refusjonsperioder[0], utfall }],
            },
          ],
        },
      });

      await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
      await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
      expect(submitCallback.mock.calls[0][0].refusjonskrav[0].perioder[0]).not.toHaveProperty('utfall');

      await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
      const beløp = within(getÅpentAndelInnhold('Brunostfabrikken AS')).getByRole('textbox', {
        name: 'Refusjonsbeløp per måned',
      });
      await userEvent.clear(beløp);
      await userEvent.type(beløp, '500');
      await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
      await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(2));
      expect(submitCallback.mock.calls[1][0].refusjonskrav[0].perioder).toEqual([
        expect.objectContaining({ refusjonsbeløpPrMnd: 500 }),
      ]);
      expect(submitCallback.mock.calls[1][0].refusjonskrav[0].perioder[0]).not.toHaveProperty('utfall');
      unmount();
      expect(setFormData.mock.calls[0][0].refusjonsandeler[0].refusjonsperioder[0].utfall).toBe(utfall);
    },
  );

  it.each([
    {
      perioder: [{ fom: '2025-01-01', tom: '2025-03-31' }],
      forventetMelding:
        'Periodene kan ikke starte før opprinnelig fra-dato og må være uten hull eller overlapp. Opprinnelige perioder: 01.01.2025 - 31.03.2025.',
    },
    {
      perioder: [
        { fom: '2025-01-01', tom: '2025-03-31' },
        { fom: '2025-04-01', tom: '2025-06-30' },
      ],
      forventetMelding:
        'Periodene kan ikke starte før opprinnelig fra-dato og må være uten hull eller overlapp. ' +
        'Opprinnelige perioder: 01.01.2025 - 31.03.2025 og 01.04.2025 - 30.06.2025.',
    },
  ])(
    'viser opprinnelige perioder i feilmeldingen ved ugyldig oppdeling: $perioder',
    async ({ perioder, forventetMelding }) => {
      const andel = refusjonsandelerForTreArbeidsgivere[0];
      renderOverstyring({
        refusjonsandeler: [
          {
            ...andel,
            refusjonsperioder: perioder.map(periode => ({ ...andel.refusjonsperioder[0], ...periode })),
          },
        ],
      });
      await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
      const innhold = within(getÅpentAndelInnhold('Brunostfabrikken AS'));
      expect(innhold.queryByRole('alert')).not.toBeInTheDocument();

      await userEvent.click(innhold.getByRole('button', { name: 'Legg til periode' }));
      expect(innhold.getByRole('alert')).toHaveTextContent(forventetMelding);

      await userEvent.click(innhold.getByRole('button', { name: `Fjern periode ${perioder.length + 1}` }));
      expect(innhold.queryByRole('alert')).not.toBeInTheDocument();
    },
  );

  it('låser første startdato og stopper ugyldige perioder og beløp, også når raden lukkes', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    renderOverstyring({ submitCallback });
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = getÅpentAndelInnhold('Brunostfabrikken AS');
    const førstePeriode = within(innhold).getByRole('region', { name: 'Periode 1' });
    expect(within(førstePeriode).queryByRole('textbox', { name: 'Periode fra og med' })).not.toBeInTheDocument();
    expect(within(førstePeriode).getByText('01.01.2025')).toBeInTheDocument();
    expect(within(førstePeriode).queryByRole('button')).not.toBeInTheDocument();

    await userEvent.click(within(innhold).getByRole('button', { name: 'Legg til periode' }));
    const nyFom = within(innhold).getByRole('textbox', { name: 'Periode fra og med' });
    expect(nyFom).toBeEnabled();
    expect(within(innhold).queryByRole('button', { name: 'Fjern periode 1' })).not.toBeInTheDocument();
    await userEvent.type(nyFom, '01.04.2025');
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[1], '0');
    await submitForm();
    expect(await within(innhold).findByRole('alert')).toHaveTextContent(
      'Periodene kan ikke starte før opprinnelig fra-dato og må være uten hull eller overlapp. Opprinnelige perioder: 01.01.2025 - 31.03.2025.',
    );
    expect(screen.getByRole('button', { name: 'Vis mindre' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeDisabled();
    await userEvent.click(screen.getByRole('button', { name: 'Vis mindre' }));
    await submitForm();
    expect(submitCallback).not.toHaveBeenCalled();
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    await userEvent.clear(nyFom);
    await userEvent.type(nyFom, '01.02.2025');
    const beløp = within(innhold).getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[0];
    await userEvent.clear(beløp);
    await userEvent.type(beløp, '-1');
    await submitForm();
    expect(beløp).toHaveAttribute('aria-invalid', 'true');
    expect(submitCallback).not.toHaveBeenCalled();
    expect(within(innhold).getAllByRole('textbox', { name: 'Periode fra og med' })).toHaveLength(1);
    await userEvent.click(within(innhold).getByRole('button', { name: 'Fjern periode 2' }));
    expect(within(innhold).queryByRole('textbox', { name: 'Periode fra og med' })).not.toBeInTheDocument();
    await userEvent.clear(beløp);
    await userEvent.type(beløp, '42000');

    expect(within(førstePeriode).getByText('01.01.2025')).toBeInTheDocument();
    expect(within(innhold).getByRole('textbox', { name: 'Refusjonsbeløp per måned' })).toHaveValue('42000');
    expect(within(innhold).queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeEnabled();
  });

  it('beregner sammenhengende sluttdatoer også når en opprinnelig mellomgrense flyttes', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    renderOverstyring({
      submitCallback,
      refusjonsandeler: [
        {
          ...andel,
          refusjonsperioder: [
            { ...andel.refusjonsperioder[0], utfall: 'INNVILGET' },
            { ...andel.refusjonsperioder[1], utfall: 'INNVILGET' },
          ],
        },
      ],
    });
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = getÅpentAndelInnhold('Brunostfabrikken AS');
    const opprinneligMellomgrense = within(innhold).getByRole('textbox', { name: 'Periode fra og med' });
    await userEvent.clear(opprinneligMellomgrense);
    await userEvent.type(opprinneligMellomgrense, '01.05.2025');
    await userEvent.clear(within(innhold).getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[0]);
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[0], '30000');
    await userEvent.click(within(innhold).getByRole('button', { name: 'Legg til periode' }));
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Periode fra og med' })[1], '01.02.2025');
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[2], '40000');
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() =>
      expect(submitCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          refusjonskrav: [
            {
              arbeidsgiverIdent: '999999999',
              perioder: [
                expect.objectContaining({
                  fom: '2025-01-01',
                  tom: '2025-01-31',
                  refusjonsbeløpPrMnd: 30000,
                }),
                expect.objectContaining({
                  fom: '2025-02-01',
                  tom: '2025-04-30',
                  refusjonsbeløpPrMnd: 40000,
                }),
                expect.objectContaining({
                  fom: '2025-05-01',
                  tom: '2025-06-30',
                  refusjonsbeløpPrMnd: 37500,
                }),
              ],
            },
          ],
        }),
      ),
    );
  });
});

const renderForm = (props: Partial<ComponentProps<typeof RefusjonskravForm>> = {}) =>
  render(
    <RefusjonskravForm
      aksjonspunkt={[]}
      refusjonsandeler={refusjonsandelerForTreArbeidsgivere}
      dokumenter={dokumenterPåSaken}
      åpneDokument={vi.fn()}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      readOnly={false}
      erOverstyrer
      submitCallback={vi.fn().mockResolvedValue(undefined)}
      setFormData={() => undefined}
      {...props}
    />,
    { wrapper: ({ children }) => <RawIntlProvider value={intl}>{children}</RawIntlProvider> },
  );

const getÅpentAndelInnhold = (arbeidsgiverNavn: string, index = 0) => {
  const rad = screen.getAllByRole('row', { name: new RegExp(arbeidsgiverNavn) })[index];
  const radKnapp = within(rad).getByRole('button', { name: 'Vis mindre' });
  expect(radKnapp).toHaveAttribute('aria-expanded', 'true');
  const radInnholdId = radKnapp.getAttribute('aria-controls');
  const radInnhold = radInnholdId ? document.getElementById(radInnholdId) : null;
  if (!radInnhold) {
    throw new Error(`Fant ikke radinnholdet for ${arbeidsgiverNavn}`);
  }
  return radInnhold;
};

const submitForm = async () => {
  const form = screen.getByRole('heading', { name: 'Fakta om refusjon' }).closest('form');
  if (!form) {
    throw new Error('Fant ikke refusjonsskjemaet');
  }
  await act(async () => fireEvent.submit(form));
};

const renderOverstyring = (props: Partial<ComponentProps<typeof RefusjonskravForm>> = {}) =>
  renderForm({
    aksjonspunkt: [{ kode: 'OVERSTYR_REFUSJONSKRAV', status: 'UTFO' }],
    refusjonsandeler: [
      {
        ...refusjonsandelerForTreArbeidsgivere[0],
        refusjonsperioder: [{ ...refusjonsandelerForTreArbeidsgivere[0].refusjonsperioder[0], utfall: 'INNVILGET' }],
      },
    ],
    ...props,
  });
