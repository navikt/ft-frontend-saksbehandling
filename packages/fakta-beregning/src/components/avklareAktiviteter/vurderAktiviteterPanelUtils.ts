import dayjs from 'dayjs';

import type { AvklarBeregningAktiviteter, BeregningAktivitet } from '@navikt/ft-types';

export const finnPlasseringIListe = (gjeldendeTomDatoMapping: AvklarBeregningAktiviteter[], dato: string): number => {
  let i = 0;
  while (
    i < gjeldendeTomDatoMapping.length &&
    dayjs(dato).isBefore(gjeldendeTomDatoMapping[i].tom === undefined ? null : gjeldendeTomDatoMapping[i].tom)
  ) {
    i += 1;
  }
  return i;
};

export const leggTilAktivitet = (
  gjeldendeTomDatoMapping: AvklarBeregningAktiviteter[],
  aktivitet: BeregningAktivitet,
  tomDato: string,
): void => {
  // Finnes gjeldendeTomDatoMapping med tomDato ?
  const eksisterende = gjeldendeTomDatoMapping.find(({ tom }) => tom === tomDato);
  if (eksisterende === undefined) {
    const nyTomDatoMapping = {
      tom: tomDato,
      aktiviteter: [aktivitet],
    };
    const index = finnPlasseringIListe(gjeldendeTomDatoMapping, tomDato);
    gjeldendeTomDatoMapping.splice(index, 0, nyTomDatoMapping);
  } else {
    if (!eksisterende.aktiviteter) {
      throw new Error(`Forventer å ha aktiviteter på tom ${eksisterende.tom}`);
    }
    eksisterende.aktiviteter.push(aktivitet);
  }
};
