import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import { DateLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';

import { Label, BodyShort, Detail } from '@navikt/ds-react';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';

type OwnProps = {
  alleAndeler: BeregningsgrunnlagAndel[];
};

/**
 * GrunnlagForAarsinntektPanelFL
 *
 * Presentasjonskomponent. Viser beregningsgrunnlag for frilansere.
 * Viser kun én frilanserinntekt og et inputfelt for å oversyre det ved aksjonspunkt.
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
      <Label size="medium" className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt" />
      </Label>
      <VerticalSpacer eightPx />
      <Row className={beregningStyles.rows}>
        <Column xs="8">
          {startDato && (
            <BodyShort size="small">
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2" />
              <span className={beregningStyles.semiBoldText}>
                <DateLabel dateString={startDato} />
              </span>
            </BodyShort>
          )}
        </Column>
        <Column xs="2" className={beregningStyles.colMaanedText}>
          <Detail size="small">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
          </Detail>
        </Column>
        <Column xs="2" className={beregningStyles.colAarText}>
          <Detail size="small">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
          </Detail>
        </Column>
      </Row>
      <Row className={beregningStyles.rows}>
        <Column xs="8">
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans" />
          </BodyShort>
        </Column>
        <Column xs="2" className={beregningStyles.colMaanedText}>
          <BodyShort size="small">{beregnetAarsinntekt ? formatCurrencyNoKr(beregnetAarsinntekt / 12) : 0}</BodyShort>
        </Column>
        <Column xs="2" className={beregningStyles.colAarText}>
          <Label size="small">{beregnetAarsinntekt ? formatCurrencyNoKr(beregnetAarsinntekt) : 0}</Label>
        </Column>
      </Row>
    </>
  );
};

export default GrunnlagForAarsinntektPanelFL;
