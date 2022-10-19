import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { SammenligningsgrunlagProp } from '@navikt/ft-types';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import styles from './avvikopplysningerPanel.less';

type OwnProps = {
  beregnetAarsinntekt?: number;
  sammenligningsgrunnlag: SammenligningsgrunlagProp;
};

const SammenligningsgrunnlagPanel: FunctionComponent<OwnProps> = ({ beregnetAarsinntekt, sammenligningsgrunnlag }) => {
  const { differanseBeregnet, rapportertPrAar, avvikProsent } = sammenligningsgrunnlag;
  const avvikProsentAvrundet = parseFloat(avvikProsent.toFixed(1));
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt" />
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.colValue}>
          <BodyShort size="small">
            {beregnetAarsinntekt || beregnetAarsinntekt === 0 ? formatCurrencyNoKr(beregnetAarsinntekt) : '-'}
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.colAvvik} />
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt" />
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.colValue}>
          <BodyShort size="small">{formatCurrencyNoKr(rapportertPrAar)}</BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.colAvvik} />
      </FlexRow>
      <FlexRow className={styles.avvikLinjeRad}>
        <FlexColumn className={`${styles.colLine} ${styles.colBorderTop}`} />
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik" />
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.colValue}>
          <BodyShort size="small">
            {formatCurrencyNoKr(differanseBeregnet === undefined ? 0 : differanseBeregnet)}
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.colAvvik}>
          <BodyShort
            size="small"
            className={`${avvikProsentAvrundet > 25 ? beregningStyles.redError : ''} ${beregningStyles.semiBoldText}`}
          >
            <FormattedMessage
              id="Beregningsgrunnlag.Avviksopplysninger.AvvikProsent"
              values={{ avvik: avvikProsentAvrundet }}
            />
          </BodyShort>
        </FlexColumn>
      </FlexRow>
    </>
  );
};

export default SammenligningsgrunnlagPanel;
