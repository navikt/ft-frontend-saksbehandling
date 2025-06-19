import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, Table } from '@navikt/ds-react';
import dayjs from 'dayjs';
import norskFormat from 'dayjs/locale/nb';

import { AktivitetStatus, InntektAktivitetType } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { InntektsgrunnlagInntekt } from '@navikt/ft-types/src/Beregningsgrunnlag';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

const finnMåned = (dato: string): string => {
  const date = dayjs(dato);
  const maanedNavn = date.locale(norskFormat).format('MMM');
  return maanedNavn.charAt(0).toUpperCase() + maanedNavn.slice(1, 3);
};

const finnAktivitetNavn = (
  inntekt: InntektsgrunnlagInntekt,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const ago = inntekt.arbeidsgiverIdent ? arbeidsgiverOpplysningerPerId[inntekt.arbeidsgiverIdent] : undefined;
  if (ago) {
    return `${ago.navn} (${ago.identifikator})`;
  }
  if (inntekt.inntektAktivitetType === InntektAktivitetType.FRILANS) {
    return 'Registerinntekt.Tabell.Frilans';
  }
  return 'Registerinntekt.Tabell.Annen';
};

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const erAktivVedStp = (
  inntekt: InntektsgrunnlagInntekt,
  andelerVedSkjæringstidspunkt: BeregningsgrunnlagAndel[],
): boolean => {
  if (inntekt.arbeidsgiverIdent) {
    return andelerVedSkjæringstidspunkt.some(a => a.arbeidsforhold?.arbeidsgiverIdent === inntekt.arbeidsgiverIdent);
  }
  if (inntekt.inntektAktivitetType === InntektAktivitetType.FRILANS) {
    return andelerVedSkjæringstidspunkt.some(a => a.aktivitetStatus === AktivitetStatus.FRILANSER);
  }
  return false;
};

export const RegisterinntektTabell = ({ beregningsgrunnlag, arbeidsgiverOpplysningerPerId }: Props) => {
  const inntektsgrunnlag = beregningsgrunnlag.inntektsgrunnlag;
  const andelerVedSkjæringstidspunkt = beregningsgrunnlag.beregningsgrunnlagPeriode.find(
    p => p.beregningsgrunnlagPeriodeFom === beregningsgrunnlag.skjaeringstidspunktBeregning,
  )?.beregningsgrunnlagPrStatusOgAndel;
  if (!inntektsgrunnlag || !andelerVedSkjæringstidspunkt) {
    return null;
  }
  const måneder = inntektsgrunnlag.beregningsgrunnlagInntekter.sort((a, b) =>
    dayjs(a.fom).isBefore(dayjs(b.fom)) ? 1 : -1,
  );
  return (
    <>
      <Heading level="3" size="xsmall">
        <FormattedMessage id="Registerinntekt.Overskrift" />
      </Heading>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textSize="small">
              <FormattedMessage id="Registerinntekt.Tabell.Måned" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small">
              {' '}
              <FormattedMessage id="Registerinntekt.Tabell.Aktivitet" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small">
              {' '}
              <FormattedMessage id="Registerinntekt.Tabell.Beløp" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small">
              {' '}
              <FormattedMessage id="Registerinntekt.Tabell.Aktivt" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {måneder.map(måned => (
            <>
              {måned.inntekter.map((inntekt, index) => (
                <Table.Row key={inntekt.arbeidsgiverIdent}>
                  <Table.HeaderCell textSize="small" scope="row">
                    {index === 0 ? finnMåned(måned.fom) : ''}
                  </Table.HeaderCell>
                  <Table.DataCell textSize="small">
                    <FormattedMessage id={finnAktivitetNavn(inntekt, arbeidsgiverOpplysningerPerId)} />
                  </Table.DataCell>
                  <Table.DataCell textSize="small">{formatCurrencyNoKr(inntekt.beløp)}</Table.DataCell>
                  <Table.DataCell textSize="small">
                    <FormattedMessage
                      id={
                        erAktivVedStp(inntekt, andelerVedSkjæringstidspunkt)
                          ? 'Registerinntekt.Tabell.Ja'
                          : 'Registerinntekt.Tabell.Nei'
                      }
                    />
                  </Table.DataCell>
                </Table.Row>
              ))}
            </>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
