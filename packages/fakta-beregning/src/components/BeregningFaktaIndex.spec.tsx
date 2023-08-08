import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from '../BeregningFaktaIndex.stories';

const {
  ArbeidOgDagpengerAp5058,
  ArbeidOgDagpengerAp5058EnPeriode,
  ArbeidOgAAPAp5052,
  VurderingAvBesteberegningMedDagpengerIOpptjeningsperiodenAp5058,
  VisningAvOverstyrtAvklarAktiviteterUtenOverstyringsrettighet,
  ArbeidOgAAPMedUtførtAksjonspunktAp5052Ap5058,
  FastsettingAvBeregningsgrunnlagForKunYtelseAp5058,
  FrilansOgArbeidstakerISammeOrganisasjonAp5058,
  VurderOmBrukerMottarYtelseForFrilansAp5058,
  VurderingAvMilitærAp5058,
  TidsbegrensetArbeidsforholdAp5058,
  KanOverstyreBGUtenAvklaringsbehov,
} = composeStories(stories);

describe('<BeregningFaktaIndexSpec', () => {
  it('skal kunne løse aksjonspunkt for Arbeid og full AAP', async () => {
    render(<ArbeidOgAAPAp5052 />);
    // TODO: Valider på at AAP ikkje skal kunne endres
    await userEvent.click(screen.getByLabelText('Benytt BEDRIFT AS (910909088) 03.02.2019 til 01.04.2020'));
    await userEvent.type(screen.getAllByLabelText('Begrunnelse')[0], 'Test');
    await userEvent.click(screen.getByRole('button', { name: 'Oppdater' }));
    const feltetMåFyllesUtfeilmelding = screen.queryByText('Feltet må fylles ut');
    expect(feltetMåFyllesUtfeilmelding).not.toBeInTheDocument();
  });

  it('skal vise feilmelding dersom ingen benyttede aktiviteter', async () => {
    render(<ArbeidOgDagpengerAp5058 />);
    await userEvent.click(screen.getAllByTestId('overstyringsknapp')[0]);
    await userEvent.click(screen.getByLabelText('Ikke benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020'));
    await userEvent.click(screen.getByLabelText('Ikke benytt Dagpenger 03.02.2019 til 11.11.2019'));
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));

    const måHaAktivitetFeilmelding = await screen.findByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmelding = await screen.findByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmelding).toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmelding).toBeInTheDocument();
  });

  it('skal beholde feilmelding dersom man bytter tab', async () => {
    render(<ArbeidOgDagpengerAp5058 />);
    // TODO: Trykk på overstyrknapp før vi endrer sidan vi ikkje har aksjonspunkt her
    await userEvent.click(screen.getAllByTestId('overstyringsknapp')[0]);
    await userEvent.click(screen.getByLabelText('Ikke benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020'));
    await userEvent.click(screen.getByLabelText('Ikke benytt Dagpenger 03.02.2019 til 11.11.2019'));
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    const måHaAktivitetFeilmeldingFørBytteAvTab = await screen.findByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmeldingFørBytteAvTab = await screen.findByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmeldingFørBytteAvTab).toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmeldingFørBytteAvTab).toBeInTheDocument();

    // Bytter tab
    await userEvent.click(screen.getByRole('tab', { name: '13.02.2022 - 20.02.2022' }));
    expect(screen.getByLabelText('Benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020')).toBeDisabled();
    await userEvent.click(screen.getAllByTestId('overstyringsknapp')[0]);
    await userEvent.type(screen.getAllByLabelText('Begrunnelse')[0], 'Test');
    await userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    const måHaAktivitetFeilmeldingNyTab = screen.queryByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmeldingNyTab = screen.queryByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmeldingNyTab).not.toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmeldingNyTab).not.toBeInTheDocument();

    // Byttet tab tilbake til første
    await userEvent.click(screen.getByRole('tab', { name: '13.01.2022 - 20.01.2022' }));
    const måHaAktivitetFeilmeldingEtterBytteAvTab = await screen.findByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmeldingEtterBytteAvTab = await screen.findByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmeldingEtterBytteAvTab).toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmeldingEtterBytteAvTab).toBeInTheDocument();
  });

  it('skal ikke vise panel for å avklare aktiviterer dersom ikke overstyrer og ingen aksjonspunkt', () => {
    render(<VurderingAvBesteberegningMedDagpengerIOpptjeningsperiodenAp5058 />);
    expect(screen.queryByTestId('avklareAktiviteterHeading')).not.toBeInTheDocument();
  });

  it('skal vise read only dersom ikke overstyrer men har overstyringsaksjonspunkt', () => {
    render(<VisningAvOverstyrtAvklarAktiviteterUtenOverstyringsrettighet />);
    expect(screen.getAllByTestId('overstyringsknapp')[0]).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByLabelText('Benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020')).toBeDisabled();
  });

  it('skal ikke vise redigertikon dersom arbeid og AAP med utført aksjonspunkt', () => {
    render(<ArbeidOgAAPMedUtførtAksjonspunktAp5052Ap5058 />);
    expect(screen.queryByTestId('editedIcon')).not.toBeInTheDocument();
  });

  it('skal ikke få sende inn vurder fakta uten å ha fylt ut felter', async () => {
    render(<ArbeidOgDagpengerAp5058EnPeriode />);
    const radioJa = screen.getByLabelText('Ja');
    await userEvent.click(radioJa);
    expect(screen.getByLabelText('Månedsinntekt BEDRIFT AS (910909088)')).toBeInTheDocument();
    expect(screen.getByLabelText('Månedsinntekt dagpenger')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    const valideringsmeldinger = await screen.findAllByText('Feltet må fylles ut');
    expect(valideringsmeldinger.length).toBe(3);
  });

  it('skal måtte overstyre inntekt for minst én aktivitet', async () => {
    render(<ArbeidOgDagpengerAp5058EnPeriode />);
    const secondOverstyrknapp = screen.getAllByTestId('overstyringsknapp')[1];
    await userEvent.click(secondOverstyrknapp);
    expect(screen.getByLabelText('Månedsinntekt for BEDRIFT AS (910909088)')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    const valideringsmelding = await screen.findByText('Må ha overstyrt inntekt for minst én aktivitet.');
    expect(valideringsmelding).toBeInTheDocument();
  });

  it('skal kunne fastsette inntekt for kun ytelse', async () => {
    const lagre = vi.fn();
    render(<FastsettingAvBeregningsgrunnlagForKunYtelseAp5058 submitCallback={lagre} />);
    await userEvent.type(screen.getByLabelText('Månedsinntekt for ytelse 1'), '1234');
    await userEvent.selectOptions(screen.getByLabelText('Inntektskategori for ytelse 1'), 'Arbeidstaker');
    expect(screen.getAllByRole<HTMLOptionElement>('option', { name: 'Arbeidstaker' })[0].selected).toBe(true);
    await userEvent.click(screen.getByRole('button', { name: 'Legg til aktivitet' }));
    await userEvent.type(screen.getByLabelText('Månedsinntekt for ytelse 2'), '5678');
    await userEvent.selectOptions(screen.getByLabelText('Inntektskategori for ytelse 2'), 'Arbeidstaker');
    expect(screen.getAllByRole<HTMLOptionElement>('option', { name: 'Arbeidstaker' })[1].selected).toBe(true);
    await userEvent.type(screen.getByLabelText('Begrunnelse'), 'test');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    const forventetFeilmelding = await screen.findByText('Andeler for samme aktivitet må ha ulik inntektskategori');
    expect(forventetFeilmelding).toBeInTheDocument();
    await userEvent.selectOptions(screen.getByLabelText('Inntektskategori for ytelse 2'), 'Frilans');
    await waitFor(() => {
      expect(screen.queryByText('Andeler for samme aktivitet må ha ulik inntektskategori')).not.toBeInTheDocument();
    });
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: 'VURDER_FAKTA_ATFL_SN',
        begrunnelse: 'test',
        grunnlag: [
          {
            fakta: {
              faktaOmBeregningTilfeller: ['FASTSETT_BG_KUN_YTELSE'],
              kunYtelseFordeling: {
                andeler: [
                  {
                    andelsnr: 8,
                    fastsattBeløp: 1234,
                    inntektskategori: 'ARBEIDSTAKER',
                    nyAndel: false,
                    lagtTilAvSaksbehandler: false,
                  },
                  {
                    fastsattBeløp: 5678,
                    inntektskategori: 'FRILANSER',
                    nyAndel: true,
                    lagtTilAvSaksbehandler: true,
                  },
                ],
                skalBrukeBesteberegning: null,
              },
            },
            begrunnelse: 'test',
            periode: {
              fom: '2022-03-02',
              tom: '2022-03-04',
            },
          },
        ],
      },
    ]);
  });

  it('skal håndtere vurdering av besteberegning med dagpenger i opptjeningsperioden', async () => {
    render(<VurderingAvBesteberegningMedDagpengerIOpptjeningsperiodenAp5058 />);
    expect(screen.queryByTestId('overstyringsknapp')).not.toBeInTheDocument();
    expect(screen.queryByText('Dagpenger')).not.toBeInTheDocument();
    expect(screen.queryByText('Aktiviteter i beregningsgrunnlaget')).not.toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Ja'));
    await waitFor(() => {
      expect(screen.getByLabelText('Månedsinntekt BEDRIFT AS (910909088)')).toBeInTheDocument();
      expect(screen.getByLabelText('Månedsinntekt dagpenger')).toBeInTheDocument();
    });
    await userEvent.type(screen.getByLabelText('Månedsinntekt BEDRIFT AS (910909088)'), '10');
    await userEvent.type(screen.getByLabelText('Månedsinntekt dagpenger'), '20');
    expect(screen.getAllByTestId('sum')[0].innerHTML).toBe('30');
    await userEvent.click(screen.getByLabelText('Nei'));
    await waitFor(() => {
      expect(screen.queryByLabelText('Månedsinntekt dagpenger')).not.toBeInTheDocument();
    });
  });

  it('skal håndtere at aktiviteter i beregning er overstyrt og SB ikke er overstyrer', () => {
    render(<VisningAvOverstyrtAvklarAktiviteterUtenOverstyringsrettighet />);
    expect(screen.queryByTestId('overstyringsknapp')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByLabelText('Benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020')).toBeDisabled();
    expect(screen.getByLabelText('Benytt Dagpenger 03.02.2019 til 11.11.2019')).toBeDisabled();
  });

  it('skal kunne fastsette inntekt for arbeidstaker og frilanser i samme organisasjon', async () => {
    const lagre = vi.fn();
    render(<FrilansOgArbeidstakerISammeOrganisasjonAp5058 submitCallback={lagre} />);
    expect(screen.getByText('Søker er arbeidstaker og frilans i samme virksomhet')).toBeInTheDocument();
    expect(
      screen.getByText(
        // eslint-disable-next-line max-len
        'Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er arbeidsinntekt og samlet frilansinntekt.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Månedsinntekt Bedriften (12345678)')).toBeInTheDocument();
    expect(screen.getByLabelText('Månedsinntekt frilanser')).toBeInTheDocument();
    expect(screen.queryByLabelText('Månedsinntekt Bedriften2 (12345679)')).not.toBeInTheDocument();
    await userEvent.type(screen.getByLabelText('Månedsinntekt Bedriften (12345678)'), '10');
    await userEvent.type(screen.getByLabelText('Månedsinntekt frilanser'), '20');
    await userEvent.type(screen.getByLabelText('Begrunnelse'), 'test');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: 'VURDER_FAKTA_ATFL_SN',
        begrunnelse: 'test',
        grunnlag: [
          {
            fakta: {
              faktaOmBeregningTilfeller: [
                'VURDER_MOTTAR_YTELSE',
                'FASTSETT_MAANEDSINNTEKT_FL',
                'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON',
              ],
              mottarYtelse: {
                frilansMottarYtelse: true,
                arbeidstakerUtenIMMottarYtelse: [],
              },
              fastsettMaanedsinntektFL: {
                maanedsinntekt: 20,
              },
              vurderATogFLiSammeOrganisasjon: {
                vurderATogFLiSammeOrganisasjonAndelListe: [
                  {
                    andelsnr: 1,
                    arbeidsinntekt: 10,
                  },
                ],
              },
            },
            begrunnelse: 'test',
            periode: {
              fom: '2022-03-02',
              tom: '2022-03-04',
            },
          },
        ],
      },
    ]);
  });

  it('skal kunne vurdere om bruker mottar ytelse for frilansaktivitet', async () => {
    const lagre = vi.fn();
    render(<VurderOmBrukerMottarYtelseForFrilansAp5058 submitCallback={lagre} />);
    expect(screen.getByText('Mottar søker ytelse for frilansaktivitet?')).toBeInTheDocument();
    expect(screen.getByLabelText('Ja (månedsinntekt må fastsettes)')).toBeInTheDocument();
    expect(screen.getByLabelText('Nei (bruker A-inntekt)')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Ja (månedsinntekt må fastsettes)'));
    expect(screen.getByText('Fastsett månedsinntekt')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Nei (bruker A-inntekt)'));
    await waitFor(() => {
      expect(screen.queryByText('Fastsett månedsinntekt')).not.toBeInTheDocument();
    });
    await userEvent.type(screen.getByLabelText('Begrunnelse'), 'test');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: 'VURDER_FAKTA_ATFL_SN',
        begrunnelse: 'test',
        grunnlag: [
          {
            fakta: {
              faktaOmBeregningTilfeller: ['VURDER_MOTTAR_YTELSE'],
              mottarYtelse: {
                frilansMottarYtelse: false,
                arbeidstakerUtenIMMottarYtelse: [],
              },
            },
            begrunnelse: 'test',
            periode: {
              fom: '2022-03-02',
              tom: '2022-03-04',
            },
          },
        ],
      },
    ]);
  });

  it('skal kunne vurdere om bruker mottar ytelse for frilansaktivitet og fastsette inntekt', async () => {
    const lagre = vi.fn();
    render(<VurderOmBrukerMottarYtelseForFrilansAp5058 submitCallback={lagre} />);
    expect(screen.getByText('Mottar søker ytelse for frilansaktivitet?')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Ja (månedsinntekt må fastsettes)'));
    expect(screen.getByText('Fastsett månedsinntekt')).toBeInTheDocument();
    await userEvent.type(screen.getByText('Fastsett månedsinntekt'), '5000');
    await userEvent.type(screen.getByLabelText('Begrunnelse'), 'test');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: 'VURDER_FAKTA_ATFL_SN',
        begrunnelse: 'test',
        grunnlag: [
          {
            fakta: {
              faktaOmBeregningTilfeller: ['VURDER_MOTTAR_YTELSE', 'FASTSETT_MAANEDSINNTEKT_FL'],
              mottarYtelse: {
                frilansMottarYtelse: true,
                arbeidstakerUtenIMMottarYtelse: [],
              },
              fastsettMaanedsinntektFL: {
                maanedsinntekt: 5000,
              },
            },
            begrunnelse: 'test',
            periode: {
              fom: '2022-03-02',
              tom: '2022-03-04',
            },
          },
        ],
      },
    ]);
  });

  it('skal kunne sette at bruker har miliærtjeneste', async () => {
    const lagre = vi.fn();
    render(<VurderingAvMilitærAp5058 submitCallback={lagre} />);
    expect(
      screen.getByText('Har søker vært i militær- eller sivilforsvarstjeneste i opptjeningsperioden?'),
    ).toBeInTheDocument();
    expect(screen.getByText('Militær eller sivil')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Ja'));
    expect(screen.getByText('Militær eller sivil')).toBeInTheDocument();
    await userEvent.type(screen.getByLabelText('Begrunnelse'), 'test');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: 'VURDER_FAKTA_ATFL_SN',
        begrunnelse: 'test',
        grunnlag: [
          {
            fakta: {
              faktaOmBeregningTilfeller: ['VURDER_MILITÆR_SIVILTJENESTE'],
              vurderMilitaer: {
                harMilitaer: true,
              },
            },
            begrunnelse: 'test',
            periode: {
              fom: '2022-03-02',
              tom: '2022-03-04',
            },
          },
        ],
      },
    ]);
  });

  it('skal kunne sette at bruker ikke har miliærtjeneste', async () => {
    const lagre = vi.fn();
    render(<VurderingAvMilitærAp5058 submitCallback={lagre} />);
    expect(
      screen.getByText('Har søker vært i militær- eller sivilforsvarstjeneste i opptjeningsperioden?'),
    ).toBeInTheDocument();
    expect(screen.getByText('Militær eller sivil')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Nei'));
    await waitFor(() => {
      expect(screen.queryByText('Militær eller sivil')).not.toBeInTheDocument();
    });
    await userEvent.type(screen.getByLabelText('Begrunnelse'), 'test');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: 'VURDER_FAKTA_ATFL_SN',
        begrunnelse: 'test',
        grunnlag: [
          {
            fakta: {
              faktaOmBeregningTilfeller: ['VURDER_MILITÆR_SIVILTJENESTE'],
              vurderMilitaer: {
                harMilitaer: false,
              },
            },
            begrunnelse: 'test',
            periode: {
              fom: '2022-03-02',
              tom: '2022-03-04',
            },
          },
        ],
      },
    ]);
  });

  it('skal kunne sette at arbeidsforhold er tidsbegrenset', async () => {
    const lagre = vi.fn();
    render(<TidsbegrensetArbeidsforholdAp5058 submitCallback={lagre} />);
    expect(
      screen.getByText(
        'Er arbeidsforholdet i Bedriften3 (12345671) med varighet 01.09.2019 - 01.01.2020 tidsbegrenset?',
      ),
    ).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Nei'));
    await userEvent.type(screen.getByLabelText('Begrunnelse'), 'test');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: 'VURDER_FAKTA_ATFL_SN',
        begrunnelse: 'test',
        grunnlag: [
          {
            fakta: {
              faktaOmBeregningTilfeller: ['VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'],
              vurderTidsbegrensetArbeidsforhold: {
                fastsatteArbeidsforhold: [
                  {
                    andelsnr: 6,
                    tidsbegrensetArbeidsforhold: false,
                  },
                ],
              },
            },
            begrunnelse: 'test',
            periode: {
              fom: '2022-03-02',
              tom: '2022-03-04',
            },
          },
        ],
      },
    ]);
  });

  it('skal kunne overstyre når det ikke finnes avklaringsbehov', async () => {
    const lagre = vi.fn();
    render(<KanOverstyreBGUtenAvklaringsbehov submitCallback={lagre} />);

    expect(screen.getAllByText('45 167')).toHaveLength(2);
    expect(screen.queryByText('Har overstyrt')).not.toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Overstyr')[1]);
    expect(screen.getByText('Har overstyrt')).toBeInTheDocument();

    await userEvent.clear(screen.getByLabelText('Månedsinntekt for Arbeid'));
    await userEvent.type(screen.getByLabelText('Månedsinntekt for Arbeid'), '50 000');
    expect(screen.getByText('50 000')).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText('Begrunnelse'), 'Velbegrunnede endringer');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: 'OVST_INNTEKT',
        begrunnelse: 'Velbegrunnede endringer',
        grunnlag: [
          {
            fakta: {
              faktaOmBeregningTilfeller: [],
            },
            overstyrteAndeler: [
              {
                andelsnr: 1,
                nyAndel: false,
                aktivitetStatus: 'AT',
                lagtTilAvSaksbehandler: false,
                fastsatteVerdier: {
                  fastsattBeløp: 50000,
                  inntektskategori: 'ARBEIDSTAKER',
                },
              },
            ],
            begrunnelse: 'Velbegrunnede endringer',
            periode: {
              fom: '2022-01-18',
              tom: '2023-06-30',
            },
          },
        ],
      },
    ]);
  });
});
