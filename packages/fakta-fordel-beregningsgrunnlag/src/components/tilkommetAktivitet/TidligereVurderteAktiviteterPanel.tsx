import { JSX } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Table, Tag } from '@navikt/ds-react';

import { ArbeidsgiverOpplysningerPerId, Inntektsforhold, VurderInntektsforholdPeriode } from '@navikt/ft-types';
import { BeløpLabel, EditedIcon } from '@navikt/ft-ui-komponenter';

import { getAktivitetNavnFraInnteksforhold } from './TilkommetAktivitetUtils';

import styles from './tilkommetAktivitet.module.css';

type Props = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vurderInntektsforholdPeriode: VurderInntektsforholdPeriode;
};

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
  const intl = useIntl();
  const getInntektsforholdTableRows = (inntektsforholdPeriode: VurderInntektsforholdPeriode): JSX.Element[] => {
    const tableRows: JSX.Element[] = [];
    inntektsforholdPeriode.inntektsforholdListe.forEach(inntektsforhold => {
      const harBruttoInntekt = erDefinert(inntektsforhold.bruttoInntektPrÅr);
      const harInntektsmelding = erDefinert(inntektsforhold.inntektFraInntektsmeldingPrÅr);
      tableRows.push(
        <Table.Row key={getInntektsforholdIdentifikator(inntektsforhold)}>
          <Table.DataCell>
            <BodyShort size="small">
              {getAktivitetNavnFraInnteksforhold(inntektsforhold, arbeidsgiverOpplysningerPerId)}
            </BodyShort>
          </Table.DataCell>
          <Table.DataCell>
            <BodyShort size="small">
              {inntektsforhold.skalRedusereUtbetaling
                ? intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Ja' })
                : intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Nei' })}
            </BodyShort>
          </Table.DataCell>
          {(harBruttoInntekt || harInntektsmelding) && (
            <Table.DataCell>
              <BodyShort size="small">
                {harBruttoInntekt && (
                  <>
                    <BeløpLabel beløp={inntektsforhold.bruttoInntektPrÅr ?? 0} kr />
                    <EditedIcon />
                  </>
                )}
                {harInntektsmelding && !harBruttoInntekt && (
                  <>
                    <BeløpLabel beløp={inntektsforhold.inntektFraInntektsmeldingPrÅr ?? 0} kr />
                    <Tag className={styles.inntektsmeldingTag} variant="neutral" size="xsmall">
                      IM
                    </Tag>
                  </>
                )}
              </BodyShort>
            </Table.DataCell>
          )}
        </Table.Row>,
      );
    });
    return tableRows;
  };

  const harInntektsforholdMedÅrsinntekt = vurderInntektsforholdPeriode.inntektsforholdListe.some(
    inntektsforhold => inntektsforhold.bruttoInntektPrÅr,
  );

  return (
    <div className={styles.aktivitetContainer}>
      <Table className={styles.aktivitetTable}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Aktivitet" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling" />
            </Table.HeaderCell>
            {harInntektsforholdMedÅrsinntekt && (
              <Table.HeaderCell scope="col">
                <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.Årsinntekt" />
              </Table.HeaderCell>
            )}
            {!harInntektsforholdMedÅrsinntekt && (
              <Table.HeaderCell scope="col">
                <FormattedMessage id="BeregningInfoPanel.TilkommetAktivitet.TomTekst" />
              </Table.HeaderCell>
            )}
          </Table.Row>
        </Table.Header>
        <Table.Body>{getInntektsforholdTableRows(vurderInntektsforholdPeriode)}</Table.Body>
      </Table>
    </div>
  );
};
