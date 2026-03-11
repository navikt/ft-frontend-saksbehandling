import type { FeilutbetalingÅrsak } from '../src/types/FeilutbetalingÅrsak';

export const feilutbetalingÅrsak: FeilutbetalingÅrsak[] = [
  {
    ytelseType: 'SVP',
    hendelseTyper: [
      {
        hendelseType: 'MEDLEMSKAP',
        hendelseUndertyper: ['UTVANDRET', 'IKKE_BOSATT', 'IKKE_LOVLIG_OPPHOLD', 'MEDLEM_I_ANNET_LAND'],
      },
      {
        hendelseType: 'SVP_FAKTA_TYPE',
        hendelseUndertyper: ['SVP_ENDRING_TERMINDATO', 'SVP_TIDLIG_FODSEL', 'SVP_IKKE_HELSEFARLIG'],
      },
      {
        hendelseType: 'SVP_ARBEIDSGIVERS_FORHOLD_TYPE',
        hendelseUndertyper: ['SVP_TILRETTELEGGING_FULLT_MULIG', 'SVP_TILRETTELEGGING_DELVIS_MULIG'],
      },
      {
        hendelseType: 'SVP_OPPTJENING_TYPE',
        hendelseUndertyper: ['SVP_IKKE_ARBEID', 'SVP_INNTEKT_IKKE_TAP', 'SVP_INNTEKT_UNDER'],
      },
      {
        hendelseType: 'SVP_BEREGNING_TYPE',
        hendelseUndertyper: ['SVP_ENDRING_GRUNNLAG'],
      },
      {
        hendelseType: 'SVP_UTTAK_TYPE',
        hendelseUndertyper: ['SVP_ENDRING_PROSENT', 'SVP_ENDRING_PERIODE'],
      },
      {
        hendelseType: 'OPPHØR',
        hendelseUndertyper: ['MOTTAKER_DØD', 'MOTTAKER_IKKE_GRAVID'],
      },
      {
        hendelseType: 'SVP_ANNET_TYPE',
        hendelseUndertyper: ['REFUSJON_ARBGIVER', 'ANNET_FRITEKST', 'FEIL_FERIEPENGER_4G'],
      },
    ],
  },
  {
    ytelseType: 'PSB',
    hendelseTyper: [
      {
        hendelseType: 'PSB_ANNET_TYPE',
        hendelseUndertyper: ['ANNET_FRITEKST'],
      },
    ],
  },
  {
    ytelseType: 'FRISINN',
    hendelseTyper: [
      {
        hendelseType: 'FRISINN_ANNET_TYPE',
        hendelseUndertyper: ['ANNET_FRITEKST'],
      },
    ],
  },
  {
    ytelseType: 'OLP',
    hendelseTyper: [
      {
        hendelseType: 'OLP_ANNET_TYPE',
        hendelseUndertyper: ['ANNET_FRITEKST'],
      },
    ],
  },
  {
    ytelseType: 'FP',
    hendelseTyper: [
      {
        hendelseType: 'MEDLEMSKAP',
        hendelseUndertyper: ['UTVANDRET', 'IKKE_BOSATT', 'IKKE_LOVLIG_OPPHOLD', 'MEDLEM_I_ANNET_LAND'],
      },
      {
        hendelseType: 'OPPTJENING_TYPE',
        hendelseUndertyper: ['IKKE_INNTEKT', 'IKKE_YRKESAKTIV'],
      },
      {
        hendelseType: 'BEREGNING_TYPE',
        hendelseUndertyper: ['ENDRING_GRUNNLAG', 'INNTEKT_UNDER'],
      },
      {
        hendelseType: 'STONADSPERIODEN_TYPE',
        hendelseUndertyper: ['ENDRET_DEKNINGSGRAD', 'FEIL_FLERBARNSDAGER', 'OPPHOR_BARN_DOD', 'OPPHOR_MOTTAKER_DOD'],
      },
      {
        hendelseType: 'UTTAK_GENERELT_TYPE',
        hendelseUndertyper: [
          'STONADSPERIODE_OVER_3',
          'NY_STONADSPERIODE',
          'IKKE_OMSORG',
          'MOTTAKER_I_ARBEID',
          'FORELDRES_UTTAK',
          'STONADSPERIODE_MANGEL',
        ],
      },
      {
        hendelseType: 'UTTAK_UTSETTELSE_TYPE',
        hendelseUndertyper: [
          'LOVBESTEMT_FERIE',
          'ARBEID_HELTID',
          'MOTTAKER_HELT_AVHENGIG',
          'MOTTAKER_INNLAGT',
          'BARN_INNLAGT',
        ],
      },
      {
        hendelseType: 'UTTAK_KVOTENE_TYPE',
        hendelseUndertyper: ['KVO_MOTTAKER_HELT_AVHENGIG', 'KVO_MOTTAKER_INNLAGT', 'KVO_SAMTIDIG_UTTAK'],
      },
      {
        hendelseType: 'VILKAAR_GENERELLE_TYPE',
        hendelseUndertyper: [
          'MOR_IKKE_ARBEID',
          'MOR_IKKE_STUDERT',
          'MOR_IKKE_ARBEID_OG_STUDER',
          'MOR_IKKE_HELT_AVHENGIG',
          'MOR_IKKE_INNLAGT',
          'MOR_IKKE_I_IP',
          'MOR_IKKE_I_KP',
        ],
      },
      {
        hendelseType: 'KUN_RETT_TYPE',
        hendelseUndertyper: ['FEIL_I_ANTALL_DAGER'],
      },
      {
        hendelseType: 'UTTAK_ALENEOMSORG_TYPE',
        hendelseUndertyper: ['IKKE_ALENEOMSORG'],
      },
      {
        hendelseType: 'UTTAK_GRADERT_TYPE',
        hendelseUndertyper: ['GRADERT_UTTAK'],
      },
      {
        hendelseType: 'FP_ANNET_HENDELSE_TYPE',
        hendelseUndertyper: ['REFUSJON_ARBGIVER', 'ANNET_FRITEKST', 'FEIL_FERIEPENGER_4G'],
      },
    ],
  },
  {
    ytelseType: 'PPN',
    hendelseTyper: [
      {
        hendelseType: 'PPN_ANNET_TYPE',
        hendelseUndertyper: ['ANNET_FRITEKST'],
      },
    ],
  },
  {
    ytelseType: 'ES',
    hendelseTyper: [
      {
        hendelseType: 'ES_MEDLEMSKAP',
        hendelseUndertyper: [
          'UTVANDRET',
          'IKKE_BOSATT',
          'IKKE_OPPHOLDSRETT_EØS',
          'IKKE_LOVLIG_OPPHOLD',
          'MEDLEM_I_ANNET_LAND',
        ],
      },
      {
        hendelseType: 'ES_ADOPSJONSVILKAARET_TYPE',
        hendelseUndertyper: ['ES_IKKE_OPPFYLT', 'ES_BARN_OVER_15', 'ES_MANN_IKKE_ALENE', 'ES_STEBARN'],
      },
      {
        hendelseType: 'ES_FODSELSVILKAARET_TYPE',
        hendelseUndertyper: ['ES_BARN_IKKE_REGISTRERT', 'ES_MOTTAKER_FAR_MEDMOR'],
      },
      {
        hendelseType: 'ES_FORELDREANSVAR_TYPE',
        hendelseUndertyper: [
          'ES_ANDRE_FORELDRE_DODD',
          'ES_IKKE_TILDELT',
          'ES_IKKE_MINDRE_SAMVAER',
          'ES_FORELDREANSVAR_BARN_OVER_15',
        ],
      },
      {
        hendelseType: 'ES_OMSORGSVILKAAR_TYPE',
        hendelseUndertyper: ['ES_FAR_IKKE_OMSORG', 'ES_STONADEN_ALLEREDE_UTBETALT'],
      },
      {
        hendelseType: 'ES_FORELDREANSVAR_FAR_TYPE',
        hendelseUndertyper: ['ES_FAR_IKKE_ALENE', 'ES_FAR_IKKE_INNEN_STONADSPERIODE'],
      },
      {
        hendelseType: 'ES_RETT_PAA_FORELDREPENGER_TYPE',
        hendelseUndertyper: ['ES_BRUKER_RETT_FORELDREPENGER'],
      },
      {
        hendelseType: 'ES_FEIL_UTBETALING_TYPE',
        hendelseUndertyper: ['ES_STONAD_FLERE_GANGER', 'ØKONOMI_UTBETALT_FOR_MYE'],
      },
      {
        hendelseType: 'ES_ANNET_TYPE',
        hendelseUndertyper: ['ANNET_FRITEKST'],
      },
    ],
  },
  {
    ytelseType: 'OMP',
    hendelseTyper: [
      {
        hendelseType: 'OMP_ANNET_TYPE',
        hendelseUndertyper: ['ANNET_FRITEKST'],
      },
    ],
  },
];
