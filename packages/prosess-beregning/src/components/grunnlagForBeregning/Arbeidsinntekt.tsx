import { FormattedMessage, useIntl } from 'react-intl';

import { BriefcaseFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Heading, HStack, Table, Tag } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { BeløpLabel, LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { BTag } from '@navikt/ft-utils';

import { formaterArbeidsgiverNullable } from '../../utils/arbeidsgiverUtils';
import { Todo } from '../Todo';

import styles from './arbeidsinntekt.module.css';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const Arbeidsinntekt = ({ beregningsgrunnlag, arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const andelerIFørstePeriode = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel || [];
  const relevanteAndeler = finnAndelerSomSkalVises(andelerIFørstePeriode);

  if (relevanteAndeler.length === 0) {
    return null;
  }

  const formaterArbeidsgiver = formaterArbeidsgiverNullable(arbeidsgiverOpplysningerPerId, intl);

  return (
    <div>
      <HStack gap="space-8" align="center">
        <BriefcaseFillIcon aria-hidden fontSize="1.5rem" />
        <Heading size="medium" level="3">
          <FormattedMessage id="Arbeidsinntekt.Tittel" />
        </Heading>
      </HStack>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textSize="small">
              <FormattedMessage id="Arbeidsinntekt.Table.TypeInntekt" />
            </Table.HeaderCell>
            <Table.DataCell textSize="small">
              <FormattedMessage
                id="Arbeidsinntekt.Table.Inntektsmelding"
                values={{
                  br: <br />,
                  b: BTag,
                }}
              />
            </Table.DataCell>
            <Table.DataCell textSize="small">
              <FormattedMessage
                id="Arbeidsinntekt.Table.Innrapportert"
                values={{
                  br: <br />,
                  b: BTag,
                }}
              />
            </Table.DataCell>
            <Table.DataCell textSize="small">
              <FormattedMessage
                id="Arbeidsinntekt.Table.Sammenligningsgrunnlag"
                values={{
                  br: <br />,
                  b: BTag,
                }}
              />
            </Table.DataCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {relevanteAndeler.map(andel => (
            <Table.ExpandableRow
              key={`${andel.arbeidsforhold?.arbeidsgiverIdent ?? 'unknown'}-${andel.andelsnr}`}
              expandOnRowClick
              togglePlacement="right"
              content={
                <div>
                  {andel.beregningsperiodeFom && (
                    <BodyShort>
                      <PeriodLabel
                        dateStringFom={andel.beregningsperiodeFom}
                        dateStringTom={andel.beregningsperiodeTom}
                      />
                    </BodyShort>
                  )}
                  {andel.arbeidsforhold?.stillingsProsent && (
                    <LabeledValue horizontal label="Sist endret lønn" value="TODO" />
                  )}
                  {andel.arbeidsforhold?.stillingsProsent && (
                    <LabeledValue label="Stillingsprosent" value={`${andel.arbeidsforhold.stillingsProsent}%`} />
                  )}
                </div>
              }
            >
              <Table.HeaderCell>{formaterArbeidsgiver(andel.arbeidsforhold?.arbeidsgiverIdent)}</Table.HeaderCell>
              <Table.DataCell>
                <BeløpLabel beløp={andel.beregnetPrAar} kr />
                <Todo beskrivelse="Finn ut hvilket tall som skal brukes her" />
                <IMTag />
              </Table.DataCell>
              <Table.DataCell>
                <BeløpLabel beløp={andel.beregnetPrAar} kr />
                <Todo beskrivelse="Finn ut hvilket tall som skal brukes her" />
                <AOTag />
              </Table.DataCell>
              <Table.DataCell>
                <BeløpLabel beløp={andel.beregnetPrAar} kr />
                <Todo beskrivelse="Finn ut hvilket tall som skal brukes her" />
              </Table.DataCell>
            </Table.ExpandableRow>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

const finnAndelerSomSkalVises = (andeler: BeregningsgrunnlagAndel[]): BeregningsgrunnlagAndel[] =>
  andeler.filter(andel => andel.aktivitetStatus === 'AT').filter(andel => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean => {
  // Andelen er fastsatt før og må kunne fastsettes igjen
  if (andel.overstyrtPrAar !== null && andel.overstyrtPrAar !== undefined) {
    return true;
  }

  // Andeler som er lagt til av sbh eller tilkom før stp skal ikke kunne endres på
  return andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;
};

const AOTag = () => (
  <Tag variant="alt2" size="xsmall" aria-label="A-Ordningen" className={styles.tag}>
    AO
  </Tag>
);

const IMTag = () => (
  <Tag variant="info" size="xsmall" aria-label="Inntektsmelding" className={styles.tag}>
    IM
  </Tag>
);
