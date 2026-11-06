import type { UtfallÅrsak } from '../../types/aksjonspunkt';
import type { RefusjonsandelDto, RefusjonsperiodeDto } from '../../types/dataTypes';

export type OverstyrRefusjonFormValues = {
  erOverstyring: boolean;
  begrunnelse: string;
  opprinneligeRefusjonsandeler?: RefusjonsandelDto[];
  refusjonsandeler: RefusjonsAndelFormValues[];
};

export type RefusjonsAndelFormValues = Omit<RefusjonsandelDto, 'refusjonsperioder'> & {
  arbeidsgiverTittel: string;
  refusjonsperioder: RefusjonPeriode[];
};

export type RefusjonsAndelTilVisning = Omit<RefusjonsAndelFormValues, 'refusjonsperioder'> & {
  refusjonsperioder: (Omit<RefusjonPeriode, 'refusjonPrMnd' | 'tom'> & {
    tom: string;
    refusjonPrMnd: number;
    kilde: RefusjonsandelDto['kilde'];
  })[];
};

type RefusjonPeriode = Omit<RefusjonsperiodeDto, 'refusjonPrMnd' | 'tom'> & {
  tom?: string;
  refusjonPrMnd: number | string | null | undefined;
  overstyringsÅrsak?: UtfallÅrsak;
};
