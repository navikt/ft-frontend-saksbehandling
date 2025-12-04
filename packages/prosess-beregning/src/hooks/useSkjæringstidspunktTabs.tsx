import { useState } from 'react';

import dayjs from 'dayjs';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { dateFormat } from '@navikt/ft-utils';

import type { Vilkår } from '../types/Vilkår';
import { harAksjonspunktSomkanLøses } from '../utils/aksjonspunkt';
import { erBGTilVurdering } from '../utils/beregningsgrunnlagUtils';

export const useSkjæringstidspunktTabs = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  beregningsgrunnlagsvilkår: Vilkår | null,
) => {
  const tabOptions = lagSorterteOptionProps(beregningsgrunnlagListe, beregningsgrunnlagsvilkår);

  const initialIndex = tabOptions.find(o => o.skalVurderes && o.harAvklaringsbehov)?.bgIndex ?? 0;

  const [aktivBGIndex, setAktivBGIndex] = useState(initialIndex);

  return {
    tabOptions,
    currentTabValue: aktivBGIndex.toString(),
    onTabChange: (tabIndex: string) => setAktivBGIndex(Number(tabIndex)),
  };
};

const lagSorterteOptionProps = (
  beregningsgrunnlagListe: Beregningsgrunnlag[],
  beregningsgrunnlagsvilkår: Vilkår | null,
) =>
  beregningsgrunnlagListe
    .map((gr, index) => ({
      bgIndex: index,
      skalVurderes: erBGTilVurdering(gr, beregningsgrunnlagsvilkår),
      harAvklaringsbehov: harAksjonspunktSomkanLøses(gr.avklaringsbehov),
      skjæringstidspunkt: gr.skjaeringstidspunktBeregning,
      optionLabel: dateFormat(gr.skjaeringstidspunktBeregning),
    }))
    .sort((a, b) => dayjs(a.skjæringstidspunkt).diff(dayjs(b.skjæringstidspunkt)));
