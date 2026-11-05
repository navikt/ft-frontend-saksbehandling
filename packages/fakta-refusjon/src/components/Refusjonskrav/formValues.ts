import type { RefusjonsAndel, Refusjonsperiode } from '../../types/dataTypes';

export type OverstyrRefusjonFormValues = {
  erOverstyring: boolean;
  begrunnelse: string;
  refusjonsandeler: RefusjonsAndelFormValues[];
};

export type RefusjonsAndelFormValues = Omit<RefusjonsAndel, 'refusjonsperioder'> & {
  arbeidsgiverNavn: string;
  refusjonsperioder: RefusjonPeriode[];
};

export type RefusjonsAndelTilVisning = Omit<RefusjonsAndelFormValues, 'refusjonsperioder'> & {
  refusjonsperioder: (Refusjonsperiode & { tom: string; kilde: RefusjonsAndel['kilde'] })[];
};

type RefusjonPeriode = Omit<Refusjonsperiode, 'refusjonsbeløpPrMnd'> & {
  refusjonsbeløpPrMnd: number | string | null | undefined;
};
