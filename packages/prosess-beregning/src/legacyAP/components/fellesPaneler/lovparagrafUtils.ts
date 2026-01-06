import type { AktivitetStatus, SammenligningType as SammenligningsgrunnlagType } from '@navikt/ft-types';

import { SammenligningType } from '../../../kodeverk/sammenligningType';
import {
  AksjonspunktKode,
  ÅTTE_TRETTI_AKSJONSPUNKTER,
  ÅTTE_TRETTIFEM_AKSJONSPUNKTER,
} from '../../../utils/aksjonspunkt';
import { isStatusSNOrKombinasjon } from '../../util/aktivitetStatusUtils';

export const harApForSammelingningsgrunnlagType = (
  sammenligningsgrunnlagType: SammenligningsgrunnlagType,
  aktivitetstatuser: AktivitetStatus[] = [],
  aksjonspunktKode: AksjonspunktKode,
) => {
  if (
    SammenligningType.SN === sammenligningsgrunnlagType ||
    SammenligningType.MIDLERTIDIG_INAKTIV === sammenligningsgrunnlagType ||
    (SammenligningType.ATFLSN === sammenligningsgrunnlagType && aktivitetstatuser.some(isStatusSNOrKombinasjon))
  ) {
    return ÅTTE_TRETTIFEM_AKSJONSPUNKTER.has(aksjonspunktKode);
  }
  return ÅTTE_TRETTI_AKSJONSPUNKTER.has(aksjonspunktKode);
};
