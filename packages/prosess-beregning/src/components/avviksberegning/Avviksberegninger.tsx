import type { Beregningsgrunnlag, BeregningsgrunnlagAndel, SammenligningType } from '@navikt/ft-types';
import { sortObjectBy } from '@navikt/ft-utils';

import { AvviksberegningForSammenligningsgrunnlagType } from './AvviksberegningForSammenligningsgrunnlagType';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  formaterVisningsnavnForAndel: (andel: BeregningsgrunnlagAndel) => string;
  visBareSammenligningTyper: SammenligningType[];
}

export const Avviksberegninger = ({
  beregningsgrunnlag,
  formaterVisningsnavnForAndel,
  visBareSammenligningTyper,
}: Props) => {
  const sammenligningsgrunnlagPrStatus =
    beregningsgrunnlag.sammenligningsgrunnlagPrStatus?.filter(sg =>
      visBareSammenligningTyper.includes(sg.sammenligningsgrunnlagType),
    ) ?? [];

  if (sammenligningsgrunnlagPrStatus.length === 0) {
    return null;
  }
  return (
    <>
      {sammenligningsgrunnlagPrStatus.toSorted(sortObjectBy('sammenligningsgrunnlagType')).map(sg => (
        <AvviksberegningForSammenligningsgrunnlagType
          key={sg.sammenligningsgrunnlagType}
          beregningsgrunnlag={beregningsgrunnlag}
          sammenligningsgrunnlag={sg}
          formaterVisningsnavnForAndel={formaterVisningsnavnForAndel}
        />
      ))}
    </>
  );
};
