import { composeStories } from '@storybook/testing-react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from '../BeregningFaktaIndex.stories';

const {
  ArbeidOgDagpenger,
  ArbeidOgAAP,
  VurderingAvBesteberegningMedDagpengerIOpptjeningsperioden,
  VisningAvOverstyrtAvklarAktiviteterUtenOverstyringsrettighet,
  ArbeidOgAAPMedUtførtAksjonspunkt,
  FastsettingAvBeregningsgrunnlagForKunYtelse,
  FrilansOgArbeidstakerISammeOrganisasjon,
  VurderOmBrukerMottarYtelseForFrilans,
  VurderingAvMilitær,
  TidsbegrensetArbeidsforhold,
} = composeStories(stories);

describe('<BeregningFaktaIndexSpec', () => {
  it('skal kunne løse aksjonspunkt for Arbeid og full AAP', () => {
    render(<ArbeidOgAAP />);
    // TODO: Valider på at AAP ikkje skal kunne endres
    userEvent.click(screen.getByLabelText('Benytt BEDRIFT AS (910909088) 03.02.2019 til 01.04.2020'));
    userEvent.type(screen.getAllByLabelText('Begrunn endringene')[0], 'Test');
    userEvent.click(screen.getByRole('button', { name: 'Oppdater' }));
    const feltetMåFyllesUtfeilmelding = screen.queryByText('Feltet må fylles ut');
    expect(feltetMåFyllesUtfeilmelding).not.toBeInTheDocument();
  });

  it('skal vise feilmelding dersom ingen benyttede aktiviteter', async () => {
    render(<ArbeidOgDagpenger />);
    userEvent.click(screen.getAllByTestId('overstyringsknapp')[0]);
    userEvent.click(screen.getByLabelText('Ikke benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020'));
    userEvent.click(screen.getByLabelText('Ikke benytt Dagpenger 03.02.2019 til 11.11.2019'));
    userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));

    const måHaAktivitetFeilmelding = await screen.findByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmelding = await screen.findByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmelding).toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmelding).toBeInTheDocument();
  });

  it('skal beholde feilmelding dersom man bytter tab', async () => {
    render(<ArbeidOgDagpenger />);
    // TODO: Trykk på overstyrknapp før vi endrer sidan vi ikkje har aksjonspunkt her
    userEvent.click(screen.getAllByTestId('overstyringsknapp')[0]);
    userEvent.click(screen.getByLabelText('Ikke benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020'));
    userEvent.click(screen.getByLabelText('Ikke benytt Dagpenger 03.02.2019 til 11.11.2019'));
    userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    const måHaAktivitetFeilmeldingFørBytteAvTab = await screen.findByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmeldingFørBytteAvTab = await screen.findByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmeldingFørBytteAvTab).toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmeldingFørBytteAvTab).toBeInTheDocument();

    // Bytter tab
    userEvent.click(screen.getByRole('tab', { name: '13.02.2022 - 20.02.2022' }));
    expect(screen.getByLabelText('Benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020')).toBeDisabled();
    userEvent.click(screen.getAllByTestId('overstyringsknapp')[0]);
    userEvent.type(screen.getAllByLabelText('Begrunn endringene')[0], 'Test');
    userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    const måHaAktivitetFeilmeldingNyTab = screen.queryByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmeldingNyTab = screen.queryByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmeldingNyTab).not.toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmeldingNyTab).not.toBeInTheDocument();

    // Byttet tab tilbake til første
    userEvent.click(screen.getByRole('tab', { name: '13.01.2022 - 20.01.2022' }));
    const måHaAktivitetFeilmeldingEtterBytteAvTab = await screen.findByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmeldingEtterBytteAvTab = await screen.findByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmeldingEtterBytteAvTab).toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmeldingEtterBytteAvTab).toBeInTheDocument();
  });

  it('skal ikke vise panel for å avklare aktiviterer dersom ikke overstyrer og ingen aksjonspunkt', () => {
    render(<VurderingAvBesteberegningMedDagpengerIOpptjeningsperioden />);
    expect(screen.queryByTestId('avklareAktiviteterHeading')).not.toBeInTheDocument();
  });

  it('skal vise read only dersom ikke overstyrer men har overstyringsaksjonspunkt', () => {
    render(<VisningAvOverstyrtAvklarAktiviteterUtenOverstyringsrettighet />);
    expect(screen.getAllByTestId('overstyringsknapp')[0]).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByLabelText('Benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020')).toBeDisabled();
  });

  it('skal ikke vise redigertikon dersom arbeid og AAP med utført aksjonspunkt', () => {
    render(<ArbeidOgAAPMedUtførtAksjonspunkt />);
    expect(screen.queryByTestId('editedIcon')).not.toBeInTheDocument();
  });

  it('skal ikke få sende inn vurder fakta uten å ha fylt ut felter', async () => {
    render(<ArbeidOgDagpenger />);
    const radioJa = screen.getByLabelText('Ja');
    userEvent.click(radioJa);
    expect(screen.getByLabelText('Månedsinntekt for BEDRIFT AS (910909088)')).toBeInTheDocument();
    expect(screen.getByLabelText('Månedsinntekt for Dagpenger')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    const valideringsmeldinger = await screen.findAllByText('Feltet må fylles ut');
    expect(valideringsmeldinger.length).toBe(3);
  });

  it('skal måtte overstyre inntekt for minst én aktivitet', async () => {
    render(<ArbeidOgDagpenger />);
    const secondOverstyrknapp = screen.getAllByTestId('overstyringsknapp')[1];
    userEvent.click(secondOverstyrknapp);
    expect(screen.getByLabelText('Månedsinntekt for BEDRIFT AS (910909088)')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    const valideringsmelding = await screen.findByText('Må ha overstyrt inntekt for minst én aktivitet.');
    expect(valideringsmelding).toBeInTheDocument();
  });

  it('skal kunne fastsette inntekt for kun ytelse', async () => {
    const lagre = jest.fn();
    render(<FastsettingAvBeregningsgrunnlagForKunYtelse submitCallback={lagre} />);
    userEvent.type(screen.getByLabelText('Månedsinntekt for ytelse 1'), '1234');
    await userEvent.selectOptions(screen.getByLabelText('Inntektskategori for ytelse 1'), 'Arbeidstaker');
    expect(screen.getAllByRole<HTMLOptionElement>('option', { name: 'Arbeidstaker' })[0].selected).toBe(true);
    userEvent.click(screen.getByRole('button', { name: 'Legg til aktivitet' }));
    userEvent.type(screen.getByLabelText('Månedsinntekt for ytelse 2'), '5678');
    await userEvent.selectOptions(screen.getByLabelText('Inntektskategori for ytelse 2'), 'Arbeidstaker');
    expect(screen.getAllByRole<HTMLOptionElement>('option', { name: 'Arbeidstaker' })[1].selected).toBe(true);
    userEvent.type(screen.getByLabelText('Begrunn endringene'), 'test');
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    const forventetFeilmelding = await screen.findByText('Andeler for samme aktivitet må ha ulik inntektskategori');
    expect(forventetFeilmelding).toBeInTheDocument();
    await userEvent.selectOptions(screen.getByLabelText('Inntektskategori for ytelse 2'), 'Frilans');
    await waitFor(() => {
      expect(screen.queryByText('Andeler for samme aktivitet må ha ulik inntektskategori')).not.toBeInTheDocument();
    });
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5058',
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
          },
        ],
      },
    ]);
  });

  it('skal håndtere vurdering av besteberegning med dagpenger i opptjeningsperioden', async () => {
    render(<VurderingAvBesteberegningMedDagpengerIOpptjeningsperioden />);
    expect(screen.queryByTestId('overstyringsknapp')).not.toBeInTheDocument();
    expect(screen.queryByText('Dagpenger')).not.toBeInTheDocument();
    expect(screen.queryByText('Aktiviteter i beregningsgrunnlaget')).not.toBeInTheDocument();
    userEvent.click(screen.getByLabelText('Ja'));
    await waitFor(() => {
      expect(screen.getByLabelText('Månedsinntekt for BEDRIFT AS (910909088)')).toBeInTheDocument();
      expect(screen.getByLabelText('Månedsinntekt for Dagpenger')).toBeInTheDocument();
    });
    userEvent.type(screen.getByLabelText('Månedsinntekt for BEDRIFT AS (910909088)'), '10');
    userEvent.type(screen.getByLabelText('Månedsinntekt for Dagpenger'), '20');
    expect(screen.getByTestId('sum').innerHTML).toBe('30');
    userEvent.click(screen.getByLabelText('Nei'));
    await waitFor(() => {
      expect(screen.queryByLabelText('Månedsinntekt for Dagpenger')).not.toBeInTheDocument();
    });
  });

  it('skal håndtere at aktiviteter i beregning er overstyrt og SB ikke er overstyrer', () => {
    render(<VisningAvOverstyrtAvklarAktiviteterUtenOverstyringsrettighet />);
    expect(screen.queryByTestId('overstyringsknapp')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByLabelText('Benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020')).toBeDisabled();
    expect(screen.getByLabelText('Benytt Dagpenger 03.02.2019 til 11.11.2019')).toBeDisabled();
  });

  it('skal kunne fastsette inntekt for arbeidstaker og frilanser i samme organisasjon', async () => {
    const lagre = jest.fn();
    render(<FrilansOgArbeidstakerISammeOrganisasjon submitCallback={lagre} />);
    expect(
      screen.getByText(
        'Søker er arbeidstaker og frilanser i samme virksomhet og det er ikke mottatt inntektsmelding(er).',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Mottar søker sykepenger, foreldrepenger, pleiepenger eller svangerskapspenger for frilansaktiviteten?',
      ),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Månedsinntekt for Bedriften (12345678)')).toBeInTheDocument();
    expect(screen.getByLabelText('Månedsinntekt for Frilanser')).toBeInTheDocument();
    expect(screen.queryByLabelText('Månedsinntekt for Bedriften2 (12345679)')).not.toBeInTheDocument();
    userEvent.click(screen.getByLabelText('Ja'));
    userEvent.type(screen.getByLabelText('Månedsinntekt for Bedriften (12345678)'), '10');
    userEvent.type(screen.getByLabelText('Månedsinntekt for Frilanser'), '20');
    userEvent.type(screen.getByLabelText('Begrunn endringene'), 'test');
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5058',
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
          },
        ],
      },
    ]);
  });

  it('skal kunne vurdere om bruker mottar ytelse for frilansaktivitet', async () => {
    const lagre = jest.fn();
    render(<VurderOmBrukerMottarYtelseForFrilans submitCallback={lagre} />);
    expect(
      screen.getByText(
        'Søker er frilanser. Mottar søker sykepenger, foreldrepenger, pleiepenger eller svangerskapspenger for frilansaktiviteten?',
      ),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Ja')).toBeInTheDocument();
    expect(screen.getByLabelText('Nei')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('Ja'));
    expect(screen.getByLabelText('Månedsinntekt for Frilanser')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('Nei'));
    await waitFor(() => {
      expect(screen.queryByLabelText('Månedsinntekt for Frilanser')).not.toBeInTheDocument();
    });
    userEvent.type(screen.getByLabelText('Begrunn endringene'), 'test');
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5058',
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
          },
        ],
      },
    ]);
  });

  it('skal kunne vurdere om bruker mottar ytelse for frilansaktivitet og fastsette inntekt', async () => {
    const lagre = jest.fn();
    render(<VurderOmBrukerMottarYtelseForFrilans submitCallback={lagre} />);
    expect(
      screen.getByText(
        'Søker er frilanser. Mottar søker sykepenger, foreldrepenger, pleiepenger eller svangerskapspenger for frilansaktiviteten?',
      ),
    ).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('Ja'));
    expect(screen.getByLabelText('Månedsinntekt for Frilanser')).toBeInTheDocument();
    userEvent.type(screen.getByLabelText('Månedsinntekt for Frilanser'), '5000');
    userEvent.type(screen.getByLabelText('Begrunn endringene'), 'test');
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5058',
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
          },
        ],
      },
    ]);
  });

  it('skal kunne sette at bruker har miliærtjeneste', async () => {
    const lagre = jest.fn();
    render(<VurderingAvMilitær submitCallback={lagre} />);
    expect(
      screen.getByText('Har søker vært i militær- eller sivilforsvarstjeneste i opptjeningsperioden?'),
    ).toBeInTheDocument();
    expect(screen.getByText('Militær eller sivil')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('Ja'));
    expect(screen.getByText('Militær eller sivil')).toBeInTheDocument();
    userEvent.type(screen.getByLabelText('Begrunn endringene'), 'test');
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5058',
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
          },
        ],
      },
    ]);
  });

  it('skal kunne sette at bruker ikke har miliærtjeneste', async () => {
    const lagre = jest.fn();
    render(<VurderingAvMilitær submitCallback={lagre} />);
    expect(
      screen.getByText('Har søker vært i militær- eller sivilforsvarstjeneste i opptjeningsperioden?'),
    ).toBeInTheDocument();
    expect(screen.getByText('Militær eller sivil')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('Nei'));
    await waitFor(() => {
      expect(screen.queryByText('Militær eller sivil')).not.toBeInTheDocument();
    });
    userEvent.type(screen.getByLabelText('Begrunn endringene'), 'test');
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5058',
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
          },
        ],
      },
    ]);
  });

  it('skal kunne sette at arbeidsforhold er tidsbegrenset', async () => {
    const lagre = jest.fn();
    render(<TidsbegrensetArbeidsforhold submitCallback={lagre} />);
    expect(
      screen.getByText(
        'Er arbeidsforholdet i Bedriften3 (12345671) med varighet 09.01.2019 - 01.01.2020 tidsbegrenset?',
      ),
    ).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('Nei'));
    userEvent.type(screen.getByLabelText('Begrunn endringene'), 'test');
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5058',
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
          },
        ],
      },
    ]);
  });
});
