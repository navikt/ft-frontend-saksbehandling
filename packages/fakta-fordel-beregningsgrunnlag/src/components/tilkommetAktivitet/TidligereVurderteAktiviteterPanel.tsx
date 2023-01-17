import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { Inntektsforhold, VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import React from 'react';
import styles from './tilkommetAktivitet.less';
import { getInntektsforholdIdentifikator } from './TilkommetInntektsforholdField';

interface TidligereVurderteAktiviteterPanelType {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vurderInntektsforholdPeriode: VurderInntektsforholdPeriode;
}

const TidligereVurderteAktiviteterPanel = ({
  arbeidsgiverOpplysningerPerId,
  vurderInntektsforholdPeriode,
}: TidligereVurderteAktiviteterPanelType) => {
  const getAktivitetNavn = (inntektsforhold: Inntektsforhold) => {
    let agOpplysning = null;
    if (inntektsforhold.arbeidsgiverId !== null && inntektsforhold.arbeidsgiverId !== undefined) {
      agOpplysning = arbeidsgiverOpplysningerPerId[inntektsforhold.arbeidsgiverId];
    }

    if (inntektsforhold.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER) {
      if (!agOpplysning) {
        return 'Arbeidsforhold';
      }
      return `${agOpplysning.navn} (Arbeidsforhold)`;
    }

    if (inntektsforhold.aktivitetStatus === AktivitetStatus.FRILANSER) {
      if (!agOpplysning) {
        return 'Frilanser';
      }
      return `${agOpplysning.navn} (Frilanser)`;
    }

    if (inntektsforhold.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE) {
      if (!agOpplysning) {
        return 'Selvstendig næringsdrivende';
      }
      return `${agOpplysning.navn}`;
    }

    return '';
  };

  const getInntektsforholdTableRows = (inntektsforholdPeriode: VurderInntektsforholdPeriode): JSX.Element[] => {
    const tableRows: JSX.Element[] = [];
    inntektsforholdPeriode.inntektsforholdListe.forEach(inntektsforhold => {
      const harBruttoInntekt = !!inntektsforhold.bruttoInntektPrÅr && +inntektsforhold.bruttoInntektPrÅr > 0;
      tableRows.push(
        <TableRow key={getInntektsforholdIdentifikator(inntektsforhold)}>
          <TableColumn>{getAktivitetNavn(inntektsforhold)}</TableColumn>
          <TableColumn>{inntektsforhold.skalRedusereUtbetaling ? 'Ja' : 'Nei'}</TableColumn>
          {harBruttoInntekt && <TableColumn>{formatCurrencyWithKr(inntektsforhold.bruttoInntektPrÅr)}</TableColumn>}
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
