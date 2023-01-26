import { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { EditedIcon, Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import React from 'react';
import { Tag } from '@navikt/ds-react';
import { useIntl } from 'react-intl';
import styles from './tilkommetAktivitet.less';
import { getInntektsforholdIdentifikator } from './TilkommetInntektsforholdField';
import { getAktivitetNavn } from './TilkommetAktivitetUtils';

interface TidligereVurderteAktiviteterPanelType {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vurderInntektsforholdPeriode: VurderInntektsforholdPeriode;
}

const TidligereVurderteAktiviteterPanel = ({
  arbeidsgiverOpplysningerPerId,
  vurderInntektsforholdPeriode,
}: TidligereVurderteAktiviteterPanelType) => {
  const intl = useIntl();
  const getInntektsforholdTableRows = (inntektsforholdPeriode: VurderInntektsforholdPeriode): JSX.Element[] => {
    const tableRows: JSX.Element[] = [];
    inntektsforholdPeriode.inntektsforholdListe.forEach(inntektsforhold => {
      const harBruttoInntekt = !!inntektsforhold.bruttoInntektPrÅr && +inntektsforhold.bruttoInntektPrÅr > 0;
      tableRows.push(
        <TableRow key={getInntektsforholdIdentifikator(inntektsforhold)}>
          <TableColumn>{getAktivitetNavn(inntektsforhold, arbeidsgiverOpplysningerPerId)}</TableColumn>
          <TableColumn>
            {inntektsforhold.skalRedusereUtbetaling
              ? intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Ja' })
              : intl.formatMessage({ id: 'BeregningInfoPanel.TilkommetAktivitet.Nei' })}
          </TableColumn>
          {harBruttoInntekt && (
            <TableColumn>
              {formatCurrencyWithKr(inntektsforhold.bruttoInntektPrÅr)}
              {inntektsforhold.harInntektsmelding && (
                <Tag className={styles.inntektsmeldingTag} variant="neutral" size="xsmall">
                  IM
                </Tag>
              )}
              {!inntektsforhold.harInntektsmelding && <EditedIcon className={styles.edited} />}
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
