import { isStatusSNOrKombinasjon, SammenligningType } from '@navikt/ft-kodeverk';
import { BeregningAvklaringsbehov } from '@navikt/ft-types';

import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = ProsessBeregningsgrunnlagAvklaringsbehovCode;

export enum LovParagraf {
  ÅTTE_TRETTIFEM = '8-35',
  ÅTTE_TRETTI = '8-30',
}

export const mapSammenligningtypeTilLovparagraf = (type: string, aktivitetstatuser?: string[]): LovParagraf => {
  if (SammenligningType.SN === type || SammenligningType.MIDLERTIDIG_INAKTIV === type) {
    return LovParagraf.ÅTTE_TRETTIFEM;
  }
  // Kan fjerne aktivitetstatus og kun sjekke på type etter splitting
  if (SammenligningType.ATFLSN === type && !!aktivitetstatuser?.find(a => isStatusSNOrKombinasjon(a))) {
    return LovParagraf.ÅTTE_TRETTIFEM;
  }
  return LovParagraf.ÅTTE_TRETTI;
};

export const mapAvklaringsbehovTilLovparagraf = (a: BeregningAvklaringsbehov): string | null => {
  if (
    VURDER_VARIG_ENDRET_ARBEIDSSITUASJON === a.definisjon ||
    VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE === a.definisjon ||
    FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET === a.definisjon
  ) {
    return LovParagraf.ÅTTE_TRETTIFEM;
  }
  if (
    FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS === a.definisjon ||
    FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD === a.definisjon
  ) {
    return LovParagraf.ÅTTE_TRETTI;
  }
  return null;
};
