enum BehandlingResultatType {
  IKKE_FASTSATT = 'IKKE_FASTSATT',
  INNVILGET = 'INNVILGET',
  AVSLATT = 'AVSLÅTT',
  OPPHOR = 'OPPHØR',
  HENLAGT_SOKNAD_TRUKKET = 'HENLAGT_SØKNAD_TRUKKET',
  KLAGE_AVVIST = 'KLAGE_AVVIST',
  KLAGE_MEDHOLD = 'KLAGE_MEDHOLD',
  KLAGE_YTELSESVEDTAK_OPPHEVET = 'KLAGE_YTELSESVEDTAK_OPPHEVET',
  KLAGE_YTELSESVEDTAK_STADFESTET = 'KLAGE_YTELSESVEDTAK_STADFESTET',
  DELVIS_MEDHOLD_I_KLAGE = 'DELVIS_MEDHOLD_I_KLAGE',
  HJEMSENDE_UTEN_OPPHEVE = 'HJEMSENDE_UTEN_OPPHEVE',
  HENLAGT_KLAGE_TRUKKET = 'HENLAGT_KLAGE_TRUKKET',
  HENLAGT_INNSYN_TRUKKET = 'HENLAGT_INNSYN_TRUKKET',
  HENLAGT_FEILOPPRETTET = 'HENLAGT_FEILOPPRETTET',
  HENLAGT_FEILOPPRETTET_MED_BREV = 'HENLAGT_FEILOPPRETTET_MED_BREV',
  HENLAGT_FEILOPPRETTET_UTEN_BREV = 'HENLAGT_FEILOPPRETTET_UTEN_BREV',
  HENLAGT_BRUKER_DOD = 'HENLAGT_BRUKER_DØD',
  FORELDREPENGER_ENDRET = 'FORELDREPENGER_ENDRET',
  INGEN_ENDRING = 'INGEN_ENDRING',
  MANGLER_BEREGNINGSREGLER = 'MANGLER_BEREGNINGSREGLER',
  HENLAGT_SOKNAD_MANGLER = 'HENLAGT_SØKNAD_MANGLER',
}

const innvilgetKlageResultatTyper = [
  BehandlingResultatType.KLAGE_MEDHOLD,
  BehandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET,
  BehandlingResultatType.DELVIS_MEDHOLD_I_KLAGE,
  BehandlingResultatType.HJEMSENDE_UTEN_OPPHEVE,
];

const innvilgetRevurderingFPResultatTyper = [
  BehandlingResultatType.FORELDREPENGER_ENDRET,
  BehandlingResultatType.INGEN_ENDRING,
];

export const isInnvilget = (behandlingResultatTypeKode: string): boolean =>
  innvilgetKlageResultatTyper.some(t => t === behandlingResultatTypeKode) ||
  innvilgetRevurderingFPResultatTyper.some(t => t === behandlingResultatTypeKode) ||
  behandlingResultatTypeKode === BehandlingResultatType.INNVILGET;

export const isAvslag = (behandlingResultatTypeKode: string): boolean =>
  behandlingResultatTypeKode === BehandlingResultatType.AVSLATT ||
  behandlingResultatTypeKode === BehandlingResultatType.KLAGE_AVVIST ||
  behandlingResultatTypeKode === BehandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET;

export const isOpphor = (behandlingResultatTypeKode: string): boolean =>
  behandlingResultatTypeKode === BehandlingResultatType.OPPHOR;

export default BehandlingResultatType;
