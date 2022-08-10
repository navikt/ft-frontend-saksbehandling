import React, { FunctionComponent } from 'react';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';
import Frisinnpanel from './Frisinnpanel';

const lagFrisinnpaneler = (beregningsgrunnlag: Beregningsgrunnlag) => (
  <Frisinnpanel beregningsgrunnlag={beregningsgrunnlag} />
);

type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

/**
 * YtelsegrunnlagPanel
 *
 * Presentasjonskomponent. Holder på ytelsesspesifikke visninger.
 */
export const YtelsegrunnlagPanel: FunctionComponent<OwnProps> = ({ beregningsgrunnlag }) => {
  const ytelsegrunnlag = beregningsgrunnlag.ytelsesspesifiktGrunnlag;
  if (!ytelsegrunnlag) {
    return null;
  }
  const ytelse = ytelsegrunnlag.ytelsetype;
  if (ytelse === FagsakYtelseType.FRISINN) {
    return lagFrisinnpaneler(beregningsgrunnlag);
  }
  return null;
};

export default YtelsegrunnlagPanel;
