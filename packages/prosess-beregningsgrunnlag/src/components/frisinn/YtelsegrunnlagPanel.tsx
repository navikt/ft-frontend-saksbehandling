import { FagsakYtelseType } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { Frisinnpanel } from './Frisinnpanel';

const lagFrisinnpaneler = (beregningsgrunnlag: Beregningsgrunnlag) => (
  <Frisinnpanel beregningsgrunnlag={beregningsgrunnlag} />
);

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
  if (!ytelsegrunnlag) {
    return null;
  }
  const ytelse = ytelsegrunnlag.ytelsetype;
  if (ytelse === FagsakYtelseType.FRISINN) {
    return lagFrisinnpaneler(beregningsgrunnlag);
  }
  return null;
};
