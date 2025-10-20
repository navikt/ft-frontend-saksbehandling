import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Heading, Table } from '@navikt/ds-react';
import dayjs from 'dayjs';
import norskFormat from 'dayjs/locale/nb';

import { AktivitetStatus, InntektAktivitetType } from '@navikt/ft-kodeverk';
import type {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  InntektsgrunnlagInntekt,
} from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { formaterArbeidsgiver, sortPeriodsByFom } from '@navikt/ft-utils';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const RegisterinntektTabell = ({ beregningsgrunnlag, arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();
  const { inntektsgrunnlag, beregningsgrunnlagPeriode, skjaeringstidspunktBeregning } = beregningsgrunnlag;
  const andelerVedSkjæringstidspunkt = beregningsgrunnlagPeriode.find(
    p => p.beregningsgrunnlagPeriodeFom === skjaeringstidspunktBeregning,
  )?.beregningsgrunnlagPrStatusOgAndel;
  if (!inntektsgrunnlag || !andelerVedSkjæringstidspunkt) {
    return null;
  }
  const måneder = inntektsgrunnlag.beregningsgrunnlagInntekter.sort(sortPeriodsByFom);
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
              <FormattedMessage id="Registerinntekt.Tabell.Aktivitet" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small" align="right">
              <FormattedMessage id="Registerinntekt.Tabell.Beløp" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small">
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
                    <FormattedMessage id={finnAktivitetNavn(intl, inntekt, arbeidsgiverOpplysningerPerId)} />
                  </Table.DataCell>
                  <Table.DataCell textSize="small" align="right">
                    <BeløpLabel beløp={inntekt.beløp} />
                  </Table.DataCell>
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

const finnMåned = (dato: string): string => {
  const date = dayjs(dato);
  const maanedNavn = date.locale(norskFormat).format('MMM');
  return maanedNavn.charAt(0).toUpperCase() + maanedNavn.slice(1, 3);
};

const finnAktivitetNavn = (
  intl: IntlShape,
  inntekt: InntektsgrunnlagInntekt,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const ago = inntekt.arbeidsgiverIdent ? arbeidsgiverOpplysningerPerId[inntekt.arbeidsgiverIdent] : undefined;
  if (ago) {
    return formaterArbeidsgiver(ago);
  }
  if (inntekt.inntektAktivitetType === InntektAktivitetType.FRILANS) {
    return intl.formatMessage({ id: 'Registerinntekt.Tabell.Frilans' });
  }
  return intl.formatMessage({ id: 'Registerinntekt.Tabell.Annen' });
};
