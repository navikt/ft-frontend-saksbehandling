import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor, within } from '@testing-library/react';
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

describe('LegacyAPForms', () => {
  it('skal bekrefte aksjonspunkt for avvik', async () => {
    const lagre = vi.fn();

    render(<ArbeidstakerMedAvvikAp5038 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('Arbeidsinntekt')).toBeInTheDocument();
    await userEvent.click(screen.getByText('TROSSIG NATURSTRIDIG TIGER AS (222222222)'));
    expect(screen.getByText('28.11.2019 - 31.12.2070')).toBeInTheDocument();

    // Aksjonspunkt avvik
    const aksjonspunktBoks_FASTSETT_BG_AT_FL = within(screen.getByTestId('AksjonspunktBoks-FASTSETT_BG_AT_FL'));

    expect(
      aksjonspunktBoks_FASTSETT_BG_AT_FL.getByText('Fastsett årsinntekt skjønnsmessig for arbeidstaker'),
    ).toBeInTheDocument();
    const arbeidsinntektInput = aksjonspunktBoks_FASTSETT_BG_AT_FL.getByLabelText(
      'Arbeidsinntekt fra TROSSIG NATURSTRIDIG TIGER AS (222222222) fastsettes til',
    );
    const begrunnelseInput = aksjonspunktBoks_FASTSETT_BG_AT_FL.getByLabelText('Vurdering');
    await userEvent.type(arbeidsinntektInput, '260 000');
    await userEvent.type(begrunnelseInput, 'Min begrunnelse for inntekt');

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
    expect(screen.queryByText('Næringsinntekt fastsettes til')).not.toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Varig endring - Årsinntekt må fastsettes'));

    const næringsinntektInput = screen.getByLabelText('Næringsinntekt fastsettes til');
    const begrunnelseInput = screen.getByLabelText('Vurdering');
    await userEvent.type(næringsinntektInput, '260 000');
    await userEvent.type(begrunnelseInput, 'Min begrunnelse for vurdering av varig endring');

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
    await userEvent.click(screen.getByLabelText('Varig endring - Årsinntekt må fastsettes'));

    const varigendretÅrsinntektInput = screen.getByLabelText('Varig endret årsinntekt fastsettes til');
    const begrunnelseInput = screen.getByLabelText('Vurdering');
    await userEvent.type(varigendretÅrsinntektInput, '260 000');
    await userEvent.type(begrunnelseInput, 'Min begrunnelse for vurdering av varig endring');

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
      screen.getByText('Søker har oppgitt å være ny i arbeidslivet (blitt yrkesaktiv siste tre år)'),
    ).toBeInTheDocument();

    const næringsinntektInput = screen.getByLabelText('Næringsinntekt fastsettes til');
    const begrunnelseInput = screen.getByLabelText('Vurdering');
    await userEvent.type(næringsinntektInput, '500 000');
    await userEvent.type(begrunnelseInput, 'Min begrunnelse for inntekt');

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
    expect(screen.getAllByText('SAUEFABRIKK (333333333)')).toHaveLength(2);

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
    const aksjonspunktBoks_FASTSETT_BG_AT_FL = within(screen.getByTestId('AksjonspunktBoks-FASTSETT_BG_AT_FL'));

    const aksjonspunktBoks_VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN = within(
      screen.getByTestId('AksjonspunktBoks-VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN'),
    );

    expect(await screen.getAllByText('Bekreft og fortsett')).toHaveLength(2);
    const knappATFL = aksjonspunktBoks_FASTSETT_BG_AT_FL.getByRole('button', { name: 'Bekreft og fortsett' });
    const knappNæring = aksjonspunktBoks_VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN.getByRole('button', {
      name: 'Bekreft og fortsett',
    });

    expect(knappATFL).toBeDisabled();
    expect(knappNæring).toBeDisabled();

    // Årsgrunnlag arbeid
    expect(screen.getByText('TROSSIG NATURSTRIDIG TIGER AS (222222222)')).toBeInTheDocument();

    // Avvik arbeid og frilans
    expect(
      aksjonspunktBoks_FASTSETT_BG_AT_FL.getByText('Fastsett årsinntekt skjønnsmessig for arbeidstaker og frilans'),
    ).toBeInTheDocument();
    expect(
      aksjonspunktBoks_FASTSETT_BG_AT_FL.getByText(
        'Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget',
      ),
    ).toBeInTheDocument();

    expect(
      aksjonspunktBoks_FASTSETT_BG_AT_FL.getByLabelText(
        'Arbeidsinntekt fra TROSSIG NATURSTRIDIG TIGER AS (222222222) fastsettes til',
      ),
    ).toHaveValue('200 000');
    expect(aksjonspunktBoks_FASTSETT_BG_AT_FL.getByLabelText('Frilansinntekt fastsettes til')).toHaveValue('100 000');
    expect(aksjonspunktBoks_FASTSETT_BG_AT_FL.getByLabelText('Vurdering')).toHaveValue('Dette er løst');

    expect(
      aksjonspunktBoks_VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN.queryByText('Næringsinntekt fastsettes til'),
    ).not.toBeInTheDocument();
    await userEvent.click(aksjonspunktBoks_VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN.getByLabelText('Ingen varig endring'));
    await waitFor(() =>
      expect(
        aksjonspunktBoks_VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN.queryByText('Næringsinntekt fastsettes til'),
      ).not.toBeInTheDocument(),
    );
    await userEvent.click(
      aksjonspunktBoks_VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN.getByLabelText('Varig endring - Årsinntekt må fastsettes'),
    );
    expect(
      await aksjonspunktBoks_VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN.findByText('Næringsinntekt fastsettes til'),
    ).toBeInTheDocument();

    const bruttoNæringFelt = aksjonspunktBoks_VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN.getByLabelText(
      'Næringsinntekt fastsettes til',
    );
    const begrunnelseNæringFelt = aksjonspunktBoks_VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN.getByLabelText('Vurdering');

    await userEvent.type(bruttoNæringFelt, '260 000');
    await userEvent.type(begrunnelseNæringFelt, 'Min begrunnelse for vurdering av varig endring');
    expect(knappNæring).toBeEnabled();
    expect(knappATFL).toBeDisabled();

    await userEvent.click(knappNæring);

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
