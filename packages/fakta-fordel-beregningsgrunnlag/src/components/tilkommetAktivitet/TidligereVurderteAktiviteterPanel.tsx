import { ArbeidsgiverOpplysningerPerId, VurderInntektsforholdPeriode } from '@navikt/ft-types';
import { EditedIcon, Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import React, { FC, JSX } from 'react';
import { BodyShort, Label, Tag } from '@navikt/ds-react';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './tilkommetAktivitet.module.css';
import { getInntektsforholdIdentifikator } from './TilkommetInntektsforholdField';
import { getAktivitetNavnFraInnteksforhold } from './TilkommetAktivitetUtils';

type TidligereVurderteAktiviteterPanelType = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vurderInntektsforholdPeriode: VurderInntektsforholdPeriode;
};

const erDefinert = (tall?: number) => !!tall && +tall > 0;

const TidligereVurderteAktiviteterPanel: FC<TidligereVurderteAktiviteterPanelType> = ({
  arbeidsgiverOpplysningerPerId,
  vurderInntektsforholdPeriode,
}) => {
  const intl = useIntl();
  const getInntektsforholdTableRows = (inntektsforholdPeriode: VurderInntektsforholdPeriode): JSX.Element[] => {
    const tableRows: JSX.Element[] = [];
    inntektsforholdPeriode.inntektsforholdListe.forEach(inntektsforhold => {
      const harBruttoInntekt = erDefinert(inntektsforhold.bruttoInntektPrÅr);
      const harInntektsmelding = erDefinert(inntektsforhold.inntektFraInntektsmeldingPrÅr);
      tableRows.push(
        <TableRow key={getInntektsforholdIdentifikator(inntektsforhold)}>
          <TableColumn>
            <BodyShort size="small">
              {getAktivitetNavnFraInnteksforhold(inntektsforhold, arbeidsgiverOpplysningerPerId)}
            </BodyShort>
          </TableColumn>
          <TableColumn>
            <BodyShort size="small">
              {inntektsforhold.skalRedusereUtbetaling
                ? intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Ja' })
                : intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Nei' })}
            </BodyShort>
          </TableColumn>
          {(harBruttoInntekt || harInntektsmelding) && (
            <TableColumn>
              <BodyShort size="small">
                {harBruttoInntekt && (
                  <>
                    {formatCurrencyWithKr(inntektsforhold.bruttoInntektPrÅr || 0)}
                    <EditedIcon />
                  </>
                )}
                {harInntektsmelding && !harBruttoInntekt && (
                  <>
                    {formatCurrencyWithKr(inntektsforhold.inntektFraInntektsmeldingPrÅr || 0)}
                    <Tag className={styles.inntektsmeldingTag} variant="neutral" size="xsmall">
                      IM
                    </Tag>
                  </>
                )}
              </BodyShort>
            </TableColumn>
          )}
        </TableRow>,
      );
    });
    return tableRows;
  };

  const harInntektsforholdMedÅrsinntekt = vurderInntektsforholdPeriode.inntektsforholdListe.some(
    inntektsforhold => inntektsforhold.bruttoInntektPrÅr,
  );

  const headerCodes = [
    'BeregningInfoPanel.TilkommetAktivitet.Aktivitet',
    'BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling',
    harInntektsforholdMedÅrsinntekt
      ? 'BeregningInfoPanel.TilkommetAktivitet.Årsinntekt'
      : 'BeregningInfoPanel.TilkommetAktivitet.TomTekst',
  ];
  const headerComponents = headerCodes.map(id => (
    <Label size="small" key={id}>
      <FormattedMessage id={id} />{' '}
    </Label>
  ));

  return (
    <div className={styles.aktivitetContainer}>
      <Table headerColumnContent={headerComponents} noHover classNameTable={styles.aktivitetTable}>
        {getInntektsforholdTableRows(vurderInntektsforholdPeriode)}
      </Table>
    </div>
  );
};
export default TidligereVurderteAktiviteterPanel;
