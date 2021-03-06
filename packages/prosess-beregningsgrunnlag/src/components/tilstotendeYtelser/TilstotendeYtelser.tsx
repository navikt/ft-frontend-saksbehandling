import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { VerticalSpacer, AvsnittSkiller } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { AktivitetStatus, isStatusDagpengerOrAAP } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';

export const getTekstForAndelBruktIBeregning = (andel: BeregningsgrunnlagAndel): string => {
  if (andel.aktivitetStatus === AktivitetStatus.DAGPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.Dagpenger';
  }
  if (andel.aktivitetStatus === AktivitetStatus.ARBEIDSAVKLARINGSPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.AAP';
  }
  return '';
};
const isAktivitetKodeDagpenger = (aktivitetStatusKode: string): boolean =>
  aktivitetStatusKode === AktivitetStatus.DAGPENGER;

type OwnProps = {
  alleAndeler: BeregningsgrunnlagAndel[];
  relevanteStatuser: RelevanteStatuserProp;
  gjelderBesteberegning: boolean;
};

const TilstotendeYtelser: FunctionComponent<OwnProps> = ({ alleAndeler, relevanteStatuser, gjelderBesteberegning }) => {
  const relevanteAndeler = alleAndeler.filter(andel => isStatusDagpengerOrAAP(andel.aktivitetStatus));
  const harFlereYtelser = relevanteAndeler.length > 1;
  return (
    <>
      {relevanteStatuser.isKombinasjonsstatus && (
        <>
          <AvsnittSkiller spaceAbove spaceUnder />
          <Element className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.TilstottendeYtelse.TittelNav" />
          </Element>
          <VerticalSpacer eightPx />
        </>
      )}
      <Row>
        <Column xs="7" />
        <Column xs="2" className={beregningStyles.colMaanedText}>
          <Undertekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
          </Undertekst>
        </Column>
        <Column xs="2" className={beregningStyles.colAarText}>
          <Undertekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
          </Undertekst>
        </Column>
        <Column xs="2" />
      </Row>

      <>
        {relevanteAndeler.map((andel: BeregningsgrunnlagAndel) => (
          <div key={andel.aktivitetStatus}>
            <Row>
              <Column xs="4">
                <Element>
                  <FormattedMessage id={getTekstForAndelBruktIBeregning(andel)} />
                </Element>
              </Column>
              <Column xs="3" />
              <Column xs="2" className={beregningStyles.colMaanedText}>
                <Normaltekst>{formatCurrencyNoKr(andel.beregnetPrAar ? andel.beregnetPrAar / 12 : 0)}</Normaltekst>
              </Column>
              <Column xs="2" className={beregningStyles.colAarText}>
                <Normaltekst className={!harFlereYtelser ? beregningStyles.semiBoldText : ''}>
                  {formatCurrencyNoKr(andel.beregnetPrAar)}
                </Normaltekst>
              </Column>
              <Column xs="2" />
            </Row>
            {gjelderBesteberegning && isAktivitetKodeDagpenger(andel.aktivitetStatus) && (
              <Row>
                <Column xs="12">
                  <Normaltekst>
                    <FormattedMessage id="Beregningsgrunnlag.TilstottendeYtelse.Besteberegning" />
                  </Normaltekst>
                </Column>
              </Row>
            )}
          </div>
        ))}
      </>
    </>
  );
};

export default TilstotendeYtelser;
