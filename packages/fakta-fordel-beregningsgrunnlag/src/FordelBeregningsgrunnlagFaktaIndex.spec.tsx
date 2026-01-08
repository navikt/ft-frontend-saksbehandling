import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './FordelBeregningsgrunnlagFaktaIndex.stories';

const {
  AapOgRefusjonAp5046,
  AapOgRefusjonFlereBeregningsgrunnlagMedKunEnTilVurderingAp5046,
  ViseVurderTilkommetRefusjonskravAp5059,
  SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjonAp5059,
  FordelingFlereBeregningsgrunnlagKanEndreRefusjonskravAp5046,
} = composeStories(stories);

class MockResizeObserver {
  disconnect = vi.fn();
  observe = vi.fn();
  unobserve = vi.fn();
}

globalThis.ResizeObserver = globalThis.ResizeObserver || MockResizeObserver;

describe('FordelBeregningsgrunnlagFaktaIndex', () => {
  it('skal kunne løse aksjonspunkt for nytt refusjonskrav', async () => {
    const lagre = vi.fn();

    render(<AapOgRefusjonAp5046 submitCallback={lagre} />);

    expect(
      screen.getByText(
        'Vurder om beregningsgrunnlaget skal flyttes til ny aktivitet eller fordeles mellom aktivitetene.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Første periode
    expect(screen.getByText('05.08.2019 - 26.11.2019')).toBeInTheDocument();

    // Andre periode
    expect(screen.getByText('27.11.2019 -')).toBeInTheDocument();
    expect(screen.getByText('Legg til aktivitet')).toBeEnabled();

    const alleInputfelt = screen.getAllByRole('textbox');
    expect(alleInputfelt).toHaveLength(3);
    const fordelingAAP = alleInputfelt[0];
    const fordelingAT = alleInputfelt[1];
    const begrunnelseFelt = alleInputfelt[2];

    await userEvent.type(fordelingAAP, '200 000');
    await userEvent.type(fordelingAT, '300 000');
    await userEvent.type(begrunnelseFelt, 'Begrunnelse for fordeling');
    expect(screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    // Forventer at validering slår til
    expect(await screen.findByText('Summen må være lik 400 000')).toBeInTheDocument();
    await userEvent.clear(fordelingAAP);
    await userEvent.type(fordelingAAP, '100 000');
    expect(screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Begrunnelse for fordeling',
      kode: 'FORDEL_BG',
      grunnlag: [
        {
          periode: {
            fom: '2019-09-16',
            tom: '9999-12-31',
          },
          begrunnelse: 'Begrunnelse for fordeling',
          endretBeregningsgrunnlagPerioder: [
            {
              andeler: [
                {
                  aktivitetStatus: 'AAP',
                  andelsnr: 2,
                  arbeidsforholdId: undefined,
                  arbeidsforholdType: '-',
                  arbeidsgiverId: undefined,
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 100000,
                    inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                    refusjonPrÅr: undefined,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                  forrigeRefusjonPrÅr: 0,
                  kilde: undefined,
                  lagtTilAvSaksbehandler: false,
                  nyAndel: false,
                },
                {
                  aktivitetStatus: 'AT',
                  andelsnr: 1,
                  arbeidsforholdId: 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF',
                  arbeidsforholdType: '-',
                  arbeidsgiverId: '999999999',
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 300000,
                    inntektskategori: 'ARBEIDSTAKER',
                    refusjonPrÅr: undefined,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSTAKER',
                  forrigeRefusjonPrÅr: 0,
                  kilde: undefined,
                  lagtTilAvSaksbehandler: false,
                  nyAndel: false,
                },
              ],
              fom: '2019-11-27',
              tom: undefined,
            },
          ],
        },
      ],
    });
  });

  it('skal kunne løse aksjonspunkt for nytt refusjonskrav med flere beregningsgrunnlag og kun en til vurdering', async () => {
    const lagre = vi.fn();

    render(<AapOgRefusjonFlereBeregningsgrunnlagMedKunEnTilVurderingAp5046 submitCallback={lagre} />);

    // Første periode
    expect(screen.getByText('05.08.2019 - 26.11.2019')).toBeInTheDocument();

    // Andre periode
    expect(screen.getByText('27.11.2019 -')).toBeInTheDocument();

    // Andre skjæringstidspunkt

    expect(
      screen.getAllByText(
        'Vurder om beregningsgrunnlaget skal flyttes til ny aktivitet eller fordeles mellom aktivitetene.',
      )[0],
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(screen.getByText('01.01.2020 - 05.02.2020'));

    // Første periode - andre stp
    expect(screen.getByText('01.01.2020 - 26.01.2020')).toBeInTheDocument();

    // Andre periode - andre stp
    expect(screen.getByText('27.11.2019 -')).toBeInTheDocument();

    const alleInputfelt = screen.getAllByRole('textbox');
    expect(alleInputfelt).toHaveLength(3);
    const fordelingAAP = alleInputfelt[0];
    const fordelingAT = alleInputfelt[1];
    const begrunnelseFelt = alleInputfelt[2];

    await userEvent.type(fordelingAAP, '100 000');
    await userEvent.type(fordelingAT, '200 000');
    await userEvent.type(begrunnelseFelt, 'Begrunnelse for fordeling');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Begrunnelse for fordeling',
      kode: 'FORDEL_BG',
      grunnlag: [
        {
          periode: {
            fom: '2020-01-01',
            tom: '2020-02-05',
          },
          begrunnelse: 'Begrunnelse for fordeling',
          endretBeregningsgrunnlagPerioder: [
            {
              andeler: [
                {
                  aktivitetStatus: 'AAP',
                  andelsnr: 2,
                  arbeidsforholdId: undefined,
                  arbeidsforholdType: '-',
                  arbeidsgiverId: undefined,
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 100000,
                    inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                    refusjonPrÅr: undefined,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                  forrigeRefusjonPrÅr: 0,
                  kilde: undefined,
                  lagtTilAvSaksbehandler: false,
                  nyAndel: false,
                },
                {
                  aktivitetStatus: 'AT',
                  andelsnr: 1,
                  arbeidsforholdId: 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF',
                  arbeidsforholdType: '-',
                  arbeidsgiverId: '999999999',
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 200000,
                    inntektskategori: 'ARBEIDSTAKER',
                    refusjonPrÅr: undefined,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSTAKER',
                  forrigeRefusjonPrÅr: 300000,
                  kilde: undefined,
                  lagtTilAvSaksbehandler: false,
                  nyAndel: false,
                },
              ],
              fom: '2020-01-27',
              tom: undefined,
            },
          ],
        },
      ],
    });
  });

  it('skal kunne løse aksjonspunkt med fastsetting av fordeling og refusjonskrav for flere beregningsgrunnlag', async () => {
    const lagre = vi.fn();

    render(<FordelingFlereBeregningsgrunnlagKanEndreRefusjonskravAp5046 submitCallback={lagre} />);

    const knapp = screen.getAllByText('Bekreft og fortsett');
    expect(knapp).toHaveLength(2);

    // Første periode
    expect(screen.getByText('05.08.2019 - 26.11.2019')).toBeInTheDocument();

    // Andre periode
    expect(screen.getByText('27.11.2019 -')).toBeInTheDocument();
    const leggTilKnapper = screen.getAllByText('Legg til aktivitet');
    expect(leggTilKnapper).toHaveLength(2);
    expect(leggTilKnapper[0]).toBeEnabled();
    expect(leggTilKnapper[1]).toBeEnabled();

    const inputfeltITab1 = screen.getAllByRole('textbox');
    expect(inputfeltITab1).toHaveLength(4);
    const fordelingAAP = inputfeltITab1[0];
    const refkravAT = inputfeltITab1[1];
    const fordelingAT = inputfeltITab1[2];
    const begrunnelseFelt = inputfeltITab1[3];

    await userEvent.type(fordelingAAP, '200 000');
    await userEvent.clear(refkravAT);
    await userEvent.type(refkravAT, '200 000');
    await userEvent.type(fordelingAT, '300 000');
    await userEvent.type(begrunnelseFelt, 'Begrunnelse for fordeling');
    expect(screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    expect(screen.getAllByText('Bekreft og fortsett')[0]).toBeEnabled();
    await userEvent.click(screen.getAllByText('Bekreft og fortsett')[0]);

    // Forventer at validering slår til
    const inntektValideringer = await screen.findAllByText('Summen må være lik 400 000');
    expect(inntektValideringer).toHaveLength(2);
    await userEvent.clear(fordelingAAP);
    await userEvent.type(fordelingAAP, '100 000');
    expect(screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Bekreft og fortsett')[0]);

    expect(lagre).toHaveBeenCalledTimes(0);

    // Bytter fane
    await userEvent.click(screen.getByRole('tab', { name: '01.01.2020 -' }));

    // Skal sjekke at valideringer vises fra submit i den andre fanen
    expect(await screen.findByText('Summen må være lik 400 000')).toBeInTheDocument();
    expect(screen.getByText('Feltet må fylles ut')).toBeInTheDocument();

    const inputfeltITab2 = screen.getAllByRole('textbox');
    expect(inputfeltITab2).toHaveLength(4);
    const fordelingAAP2 = inputfeltITab2[0];
    const refkravAT2 = inputfeltITab2[1];
    const fordelingAT2 = inputfeltITab2[2];
    const begrunnelseFelt2 = inputfeltITab2[3];

    await userEvent.type(fordelingAAP2, '200 000');
    await userEvent.clear(refkravAT2);
    await userEvent.type(refkravAT2, '200 000');
    await userEvent.type(fordelingAT2, '200 000');
    await userEvent.type(begrunnelseFelt2, 'En helt annen begrunnelse for fordeling');

    await userEvent.click(screen.getAllByText('Bekreft og fortsett')[1]);

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Begrunnelse for fordeling En helt annen begrunnelse for fordeling',
      kode: 'FORDEL_BG',
      grunnlag: [
        {
          periode: {
            fom: '2019-08-05',
            tom: '9999-12-31',
          },
          begrunnelse: 'Begrunnelse for fordeling',
          endretBeregningsgrunnlagPerioder: [
            {
              andeler: [
                {
                  aktivitetStatus: 'AAP',
                  andelsnr: 2,
                  arbeidsforholdId: undefined,
                  arbeidsforholdType: '-',
                  arbeidsgiverId: undefined,
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 100000,
                    inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                    refusjonPrÅr: undefined,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                  forrigeRefusjonPrÅr: 0,
                  kilde: undefined,
                  lagtTilAvSaksbehandler: false,
                  nyAndel: false,
                },
                {
                  aktivitetStatus: 'AT',
                  andelsnr: 1,
                  arbeidsforholdId: 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF',
                  arbeidsforholdType: '-',
                  arbeidsgiverId: '999999999',
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 300000,
                    inntektskategori: 'ARBEIDSTAKER',
                    refusjonPrÅr: 200000,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSTAKER',
                  forrigeRefusjonPrÅr: 300000,
                  kilde: undefined,
                  lagtTilAvSaksbehandler: false,
                  nyAndel: false,
                },
              ],
              fom: '2019-11-27',
              tom: undefined,
            },
          ],
        },
        {
          periode: {
            fom: '2020-01-01',
            tom: '9999-12-31',
          },
          begrunnelse: 'En helt annen begrunnelse for fordeling',
          endretBeregningsgrunnlagPerioder: [
            {
              andeler: [
                {
                  aktivitetStatus: 'AAP',
                  andelsnr: 2,
                  arbeidsforholdId: undefined,
                  arbeidsforholdType: '-',
                  arbeidsgiverId: undefined,
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 200000,
                    inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                    refusjonPrÅr: undefined,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                  forrigeRefusjonPrÅr: 0,
                  kilde: undefined,
                  lagtTilAvSaksbehandler: false,
                  nyAndel: false,
                },
                {
                  aktivitetStatus: 'AT',
                  andelsnr: 1,
                  arbeidsforholdId: 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF',
                  arbeidsforholdType: '-',
                  arbeidsgiverId: '999999999',
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 200000,
                    inntektskategori: 'ARBEIDSTAKER',
                    refusjonPrÅr: 200000,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSTAKER',
                  forrigeRefusjonPrÅr: 300000,
                  kilde: undefined,
                  lagtTilAvSaksbehandler: false,
                  nyAndel: false,
                },
              ],
              fom: '2020-01-01',
              tom: '9999-12-31',
            },
          ],
        },
      ],
    });
  });

  it('skal kunne løse aksjonspunkt for tilkommet refusjonskrav', async () => {
    const lagre = vi.fn();

    render(<ViseVurderTilkommetRefusjonskravAp5059 submitCallback={lagre} />);

    expect(
      await screen.findByText(
        'Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();
    expect(screen.getAllByText('TESTY TEST (01.01.2000)')).toHaveLength(3);
    expect(screen.getByText('krever refusjon fra og med 01.07.2020')).toBeInTheDocument();
    expect(screen.getByText('Refusjonsbeløpet skal gjelde fra og med')).toBeInTheDocument();

    const alleInputfelt = screen.getAllByRole('textbox');
    expect(alleInputfelt).toHaveLength(2);
    const datofelt = alleInputfelt[0];
    const begrunnelsefelt = alleInputfelt[1];

    await userEvent.type(datofelt, '01.07.2020');
    await userEvent.type(begrunnelsefelt, 'Begrunnelse for refusjonsdato');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Begrunnelse for refusjonsdato',
      kode: 'VURDER_REFUSJONSKRAV',
      grunnlag: [
        {
          periode: {
            fom: '2020-06-01',
            tom: '9999-12-31',
          },
          begrunnelse: 'Begrunnelse for refusjonsdato',
          fastsatteAndeler: [
            {
              arbeidsgiverAktoerId: '999999998',
              arbeidsgiverOrgnr: undefined,
              delvisRefusjonPrMndFørStart: undefined,
              fastsattRefusjonFom: '2020-07-01',
              internArbeidsforholdRef: undefined,
            },
          ],
        },
      ],
    });
  });

  it('skal kunne løse aksjonspunkt for tilkommet refusjonskrav med delvis refusjon', async () => {
    const lagre = vi.fn();

    render(<SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjonAp5059 submitCallback={lagre} />);

    expect(
      await screen.findByText(
        'Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();
    expect(screen.getAllByText('Nav Gokk (999999999)')).toHaveLength(3);
    expect(
      screen.getByText('krever refusjon fra og med 01.06.2020. Det er tidligere innvilget et lavere refusjonsbeløp'),
    ).toBeInTheDocument();
    expect(screen.getByText('Refusjonsbeløpet skal gjelde fra og med')).toBeInTheDocument();
    expect(screen.getByText('Før denne datoen skal refusjonsbeløpet per måned være')).toBeInTheDocument();

    const alleInputfelt = screen.getAllByRole('textbox');
    expect(alleInputfelt).toHaveLength(3);
    const datofelt = alleInputfelt[0];
    const delvisRefFelt = alleInputfelt[1];
    const begrunnelsefelt = alleInputfelt[2];

    await userEvent.type(datofelt, '01.07.2020');
    await userEvent.type(delvisRefFelt, '12 000');
    await userEvent.type(begrunnelsefelt, 'Begrunnelse for refusjonsdato');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    await userEvent.click(screen.getByText('Bekreft og fortsett'));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Begrunnelse for refusjonsdato',
      kode: 'VURDER_REFUSJONSKRAV',
      grunnlag: [
        {
          periode: {
            fom: '2020-06-01',
            tom: '9999-12-31',
          },
          begrunnelse: 'Begrunnelse for refusjonsdato',
          fastsatteAndeler: [
            {
              arbeidsgiverAktoerId: undefined,
              arbeidsgiverOrgnr: '999999999',
              delvisRefusjonPrMndFørStart: 12000,
              fastsattRefusjonFom: '2020-07-01',
              internArbeidsforholdRef: undefined,
            },
          ],
        },
      ],
    });
  });
});
