import type { AktivitetStatus, SammenligningsgrunlagProp } from '@navikt/ft-types';

import { SammenligningType } from '../../../kodeverk/sammenligningType';
import type { Vilkår } from '../../../types/Vilkår';
import {
  AksjonspunktKode,
  ÅTTE_TRETTI_AKSJONSPUNKTER,
  ÅTTE_TRETTIFEM_AKSJONSPUNKTER,
} from '../../../utils/aksjonspunkt';
import type { BeregningAksjonspunktSubmitType, GruppertAksjonspunktData } from '../../types/BeregningsgrunnlagAP';
import { isStatusSNOrKombinasjon } from '../../util/aktivitetStatusUtils';

export const utledSkalValideres = (vilkår: Vilkår, vilkårsperiodeFom: string) => {
  const periode = finnVilkårperiode(vilkår, vilkårsperiodeFom);
  if (!periode) {
    return false;
  }
  return periode.vurderesIBehandlingen && !periode.erForlengelse;
};

export const finnVilkårperiode = (vilkår: Vilkår, vilkårsperiodeFom: string) =>
  vilkår.perioder.find(({ periode }) => periode.fom === vilkårsperiodeFom);

type AksjonspunktDataMedPeriode = {
  periode: {
    fom: string;
    tom: string;
  };
  aksjonspunkter: GruppertAksjonspunktData[];
};

export const grupperPåKode = (
  gruppert: BeregningAksjonspunktSubmitType[],
  curr: AksjonspunktDataMedPeriode,
): BeregningAksjonspunktSubmitType[] => {
  curr.aksjonspunkter.forEach(ap => {
    const eksisterende = gruppert.find(gruppertAp => gruppertAp.kode === ap.kode);
    if (eksisterende === undefined) {
      gruppert.push({
        kode: ap.kode,
        begrunnelse: ap.aksjonspunktData.begrunnelse,
        grunnlag: [
          {
            periode: curr.periode,
            ...ap.aksjonspunktData,
          },
        ],
      });
    } else {
      eksisterende.grunnlag.push({
        periode: curr.periode,
        ...ap.aksjonspunktData,
      });
      eksisterende.begrunnelse = `${eksisterende.begrunnelse} ${ap.aksjonspunktData.begrunnelse}`;
    }
  });
  return gruppert;
};

export const harApForSammelingningsgrunnlagType =
  (aksjonspunktKode: AksjonspunktKode, aktivitetstatuser: AktivitetStatus[] = []) =>
  ({ sammenligningsgrunnlagType }: SammenligningsgrunlagProp) => {
    if (
      SammenligningType.SN === sammenligningsgrunnlagType ||
      SammenligningType.MIDLERTIDIG_INAKTIV === sammenligningsgrunnlagType ||
      (SammenligningType.ATFLSN === sammenligningsgrunnlagType && aktivitetstatuser.some(isStatusSNOrKombinasjon))
    ) {
      return ÅTTE_TRETTIFEM_AKSJONSPUNKTER.has(aksjonspunktKode);
    }
    return ÅTTE_TRETTI_AKSJONSPUNKTER.has(aksjonspunktKode);
  };
