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

export enum AvsnittType {
  OPPSUMMERING = 'OPPSUMMERING',
  PERIODE = 'PERIODE',
  TILLEGGSINFORMASJON = 'TILLEGGSINFORMASJON',
}

export enum UnderavsnittType {
  FAKTA = 'FAKTA',
  FORELDELSE = 'FORELDELSE',
  VILKÅR = 'VILKÅR',
  SÆRLIGEGRUNNER = 'SÆRLIGEGRUNNER',
  SÆRLIGEGRUNNER_ANNET = 'SÆRLIGEGRUNNER_ANNET',
}
