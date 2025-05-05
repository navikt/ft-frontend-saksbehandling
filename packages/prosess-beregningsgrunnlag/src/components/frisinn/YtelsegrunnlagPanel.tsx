import { FagsakYtelseType } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag } from '@navikt/ft-types';

import { Frisinnpanel } from './Frisinnpanel';

type Props = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

/**
 * YtelsegrunnlagPanel
 *
 * Presentasjonskomponent. Holder på ytelsesspesifikke visninger.
 */
export const YtelsegrunnlagPanel = ({ beregningsgrunnlag }: Props) => {
  const ytelsegrunnlag = beregningsgrunnlag.ytelsesspesifiktGrunnlag;

  if (ytelsegrunnlag && ytelsegrunnlag.ytelsetype === FagsakYtelseType.FRISINN) {
    return <Frisinnpanel beregningsgrunnlag={beregningsgrunnlag} />;
  }
  return null;
};
