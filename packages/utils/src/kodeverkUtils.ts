import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

export const getKodeverknavnFraKode = (
  alleKodeverk: AlleKodeverk,
  kodeverkType: string,
  kode: string,
  undertype?: string,
): string => {
  // @ts-ignore fiks
  let kodeverkForType: KodeverkMedNavn[] = alleKodeverk[kodeverkType];
  if (!kodeverkForType || kodeverkForType.length === 0) {
    return '';
  }
  if (undertype) {
    // @ts-ignore Må endra kodeverket-typen til å støtta undertype
    kodeverkForType = kodeverkForType[undertype];
  }

  const kodeverk = kodeverkForType.find((k) => k.kode === kode);
  return kodeverk ? kodeverk.navn : '';
};

export const getKodeverknavnFn = (
  alleKodeverk: AlleKodeverk,
) => (
  kode: string,
  kodeverkType: KodeverkType,
  undertype?: string,
): string => getKodeverknavnFraKode(alleKodeverk, kodeverkType, kode, undertype);
