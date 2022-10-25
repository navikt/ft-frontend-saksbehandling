import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail, Heading } from '@navikt/ds-react';

import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { AktivitetStatus, isStatusDagpengerOrAAP } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import Ledelinje from '../fellesPaneler/Ledelinje';

export const getTekstForAndelBruktIBeregning = (andel: BeregningsgrunnlagAndel): string => {
  if (andel.aktivitetStatus === AktivitetStatus.DAGPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.Dagpenger';
  }
  if (andel.aktivitetStatus === AktivitetStatus.SYKEPENGER_AV_DAGPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger';
  }
  if (andel.aktivitetStatus === AktivitetStatus.PLEIEPENGER_AV_DAGPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger';
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
          <VerticalSpacer eightPx />
          <Heading size="medium">
            <FormattedMessage id="Beregningsgrunnlag.TilstottendeYtelse.TittelNav" />
          </Heading>
          <VerticalSpacer eightPx />
        </>
      )}
      <FlexRow>
        <FlexColumn className={beregningStyles.tabellAktivitet} />
        <FlexColumn className={beregningStyles.tabellInntekt}>
          <Detail size="small">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
          </Detail>
        </FlexColumn>
        <FlexColumn className={beregningStyles.tabellInntekt}>
          <Detail size="small">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
          </Detail>
        </FlexColumn>
      </FlexRow>
      <Ledelinje prosentBredde={100} />
      {relevanteAndeler.map((andel: BeregningsgrunnlagAndel) => (
        <div key={andel.aktivitetStatus}>
          <FlexRow>
            <FlexColumn className={beregningStyles.tabellAktivitet}>
              <Label size="small">
                <FormattedMessage id={getTekstForAndelBruktIBeregning(andel)} />
              </Label>
            </FlexColumn>
            <FlexColumn className={beregningStyles.tabellInntekt}>
              <BodyShort size="small">
                {formatCurrencyNoKr(andel.beregnetPrAar ? andel.beregnetPrAar / 12 : 0)}
              </BodyShort>
            </FlexColumn>
            <FlexColumn className={beregningStyles.tabellInntekt}>
              <BodyShort size="small" className={!harFlereYtelser ? beregningStyles.semiBoldText : ''}>
                {formatCurrencyNoKr(andel.beregnetPrAar)}
              </BodyShort>
            </FlexColumn>
          </FlexRow>
          <Ledelinje prosentBredde={100} />
          {gjelderBesteberegning && isAktivitetKodeDagpenger(andel.aktivitetStatus) && (
            <FlexRow>
              <FlexColumn>
                <BodyShort size="small">
                  <FormattedMessage id="Beregningsgrunnlag.TilstottendeYtelse.Besteberegning" />
                </BodyShort>
              </FlexColumn>
            </FlexRow>
          )}
        </div>
      ))}
    </>
  );
};

export default TilstotendeYtelser;
