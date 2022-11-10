import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './BeregningsgrunnlagProsessIndex.stories';

const {
  ArbeidstakerMedAvvikAp5038,
  ArbeidstakerUtenAvvik,
  SelvstendigNæringsdrivendeMedAksjonspunktAp5039,
  MidlertidigInaktivMedAksjonspunktAp5054,
  SelvstendigNæringsdrivendNyIArbeidslivetAp5049,
  NaturalYtelse,
  TidsbegrensetArbeidsforholdMedAvvikAp5047,
  MangeTidsbegrensetArbeidsforholdMedAvvikFastsattAp5047,
  AvvikNæringEtterLøstAvvikArbeid5038Og5039,
  ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagKunEnTilVurderingAp5038,
} = composeStories(stories);

describe('<BeregningsgrunnlagProsessIndex>', () => {
  jest.setTimeout(15000);

  it('skal vise informasjon om arbeidstakerinntekt', async () => {
    render(<ArbeidstakerUtenAvvik />);
    expect(await screen.findByText('Skjæringstidspunkt for beregning')).toBeInTheDocument();
    expect(screen.getByText('01.01.2021')).toBeInTheDocument();
    expect(screen.getByText('Arbeidstaker')).toBeInTheDocument();
    expect(screen.queryByText('Frilanser.')).not.toBeInTheDocument();
    expect(screen.queryByText('Selvstendig Næringsdrivende')).not.toBeInTheDocument();

    // Årsgrunnlag arbeid
    expect(screen.getByText('Arbeidsinntekt')).toBeInTheDocument();
    expect(screen.getByText('BEDRIFT AS (999999996)')).toBeInTheDocument();
    expect(screen.getByText('Beregningsmann 100%')).toBeInTheDocument();
    expect(screen.getByText('28.11.2019 - 31.12.2070')).toBeInTheDocument();
    expect(screen.getByText('16 667')).toBeInTheDocument();

    // Sammenligningsgrunnlag
    expect(screen.getByText('Beregnet årsinntekt')).toBeInTheDocument();
    expect(screen.getByText('Sammenligningsgrunnlag')).toBeInTheDocument();
    expect(screen.getByText('Beregnet avvik')).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();

    // Beregningsresultat
    expect(screen.getByText('Beregningsgrunnlag - beregnet årsinntekt arbeid')).toBeInTheDocument();
    expect(screen.getByText('Redusert til 80% dekningsgrad')).toBeInTheDocument();
    expect(screen.getByText('Dagsats (360 000/260 dager)')).toBeInTheDocument();
    expect(screen.queryByText('Beregningsgrunnlag - beregnet årsinntekt frilans')).not.toBeInTheDocument();
    expect(screen.queryByText('Beregningsgrunnlag - beregnet årsinntekt næring')).not.toBeInTheDocument();
  });

  it('skal bekrefte aksjonspunkt for avvik', async () => {
    const lagre = jest.fn();

    const utils = render(<ArbeidstakerMedAvvikAp5038 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Årsgrunnlag arbeid
    expect(screen.getByText('Arbeidsinntekt')).toBeInTheDocument();
    expect(screen.getAllByText('BEDRIFT AS (999999996)')).toHaveLength(2);
    expect(screen.getByText('Beregningsmann 100%')).toBeInTheDocument();
    expect(screen.getByText('28.11.2019 - 31.12.2070')).toBeInTheDocument();
    expect(screen.getByText('16 667')).toBeInTheDocument();

    // Aksjonspunkt avvik
    expect(screen.getByText('Skjønnsmessig fastsettelse av årsinntekt ved avvik')).toBeInTheDocument();
    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    const bruttoFelt = alleInputfelt[0];
    const begrunnelseFelt = alleInputfelt[1];
    await userEvent.type(bruttoFelt, '260 000');
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
            inntektPrAndelList: [
              {
                andelsnr: 1,
                inntekt: 260000,
              },
            ],
            inntektFrilanser: null,
          },
        ],
        kode: '5038',
      },
    ]);
  });

  it('skal bekrefte aksjonspunkt for vurder varig endring selvstendig næringsdrivende', async () => {
    const lagre = jest.fn();

    const utils = render(<SelvstendigNæringsdrivendeMedAksjonspunktAp5039 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Årsgrunnlag næring
    expect(screen.getByText('3 siste ferdigliknede år fra skatteetaten')).toBeInTheDocument();
    expect(screen.getByText('2017')).toBeInTheDocument();
    expect(screen.getByText('2016')).toBeInTheDocument();
    expect(screen.getByText('2015')).toBeInTheDocument();
    expect(screen.getByText('124 412')).toBeInTheDocument();
    expect(screen.getByText('98 456')).toBeInTheDocument();
    expect(screen.getByText('9 861 482')).toBeInTheDocument();

    // Næringsopplysinger
    expect(screen.getByText('Gardslien transport og Gardiner AS')).toBeInTheDocument();
    expect(screen.getByText('Regnskapsfører Regn S. Fører-99999999')).toBeInTheDocument();
    expect(screen.getByText('Søker har oppgitt varig endring fra')).toBeInTheDocument();
    expect(screen.getByText('01.05.2016')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Jeg utvidet virksomheten fra en ren transportfirma til også å tilby gardiner.' +
          ' Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året',
      ),
    ).toBeInTheDocument();

    // Aksjonspunkt
    expect(screen.queryByText('Næringsinntekt fastsettes til')).not.toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Ingen varig endring'));
    await waitFor(() => expect(screen.queryByText('Næringsinntekt fastsettes til')).not.toBeInTheDocument());
    await userEvent.click(screen.getByLabelText('Varig endring - Årsinntekt må fastsettes.'));
    expect(await screen.findByText('Næringsinntekt fastsettes til')).toBeInTheDocument();
    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
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
        kode: '5039',
      },
    ]);
  });

  it('skal bekrefte aksjonspunkt for vurder varig endret arbeidssituasjon', async () => {
    const lagre = jest.fn();

    const utils = render(<MidlertidigInaktivMedAksjonspunktAp5054 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Årsgrunnlag næring
    expect(screen.getByText('3 siste ferdigliknede år fra skatteetaten')).toBeInTheDocument();
    expect(screen.getByText('2017')).toBeInTheDocument();
    expect(screen.getByText('2016')).toBeInTheDocument();
    expect(screen.getByText('2015')).toBeInTheDocument();
    expect(screen.getByText('124 412')).toBeInTheDocument();
    expect(screen.getByText('98 456')).toBeInTheDocument();
    expect(screen.getByText('9 861 482')).toBeInTheDocument();

    // Aksjonspunkt
    expect(screen.queryByText('Varig endret årsinntekt fastsettes til')).not.toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Ingen varig endring'));
    await waitFor(() => expect(screen.queryByText('Varig endret årsinntekt fastsettes til')).not.toBeInTheDocument());
    await userEvent.click(screen.getByLabelText('Varig endring - Årsinntekt må fastsettes.'));
    expect(await screen.findByText('Varig endret årsinntekt fastsettes til')).toBeInTheDocument();
    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
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
        kode: '5054',
      },
    ]);
  });

  it('skal bekrefte aksjonspunkt for ny i arbeidslivet selvstendig næringsdrivende', async () => {
    const lagre = jest.fn();

    const utils = render(<SelvstendigNæringsdrivendNyIArbeidslivetAp5049 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Næringsopplysinger
    expect(screen.getByText('Gardslien transport og Gardiner AS')).toBeInTheDocument();
    expect(screen.getByText('Regnskapsfører Regn S. Fører-99999999')).toBeInTheDocument();
    expect(screen.getByText('01.11.2015-')).toBeInTheDocument();

    // Aksjonspunkt
    expect(
      screen.getByText('Søker er ny i arbeidslivet. Det foretas derfor ingen avviksvurdering.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Skjønnsmessig fastsettelse av årsinntekt når søker er ny i arbeidslivet'),
    ).toBeInTheDocument();
    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
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
        kode: '5049',
      },
    ]);
  });

  it('skal ha korrekt visning ved naturalytelser', async () => {
    render(<NaturalYtelse />);
    expect(await screen.findByText('Skjæringstidspunkt for beregning')).toBeInTheDocument();
    expect(screen.getByText('Arbeidstaker')).toBeInTheDocument();
    expect(screen.queryByText('Frilanser.')).not.toBeInTheDocument();
    expect(screen.queryByText('Selvstendig Næringsdrivende')).not.toBeInTheDocument();

    expect(screen.getAllByText('Naturalytelser')).toHaveLength(5);

    expect(screen.getByText('01.01.2021 - 21.01.2021')).toBeInTheDocument();
    expect(screen.getByText('417')).toBeInTheDocument();

    expect(screen.getByText('22.01.2021 - 31.01.2021')).toBeInTheDocument();
    expect(screen.getByText('333')).toBeInTheDocument();

    expect(screen.getByText('01.02.2021 - 20.02.2021')).toBeInTheDocument();
    expect(screen.getByText('250')).toBeInTheDocument();

    expect(screen.getByText('21.02.2021 -')).toBeInTheDocument();
    expect(screen.getByText('167')).toBeInTheDocument();
  });

  it('skal bekrefte aksjonspunkt for avvik ved tidsbegrenset arbeidsforhold', async () => {
    const lagre = jest.fn();

    const utils = render(<TidsbegrensetArbeidsforholdMedAvvikAp5047 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Årsgrunnlag arbeid
    expect(screen.getAllByText('Andeby bank (999999999)')).toHaveLength(2);

    // Aksjonspunkt
    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    const bruttoFeltAg1P1 = alleInputfelt[0];

    const begrunnelseFelt = alleInputfelt[1];

    await userEvent.type(bruttoFeltAg1P1, '222 000');

    await userEvent.type(begrunnelseFelt, 'Min begrunnelse for tidsbegrenset inntekt');

    expect(await screen.findByText('222 000')).toBeInTheDocument();
    expect(screen.getAllByText('100 000')).toHaveLength(4);

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
                periodeFom: '2021-01-22',
                periodeTom: '2021-02-05',
                fastsatteTidsbegrensedeAndeler: [
                  {
                    andelsnr: 1,
                    bruttoFastsattInntekt: 222000,
                  },
                ],
              },
            ],
            frilansInntekt: null,
            begrunnelse: 'Min begrunnelse for tidsbegrenset inntekt',
          },
        ],
        begrunnelse: 'Min begrunnelse for tidsbegrenset inntekt',
        kode: '5047',
      },
    ]);
  });

  it('skal verifisere at fasatt grunnlag med perioder tidsbegrenset perioder utenfor vilkårsperiode vises riktig', async () => {
    const lagre = jest.fn();

    render(<MangeTidsbegrensetArbeidsforholdMedAvvikFastsattAp5047 submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Årsgrunnlag arbeid
    expect(screen.getAllByText('Andeby bank (999999999)')).toHaveLength(2);
    expect(screen.getAllByText('Gardslien transport og Gardiner AS (999999998)')).toHaveLength(2);
    expect(screen.getAllByText('Svaneby sykehjem (999999997)')).toHaveLength(2);

    // Aksjonspunkt
    expect(screen.getAllByText('5 000')).toHaveLength(2);
    expect(screen.getAllByText('250 000')).toHaveLength(2);
    expect(screen.getAllByText('100 000')).toHaveLength(2);
    expect(screen.getAllByText('355 000')).toHaveLength(5);
    expect(screen.getAllByText('4 500')).toHaveLength(3);

    expect(await screen.findByText('Beregning av dagsats')).toBeInTheDocument();
    expect(await screen.findByText('Periode 01.01.2021 - 16.01.2021')).toBeInTheDocument();
    expect(await screen.findByText('Periode 17.01.2021 - 21.01.2021')).toBeInTheDocument();
  });

  it('skal bekrefte akjonspunkt for varig endring når avik atfl er løst', async () => {
    const lagre = jest.fn();

    const utils = render(<AvvikNæringEtterLøstAvvikArbeid5038Og5039 submitCallback={lagre} />);

    expect(await screen.getAllByText('Bekreft og fortsett')).toHaveLength(2);
    const knappATFL = screen.getAllByRole('button', { name: 'Bekreft og fortsett' })[0];
    const knappNæring = screen.getAllByRole('button', { name: 'Bekreft og fortsett' })[1];

    expect(knappATFL).toBeDisabled();
    expect(knappNæring).toBeDisabled();

    // Årsgrunnlag arbeid
    expect(screen.getAllByText('BEDRIFT AS (999999996)')).toHaveLength(2);

    // Årgrunnlag næring
    expect(screen.getByText('3 siste ferdigliknede år fra skatteetaten')).toBeInTheDocument();
    expect(screen.getByText('2017')).toBeInTheDocument();
    expect(screen.getByText('2016')).toBeInTheDocument();
    expect(screen.getByText('2015')).toBeInTheDocument();
    expect(screen.getByText('124 412')).toBeInTheDocument();
    expect(screen.getByText('98 456')).toBeInTheDocument();
    expect(screen.getByText('9 861 482')).toBeInTheDocument();

    // Næringsopplysninger
    expect(screen.getByText('Opplysninger om næring fra søknad')).toBeInTheDocument();

    // Forklaring på manglende sammenligningsgrunnlag
    expect(screen.getByText('Det foretas ikke avviksvurdering på Dagpenger')).toBeInTheDocument();

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });

    // Avvik arbeid og frilans
    expect(screen.getByText('Avviksberegning for arbeidstaker og frilans')).toBeInTheDocument();
    expect(screen.getByText('Skjønnsmessig fastsettelse av årsinntekt ved avvik')).toBeInTheDocument();
    const bruttoAG1 = alleInputfelt[0];
    const bruttoFL1 = alleInputfelt[1];
    const begrunnelseATFL = alleInputfelt[2];

    expect(bruttoAG1).toHaveValue('200 000');
    expect(bruttoFL1).toHaveValue('100 000');
    expect(begrunnelseATFL).toHaveValue('Dette er løst');

    expect(screen.queryByText('Næringsinntekt fastsettes til')).not.toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Ingen varig endring'));
    await waitFor(() => expect(screen.queryByText('Næringsinntekt fastsettes til')).not.toBeInTheDocument());
    await userEvent.click(screen.getByLabelText('Varig endring - Årsinntekt må fastsettes.'));
    expect(await screen.findByText('Næringsinntekt fastsettes til')).toBeInTheDocument();

    const alleInputfeltEtterKlikk = utils.getAllByRole('textbox', { hidden: true });
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
        kode: '5039',
      },
    ]);
  });

  it('skal sette første kronologiske skjæringstidspunkt med aksjonspunkt som aktiv', () => {
    const lagre = jest.fn();
    const { getByTestId } = render(
      <ArbeidstakerMedAvvikOgFlereBeregningsgrunnlagKunEnTilVurderingAp5038 submitCallback={lagre} />,
    );
    expect(getByTestId('activeMenuItemButton')).toHaveTextContent('01.02.2021');
    expect(getByTestId('activeMenuItemButton')).not.toHaveTextContent('01.01.2021');
  });
});
