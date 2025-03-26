import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack } from '@navikt/ds-react';

import { SammenligningsgrunlagProp } from '@navikt/ft-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

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
    <>
      <div className={styles.linjeSkille} />
      <HStack wrap={false}>
        <BodyShort size="small" className={styles.colLable}>
          <FormattedMessage id={inntektTekst} />
        </BodyShort>
        <BodyShort size="small" className={styles.colValue}>
          {beregnetAarsinntekt || beregnetAarsinntekt === 0 ? formatCurrencyNoKr(beregnetAarsinntekt) : '-'}
        </BodyShort>
      </HStack>
      <div className={styles.linjeSkille} />
      <HStack wrap={false}>
        <BodyShort size="small" className={styles.colLable}>
          <FormattedMessage id={sammenligningTekst} />
        </BodyShort>
        <BodyShort size="small" className={styles.colValue}>
          {formatCurrencyNoKr(rapportertPrAar)}
        </BodyShort>
      </HStack>
      <div className={styles.linjeSkilleTykk} />
      <HStack wrap={false}>
        <BodyShort size="small" className={styles.colLable}>
          <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik" />
        </BodyShort>
        <BodyShort size="small" className={styles.colValue}>
          {formatCurrencyNoKr(differanseBeregnet === undefined ? 0 : differanseBeregnet)}
        </BodyShort>
        <BodyShort
          size="small"
          className={`${avvikProsentAvrundet > 25 ? beregningStyles.redError : ''} ${beregningStyles.semiBoldText} ${styles.marginLeft}`}
        >
          <FormattedMessage
            id="Beregningsgrunnlag.Avviksopplysninger.AvvikProsent"
            values={{ avvik: avvikProsentAvrundet }}
          />
        </BodyShort>
      </HStack>
    </>
  );
};
