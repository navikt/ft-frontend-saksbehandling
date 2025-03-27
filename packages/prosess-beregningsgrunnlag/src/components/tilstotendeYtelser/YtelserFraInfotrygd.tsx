import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';

import { formatCurrencyNoKr } from '@navikt/ft-utils';

type Props = {
  bruttoPrAar?: number;
};

/**
 * YtelserFraInfotrygd
 *
 * Presentasjonskomponent. Viser navn og sum på alle andeler som er tilstøttende ytelser fra infotrygd
 */
export const YtelserFraInfotrygd = ({ bruttoPrAar }: Props) => {
  if (bruttoPrAar || bruttoPrAar === 0) {
    return (
      <VStack gap="2">
        <Heading size="medium">
          <FormattedMessage id="Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2" />
        </Heading>
        <HStack gap="10" justify="end">
          <Detail>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
          </Detail>
          <Detail>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
          </Detail>
        </HStack>
        <HStack justify="space-between">
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn" />
          </BodyShort>
          <HStack gap="14">
            <BodyShort size="small">{formatCurrencyNoKr(bruttoPrAar / 12)}</BodyShort>
            <Label size="small">{formatCurrencyNoKr(bruttoPrAar)}</Label>
          </HStack>
        </HStack>
      </VStack>
    );
  }
  return null;
};
