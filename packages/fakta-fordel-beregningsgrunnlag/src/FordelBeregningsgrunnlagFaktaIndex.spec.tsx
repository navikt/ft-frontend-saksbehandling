import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './FordelBeregningsgrunnlagFaktaIndex.stories';

const {
  AapOgRefusjonAp5046,
  AapOgRefusjonFlereBeregningsgrunnlagMedKunEnTilVurderingAp5046,
  ViseVurderTilkommetRefusjonskravAp5059,
  SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjonAp5059,
  FordelingFlereBeregningsgrunnlagKanEndreRefusjonskravAp5046,
} = composeStories(stories);

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe('<FordelBeregningsgrunnlagFaktaIndex>', () => {
  it.skip('skal kunne løse aksjonspunkt for nytt refusjonskrav', async () => {
    const lagre = jest.fn();

    const utils = render(<AapOgRefusjonAp5046 submitCallback={lagre} />);

    expect(
      await screen.findByText('Nytt refusjonskrav hos KATOLSK KEBAB A/S (999999999)...-001 f.o.m. 27.11.2019.'),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    // Første periode
    expect(screen.getByText('Gjeldende 05.08.2019 - 26.11.2019')).toBeInTheDocument();

    // Andre periode
    expect(screen.getByText('Gjeldende f.o.m. 27.11.2019')).toBeInTheDocument();
    expect(screen.getByText('Legg til aktivitet')).toBeEnabled();

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
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
    expect(await screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Begrunnelse for fordeling',
      kode: '5046',
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
                  arbeidsforholdId: null,
                  arbeidsforholdType: '-',
                  arbeidsgiverId: null,
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 100000,
                    inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                    refusjonPrÅr: null,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                  forrigeRefusjonPrÅr: 0,
                  kilde: null,
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
                    refusjonPrÅr: null,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSTAKER',
                  forrigeRefusjonPrÅr: 0,
                  kilde: null,
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
    const lagre = jest.fn();

    const utils = render(<AapOgRefusjonFlereBeregningsgrunnlagMedKunEnTilVurderingAp5046 submitCallback={lagre} />);

    // Første periode
    expect(screen.getByText('Gjeldende 05.08.2019 - 26.11.2019')).toBeInTheDocument();

    // Andre periode
    expect(screen.getByText('Gjeldende f.o.m. 27.11.2019')).toBeInTheDocument();

    // Andre skjæringstidspunkt

    expect(
      await screen.findByText('Nytt refusjonskrav hos KATOLSK KEBAB A/S (999999999)...-001 f.o.m. 27.11.2019.'),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(screen.getByText('01.01.2020 - 05.02.2020'));

    // Første periode - andre stp
    expect(screen.getByText('Gjeldende 01.01.2020 - 26.01.2020')).toBeInTheDocument();

    // Andre periode - andre stp
    expect(screen.getByText('Gjeldende f.o.m. 27.11.2019')).toBeInTheDocument();

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    expect(alleInputfelt).toHaveLength(4);
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
      kode: '5046',
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
                  arbeidsforholdId: null,
                  arbeidsforholdType: '-',
                  arbeidsgiverId: null,
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 100000,
                    inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                    refusjonPrÅr: null,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                  forrigeRefusjonPrÅr: 0,
                  kilde: null,
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
                    refusjonPrÅr: null,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSTAKER',
                  forrigeRefusjonPrÅr: 300000,
                  kilde: null,
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

  it.skip('skal kunne løse aksjonspunkt med fastsetting av fordeling og refusjonskrav for flere beregningsgrunnlag', async () => {
    const lagre = jest.fn();

    const utils = render(<FordelingFlereBeregningsgrunnlagKanEndreRefusjonskravAp5046 submitCallback={lagre} />);

    expect(
      await screen.findByText('Nytt refusjonskrav hos KATOLSK KEBAB A/S (999999999)...-001 f.o.m. 27.11.2019.'),
    ).toBeInTheDocument();

    const knapp = screen.getAllByText('Bekreft og fortsett');

    expect(knapp).toHaveLength(2);
    expect(knapp[0]).toBeDisabled();
    expect(knapp[1]).toBeDisabled();

    // Første periode
    expect(screen.getByText('Gjeldende 05.08.2019 - 26.11.2019')).toBeInTheDocument();

    // Andre periode
    expect(screen.getByText('Gjeldende f.o.m. 27.11.2019')).toBeInTheDocument();
    const leggTilKnapper = screen.getAllByText('Legg til aktivitet');
    expect(leggTilKnapper).toHaveLength(2);
    expect(leggTilKnapper[0]).toBeEnabled();
    expect(leggTilKnapper[1]).toBeEnabled();

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    expect(alleInputfelt).toHaveLength(8);
    const fordelingAAP = alleInputfelt[0];
    const refkravAT = alleInputfelt[1];
    const fordelingAT = alleInputfelt[2];
    const begrunnelseFelt = alleInputfelt[3];

    await userEvent.type(fordelingAAP, '200 000');
    await userEvent.clear(refkravAT);
    // @ts-ignore
    refkravAT.setSelectionRange(0, 6);
    await userEvent.type(refkravAT, `{backspace}`);
    await userEvent.type(refkravAT, '200 000');
    await userEvent.type(fordelingAT, '300 000');
    await userEvent.type(begrunnelseFelt, 'Begrunnelse for fordeling');
    expect(screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    expect(await screen.getAllByText('Bekreft og fortsett')[0]).toBeEnabled();
    await userEvent.click(screen.getAllByText('Bekreft og fortsett')[0]);

    // Forventer at validering slår til
    const inntektValideringer = await screen.findAllByText('Summen må være lik 400 000');
    expect(inntektValideringer).toHaveLength(2);
    await userEvent.clear(fordelingAAP);
    await userEvent.type(fordelingAAP, '100 000');
    expect(await screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Bekreft og fortsett')[0]);

    expect(lagre).toHaveBeenCalledTimes(0);

    // Bytter fane
    await userEvent.click(screen.getByText('01.01.2020 - 31.12.9999'));

    // Skal sjekke at valideringer vises fra submit i den andre fanen
    expect(await screen.findByText('Summen må være lik 400 000')).toBeInTheDocument();
    expect(screen.getByText('Feltet må fylles ut')).toBeInTheDocument();

    const fordelingAAP2 = alleInputfelt[4];
    const refkravAT2 = alleInputfelt[5];
    const fordelingAT2 = alleInputfelt[6];
    const begrunnelseFelt2 = alleInputfelt[7];

    await userEvent.type(fordelingAAP2, '200 000');
    // @ts-ignore
    refkravAT2.setSelectionRange(0, 6);
    await userEvent.type(refkravAT2, `{backspace}`);
    await userEvent.type(refkravAT2, '200 000');
    await userEvent.type(fordelingAT2, '200 000');
    await userEvent.type(begrunnelseFelt2, 'En helt annen begrunnelse for fordeling');

    await userEvent.click(screen.getAllByText('Bekreft og fortsett')[1]);

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Begrunnelse for fordeling En helt annen begrunnelse for fordeling',
      kode: '5046',
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
                  arbeidsforholdId: null,
                  arbeidsforholdType: '-',
                  arbeidsgiverId: null,
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 100000,
                    inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                    refusjonPrÅr: null,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                  forrigeRefusjonPrÅr: 0,
                  kilde: null,
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
                  kilde: null,
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
                  arbeidsforholdId: null,
                  arbeidsforholdType: '-',
                  arbeidsgiverId: null,
                  beregningsperiodeFom: '2019-06-01',
                  beregningsperiodeTom: '2019-08-31',
                  fastsatteVerdier: {
                    fastsattÅrsbeløpInklNaturalytelse: 200000,
                    inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                    refusjonPrÅr: null,
                  },
                  forrigeArbeidsinntektPrÅr: 0,
                  forrigeInntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                  forrigeRefusjonPrÅr: 0,
                  kilde: null,
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
                  kilde: null,
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
    const lagre = jest.fn();

    const utils = render(<ViseVurderTilkommetRefusjonskravAp5059 submitCallback={lagre} />);

    expect(
      await screen.findByText(
        'Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();
    expect(screen.getAllByText('JENS MAGNE (01.01.2000)')).toHaveLength(2);
    expect(screen.getByText('krever refusjon fra og med 01.06.2020')).toBeInTheDocument();
    expect(screen.getByText('Refusjonsbeløpet skal gjelde fra og med')).toBeInTheDocument();

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    expect(alleInputfelt).toHaveLength(3);
    const datofelt = alleInputfelt[0];
    const begrunnelsefelt = alleInputfelt[1];

    await userEvent.type(datofelt, '01.07.2020');
    await userEvent.type(begrunnelsefelt, 'Begrunnelse for refusjonsdato');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Begrunnelse for refusjonsdato',
      kode: '5059',
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
              delvisRefusjonPrMndFørStart: null,
              fastsattRefusjonFom: '2020-07-01',
              internArbeidsforholdRef: undefined,
            },
          ],
        },
      ],
    });
  });

  it('skal kunne løse aksjonspunkt for tilkommet refusjonskrav med delvis refusjon', async () => {
    const lagre = jest.fn();

    const utils = render(
      <SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjonAp5059 submitCallback={lagre} />,
    );

    expect(
      await screen.findByText(
        'Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();
    expect(screen.getAllByText('KATOLSK KEBAB A/S (999999999)')).toHaveLength(3);
    expect(
      screen.getByText('krever refusjon fra og med 01.06.2020. Det er tidligere innvilget et lavere refusjonsbeløp'),
    ).toBeInTheDocument();
    expect(screen.getByText('Refusjonsbeløpet skal gjelde fra og med')).toBeInTheDocument();
    expect(screen.getByText('Før denne datoen skal refusjonsbeløpet per måned være')).toBeInTheDocument();

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    expect(alleInputfelt).toHaveLength(4);
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
      kode: '5059',
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
