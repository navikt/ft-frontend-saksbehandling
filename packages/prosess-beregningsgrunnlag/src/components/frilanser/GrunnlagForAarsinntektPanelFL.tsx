import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Heading, Label } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { DateLabel, FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { Ledelinje } from '../fellesPaneler/Ledelinje';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

type Props = {
  alleAndeler: BeregningsgrunnlagAndel[];
};

/**
 * GrunnlagForAarsinntektPanelFL
 *
 * Presentasjonskomponent. Viser beregningsgrunnlag for frilansere.
 * Viser kun én frilanserinntekt.
 * Vises også hvis status er en kombinasjonsstatus som inkluderer frilanser.
 */
export const GrunnlagForAarsinntektPanelFL = ({ alleAndeler }: Props) => {
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
          <Detail>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
          </Detail>
        </FlexColumn>
        <FlexColumn className={beregningStyles.tabellInntekt}>
          <Detail>
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
