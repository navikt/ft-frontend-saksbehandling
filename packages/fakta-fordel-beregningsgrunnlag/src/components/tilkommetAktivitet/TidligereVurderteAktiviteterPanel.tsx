import { ArbeidsgiverOpplysningerPerId, VurderInntektsforholdPeriode } from '@navikt/ft-types';
import { EditedIcon, Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import React, { FC } from 'react';
import { Tag } from '@navikt/ds-react';
import { useIntl } from 'react-intl';
import styles from './tilkommetAktivitet.module.css';
import { getInntektsforholdIdentifikator } from './TilkommetInntektsforholdField';
import { getAktivitetNavn } from './TilkommetAktivitetUtils';

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
          <TableColumn>{getAktivitetNavn(inntektsforhold, arbeidsgiverOpplysningerPerId)}</TableColumn>
          <TableColumn>
            {inntektsforhold.skalRedusereUtbetaling
              ? intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Ja' })
              : intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Nei' })}
          </TableColumn>
          {(harBruttoInntekt || harInntektsmelding) && (
            <TableColumn>
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

  return (
    <div className={styles.aktivitetContainer}>
      <Table
        headerTextCodes={[
          'BeregningInfoPanel.TilkommetAktivitet.Aktivitet',
          'BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling',
          harInntektsforholdMedÅrsinntekt ? 'BeregningInfoPanel.TilkommetAktivitet.Årsinntekt' : 'EMPTY',
        ]}
        noHover
        classNameTable={styles.aktivitetTable}
      >
        {getInntektsforholdTableRows(vurderInntektsforholdPeriode)}
      </Table>
    </div>
  );
};
export default TidligereVurderteAktiviteterPanel;
