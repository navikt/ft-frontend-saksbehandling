export type VedtaksbrevAvsnitt = {
  avsnittstype: `${AvsnittType}`;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: `${UnderavsnittType}`;
    fritekstPåkrevet?: boolean;
  }[];
};

export type AvsnittType = 'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON';

export type UnderavsnittType = 'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET';

export type Vedtaksbrev = {
  avsnittsliste: VedtaksbrevAvsnitt[];
};
