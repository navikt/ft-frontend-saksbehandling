import { useState } from 'react';

import dayjs from 'dayjs';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { dateFormat } from '@navikt/ft-utils';

import type { Vilkår } from '../types/Vilkår';
import { harAksjonspunktSomKanLøses } from '../utils/aksjonspunkt';
import { erBGTilVurdering } from '../utils/beregningsgrunnlagUtils';

export const useSkjæringstidspunktTabs = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  beregningsgrunnlagsvilkår: Vilkår | null,
) => {
  const tabOptions = lagSorterteOptionProps(beregningsgrunnlagListe, beregningsgrunnlagsvilkår);

  const førsteTilVurdering = tabOptions.find(o => o.skalVurderes && o.harAksjonspunkt);
  const initialBeregningsgrunnlag = førsteTilVurdering?.beregningsgrunnlag ?? tabOptions[0].beregningsgrunnlag;

  const [aktivBGSkjæringstidspunkt, setAktivBGSkjæringstidspunkt] = useState(
    initialBeregningsgrunnlag.skjaeringstidspunktBeregning,
  );

  return {
    tabOptions,
    currentSkjæringstidspunkt: aktivBGSkjæringstidspunkt,
    currentBeregningsgrunnlag:
      beregningsgrunnlagListe.find(bg => bg.skjaeringstidspunktBeregning === aktivBGSkjæringstidspunkt) ??
      beregningsgrunnlagListe[0],
    onTabChange: (skjæringstidspunkt: string) => setAktivBGSkjæringstidspunkt(skjæringstidspunkt),
  };
};

const lagSorterteOptionProps = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  beregningsgrunnlagsvilkår: Vilkår | null,
) =>
  beregningsgrunnlagListe
    .toSorted((a, b) => dayjs(a.skjaeringstidspunktBeregning).diff(dayjs(b.skjaeringstidspunktBeregning)))
    .map(beregningsgrunnlag => ({
      beregningsgrunnlag,
      skalVurderes: erBGTilVurdering(beregningsgrunnlag.vilkårsperiodeFom, beregningsgrunnlagsvilkår),
      harAksjonspunkt: harAksjonspunktSomKanLøses(beregningsgrunnlag.avklaringsbehov),
      optionLabel: dateFormat(beregningsgrunnlag.skjaeringstidspunktBeregning),
    }));
