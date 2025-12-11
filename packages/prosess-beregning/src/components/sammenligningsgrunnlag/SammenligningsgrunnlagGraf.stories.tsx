import type { Meta, StoryObj } from '@storybook/react-vite';

import { getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';

import { SammenligningsgrunnlagGraf } from './SammenligningsgrunnlagGraf';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  component: SammenligningsgrunnlagGraf,
  decorators: [withIntl],
} satisfies Meta<typeof SammenligningsgrunnlagGraf>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Graf: Story = {
  args: {
    sammenligningsgrunnlagFom: '2025-01-01',
    sammenligningsgrunnlagInntekter: [
      {
        fom: '2025-07-01',
        tom: '2025-07-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            arbeidsgiverIdent: '123456789',
            beløp: 50410.24,
          },
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 50534,
          },
        ],
      },
      {
        fom: '2025-10-01',
        tom: '2025-10-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            arbeidsgiverIdent: '123456789',
            beløp: 0,
          },
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 48237,
          },
        ],
      },
      {
        fom: '2025-11-01',
        tom: '2025-11-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            arbeidsgiverIdent: '123456789',
            beløp: 758.47,
          },
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 50534,
          },
        ],
      },
      {
        fom: '2025-12-01',
        tom: '2025-12-31',
        inntekter: [
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 9188,
          },
          {
            inntektAktivitetType: 'FRILANSINNTEKT',
            beløp: 7505,
          },
        ],
      },
      {
        fom: '2025-09-01',
        tom: '2025-09-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            arbeidsgiverIdent: '321654987',
            beløp: 0,
          },
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 50791,
          },
        ],
      },
      {
        fom: '2025-08-01',
        tom: '2025-08-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            arbeidsgiverIdent: '321654987',
            beløp: 218,
          },
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 50534,
          },
        ],
      },
      {
        fom: '2025-06-01',
        tom: '2025-06-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            arbeidsgiverIdent: '321654987',
            beløp: 55511.58,
          },
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 924,
          },
        ],
      },
      {
        fom: '2025-05-01',
        tom: '2025-05-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            arbeidsgiverIdent: '321654987',
            beløp: 54169,
          },
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 2100,
          },
        ],
      },
      {
        fom: '2025-04-01',
        tom: '2025-04-30',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            arbeidsgiverIdent: '321654987',
            beløp: 47536.99,
          },
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 2200,
          },
        ],
      },
      {
        fom: '2025-03-01',
        tom: '2025-03-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            arbeidsgiverIdent: '321654987',
            beløp: 47535.41,
          },
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 2300,
          },
        ],
      },
      {
        fom: '2025-02-01',
        tom: '2025-02-28',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            arbeidsgiverIdent: '321654987',
            beløp: 51932.9,
          },
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 2000,
          },
        ],
      },
      {
        fom: '2025-01-01',
        tom: '2025-01-31',
        inntekter: [
          {
            inntektAktivitetType: 'ARBEIDSTAKERINNTEKT',
            arbeidsgiverIdent: '321654987',
            beløp: 47418.74,
          },
          {
            inntektAktivitetType: 'YTELSEINNTEKT',
            beløp: 2100,
          },
        ],
      },
    ],
    arbeidsgiverOpplysningerPerId: {
      123456789: {
        navn: 'Barnehagen AS',
        identifikator: '123456789',
        erPrivatPerson: false,
      },
      321654987: {
        navn: 'Badeland Sykehus',
        identifikator: '321654987',
        erPrivatPerson: false,
      },
    },
  },
};
