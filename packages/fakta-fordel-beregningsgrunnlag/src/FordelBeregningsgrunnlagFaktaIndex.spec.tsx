import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './FordelBeregningsgrunnlagFaktaIndex.stories';

const {
  AapOgRefusjon,
  ViseVurderTilkommetRefusjonskrav,
  SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjon,
  FordelingFlereBeregningsgrunnlagKanEndreRefusjonskrav,
} = composeStories(stories);

describe('<FordelBeregningsgrunnlagFaktaIndex>', () => {
  it('skal kunne løse aksjonspunkt for nytt refusjonskrav', async () => {
    const lagre = jest.fn();

    const utils = render(<AapOgRefusjon submitCallback={lagre} />);

    expect(
      await screen.findByText('Nytt refusjonskrav hos KATOLSK KEBAB A/S (999999999)...-001 f.o.m. 27.11.2019.'),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

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

    userEvent.paste(fordelingAAP, '200 000');
    userEvent.paste(fordelingAT, '300 000');
    userEvent.paste(begrunnelseFelt, 'Begrunnelse for fordeling');
    expect(screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));

    // Forventer at validering slår til
    expect(await screen.findByText('Summen må være lik 400 000')).toBeInTheDocument();
    userEvent.clear(fordelingAAP);
    userEvent.paste(fordelingAAP, '100 000');
    expect(await screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Bekreft og fortsett'));

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

  it('skal kunne løse aksjonspunkt med fastsetting av fordeling og refusjonskrav for flere beregningsgrunnlag', async () => {
    const lagre = jest.fn();

    const utils = render(<FordelingFlereBeregningsgrunnlagKanEndreRefusjonskrav submitCallback={lagre} />);

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

    userEvent.paste(fordelingAAP, '200 000');
    userEvent.clear(refkravAT);
    // @ts-ignore
    refkravAT.setSelectionRange(0, 6);
    userEvent.type(refkravAT, `{backspace}`);
    userEvent.paste(refkravAT, '200 000');
    userEvent.paste(fordelingAT, '300 000');
    userEvent.paste(begrunnelseFelt, 'Begrunnelse for fordeling');
    expect(screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    expect(await screen.getAllByText('Bekreft og fortsett')[0]).toBeEnabled();
    userEvent.click(screen.getAllByText('Bekreft og fortsett')[0]);

    // Forventer at validering slår til
    const inntektValideringer = await screen.findAllByText('Summen må være lik 400 000');
    expect(inntektValideringer).toHaveLength(2);
    userEvent.clear(fordelingAAP);
    userEvent.paste(fordelingAAP, '100 000');
    expect(await screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    userEvent.click(screen.getAllByText('Bekreft og fortsett')[0]);

    expect(lagre).toHaveBeenCalledTimes(0);

    // Bytter fane
    userEvent.click(screen.getByText('01.01.2020 - 31.12.9999'));

    // Skal sjekke at valideringer vises fra submit i den andre fanen
    expect(await screen.findByText('Summen må være lik 400 000')).toBeInTheDocument();
    expect(screen.getByText('Feltet må fylles ut')).toBeInTheDocument();

    const fordelingAAP2 = alleInputfelt[4];
    const refkravAT2 = alleInputfelt[5];
    const fordelingAT2 = alleInputfelt[6];
    const begrunnelseFelt2 = alleInputfelt[7];

    userEvent.paste(fordelingAAP2, '200 000');
    // @ts-ignore
    refkravAT2.setSelectionRange(0, 6);
    userEvent.type(refkravAT2, `{backspace}`);
    userEvent.paste(refkravAT2, '200 000');
    userEvent.paste(fordelingAT2, '200 000');
    userEvent.paste(begrunnelseFelt2, 'En helt annen begrunnelse for fordeling');

    userEvent.click(screen.getAllByText('Bekreft og fortsett')[1]);

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

    const utils = render(<ViseVurderTilkommetRefusjonskrav submitCallback={lagre} />);

    expect(
      await screen.findByText(
        'Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();
    expect(screen.getAllByText('JENS MAGNE (01.01.2000)')).toHaveLength(2);
    expect(screen.getByText('krever refusjon fra og med 01.06.2020')).toBeInTheDocument();
    expect(screen.getByText('Refusjonsbeløpet skal gjelde fra og med')).toBeInTheDocument();

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    expect(alleInputfelt).toHaveLength(2);
    const datofelt = alleInputfelt[0];
    const begrunnelsefelt = alleInputfelt[1];

    userEvent.paste(datofelt, '01.07.2020');
    userEvent.paste(begrunnelsefelt, 'Begrunnelse for refusjonsdato');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));

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

    const utils = render(<SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjon submitCallback={lagre} />);

    expect(
      await screen.findByText(
        'Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();
    expect(screen.getAllByText('KATOLSK KEBAB A/S (999999999)')).toHaveLength(3);
    expect(
      screen.getByText('krever refusjon fra og med 01.06.2020. Det er tidligere innvilget et lavere refusjonsbeløp'),
    ).toBeInTheDocument();
    expect(screen.getByText('Refusjonsbeløpet skal gjelde fra og med')).toBeInTheDocument();
    expect(screen.getByText('Før denne datoen skal refusjonsbeløpet per måned være')).toBeInTheDocument();

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    expect(alleInputfelt).toHaveLength(3);
    const datofelt = alleInputfelt[0];
    const delvisRefFelt = alleInputfelt[1];
    const begrunnelsefelt = alleInputfelt[2];

    userEvent.paste(datofelt, '01.07.2020');
    userEvent.paste(delvisRefFelt, '12 000');
    userEvent.paste(begrunnelsefelt, 'Begrunnelse for refusjonsdato');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));
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
