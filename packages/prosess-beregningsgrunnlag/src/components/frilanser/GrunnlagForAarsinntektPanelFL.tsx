import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { DateLabel } from '@navikt/ft-ui-komponenter';
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
    <VStack gap="2">
      <Heading size="medium">
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt" />
      </Heading>
      <HStack gap="4" justify="space-between">
        {startDato && (
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2" />
            <span className={beregningStyles.semiBoldText}>
              <DateLabel dateString={startDato} />
            </span>
          </BodyShort>
        )}
        <HStack gap="2">
          <Detail>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
          </Detail>
          <Detail>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
          </Detail>
        </HStack>
      </HStack>
      <Ledelinje prosentBredde={100} />
      <HStack gap="4" justify="space-between">
        <BodyShort size="small">
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans" />
        </BodyShort>
        <HStack gap="2">
          <BodyShort size="small">{beregnetAarsinntekt ? formatCurrencyNoKr(beregnetAarsinntekt / 12) : 0}</BodyShort>
          <Label size="small">{beregnetAarsinntekt ? formatCurrencyNoKr(beregnetAarsinntekt) : 0}</Label>
        </HStack>
      </HStack>
    </VStack>
  );
};
