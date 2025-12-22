import type { AktivitetStatus, BeregningAvklaringsbehov } from '@navikt/ft-types';

import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import { SammenligningType } from '../../kodeverk/sammenligningType';
import { isStatusSNOrKombinasjon } from '../../util/aktivitetStatusUtils';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = AksjonspunktKode;

export enum LovParagraf {
  ÅTTE_TRETTIFEM = '8-35',
  ÅTTE_TRETTI = '8-30',
}

export const mapSammenligningtypeTilLovparagraf = (
  type: string,
  aktivitetstatuser: AktivitetStatus[] = [],
): LovParagraf => {
  if (SammenligningType.SN === type || SammenligningType.MIDLERTIDIG_INAKTIV === type) {
    return LovParagraf.ÅTTE_TRETTIFEM;
  }
  // Kan fjerne aktivitetstatus og kun sjekke på type etter splitting
  if (SammenligningType.ATFLSN === type && aktivitetstatuser.some(isStatusSNOrKombinasjon)) {
    return LovParagraf.ÅTTE_TRETTIFEM;
  }
  return LovParagraf.ÅTTE_TRETTI;
};

export const finnLovparagrafForAksjonspunkt = (a: BeregningAvklaringsbehov): string | null => {
  switch (a.definisjon) {
    case VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:
    case VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:
    case FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:
      return LovParagraf.ÅTTE_TRETTIFEM;
    case FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:
    case FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:
      return LovParagraf.ÅTTE_TRETTI;
    default:
      return null;
  }
};
