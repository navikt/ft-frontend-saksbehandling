import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  AKTSOMHET = 'Aktsomhet',
  HENDELSE_TYPE = 'HendelseType',
  SARLIG_GRUNN = 'SærligGrunn',
  VILKAR_RESULTAT = 'VilkårResultat',
}

export type KodeverkFpTilbakeForPanel = Record<KodeverkType, KodeverkMedNavn[]>;
