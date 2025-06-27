import { FormattedMessage } from 'react-intl';

import { HStack, Table, Tag } from '@navikt/ds-react';

import { ArbeidsgiverOpplysningerPerId, Inntektsforhold, VurderInntektsforholdPeriode } from '@navikt/ft-types';
import { BeløpLabel, EditedIcon } from '@navikt/ft-ui-komponenter';

import { getAktivitetNavnFraInnteksforhold } from './tilkommetAktivitetUtils';

import styles from './tilkommetAktivitet.module.css';

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vurderInntektsforholdPeriode: VurderInntektsforholdPeriode;
}

const erDefinert = (tall?: number) => !!tall && +tall > 0;

const getInntektsforholdIdentifikator = (inntektsforhold: Inntektsforhold | undefined): string => {
  if (!inntektsforhold) {
    return '';
  }
  let result = inntektsforhold.aktivitetStatus;
  if (inntektsforhold.arbeidsgiverId) {
    result += inntektsforhold.arbeidsgiverId;
  }
  if (inntektsforhold.arbeidsforholdId) {
    result += inntektsforhold.arbeidsforholdId;
  }
  return result;
};

export const TidligereVurderteAktiviteterPanel = ({
  arbeidsgiverOpplysningerPerId,
  vurderInntektsforholdPeriode,
}: Props) => {
  const harInntektsforholdMedÅrsinntekt = vurderInntektsforholdPeriode.inntektsforholdListe.some(
    inntektsforhold => inntektsforhold.bruttoInntektPrÅr,
  );

  return (
    <Table className={styles.table}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Aktivitet" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling" />
          </Table.HeaderCell>
          {harInntektsforholdMedÅrsinntekt && (
            <Table.HeaderCell scope="col" align="right">
              <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Årsinntekt" />
            </Table.HeaderCell>
          )}
          {!harInntektsforholdMedÅrsinntekt && <Table.HeaderCell scope="col" />}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {vurderInntektsforholdPeriode.inntektsforholdListe.map(inntektsforhold => {
          const harBruttoInntekt = erDefinert(inntektsforhold.bruttoInntektPrÅr);
          const harInntektsmelding = erDefinert(inntektsforhold.inntektFraInntektsmeldingPrÅr);
          return (
            <Table.Row key={getInntektsforholdIdentifikator(inntektsforhold)}>
              <Table.DataCell textSize="small">
                {getAktivitetNavnFraInnteksforhold(inntektsforhold, arbeidsgiverOpplysningerPerId)}
              </Table.DataCell>
              <Table.DataCell textSize="small">
                <FormattedMessage
                  id={
                    inntektsforhold.skalRedusereUtbetaling
                      ? 'BeregningInfoPanel.TilkommetAktivitet.Ja'
                      : 'BeregningInfoPanel.TilkommetAktivitet.Nei'
                  }
                />
              </Table.DataCell>
              {(harBruttoInntekt || harInntektsmelding) && (
                <Table.DataCell textSize="small" align="right">
                  {harBruttoInntekt && (
                    <HStack justify="end" gap="2">
                      <BeløpLabel beløp={inntektsforhold.bruttoInntektPrÅr ?? 0} kr />
                      <EditedIcon />
                    </HStack>
                  )}
                  {harInntektsmelding && !harBruttoInntekt && (
                    <HStack justify="end" gap="2">
                      <BeløpLabel beløp={inntektsforhold.inntektFraInntektsmeldingPrÅr ?? 0} kr />
                      <Tag variant="neutral" size="xsmall">
                        IM
                      </Tag>
                    </HStack>
                  )}
                </Table.DataCell>
              )}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
