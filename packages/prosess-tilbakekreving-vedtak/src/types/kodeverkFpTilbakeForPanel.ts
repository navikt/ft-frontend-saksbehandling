import { KodeverkMedNavn } from '@navikt/ft-types';

export enum KodeverkType {
  AKTSOMHET = 'Aktsomhet',
  VEDTAK_RESULTAT_TYPE = 'VedtakResultatType',
}

type KodeverkFpTilbakeForPanel = Record<KodeverkType, KodeverkMedNavn[]>;

export default KodeverkFpTilbakeForPanel;
