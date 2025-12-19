import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './LegacyAPForms.stories';

const {
  ArbeidstakerMedAvvikAp5038,
  SelvstendigNæringsdrivendeMedAksjonspunktAp5039,
  MidlertidigInaktivMedAksjonspunktAp5054,
  SelvstendigNæringsdrivendNyIArbeidslivetAp5049,
  TidsbegrensetArbeidsforholdMedAvvikAp5047,
  AvvikNæringEtterLøstAvvikArbeid5038Og5039,
  ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagKunEnTilVurderingAp5038,
} = composeStories(stories);

const scrollIntoViewMock = vi.fn();
globalThis.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

describe('LegacyAPForms', () => {
  it('skal bekrefte aksjonspunkt for avvik', async () => {
    const lagre = vi.fn();

    render(<ArbeidstakerMedAvvikAp5038 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Årsgrunnlag arbeid
    expect(screen.getByText('Arbeidsinntekt')).toBeInTheDocument();
    expect(screen.getAllByText('BEDRIFT AS (999999996)')).toHaveLength(2);
    await userEvent.click(screen.getAllByText('BEDRIFT AS (999999996)')[0]);
    expect(screen.getByText('28.11.2019 - 31.12.2070')).toBeInTheDocument();

    // Aksjonspunkt avvik
    expect(screen.getByText('Fastsett årsinntekt skjønnsmessig for arbeidstaker')).toBeInTheDocument();
    const alleInputfelt = screen.getAllByRole('textbox', { hidden: true });
    await userEvent.type(alleInputfelt[0], '260 000');
    await userEvent.type(alleInputfelt[1], 'Min begrunnelse for inntekt');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Min begrunnelse for inntekt',
        grunnlag: [
          {
            periode: {
              fom: '2021-01-01',
              tom: '2021-01-21',
            },
            begrunnelse: 'Min begrunnelse for inntekt',
            inntektPrAndelList: [
              {
                andelsnr: 1,
                inntekt: 260000,
              },
            ],
            inntektFrilanser: null,
          },
        ],
        kode: 'FASTSETT_BG_AT_FL',
      },
    ]);
  });

  it('skal bekrefte aksjonspunkt for vurder varig endring selvstendig næringsdrivende', async () => {
    const lagre = vi.fn();

    render(<SelvstendigNæringsdrivendeMedAksjonspunktAp5039 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Aksjonspunkt
    expect(screen.queryByText('Næringsinntekt fastsettes til')).not.toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Ingen varig endring'));
    await waitFor(() => expect(screen.queryByText('Næringsinntekt fastsettes til')).not.toBeInTheDocument());
    await userEvent.click(screen.getByLabelText('Varig endring - årsinntekt må fastsettes.'));
    expect(await screen.findByText('Næringsinntekt fastsettes til')).toBeInTheDocument();
    const alleInputfelt = screen.getAllByRole('textbox', { hidden: true });
    const bruttoFelt = alleInputfelt[0];
    const begrunnelseFelt = alleInputfelt[1];
    await userEvent.type(bruttoFelt, '260 000');
    await userEvent.type(begrunnelseFelt, 'Min begrunnelse for vurdering av varig endring');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Min begrunnelse for vurdering av varig endring',
        grunnlag: [
          {
            periode: {
              fom: '2021-01-01',
              tom: '2021-01-21',
            },
            begrunnelse: 'Min begrunnelse for vurdering av varig endring',
            bruttoBeregningsgrunnlag: 260000,
            erVarigEndretNaering: true,
            erVarigEndret: true,
          },
        ],
        kode: 'VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN',
      },
    ]);
  });

  it('skal bekrefte aksjonspunkt for vurder varig endret arbeidssituasjon', async () => {
    const lagre = vi.fn();

    render(<MidlertidigInaktivMedAksjonspunktAp5054 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Aksjonspunkt
    expect(screen.queryByText('Varig endret årsinntekt fastsettes til')).not.toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Ingen varig endring'));
    await waitFor(() => expect(screen.queryByText('Varig endret årsinntekt fastsettes til')).not.toBeInTheDocument());
    await userEvent.click(screen.getByLabelText('Varig endring - årsinntekt må fastsettes.'));
    expect(await screen.findByText('Varig endret årsinntekt fastsettes til')).toBeInTheDocument();
    const alleInputfelt = screen.getAllByRole('textbox', { hidden: true });
    const bruttoFelt = alleInputfelt[0];
    const begrunnelseFelt = alleInputfelt[1];
    await userEvent.type(bruttoFelt, '260 000');
    await userEvent.type(begrunnelseFelt, 'Min begrunnelse for vurdering av varig endring');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Min begrunnelse for vurdering av varig endring',
        grunnlag: [
          {
            periode: {
              fom: '2021-01-01',
              tom: '2021-01-21',
            },
            begrunnelse: 'Min begrunnelse for vurdering av varig endring',
            bruttoBeregningsgrunnlag: 260000,
            erVarigEndretNaering: true,
            erVarigEndret: true,
          },
        ],
        kode: 'VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV',
      },
    ]);
  });

  it('skal bekrefte aksjonspunkt for ny i arbeidslivet selvstendig næringsdrivende', async () => {
    const lagre = vi.fn();

    render(<SelvstendigNæringsdrivendNyIArbeidslivetAp5049 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Aksjonspunkt
    expect(
      screen.getByText('Søker har oppgitt å være ny i arbeidslivet (blitt yrkesaktiv siste tre år).'),
    ).toBeInTheDocument();

    const alleInputfelt = screen.getAllByRole('textbox', { hidden: true });
    const bruttoFelt = alleInputfelt[0];
    const begrunnelseFelt = alleInputfelt[1];
    await userEvent.type(bruttoFelt, '500 000');
    await userEvent.type(begrunnelseFelt, 'Min begrunnelse for inntekt');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        begrunnelse: 'Min begrunnelse for inntekt',
        grunnlag: [
          {
            periode: {
              fom: '2021-01-01',
              tom: '2021-01-21',
            },
            begrunnelse: 'Min begrunnelse for inntekt',
            bruttoBeregningsgrunnlag: 500000,
          },
        ],
        kode: 'FASTSETT_BG_SN_NY_I_ARB_LIVT',
      },
    ]);
  });

  it('skal bekrefte aksjonspunkt for avvik ved tidsbegrenset arbeidsforhold', async () => {
    const lagre = vi.fn();

    render(<TidsbegrensetArbeidsforholdMedAvvikAp5047 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Årsgrunnlag arbeid
    expect(screen.getAllByText('Andeby bank (999999999)')).toHaveLength(2);

    // Aksjonspunkt
    const alleInputfelt = screen.getAllByRole('textbox', { hidden: true });
    const bruttoFeltAg1P1 = alleInputfelt[0];
    const bruttoFeltAg1P2 = alleInputfelt[1];

    const begrunnelseFelt = alleInputfelt[2];

    await userEvent.type(bruttoFeltAg1P1, '222 000');
    await userEvent.type(bruttoFeltAg1P2, '150 000');

    await userEvent.type(begrunnelseFelt, 'Min begrunnelse for tidsbegrenset inntekt');

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeEnabled();
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        grunnlag: [
          {
            periode: {
              fom: '2021-01-01',
              tom: '2021-01-21',
            },
            fastsatteTidsbegrensedePerioder: [
              {
                periodeFom: '2021-01-01',
                periodeTom: '2021-01-21',
                fastsatteTidsbegrensedeAndeler: [
                  {
                    andelsnr: 1,
                    bruttoFastsattInntekt: 222000,
                  },
                ],
              },
              {
                periodeFom: '2021-01-22',
                periodeTom: '2021-02-05',
                fastsatteTidsbegrensedeAndeler: [
                  {
                    andelsnr: 1,
                    bruttoFastsattInntekt: 150000,
                  },
                ],
              },
            ],
            frilansInntekt: null,
            begrunnelse: 'Min begrunnelse for tidsbegrenset inntekt',
          },
        ],
        begrunnelse: 'Min begrunnelse for tidsbegrenset inntekt',
        kode: 'FASTSETT_BG_TB_ARB',
      },
    ]);
  });

  it('skal bekrefte akjonspunkt for varig endring når avik atfl er løst', async () => {
    const lagre = vi.fn();

    render(<AvvikNæringEtterLøstAvvikArbeid5038Og5039 submitCallback={lagre} />);

    expect(await screen.getAllByText('Bekreft og fortsett')).toHaveLength(2);
    const knappATFL = screen.getAllByRole('button', { name: 'Bekreft og fortsett' })[0];
    const knappNæring = screen.getAllByRole('button', { name: 'Bekreft og fortsett' })[1];

    expect(knappATFL).toBeDisabled();
    expect(knappNæring).toBeDisabled();

    // Årsgrunnlag arbeid
    expect(screen.getAllByText('BEDRIFT AS (999999996)')).toHaveLength(2);

    const alleInputfelt = screen.getAllByRole('textbox', { hidden: true });

    // Avvik arbeid og frilans
    expect(screen.getByText('Fastsett årsinntekt skjønnsmessig for arbeidstaker og frilans')).toBeInTheDocument();
    expect(
      screen.getByText('Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget.'),
    ).toBeInTheDocument();
    const bruttoAG1 = alleInputfelt[0];
    const bruttoFL1 = alleInputfelt[1];
    const begrunnelseATFL = alleInputfelt[2];

    expect(bruttoAG1).toHaveValue('200 000');
    expect(bruttoFL1).toHaveValue('100 000');
    expect(begrunnelseATFL).toHaveValue('Dette er løst');

    expect(screen.queryByText('Næringsinntekt fastsettes til')).not.toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Ingen varig endring'));
    await waitFor(() => expect(screen.queryByText('Næringsinntekt fastsettes til')).not.toBeInTheDocument());
    await userEvent.click(screen.getByLabelText('Varig endring - årsinntekt må fastsettes.'));
    expect(await screen.findByText('Næringsinntekt fastsettes til')).toBeInTheDocument();

    const alleInputfeltEtterKlikk = screen.getAllByRole('textbox', { hidden: true });
    const bruttoNæringFelt = alleInputfeltEtterKlikk[4];
    const begrunnelseNæringFelt = alleInputfeltEtterKlikk[5];
    await userEvent.type(bruttoNæringFelt, '260 000');
    await userEvent.type(begrunnelseNæringFelt, 'Min begrunnelse for vurdering av varig endring');
    await expect(knappNæring).toBeEnabled();
    await expect(knappATFL).toBeDisabled();

    expect(screen.getAllByText('Bekreft og fortsett')[1]).toBeEnabled();
    await userEvent.click(screen.getAllByText('Bekreft og fortsett')[1]);

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        grunnlag: [
          {
            periode: {
              fom: '2021-01-01',
              tom: '2021-01-21',
            },
            erVarigEndretNaering: true,
            erVarigEndret: true,
            bruttoBeregningsgrunnlag: 260000,
            begrunnelse: 'Min begrunnelse for vurdering av varig endring',
          },
        ],
        begrunnelse: 'Min begrunnelse for vurdering av varig endring',
        kode: 'VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN',
      },
    ]);
  });

  it('skal sette første kronologiske skjæringstidspunkt med aksjonspunkt som aktiv', () => {
    const lagre = vi.fn();
    render(<ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagKunEnTilVurderingAp5038 submitCallback={lagre} />);
    expect(screen.getByRole('tab', { name: '01.02.2021' })).toHaveAttribute('data-state', 'active');
    expect(screen.getByRole('tab', { name: '01.01.2021' })).toHaveAttribute('data-state', 'inactive');
  });
});
