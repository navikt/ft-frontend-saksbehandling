import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { DateLabel, FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';

import { Label, BodyShort, Detail, Heading } from '@navikt/ds-react';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import Ledelinje from '../fellesPaneler/Ledelinje';

type OwnProps = {
  alleAndeler: BeregningsgrunnlagAndel[];
};

/**
 * GrunnlagForAarsinntektPanelFL
 *
 * Presentasjonskomponent. Viser beregningsgrunnlag for frilansere.
 * Viser kun én frilanserinntekt.
 * Vises også hvis status er en kombinasjonsstatus som inkluderer frilanser.
 */
const GrunnlagForAarsinntektPanelFL: FunctionComponent<OwnProps> = ({ alleAndeler }) => {
  const relevantAndel = alleAndeler.find(
    andel => !andel.erTilkommetAndel && andel.aktivitetStatus === AktivitetStatus.FRILANSER,
  );
  if (!relevantAndel) {
    return null;
  }
  const beregnetAarsinntekt = relevantAndel.beregnetPrAar;
  const startDato = relevantAndel.arbeidsforhold?.startdato;
  return (
    <>
      <Heading size="medium">
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt" />
      </Heading>
      <VerticalSpacer fourPx />
      <FlexRow className={beregningStyles.rows}>
        <FlexColumn className={beregningStyles.tabellAktivitet}>
          {startDato && (
            <BodyShort size="small">
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2" />
              <span className={beregningStyles.semiBoldText}>
                <DateLabel dateString={startDato} />
              </span>
            </BodyShort>
          )}
        </FlexColumn>
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
      <FlexRow className={beregningStyles.rows}>
        <FlexColumn className={beregningStyles.tabellAktivitet}>
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans" />
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={beregningStyles.tabellInntekt}>
          <BodyShort size="small">{beregnetAarsinntekt ? formatCurrencyNoKr(beregnetAarsinntekt / 12) : 0}</BodyShort>
        </FlexColumn>
        <FlexColumn className={beregningStyles.tabellInntekt}>
          <Label size="small">{beregnetAarsinntekt ? formatCurrencyNoKr(beregnetAarsinntekt) : 0}</Label>
        </FlexColumn>
      </FlexRow>
    </>
  );
};

export default GrunnlagForAarsinntektPanelFL;
