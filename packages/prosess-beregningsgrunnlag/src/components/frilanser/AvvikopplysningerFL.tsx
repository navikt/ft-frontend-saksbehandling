import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { SammenligningType } from '@navikt/ft-kodeverk';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { SammenligningsgrunlagProp } from '@navikt/ft-types';

import AvvikopplysningerATFL from '../fellesPaneler/AvvikopplysningerATFLSN';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';

type OwnProps = {
  beregnetAarsinntekt?: number;
  sammenligningsgrunnlagPrStatus: SammenligningsgrunlagProp[];
  relevanteStatuser: RelevanteStatuserProp;
};

const AvvikopplysningerFL: FunctionComponent<OwnProps> = ({
  relevanteStatuser,
  sammenligningsgrunnlagPrStatus,
  beregnetAarsinntekt,
}) => {
  const kombinasjonsstatusFNSN =
    relevanteStatuser.isKombinasjonsstatus &&
    !relevanteStatuser.isArbeidstaker &&
    relevanteStatuser.isSelvstendigNaeringsdrivende &&
    relevanteStatuser.isFrilanser;
  const kombinasjonsstatusATFL =
    relevanteStatuser.isKombinasjonsstatus && relevanteStatuser.isArbeidstaker && relevanteStatuser.isFrilanser;
  if (kombinasjonsstatusFNSN) {
    return (
      <FlexRow>
        <FlexColumn>
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.FL.KobinasjonsStatusFLSN" />
          </BodyShort>
        </FlexColumn>
      </FlexRow>
    );
  }
  const sammenligningsGrunnlagFL = sammenligningsgrunnlagPrStatus
    ? sammenligningsgrunnlagPrStatus.find(
        status =>
          status.sammenligningsgrunnlagType === SammenligningType.FL ||
          status.sammenligningsgrunnlagType === SammenligningType.AT_FL ||
          status.sammenligningsgrunnlagType === SammenligningType.ATFLSN,
      )
    : undefined;
  if (!sammenligningsGrunnlagFL) {
    return null;
  }
  if (
    kombinasjonsstatusATFL &&
    sammenligningsgrunnlagPrStatus.find(
      status =>
        status.sammenligningsgrunnlagType === SammenligningType.ATFLSN ||
        status.sammenligningsgrunnlagType === SammenligningType.AT_FL,
    )
  ) {
    return null;
  }
  const avvikFL = sammenligningsGrunnlagFL.avvikProsent !== undefined ? sammenligningsGrunnlagFL.avvikProsent : '';
  const avvikRoundedFL = avvikFL ? parseFloat(avvikFL.toFixed(1)) : 0;
  const sammenligningsgrunnlagSumFL = sammenligningsGrunnlagFL.rapportertPrAar;
  const { differanseBeregnet } = sammenligningsGrunnlagFL;
  const visPaneler = {
    visAT: false,
    visFL: true,
    visSN: false,
  };
  return (
    <AvvikopplysningerATFL
      beregnetAarsinntekt={beregnetAarsinntekt}
      avvikProsentAvrundet={avvikRoundedFL}
      differanseBeregnet={differanseBeregnet}
      relevanteStatuser={relevanteStatuser}
      visPanel={visPaneler}
      sammenligningsgrunnlagSum={sammenligningsgrunnlagSumFL}
    />
  );
};

AvvikopplysningerFL.defaultProps = {
  beregnetAarsinntekt: undefined,
};
export default AvvikopplysningerFL;
