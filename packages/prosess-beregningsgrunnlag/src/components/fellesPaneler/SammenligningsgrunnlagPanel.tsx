import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { SammenligningsgrunlagProp } from '@navikt/ft-types';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import styles from './avvikopplysningerPanel.less';

const skilleLinje = (
  <FlexRow>
    <FlexColumn>
      <div className={styles.linjeSkille} />
    </FlexColumn>
  </FlexRow>
);

type OwnProps = {
  beregnetAarsinntekt?: number;
  sammenligningsgrunnlag: SammenligningsgrunlagProp;
  erPGI: boolean;
};

const SammenligningsgrunnlagPanel: FunctionComponent<OwnProps> = ({
  beregnetAarsinntekt,
  sammenligningsgrunnlag,
  erPGI,
}) => {
  const { differanseBeregnet, rapportertPrAar, avvikProsent } = sammenligningsgrunnlag;
  const avvikProsentAvrundet = parseFloat(avvikProsent.toFixed(1));
  const inntektTekst = erPGI
    ? 'Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring'
    : 'Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt';
  return (
    <>
      {skilleLinje}
      <FlexRow>
        <FlexColumn className={styles.colLable}>
          <BodyShort size="small">
            <FormattedMessage id={inntektTekst} />
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.colValue}>
          <BodyShort size="small">
            {beregnetAarsinntekt || beregnetAarsinntekt === 0 ? formatCurrencyNoKr(beregnetAarsinntekt) : '-'}
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.colAvvik} />
      </FlexRow>
      {skilleLinje}
      <FlexRow>
        <FlexColumn className={styles.colLable}>
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt" />
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.colValue}>
          <BodyShort size="small">{formatCurrencyNoKr(rapportertPrAar)}</BodyShort>
        </FlexColumn>
        <FlexColumn className={styles.colAvvik} />
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <div className={styles.linjeSkilleTykk} />
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn className={styles.colLable}>
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
