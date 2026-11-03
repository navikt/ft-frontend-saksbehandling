import type { ComponentProps } from 'react';
import { RawIntlProvider } from 'react-intl';

import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { createIntl } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidgiverOpplysningerPerId';
import { dokumenterPåSaken } from '../../../testdata/dokumenter';
import { refusjonsandelerForTreArbeidsgivere } from '../../../testdata/refusjonsandeler';
import type { AksjonspunktRefusjon } from '../../types/aksjonspunkt';
import { RefusjonskravForm } from './RefusjonskravForm';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

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
            { ...andel.refusjonsperioder[0], kilde: 'IM' },
            { ...andel.refusjonsperioder[1], kilde: 'IM', utfallBegrunnelse: 'Tidligere vurdert' },
          ],
        },
      ],
    });
    expect(refusjonsandeler[0].refusjonsperioder[0].fom).toBe('2025-04-01');
  });

  it('samler periodene i én rad per andel uten å åpne aksjonspunktvurderinger', () => {
    renderForm({ aksjonspunkt: [{ kode: 'AVKLAR_REFUSJONSKRAV', status: 'OPPR' }] });

    const tabell = within(screen.getByRole('table'));
    const brunostRad = tabell.getByRole('row', { name: /Brunostfabrikken AS/ });
    expect(tabell.getAllByRole('row', { name: /Brunostfabrikken AS/ })).toHaveLength(1);
    expect(tabell.getAllByRole('row', { name: /Ostehøvel Outlet AS/ })).toHaveLength(1);
    expect(tabell.getAllByRole('row', { name: /Nordlys Teknologi AS/ })).toHaveLength(1);

    const celler = within(brunostRad).getAllByRole('cell');
    expect(celler).toHaveLength(6);
    expect(celler[1]).toHaveTextContent('01.01.2025 - 31.03.2025');
    expect(celler[1]).toHaveTextContent('01.04.2025 - 30.06.2025');
    expect(celler[2].textContent).toMatch(/42\s000.*37\s500/);
    expect(celler[3].textContent).toMatch(/20.12.2024.*20.03.2025/);
    expect(tabell.queryByRole('columnheader', { name: 'Utfall' })).not.toBeInTheDocument();
    expect(
      within(celler[4]).getByRole('button', { name: 'Åpne inntektsmelding fra Brunostfabrikken AS' }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Utfall mangler')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Vis mindre' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Bekreft og fortsett' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Overstyr' })).toBeEnabled();
  });

  it.each([
    { aksjonspunkt: [], harVærtOverstyrt: false },
    {
      aksjonspunkt: [{ kode: 'AVKLAR_REFUSJONSKRAV', status: 'OPPR', begrunnelse: 'Avklaring skal ikke brukes' }],
      harVærtOverstyrt: false,
    },
    {
      aksjonspunkt: [
        { kode: 'AVKLAR_REFUSJONSKRAV', status: 'OPPR' },
        { kode: 'OVERSTYR_REFUSJONSKRAV', status: 'UTFO', begrunnelse: 'Tidligere overstyrt' },
      ],
      harVærtOverstyrt: true,
    },
  ] satisfies { aksjonspunkt: AksjonspunktRefusjon[]; harVærtOverstyrt: boolean }[])(
    'sender bare overstyring, uavhengig av eksisterende aksjonspunkt: $aksjonspunkt',
    async ({ aksjonspunkt, harVærtOverstyrt }) => {
      const submitCallback = vi.fn().mockResolvedValue(undefined);
      renderForm({ aksjonspunkt, submitCallback });
      if (!harVærtOverstyrt) {
        await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
      }
      const rad = within(screen.getByRole('row', { name: /Brunostfabrikken AS/ }));
      expect(screen.queryByRole('button', { name: 'Overstyr' })).not.toBeInTheDocument();
      expect(screen.queryAllByRole('button', { name: 'Avbryt overstyring' })).toHaveLength(harVærtOverstyrt ? 0 : 1);
      await userEvent.click(rad.getByRole('button', { name: 'Vis mer' }));
      const begrunnelse = screen.getByRole('textbox', { name: 'Begrunnelse' });
      expect(begrunnelse).not.toHaveValue('Avklaring skal ikke brukes');
      await userEvent.clear(begrunnelse);
      await userEvent.type(begrunnelse, 'Overstyrt');
      expect(
        within(getÅpentAndelInnhold('Brunostfabrikken AS')).getAllByRole('textbox', { name: 'Periode fra og med' }),
      ).toHaveLength(2);
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
                  expect.objectContaining({ fom: '2025-01-01', kilde: 'IM', utfall: undefined }),
                ]),
              }),
            ]),
          }),
        ),
      );
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
          refusjonsperioder: [{ ...andel.refusjonsperioder[0], utfall: 'AVSLÅTT', utfallÅrsak: 'KONKURS' }],
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
    expect(within(innhold).getByText('Årsak til overstyring')).toBeInTheDocument();
    expect(within(innhold).getByText('Konkurs')).toBeInTheDocument();
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
    await userEvent.type(innhold.getAllByRole('textbox', { name: 'Periode fra og med' })[1], '01.02.2025');
    await userEvent.type(innhold.getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[1], '0');
    await userEvent.click(screen.getByRole('button', { name: 'Vis mindre' }));
    unmount();

    renderOverstyring({ formData: setFormData.mock.calls[0][0] });
    expect(screen.queryByRole('button', { name: 'Overstyr' })).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Begrunnelse' })).toHaveValue('Mellomlagret overstyring');
    expect(screen.queryByRole('button', { name: 'Avbryt overstyring' })).not.toBeInTheDocument();
    const tidslinje = within(screen.getByRole('region', { name: 'Utbetaling' }));
    expect(tidslinje.getAllByRole('button')).toHaveLength(2);
    await userEvent.click(tidslinje.getAllByRole('button')[1]);
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
    expect(screen.getByRole('button', { name: 'Avbryt overstyring' }).parentElement).toBe(
      screen.getByRole('button', { name: 'Bekreft og fortsett' }).parentElement,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = getÅpentAndelInnhold('Brunostfabrikken AS');
    await userEvent.clear(within(innhold).getByRole('textbox', { name: 'Refusjonsbeløp per måned' }));
    await userEvent.type(within(innhold).getByRole('textbox', { name: 'Refusjonsbeløp per måned' }), '50000');
    await userEvent.selectOptions(within(innhold).getByRole('combobox', { name: 'Årsak til overstyring' }), 'KONKURS');
    await userEvent.click(within(innhold).getByRole('button', { name: 'Legg til periode' }));
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Periode fra og med' })[1], '01.02.2025');
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[1], '0');
    const tidslinje = within(screen.getByRole('region', { name: 'Utbetaling' }));
    expect(tidslinje.getAllByRole('button')).toHaveLength(2);

    await userEvent.click(tidslinje.getAllByRole('button')[1]);
    await userEvent.click(
      within(getÅpentAndelInnhold('Brunostfabrikken AS')).getByRole('button', { name: 'Legg til periode' }),
    );
    await userEvent.clear(screen.getByRole('textbox', { name: 'Begrunnelse' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Endret begrunnelse');
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeDisabled();
    await userEvent.click(screen.getByRole('button', { name: 'Avbryt overstyring' }));

    expect(screen.queryByRole('button', { name: 'Bekreft og fortsett' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Overstyr' })).toBeEnabled();
    expect(tidslinje.getAllByRole('button')).toHaveLength(1);
    expect(screen.getByRole('row', { name: /Brunostfabrikken AS/ })).toHaveTextContent('01.01.2025 - 31.03.2025');
    expect(screen.queryByTitle('Endret av saksbehandler')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));

    const gjenåpnet = getÅpentAndelInnhold('Brunostfabrikken AS');
    expect(within(gjenåpnet).getAllByRole('textbox', { name: 'Periode fra og med' })).toHaveLength(1);
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
    const perioder = within(screen.getByRole('region', { name: 'Utbetaling' })).getAllByRole('button');
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
    const tidslinje = within(screen.getByRole('region', { name: 'Utbetaling' }));
    await userEvent.click(tidslinje.getByRole('button'));
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
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Periode fra og med' })[1], '01.02.2025');
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
    expect(within(rad).getAllByTitle('Endret av saksbehandler')).toHaveLength(2);
    expect(tidslinje.getAllByRole('button')).toHaveLength(2);
    expect(tidslinje.getAllByTitle('Endret av saksbehandler')).toHaveLength(2);
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
                kilde: 'SAKSBEHANDLER',
                utfall: 'INNVILGET',
                utfallÅrsak: 'KONKURS',
              },
              {
                fom: '2025-02-01',
                tom: '2025-03-31',
                refusjonsbeløpPrMnd: 0,
                kilde: 'SAKSBEHANDLER',
                utfall: 'INNVILGET',
                utfallÅrsak: 'AVTALT_MED_ARBEIDSGIVER',
              },
            ],
          },
        ],
      }),
    );

    await userEvent.click(tidslinje.getAllByRole('button')[1]);
    const gjenåpnet = getÅpentAndelInnhold('Brunostfabrikken AS');
    expect(
      within(gjenåpnet)
        .getAllByRole('textbox', { name: 'Periode fra og med' })
        .map(felt => (felt as HTMLInputElement).value),
    ).toEqual(['01.01.2025', '01.02.2025']);
    expect(
      within(gjenåpnet)
        .getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })
        .map(felt => (felt as HTMLInputElement).value),
    ).toEqual(['50000', '0']);
    await userEvent.click(within(gjenåpnet).getByRole('button', { name: 'Fjern periode 2' }));
    expect(within(rad).getByText('01.01.2025 - 31.03.2025')).toBeInTheDocument();
    expect(within(rad).queryByText('01.01.2025 - 31.01.2025')).not.toBeInTheDocument();
    expect(within(rad).queryByText('01.02.2025 - 31.03.2025')).not.toBeInTheDocument();
    expect(tidslinje.getAllByRole('button')).toHaveLength(1);
    await userEvent.click(submitButton);
    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(2));
    expect(submitCallback.mock.calls[1][0].refusjonskrav[0].perioder).toEqual([
      expect.objectContaining({ fom: '2025-01-01', tom: '2025-03-31', refusjonsbeløpPrMnd: 50000 }),
    ]);
  });

  it('viser årsak bare ved endret beløp, endret periode eller nye perioder', async () => {
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
    expect(førstePeriode.getByRole('combobox', { name: 'Årsak til overstyring' })).toBeInTheDocument();
    await userEvent.click(fjernPeriode);
    expect(innhold.queryByRole('combobox')).not.toBeInTheDocument();
  });

  it('viser en forhåndsutfylt årsak selv om beløp og periode er uendret', async () => {
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    renderOverstyring({
      refusjonsandeler: [
        {
          ...andel,
          refusjonsperioder: [{ ...andel.refusjonsperioder[0], utfallÅrsak: 'KONKURS' }],
        },
      ],
    });
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    expect(
      within(getÅpentAndelInnhold('Brunostfabrikken AS')).getByRole('combobox', { name: 'Årsak til overstyring' }),
    ).toHaveValue('KONKURS');
  });

  it.each([
    ['Konkurs', 'KONKURS'],
    ['Utmeldt', 'UTMELDT'],
    ['Avtalt med arbeidsgiver', 'AVTALT_MED_ARBEIDSGIVER'],
  ])('sender årsaken %s selv om bare årsaken er endret og raden er lukket', async (navn, utfallÅrsak) => {
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
    expect(innhold.getByRole('combobox', { name: 'Årsak til overstyring' })).toHaveValue(utfallÅrsak);
    await userEvent.click(screen.getByRole('button', { name: 'Vis mindre' }));
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
    expect(submitCallback.mock.calls[0][0].refusjonskrav[0].perioder).toEqual([
      expect.objectContaining({ refusjonsbeløpPrMnd: 42000, kilde: 'SAKSBEHANDLER', utfallÅrsak }),
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
      expect.objectContaining({ refusjonsbeløpPrMnd: 37500.5, kilde: 'SAKSBEHANDLER', utfall: 'INNVILGET' }),
    ]);
  });

  it.each([undefined, 'INNVILGET', 'AVSLÅTT', 'REDUSERT'] as const)(
    'bevarer utfallet %s fra skjemadata ved uendret og endret beløp',
    async utfall => {
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
              refusjonsperioder: [{ ...andel.refusjonsperioder[0], kilde: andel.kilde, utfall }],
            },
          ],
        },
      });

      await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
      await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
      expect(submitCallback.mock.calls[0][0].refusjonskrav[0].perioder).toEqual([expect.objectContaining({ utfall })]);

      await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
      const beløp = within(getÅpentAndelInnhold('Brunostfabrikken AS')).getByRole('textbox', {
        name: 'Refusjonsbeløp per måned',
      });
      await userEvent.clear(beløp);
      await userEvent.type(beløp, '50000');
      await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
      await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(2));
      expect(submitCallback.mock.calls[1][0].refusjonskrav[0].perioder).toEqual([
        expect.objectContaining({ refusjonsbeløpPrMnd: 50000, utfall }),
      ]);
    },
  );

  it.each([
    {
      perioder: [{ fom: '2025-01-01', tom: '2025-03-31' }],
      forventetMelding: 'Periodene må dekke 01.01.2025 - 31.03.2025 uten hull eller overlapp.',
    },
    {
      perioder: [
        { fom: '2025-01-01', tom: '2025-03-31' },
        { fom: '2025-05-01', tom: '2025-06-30' },
      ],
      forventetMelding:
        'Periodene må dekke 01.01.2025 - 31.03.2025 og 01.05.2025 - 30.06.2025 uten hull eller overlapp.',
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
    const førsteFom = within(førstePeriode).getByRole('textbox', { name: 'Periode fra og med' });
    expect(førsteFom).toBeDisabled();
    expect(within(førstePeriode).getByRole('button')).toBeDisabled();
    await userEvent.type(førsteFom, '02.01.2025');
    expect(førsteFom).toHaveValue('01.01.2025');

    await userEvent.click(within(innhold).getByRole('button', { name: 'Legg til periode' }));
    const nyFom = within(innhold).getAllByRole('textbox', { name: 'Periode fra og med' })[1];
    expect(nyFom).toBeEnabled();
    expect(within(innhold).queryByRole('button', { name: 'Fjern periode 1' })).not.toBeInTheDocument();
    await userEvent.type(nyFom, '01.04.2025');
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[1], '0');
    await submitForm();
    expect(await within(innhold).findByRole('alert')).toHaveTextContent(
      'Periodene må dekke 01.01.2025 - 31.03.2025 uten hull eller overlapp.',
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
    expect(within(innhold).getAllByRole('textbox', { name: 'Periode fra og med' })).toHaveLength(2);
    await userEvent.click(within(innhold).getByRole('button', { name: 'Fjern periode 2' }));
    expect(within(innhold).getAllByRole('textbox', { name: 'Periode fra og med' })).toHaveLength(1);
    await userEvent.clear(beløp);
    await userEvent.type(beløp, '42000');

    expect(within(innhold).getByRole('textbox', { name: 'Periode fra og med' })).toHaveValue('01.01.2025');
    expect(within(innhold).getByRole('textbox', { name: 'Periode fra og med' })).toBeDisabled();
    expect(within(innhold).getByRole('textbox', { name: 'Refusjonsbeløp per måned' })).toHaveValue('42000');
    expect(within(innhold).queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeEnabled();
  });

  it('beregner sluttdatoer kronologisk innenfor originalperiodene og bevarer uendrede perioder', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    const andel = refusjonsandelerForTreArbeidsgivere[0];
    renderOverstyring({
      submitCallback,
      refusjonsandeler: [
        {
          ...andel,
          refusjonsperioder: [
            { ...andel.refusjonsperioder[0], utfall: 'INNVILGET' },
            { ...andel.refusjonsperioder[1], fom: '2025-05-01', utfall: 'INNVILGET' },
          ],
        },
      ],
    });
    await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));
    const innhold = getÅpentAndelInnhold('Brunostfabrikken AS');
    await userEvent.clear(within(innhold).getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[0]);
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })[0], '30000');
    await userEvent.click(within(innhold).getByRole('button', { name: 'Legg til periode' }));
    await userEvent.type(within(innhold).getAllByRole('textbox', { name: 'Periode fra og med' })[2], '01.02.2025');
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
                  kilde: 'SAKSBEHANDLER',
                  utfall: 'INNVILGET',
                }),
                expect.objectContaining({
                  fom: '2025-02-01',
                  tom: '2025-03-31',
                  refusjonsbeløpPrMnd: 40000,
                  kilde: 'SAKSBEHANDLER',
                  utfall: 'INNVILGET',
                }),
                expect.objectContaining({
                  fom: '2025-05-01',
                  tom: '2025-06-30',
                  refusjonsbeløpPrMnd: 37500,
                  kilde: 'IM',
                  utfall: 'INNVILGET',
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

const getÅpentAndelInnhold = (arbeidsgiverNavn: string) => {
  const rad = screen.getByRole('row', { name: new RegExp(arbeidsgiverNavn) });
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
