import { composeStories } from '@storybook/react-vite';
import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { FaktaRefusjonIndex } from './FaktaRefusjonIndex';
import * as stories from './FaktaRefusjonIndex.stories';

const { SaksbehandlerUtenTidligereOverstyring, Førstegangsoverstyring } = composeStories(stories);

const getTidslinjePerioder = () =>
  within(screen.getByRole('region', { name: 'Utbetaling' }))
    .getAllByRole('listitem')
    .map(periode => within(periode).getAllByRole('button')[0]);

describe('FaktaRefusjonIndex', () => {
  it.each([
    { index: 0, periode: '01.01.2025 - 31.03.2025', beløp: /42\s000/ },
    { index: 1, periode: '01.04.2025 -', beløp: /37\s500/ },
  ])('viser datoer og månedsbeløp ved hover på tidslinjeperiode $index', async ({ index, periode, beløp }) => {
    render(<Førstegangsoverstyring />);
    await userEvent.hover(getTidslinjePerioder()[index]);

    const tooltip = within(await screen.findByRole('dialog', {}, { timeout: 2000 }));
    expect(tooltip.getByText('Periode')).toBeVisible();
    expect(tooltip.getByText(periode)).toBeVisible();
    expect(tooltip.getByText('Refusjonsbeløp per måned')).toBeVisible();
    expect(tooltip.getByText(beløp)).toHaveTextContent('kr');
    expect(tooltip.queryByText(/9999/)).not.toBeInTheDocument();
  });

  it('viser standardpanelet uten overstyringsrolle eller tidligere overstyring', () => {
    render(<SaksbehandlerUtenTidligereOverstyring />);

    expect(screen.getByRole('heading', { name: 'Fakta om refusjon' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Overstyr' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Avbryt overstyring' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Bekreft og fortsett' })).not.toBeInTheDocument();
    expect(screen.queryByRole('textbox', { name: 'Begrunnelse' })).not.toBeInTheDocument();
  });

  it('åpner alle rader ved aktivering og lar dem lukkes enkeltvis', async () => {
    render(<Førstegangsoverstyring />);

    expect(screen.getByRole('heading', { level: 2, name: 'Fakta om refusjon' })).toBeInTheDocument();
    expect(screen.queryByText('Vurder refusjonskrav uten registrert utfall')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Utbetaling' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Refusjonskrav' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Overstyr' })).toBeVisible();
    expect(screen.queryByRole('button', { name: 'Bekreft og fortsett' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Avbryt overstyring' })).not.toBeInTheDocument();
    expect(screen.queryByRole('textbox', { name: 'Begrunnelse' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Vis mer' })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeDisabled();
    expect(screen.queryByRole('button', { name: 'Overstyr' })).not.toBeInTheDocument();
    expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    expect(
      within(screen.getByRole('row', { name: /Brunostfabrikken AS/ })).getByRole('button', { name: 'Vis mindre' }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Vis mindre' })).toHaveLength(3);
    expect(screen.getByRole('textbox', { name: 'Begrunnelse' })).toBeInTheDocument();
    expect(screen.getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })).toHaveLength(4);
    await userEvent.click(
      within(screen.getByRole('row', { name: /Brunostfabrikken AS/ })).getByRole('button', { name: 'Vis mindre' }),
    );
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
    expect(screen.getAllByRole('button', { name: 'Vis mindre' })).toHaveLength(2);
    expect(
      within(screen.getByRole('row', { name: /Brunostfabrikken AS/ })).getByRole('button', { name: 'Vis mer' }),
    ).toBeInTheDocument();
    await userEvent.click(getTidslinjePerioder()[0]);
    expect(screen.getAllByRole('button', { name: 'Vis mindre' })).toHaveLength(3);
    expect(screen.getAllByRole('textbox', { name: 'Refusjonsbeløp per måned' })).toHaveLength(4);
  });

  it('lar førstegangsoverstyring aktiveres, avbrytes og aktiveres på nytt', async () => {
    render(<Førstegangsoverstyring />);

    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    expect(screen.getByRole('button', { name: 'Avbryt overstyring' })).toBeVisible();
    expect(screen.getAllByRole('button', { name: 'Vis mindre' })).toHaveLength(3);
    expect(screen.queryByRole('button', { name: 'Overstyr' })).not.toBeInTheDocument();
    await userEvent.click(
      within(screen.getByRole('row', { name: /Brunostfabrikken AS/ })).getByRole('button', { name: 'Vis mindre' }),
    );

    await userEvent.click(screen.getByRole('button', { name: 'Avbryt overstyring' }));
    expect(screen.getByRole('button', { name: 'Overstyr' })).toBeVisible();
    expect(screen.queryByRole('button', { name: 'Avbryt overstyring' })).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    expect(screen.getByRole('button', { name: 'Avbryt overstyring' })).toBeVisible();
    expect(screen.getAllByRole('button', { name: 'Vis mindre' })).toHaveLength(3);
  });

  it('sender førstegangsoverstyring uten aksjonspunkt og mottar utført aksjonspunkt etterpå', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    const props = { ...stories.default.args, submitCallback };
    const { rerender } = render(<FaktaRefusjonIndex {...props} />);

    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    expect(screen.getByRole('button', { name: 'Avbryt overstyring' })).toBeInTheDocument();
    const innhold = within(
      within(getÅpentAndelInnhold('Brunostfabrikken AS')).getByRole('region', { name: 'Periode 1' }),
    );
    const beløp = innhold.getByRole('textbox', { name: 'Refusjonsbeløp per måned' });
    await userEvent.clear(beløp);
    await userEvent.type(beløp, '50000');
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Første overstyring');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));

    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));
    expect(submitCallback).toHaveBeenCalledWith(
      expect.objectContaining({
        '@type': 'OVERSTYR_REFUSJONSKRAV',
        kode: 'OVERSTYR_REFUSJONSKRAV',
        begrunnelse: 'Første overstyring',
        refusjonskrav: expect.arrayContaining([
          expect.objectContaining({
            arbeidsgiverIdent: '999999999',
            perioder: expect.arrayContaining([expect.objectContaining({ refusjonsbeløpPrMnd: 50000 })]),
          }),
        ]),
      }),
    );

    rerender(
      <FaktaRefusjonIndex
        {...props}
        aksjonspunkt={[{ kode: 'OVERSTYR_REFUSJONSKRAV', status: 'UTFO', begrunnelse: 'Første overstyring' }]}
      />,
    );

    expect(screen.queryByRole('button', { name: 'Avbryt overstyring' })).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Begrunnelse' })).toHaveValue('Første overstyring');
    expect(
      within(getÅpentAndelInnhold('Brunostfabrikken AS')).getAllByRole('textbox', {
        name: 'Refusjonsbeløp per måned',
      })[0],
    ).toHaveValue('50000');
    await waitFor(() => expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeEnabled());
  });

  it('viser oppdatert refusjonsgrunnlag når backend bytter kilde etter innsending', async () => {
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    const props = { ...stories.default.args, submitCallback };
    const { rerender } = render(<FaktaRefusjonIndex {...props} />);
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    const beløp = within(getÅpentAndelInnhold('Brunostfabrikken AS')).getAllByRole('textbox', {
      name: 'Refusjonsbeløp per måned',
    })[0];
    await userEvent.clear(beløp);
    await userEvent.type(beløp, '50000');
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Første overstyring');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(submitCallback).toHaveBeenCalledTimes(1));

    rerender(
      <FaktaRefusjonIndex
        {...props}
        aksjonspunkt={[{ kode: 'OVERSTYR_REFUSJONSKRAV', status: 'UTFO', begrunnelse: 'Vurdert av backend' }]}
        refusjonsandeler={props.refusjonsandeler.map((andel, index) =>
          index === 0
            ? {
                ...andel,
                kilde: 'SAKSBEHANDLER',
                refusjonsperioder: andel.refusjonsperioder.map(periode => ({ ...periode, refusjonPrMnd: 51000 })),
              }
            : andel,
        )}
      />,
    );

    const rad = within(screen.getByRole('row', { name: /Brunostfabrikken AS/ }));
    expect(rad.getByText('Overstyrt')).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'Begrunnelse' })).toHaveValue('Vurdert av backend');
    expect(screen.queryByRole('button', { name: 'Avbryt overstyring' })).not.toBeInTheDocument();
    await userEvent.click(rad.getByRole('button', { name: 'Vis mer' }));
    expect(
      within(getÅpentAndelInnhold('Brunostfabrikken AS')).getAllByRole('textbox', {
        name: 'Refusjonsbeløp per måned',
      })[0],
    ).toHaveValue('51000');
  });

  const getÅpentAndelInnhold = (arbeidsgiverNavn: string) => {
    const rad = screen.getByRole('row', { name: new RegExp(arbeidsgiverNavn) });
    const innholdId = within(rad).getByRole('button', { name: 'Vis mindre' }).getAttribute('aria-controls');
    const innhold = innholdId ? document.getElementById(innholdId) : null;
    if (!innhold) {
      throw new Error(`Fant ikke radinnholdet for ${arbeidsgiverNavn}`);
    }
    return innhold;
  };

  it.each([
    { readOnly: false, erOverstyrer: false },
    { readOnly: true, erOverstyrer: true },
  ])(
    'åpner riktig inntektsmelding med mus og tastatur uten redigeringstilgang: $readOnly / $erOverstyrer',
    async props => {
      const åpneDokument = vi.fn();
      render(
        <Førstegangsoverstyring
          {...props}
          åpneDokument={åpneDokument}
          aksjonspunkt={[{ kode: 'OVERSTYR_REFUSJONSKRAV', status: 'UTFO', begrunnelse: 'Tidligere overstyrt' }]}
        />,
      );

      const brunostRad = screen.getByRole('row', { name: /Brunostfabrikken AS/ });
      const ostehøvelRad = screen.getByRole('row', { name: /Ostehøvel Outlet AS/ });
      const nordlysRad = screen.getByRole('row', { name: /Nordlys Teknologi AS/ });
      const brunostKnapp = within(brunostRad).getByRole('button', {
        name: 'Inntektsmelding',
      });
      const ostehøvelKnapp = within(ostehøvelRad).getByRole('button', {
        name: 'Endret inntektsmelding',
      });
      expect(screen.getAllByRole('button', { name: /inntektsmelding/i })).toHaveLength(2);
      expect(brunostKnapp.querySelector('svg')).toBeInTheDocument();
      expect(within(nordlysRad).queryByRole('button', { name: /inntektsmelding/i })).not.toBeInTheDocument();

      await userEvent.click(brunostKnapp);
      expect(åpneDokument).toHaveBeenNthCalledWith(1, '123456789', '111111111');
      expect(within(brunostRad).getByRole('button', { name: 'Vis mer' })).toBeInTheDocument();

      await act(async () => ostehøvelKnapp.focus());
      await userEvent.keyboard('{Enter}');
      expect(åpneDokument).toHaveBeenNthCalledWith(2, '123456790', '222222222');
      expect(åpneDokument).toHaveBeenCalledTimes(2);
      expect(within(ostehøvelRad).getByRole('button', { name: 'Vis mer' })).toBeInTheDocument();

      await userEvent.click(within(brunostRad).getByRole('button', { name: 'Vis mer' }));
      expect(screen.queryByRole('textbox', { name: 'Periode fra og med' })).not.toBeInTheDocument();
      expect(screen.queryByRole('textbox', { name: 'Refusjonsbeløp per måned' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Legg til periode' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Bekreft og fortsett' })).not.toBeInTheDocument();
      await userEvent.click(brunostKnapp);
      expect(åpneDokument).toHaveBeenCalledTimes(3);
      expect(within(brunostRad).getByRole('button', { name: 'Vis mindre' })).toBeInTheDocument();
    },
  );

  it('sender ikke inn overstyringen når saksbehandler åpner en inntektsmelding', async () => {
    const åpneDokument = vi.fn();
    const submitCallback = vi.fn().mockResolvedValue(undefined);
    render(<Førstegangsoverstyring åpneDokument={åpneDokument} submitCallback={submitCallback} />);
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Overstyrt');
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeEnabled();

    await userEvent.click(
      within(screen.getByRole('row', { name: /Brunostfabrikken AS/ })).getByRole('button', {
        name: 'Inntektsmelding',
      }),
    );
    expect(åpneDokument).toHaveBeenCalledWith('123456789', '111111111');
    expect(submitCallback).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' })).toBeEnabled();
  });

  it.each([
    { dokumenter: [] },
    { dokumenter: [{ journalpostId: 'ukjent-journalpost', dokumentId: '444444444', tittel: 'Inntektsmelding' }] },
  ])('viser ingen dokumentknapp uten samsvarende journalpost: $dokumenter', ({ dokumenter }) => {
    const åpneDokument = vi.fn();
    render(<Førstegangsoverstyring dokumenter={dokumenter} åpneDokument={åpneDokument} />);

    expect(screen.getByRole('row', { name: /Brunostfabrikken AS/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /inntektsmelding/i })).not.toBeInTheDocument();
    expect(åpneDokument).not.toHaveBeenCalled();
  });
});
