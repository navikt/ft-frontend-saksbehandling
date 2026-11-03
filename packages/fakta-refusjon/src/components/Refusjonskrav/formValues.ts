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

type RefusjonPeriode = Omit<Refusjonsperiode, 'refusjonsbeløpPrMnd'> & {
  refusjonsbeløpPrMnd: number | undefined;
};
