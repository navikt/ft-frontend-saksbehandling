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
  const initialSkjæringstidspunkt = førsteTilVurdering?.skjæringstidspunkt ?? tabOptions[0].skjæringstidspunkt;

  const [aktivBGSkjæringstidspunkt, setAktivBGSkjæringstidspunkt] = useState(initialSkjæringstidspunkt);

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
    .map(beregningsgrunnlag => ({
      beregningsgrunnlag,
      skjæringstidspunkt: beregningsgrunnlag.skjaeringstidspunktBeregning,
      skalVurderes: erBGTilVurdering(beregningsgrunnlag.vilkårsperiodeFom, beregningsgrunnlagsvilkår),
      harAksjonspunkt: harAksjonspunktSomKanLøses(beregningsgrunnlag.avklaringsbehov),
      optionLabel: dateFormat(beregningsgrunnlag.skjaeringstidspunktBeregning),
    }))
    .sort((a, b) => dayjs(a.skjæringstidspunkt).diff(dayjs(b.skjæringstidspunkt)));
