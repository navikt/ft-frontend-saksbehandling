import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, HStack } from '@navikt/ds-react';

import { SammenligningsgrunlagProp } from '@navikt/ft-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { HorizontalLine } from '../../util/HorizontalLine';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import styles from './avvikopplysningerPanel.module.css';

type Props = {
  beregnetAarsinntekt?: number;
  sammenligningsgrunnlag: SammenligningsgrunlagProp;
  erPGI: boolean;
};

export const SammenligningsgrunnlagPanel = ({ beregnetAarsinntekt, sammenligningsgrunnlag, erPGI }: Props) => {
  const { differanseBeregnet, rapportertPrAar, avvikProsent } = sammenligningsgrunnlag;
  const avvikProsentAvrundet = parseFloat(avvikProsent.toFixed(1));
  const inntektTekst = erPGI
    ? 'Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring'
    : 'Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt';
  const sammenligningTekst = erPGI
    ? 'Beregningsgrunnlag.Avviksopplysninger.SamletInntekt'
    : 'Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt';

  return (
    <Box width="400px">
      <HorizontalLine />
      <HStack wrap={false} justify="space-between">
        <BodyShort size="small">
          <FormattedMessage id={inntektTekst} />
        </BodyShort>
        <BodyShort size="small">
          {beregnetAarsinntekt || beregnetAarsinntekt === 0 ? formatCurrencyNoKr(beregnetAarsinntekt) : '-'}
        </BodyShort>
      </HStack>
      <HorizontalLine />
      <HStack wrap={false} justify="space-between">
        <BodyShort size="small">
          <FormattedMessage id={sammenligningTekst} />
        </BodyShort>
        <BodyShort size="small">{formatCurrencyNoKr(rapportertPrAar)}</BodyShort>
      </HStack>
      <HorizontalLine hasBorderDark />
      <HStack wrap={false} justify="space-between">
        <BodyShort size="small">
          <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik" />
        </BodyShort>
        <HStack gap="14">
          <BodyShort
            size="small"
            className={`${avvikProsentAvrundet > 25 ? beregningStyles.redError : ''} ${beregningStyles.semiBoldText} ${styles.marginLeft}`}
          >
            <FormattedMessage
              id="Beregningsgrunnlag.Avviksopplysninger.AvvikProsent"
              values={{ avvik: avvikProsentAvrundet }}
            />
          </BodyShort>
          <BodyShort size="small">
            {formatCurrencyNoKr(differanseBeregnet === undefined ? 0 : differanseBeregnet)}
          </BodyShort>
        </HStack>
      </HStack>
    </Box>
  );
};
