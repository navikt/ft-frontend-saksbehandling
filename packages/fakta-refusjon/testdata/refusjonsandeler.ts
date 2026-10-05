import type { RefusjonsAndel } from '../src/types/dataTypes';

export const refusjonsandelerForTreArbeidsgivere: RefusjonsAndel[] = [
  {
    arbeidsgiverIdent: '999999999',
    kilde: 'IM',
    refusjonsperioder: [
      {
        fom: '2025-01-01',
        tom: '2025-03-31',
        refusjonsbeløpPrMnd: 42000,
        fristForInnsendingAvRefusjonskrav: '2025-01-15',
        tidligsteMuligeDatoMedRefusjonEtterFrist: '2025-01-15',
        datoForInnsendtEllerEndretIM: '2024-12-20',
        utfall: undefined,
        utfallÅrsak: undefined,
      },
      {
        fom: '2025-04-01',
        tom: '2025-06-30',
        refusjonsbeløpPrMnd: 37500,
        fristForInnsendingAvRefusjonskrav: '2025-04-15',
        tidligsteMuligeDatoMedRefusjonEtterFrist: '2025-04-15',
        datoForInnsendtEllerEndretIM: '2025-03-20',
        utfall: 'INNVILGET',
        utfallÅrsak: undefined,
      },
    ],
  },
  {
    arbeidsgiverIdent: '888888888',
    kilde: 'IM',
    refusjonsperioder: [
      {
        fom: '2025-02-01',
        tom: '2025-02-28',
        refusjonsbeløpPrMnd: 32000,
        fristForInnsendingAvRefusjonskrav: '2025-02-15',
        tidligsteMuligeDatoMedRefusjonEtterFrist: '2025-02-15',
        datoForInnsendtEllerEndretIM: '2025-02-20',
        utfall: 'INNVILGET',
        utfallÅrsak: undefined,
      },
    ],
  },
  {
    arbeidsgiverIdent: '777777777',
    kilde: 'IM',
    refusjonsperioder: [
      {
        fom: '2025-03-01',
        tom: '2025-03-31',
        refusjonsbeløpPrMnd: 28000,
        fristForInnsendingAvRefusjonskrav: '2025-03-15',
        tidligsteMuligeDatoMedRefusjonEtterFrist: '2025-03-15',
        datoForInnsendtEllerEndretIM: '2025-03-20',
        utfall: undefined,
        utfallÅrsak: undefined,
      },
    ],
  },
];
