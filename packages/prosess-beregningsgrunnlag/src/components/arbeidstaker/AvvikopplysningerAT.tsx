import React, { FunctionComponent, ReactElement } from 'react';
import { BodyShort } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

import { SammenligningType } from '@navikt/ft-kodeverk';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { SammenligningsgrunlagProp } from '@navikt/ft-types';

import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import AvvikopplysningerATFL from '../fellesPaneler/AvvikopplysningerATFLSN';

const viserIkkeAvviksvurdering = (
  erKombinasjonsstatusATSN: boolean,
  erKombinasjonsstatusATFLSN: boolean,
): ReactElement => (
  <FlexRow>
    <FlexColumn>
      <BodyShort size="small">
        {erKombinasjonsstatusATSN && (
          <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATSN" />
        )}
        {erKombinasjonsstatusATFLSN && (
          <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN" />
        )}
      </BodyShort>
    </FlexColumn>
  </FlexRow>
);

type OwnProps = {
  relevanteStatuser: RelevanteStatuserProp;
  sammenligningsgrunnlagPrStatus: SammenligningsgrunlagProp[];
  beregnetAarsinntekt?: number;
};

const AvvikopplysningerAT: FunctionComponent<OwnProps> = ({
  relevanteStatuser,
  sammenligningsgrunnlagPrStatus,
  beregnetAarsinntekt,
}) => {
  const erKombinasjonsstatusATSN =
    relevanteStatuser.isKombinasjonsstatus &&
    relevanteStatuser.isArbeidstaker &&
    relevanteStatuser.isSelvstendigNaeringsdrivende &&
    !relevanteStatuser.isFrilanser;
  const erKombinasjonsstatusATFLSN =
    relevanteStatuser.isKombinasjonsstatus &&
    relevanteStatuser.isArbeidstaker &&
    relevanteStatuser.isSelvstendigNaeringsdrivende &&
    relevanteStatuser.isFrilanser;
  if (erKombinasjonsstatusATSN || erKombinasjonsstatusATFLSN) {
    return viserIkkeAvviksvurdering(erKombinasjonsstatusATSN, erKombinasjonsstatusATFLSN);
  }
  const sammenligningsGrunnlagAT = sammenligningsgrunnlagPrStatus
    ? sammenligningsgrunnlagPrStatus.find(
        status =>
          status.sammenligningsgrunnlagType === SammenligningType.AT ||
          status.sammenligningsgrunnlagType === SammenligningType.ATFLSN,
      )
    : undefined;
  if (!sammenligningsGrunnlagAT) {
    return null;
  }
  const avvikAT = sammenligningsGrunnlagAT.avvikProsent;
  const avvikATRounded = avvikAT ? parseFloat(avvikAT.toFixed(1)) : 0;
  const sammenligningsgrunnlagSumAT = sammenligningsGrunnlagAT.rapportertPrAar;
  const { differanseBeregnet } = sammenligningsGrunnlagAT;
  const visPaneler = {
    visAT: true,
    visFL: false,
    visSN: false,
  };
  return (
    <AvvikopplysningerATFL
      beregnetAarsinntekt={beregnetAarsinntekt}
      avvikProsentAvrundet={avvikATRounded}
      differanseBeregnet={differanseBeregnet}
      relevanteStatuser={relevanteStatuser}
      visPanel={visPaneler}
      sammenligningsgrunnlagSum={sammenligningsgrunnlagSumAT}
    />
  );
};
AvvikopplysningerAT.defaultProps = {
  beregnetAarsinntekt: undefined,
};

export default AvvikopplysningerAT;
