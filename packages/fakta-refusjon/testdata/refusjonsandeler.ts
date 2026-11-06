import type { RefusjonsandelDto } from '../src/types/dataTypes';

export const refusjonsandelerForTreArbeidsgivere: RefusjonsandelDto[] = [
  {
    arbeidsgiverIdent: '999999999',
    journalpostId: '123456789',
    kilde: 'INNTEKTSMELDING',
    refusjonsperioder: [
      {
        fom: '2025-01-01',
        tom: '2025-03-31',
        refusjonPrMnd: 42000,
        utfall: 'INNVILGET',
        utfallÅrsak: undefined,
      },
      {
        fom: '2025-04-01',
        tom: '2025-06-30',
        refusjonPrMnd: 37500,
        utfall: 'INNVILGET',
        utfallÅrsak: undefined,
      },
    ],
  },
  {
    arbeidsgiverIdent: '888888888',
    journalpostId: '123456790',
    kilde: 'INNTEKTSMELDING',
    refusjonsperioder: [
      {
        fom: '2025-02-01',
        tom: '2025-02-28',
        refusjonPrMnd: 32000,
        utfall: 'INNVILGET',
        utfallÅrsak: undefined,
      },
    ],
  },
  {
    arbeidsgiverIdent: '777777777',
    kilde: 'INNTEKTSMELDING',
    refusjonsperioder: [
      {
        fom: '2025-03-01',
        tom: '2025-03-31',
        refusjonPrMnd: 28000,
        utfall: 'INNVILGET',
        utfallÅrsak: undefined,
      },
    ],
  },
];
