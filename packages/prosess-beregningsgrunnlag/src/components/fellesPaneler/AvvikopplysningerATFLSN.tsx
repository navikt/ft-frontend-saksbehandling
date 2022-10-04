import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

import { VerticalSpacer, FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import styles from './avvikopplysningerPanel.less';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';

const lagFormatertetekster = (
  kriterie: string,
  visPanel: VisPanelProp,
  relevanteStatuser: RelevanteStatuserProp,
  isBold: boolean,
) => (
  <FlexColumn className={styles.colLable}>
    <BodyShort size="small" className={isBold ? beregningStyles.semiBoldText : ''}>
      {!relevanteStatuser.isKombinasjonsstatus && (
        <FormattedMessage id={`Beregningsgrunnlag.Avviksopplysninger.${kriterie}`} />
      )}
      {relevanteStatuser.isKombinasjonsstatus && visPanel && visPanel.visAT && (
        <FormattedMessage id={`Beregningsgrunnlag.Avviksopplysninger.${kriterie}.Arbeid`} />
      )}
      {relevanteStatuser.isKombinasjonsstatus && visPanel && visPanel.visFL && (
        <FormattedMessage id={`Beregningsgrunnlag.Avviksopplysninger.${kriterie}.Frilans`} />
      )}
      {relevanteStatuser.isKombinasjonsstatus && visPanel && visPanel.visSN && (
        <FormattedMessage id={`Beregningsgrunnlag.Avviksopplysninger.${kriterie}.Naring`} />
      )}
    </BodyShort>
  </FlexColumn>
);

type VisPanelProp = {
  visAT: boolean;
  visFL: boolean;
  visSN: boolean;
};

type OwnProps = {
  beregnetAarsinntekt?: number;
  relevanteStatuser: RelevanteStatuserProp;
  differanseBeregnet: number;
  sammenligningsgrunnlagSum: number;
  avvikProsentAvrundet: number;
  visPanel: VisPanelProp;
};

const AvvikopplysningerATFLSN: FunctionComponent<OwnProps> = ({
  relevanteStatuser,
  beregnetAarsinntekt,
  sammenligningsgrunnlagSum,
  visPanel,
  avvikProsentAvrundet,
  differanseBeregnet,
}) => (
  <>
    {relevanteStatuser.isKombinasjonsstatus && <VerticalSpacer sixteenPx />}
    <FlexRow>
      {lagFormatertetekster('OmregnetAarsinntekt', visPanel, relevanteStatuser, false)}
      <FlexColumn className={styles.colValue}>
        <BodyShort size="small">
          {beregnetAarsinntekt || beregnetAarsinntekt === 0 ? formatCurrencyNoKr(beregnetAarsinntekt) : '-'}
        </BodyShort>
      </FlexColumn>
      <FlexColumn className={styles.colAvvik} />
    </FlexRow>

    <FlexRow>
      {lagFormatertetekster('RapportertAarsinntekt', visPanel, relevanteStatuser, false)}
      <FlexColumn className={styles.colValue}>
        <BodyShort size="small">{formatCurrencyNoKr(sammenligningsgrunnlagSum)}</BodyShort>
      </FlexColumn>
      <FlexColumn className={styles.colAvvik} />
    </FlexRow>
    <FlexRow className={styles.avvikLinjeRad}>
      <FlexColumn className={`${styles.colLine} ${styles.colBorderTop}`} />
    </FlexRow>
    <FlexRow>
      {lagFormatertetekster('BeregnetAvvik', visPanel, relevanteStatuser, true)}
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

AvvikopplysningerATFLSN.defaultProps = {
  beregnetAarsinntekt: undefined,
};
export default AvvikopplysningerATFLSN;
