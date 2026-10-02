import type { ComponentProps } from 'react';
import { RawIntlProvider } from 'react-intl';

import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { createIntl } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidgiverOpplysningerPerId';
import { refusjonsandelerForTreArbeidsgivere } from '../../../testdata/refusjonsandeler';
import { RefusjonskravForm } from './RefusjonskravForm';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('RefusjonskravForm', () => {
  it('skal vise tidligere begrunnelse for aksjonspunktet', async () => {
    renderForm({
      aksjonspunkt: [{ kode: 'AVKLAR_REFUSJONSKRAV', status: 'UTFO', begrunnelse: 'Allerede vurdert' }],
    });

    expect(await screen.findByRole('textbox', { name: 'Begrunnelse' })).toHaveValue('Allerede vurdert');
  });

  it('aktiverer innsending når alle radvurderinger og begrunnelsen er fylt ut', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    renderForm({ submitCallback });
    const submitButton = screen.getByRole('button', { name: 'Bekreft og fortsett' });

    expect(screen.getAllByTitle('Utfall mangler')).toHaveLength(2);
    expect(screen.queryAllByTitle('Endret av saksbehandler')).toHaveLength(0);
    expect(screen.getAllByRole('button', { name: 'Vis mindre' })).toHaveLength(2);
    expect(screen.queryAllByRole('button', { name: 'Vis mer' })).toHaveLength(0);
    expect(submitButton).toBeDisabled();

    const brunostfabrikkenRadInnhold = getÅpentRadInnhold('Brunostfabrikken AS');
    await userEvent.click(within(brunostfabrikkenRadInnhold).getByRole('radio', { name: /Nei/ }));
    await userEvent.click(within(brunostfabrikkenRadInnhold).getByRole('radio', { name: 'Årsak 1' }));
    await userEvent.click(within(brunostfabrikkenRadInnhold).getByRole('button', { name: 'Lagre' }));

    expect(screen.getAllByTitle('Utfall mangler')).toHaveLength(1);
    expect(screen.getAllByTitle('Endret av saksbehandler')).toHaveLength(1);
    expect(screen.getAllByRole('button', { name: 'Vis mer' })).toHaveLength(1);
    expect(screen.getAllByRole('button', { name: 'Vis mindre' })).toHaveLength(1);
    expect(submitButton).toBeDisabled();

    const nordlysRadInnhold = getÅpentRadInnhold('Nordlys Teknologi AS');
    await userEvent.click(within(nordlysRadInnhold).getByRole('radio', { name: 'Ja' }));
    await userEvent.click(within(nordlysRadInnhold).getByRole('button', { name: 'Lagre' }));

    expect(screen.queryAllByTitle('Utfall mangler')).toHaveLength(0);
    expect(submitButton).toBeDisabled();

    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Vurdert');

    expect(submitButton).toBeEnabled();
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(submitCallback).toHaveBeenCalledWith({
        begrunnelse: 'Vurdert',
        refusjonskrav: [
          {
            arbeidsgiverIdent: '999999999',
            perioder: [
              {
                kilde: 'SAKSBEHANDLER',
                refusjonsbeløpPrMnd: 42000,
                fom: '2025-01-01',
                tom: '2025-03-31',
                utfall: 'AVSLÅTT',
                utfallÅrsak: 'ÅRSAK1',
              },
              {
                kilde: 'IM',
                refusjonsbeløpPrMnd: 37500,
                fom: '2025-04-01',
                tom: '2025-06-30',
                utfall: 'INNVILGET',
                utfallÅrsak: undefined,
              },
            ],
          },
          {
            arbeidsgiverIdent: '888888888',
            perioder: [
              {
                kilde: 'IM',
                refusjonsbeløpPrMnd: 32000,
                fom: '2025-02-01',
                tom: '2025-02-28',
                utfall: 'INNVILGET',
                utfallÅrsak: undefined,
              },
            ],
          },
          {
            arbeidsgiverIdent: '777777777',
            perioder: [
              {
                kilde: 'SAKSBEHANDLER',
                refusjonsbeløpPrMnd: 28000,
                fom: '2025-03-01',
                tom: '2025-03-31',
                utfall: 'INNVILGET',
                utfallÅrsak: undefined,
              },
            ],
          },
        ],
      });
    });
  });

  it('hindrer innsending når en rad mangler lagret utfall', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    renderForm({ submitCallback });
    const submitButton = screen.getByRole('button', { name: 'Bekreft og fortsett' });

    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Vurdert');
    const åpenRad = getÅpentRadInnhold('Brunostfabrikken AS');
    await userEvent.click(within(åpenRad).getByRole('radio', { name: /Nei/ }));
    expect(submitButton).toBeDisabled();
    const form = submitButton.closest('form');
    if (!form) {
      throw new Error('Fant ikke refusjonsskjemaet');
    }
    await act(async () => fireEvent.submit(form));
    expect(submitCallback).not.toHaveBeenCalled();

    const åpenRadKnapp = screen.getAllByRole('button', { name: 'Vis mindre' })[0];
    await userEvent.click(åpenRadKnapp);
    expect(submitButton).toBeDisabled();
    await userEvent.click(screen.getAllByRole('button', { name: 'Vis mer' })[0]);
    const gjenåpnetRad = getÅpentRadInnhold('Brunostfabrikken AS');
    expect(within(gjenåpnetRad).getByRole('radio', { name: /Nei/ })).toBeChecked();

    await userEvent.click(within(gjenåpnetRad).getByRole('radio', { name: 'Årsak 1' }));
    expect(submitButton).toBeDisabled();
    await userEvent.click(within(gjenåpnetRad).getByRole('button', { name: 'Lagre' }));
    expect(submitButton).toBeDisabled();

    const nordlysRad = getÅpentRadInnhold('Nordlys Teknologi AS');
    await userEvent.click(within(nordlysRad).getByRole('radio', { name: 'Ja' }));
    await userEvent.click(within(nordlysRad).getByRole('button', { name: 'Lagre' }));
    expect(submitButton).toBeEnabled();

    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(submitCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          refusjonskrav: expect.arrayContaining([
            expect.objectContaining({
              arbeidsgiverIdent: '999999999',
              perioder: expect.arrayContaining([expect.objectContaining({ utfall: 'AVSLÅTT', utfallÅrsak: 'ÅRSAK1' })]),
            }),
          ]),
        }),
      );
    });
  });

  it('viser registrerte utfall uten mulighet til å åpne ferdigvurderte rader', async () => {
    const refusjonsandeler = refusjonsandelerForTreArbeidsgivere.map(andel => ({
      ...andel,
      refusjonsperioder: andel.refusjonsperioder.map(periode =>
        periode.fom === '2025-01-01' ? { ...periode, utfall: 'REDUSERT' as const } : periode,
      ),
    }));
    renderForm({ refusjonsandeler });

    const brunostRader = screen
      .getAllByText('Brunostfabrikken AS')
      .map(navn => navn.closest('tr'))
      .filter((rad): rad is HTMLTableRowElement => rad !== null);
    expect(brunostRader).toHaveLength(2);
    for (const rad of brunostRader) {
      expect(within(rad).queryByRole('button', { name: /Vis mer|Vis mindre/ })).not.toBeInTheDocument();
    }
    expect(within(brunostRader[0]).getByText('Redusert')).toBeInTheDocument();
    expect(within(brunostRader[1]).getByText('Innvilget')).toBeInTheDocument();
    await userEvent.click(within(brunostRader[0]).getByText('Redusert'));
    expect(within(brunostRader[0]).queryByRole('button', { name: /Vis mer|Vis mindre/ })).not.toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Vis mindre' })).toHaveLength(1);
    expect(screen.queryAllByRole('button', { name: 'Vis mer' })).toHaveLength(0);

    const nordlysRad = getÅpentRadInnhold('Nordlys Teknologi AS');
    await userEvent.click(within(nordlysRad).getByRole('radio', { name: 'Ja' }));
    await userEvent.click(within(nordlysRad).getByRole('button', { name: 'Lagre' }));
    expect(screen.getAllByRole('button', { name: /Vis mer|Vis mindre/ })).toHaveLength(1);
    expect(screen.getByText('Redusert')).toBeInTheDocument();
  });

  it('lar saksbehandler åpne og endre et tidligere vurdert refusjonskrav', async () => {
    const refusjonsandeler = refusjonsandelerForTreArbeidsgivere.map(andel =>
      andel.arbeidsgiverIdent === '999999999' ? { ...andel, kilde: 'SAKSBEHANDLER' as const } : andel,
    );
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    renderForm({ refusjonsandeler, submitCallback });

    const førsteRad = getÅpentRadInnhold('Brunostfabrikken AS');
    await userEvent.click(within(førsteRad).getByRole('radio', { name: 'Ja' }));
    await userEvent.click(within(førsteRad).getByRole('button', { name: 'Lagre' }));
    const nordlysRad = getÅpentRadInnhold('Nordlys Teknologi AS');
    await userEvent.click(within(nordlysRad).getByRole('radio', { name: 'Ja' }));
    await userEvent.click(within(nordlysRad).getByRole('button', { name: 'Lagre' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Vurdert');
    const submitButton = screen.getByRole('button', { name: 'Bekreft og fortsett' });
    expect(submitButton).toBeEnabled();

    const brunostRader = screen
      .getAllByText('Brunostfabrikken AS')
      .map(navn => navn.closest('tr'))
      .filter((rad): rad is HTMLTableRowElement => rad !== null);
    expect(brunostRader).toHaveLength(2);
    expect(within(brunostRader[1]).getByRole('button', { name: 'Vis mer' })).toBeInTheDocument();
    await userEvent.click(within(brunostRader[1]).getByRole('button', { name: 'Vis mer' }));
    const åpnetRad = getÅpentRadInnhold('Brunostfabrikken AS');
    expect(within(åpnetRad).getByRole('radio', { name: 'Ja' })).toBeChecked();
    await userEvent.click(within(åpnetRad).getByRole('radio', { name: /Nei/ }));
    expect(submitButton).toBeDisabled();
    const form = submitButton.closest('form');
    if (!form) {
      throw new Error('Fant ikke refusjonsskjemaet');
    }
    await act(async () => fireEvent.submit(form));
    expect(submitCallback).not.toHaveBeenCalled();
    await userEvent.click(within(åpnetRad).getByRole('radio', { name: 'Årsak 1' }));
    await userEvent.click(within(åpnetRad).getByRole('button', { name: 'Lagre' }));
    expect(within(brunostRader[1]).getByRole('button', { name: 'Vis mer' })).toBeInTheDocument();
    expect(within(brunostRader[1]).getByText('Avslått')).toBeInTheDocument();
    expect(submitButton).toBeEnabled();

    await userEvent.click(within(brunostRader[1]).getByRole('button', { name: 'Vis mer' }));
    const redigertRad = getÅpentRadInnhold('Brunostfabrikken AS');
    expect(within(redigertRad).getByRole('radio', { name: /Nei/ })).toBeChecked();
    expect(within(redigertRad).getByRole('button', { name: 'Angre' })).toBeDisabled();
    expect(within(redigertRad).getByRole('button', { name: 'Lagre' })).toBeDisabled();
    await userEvent.click(within(redigertRad).getByRole('radio', { name: 'Ja' }));
    expect(submitButton).toBeDisabled();
    expect(within(redigertRad).getByRole('button', { name: 'Angre' })).toBeEnabled();
    expect(within(redigertRad).getByRole('button', { name: 'Lagre' })).toBeEnabled();
    await act(async () => fireEvent.submit(form));
    expect(submitCallback).not.toHaveBeenCalled();

    await userEvent.click(within(redigertRad).getByRole('button', { name: 'Angre' }));
    expect(within(redigertRad).getByRole('radio', { name: /Nei/ })).toBeChecked();
    expect(within(redigertRad).getByRole('radio', { name: 'Årsak 1' })).toBeChecked();
    expect(within(redigertRad).getByRole('button', { name: 'Angre' })).toBeDisabled();
    expect(within(redigertRad).getByRole('button', { name: 'Lagre' })).toBeDisabled();
    expect(submitButton).toBeEnabled();
    await userEvent.click(submitButton);
    await waitFor(() =>
      expect(submitCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          refusjonskrav: expect.arrayContaining([
            expect.objectContaining({
              arbeidsgiverIdent: '999999999',
              perioder: expect.arrayContaining([
                expect.objectContaining({ fom: '2025-04-01', utfall: 'AVSLÅTT', utfallÅrsak: 'ÅRSAK1' }),
              ]),
            }),
          ]),
        }),
      ),
    );
  });

  it('viser redusert utfall i tabellen, men lar saksbehandler bare velge ja eller nei', async () => {
    const refusjonsandeler = refusjonsandelerForTreArbeidsgivere.map(andel => ({
      ...andel,
      kilde: andel.arbeidsgiverIdent === '999999999' ? 'SAKSBEHANDLER' : andel.kilde,
      refusjonsperioder: andel.refusjonsperioder.map(periode =>
        periode.fom === '2025-01-01' ? { ...periode, utfall: 'REDUSERT' as const } : periode,
      ),
    }));
    renderForm({ refusjonsandeler });

    const brunostRad = screen.getAllByText('Brunostfabrikken AS')[0].closest('tr');
    if (!brunostRad) {
      throw new Error('Fant ikke raden for Brunostfabrikken');
    }
    await userEvent.click(within(brunostRad).getByRole('button', { name: 'Vis mer' }));
    const radInnhold = getÅpentRadInnhold('Brunostfabrikken AS');
    expect(within(brunostRad).getByText('Redusert')).toBeInTheDocument();
    expect(within(radInnhold).queryByRole('radio', { name: 'Redusert' })).not.toBeInTheDocument();
    expect(within(radInnhold).getByRole('radio', { name: 'Ja' })).not.toBeChecked();
    expect(within(radInnhold).getByRole('radio', { name: /Nei/ })).not.toBeChecked();
    expect(within(radInnhold).getByRole('button', { name: 'Lagre' })).toBeDisabled();
    await userEvent.click(within(radInnhold).getByRole('radio', { name: 'Ja' }));
    expect(within(radInnhold).getByRole('button', { name: 'Lagre' })).toBeEnabled();
    await userEvent.click(within(radInnhold).getByRole('button', { name: 'Angre' }));
    expect(within(radInnhold).getByRole('button', { name: 'Lagre' })).toBeDisabled();
    expect(within(brunostRad).getByText('Redusert')).toBeInTheDocument();
  });

  it('sender ikke inn et forhåndsvurdert avslag uten årsak', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    const refusjonsandeler = refusjonsandelerForTreArbeidsgivere.map(andel => ({
      ...andel,
      refusjonsperioder: andel.refusjonsperioder.map(periode =>
        periode.fom === '2025-01-01'
          ? { ...periode, utfall: 'AVSLÅTT' as const, utfallÅrsak: undefined }
          : { ...periode, utfall: 'INNVILGET' as const },
      ),
    }));
    renderForm({ refusjonsandeler, submitCallback });
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Vurdert');

    const submitButton = screen.getByRole('button', { name: 'Bekreft og fortsett' });
    expect(submitButton).toBeDisabled();
    const form = submitButton.closest('form');
    if (!form) {
      throw new Error('Fant ikke refusjonsskjemaet');
    }
    await act(async () => fireEvent.submit(form));
    expect(submitCallback).not.toHaveBeenCalled();
  });
});

const renderForm = (props: Partial<ComponentProps<typeof RefusjonskravForm>> = {}) =>
  render(
    <RefusjonskravForm
      aksjonspunkt={[{ kode: 'AVKLAR_REFUSJONSKRAV', status: 'OPPR' }]}
      refusjonsandeler={refusjonsandelerForTreArbeidsgivere}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      readOnly={false}
      submitCallback={vi.fn().mockResolvedValue(undefined)}
      setFormData={() => undefined}
      {...props}
    />,
    {
      wrapper: ({ children }) => <RawIntlProvider value={intl}>{children}</RawIntlProvider>,
    },
  );

const getÅpentRadInnhold = (arbeidsgiverNavn: string, åpenRadIndex = 0) => {
  const rad = screen
    .getAllByText(arbeidsgiverNavn)
    .map(arbeidsgiver => arbeidsgiver.closest('tr'))
    .filter(tabellrad => tabellrad?.querySelector('button[aria-expanded="true"]'))[åpenRadIndex];
  if (!rad) {
    throw new Error(`Fant ikke en åpen tabellrad for ${arbeidsgiverNavn}`);
  }

  const radKnapp = within(rad).getByRole('button', { name: 'Vis mindre' });
  expect(radKnapp).toHaveAttribute('aria-expanded', 'true');
  const radInnholdId = radKnapp.getAttribute('aria-controls');
  const radInnhold = radInnholdId ? document.getElementById(radInnholdId) : null;
  if (!radInnhold) {
    throw new Error(`Fant ikke radinnholdet for ${arbeidsgiverNavn}`);
  }
  return radInnhold;
};
