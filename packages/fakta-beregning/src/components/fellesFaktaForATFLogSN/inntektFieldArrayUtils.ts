import { type UseFieldArrayAppend, type UseFieldArrayRemove } from 'react-hook-form';

import type { AktivitetStatus } from '@navikt/ft-types';

import type { AndelFieldValue } from '../../typer/FieldValues';
import type { KodeverkForPanel, KodeverkMedNavn } from '../../typer/KodeverkForPanel';

const findAktivitetStatusIndex = (fields: AndelFieldValue[], aktivitetStatusKode: string) => {
  let index = -1;
  fields.forEach((field, nyIndex) => {
    if (field.aktivitetStatus === aktivitetStatusKode) {
      index = nyIndex;
    }
  });
  return index;
};

export const fjernEllerLeggTilAktivitetStatus = (
  fields: AndelFieldValue[],
  aktivitetStatusKode: AktivitetStatus,
  skalHaAndelMedAktivitetstatus: boolean,
  skalFjerne: (field: AndelFieldValue) => boolean,
  nyStatusAndel: AndelFieldValue,
  remove: UseFieldArrayRemove,
  append: UseFieldArrayAppend<AndelFieldValue>,
) => {
  const statusIndex = findAktivitetStatusIndex(fields, aktivitetStatusKode);
  if (statusIndex !== -1) {
    const field = fields[statusIndex];
    if (skalFjerne(field)) {
      remove(statusIndex);
    }
  }
  if (statusIndex !== -1) {
    return;
  }
  if (skalHaAndelMedAktivitetstatus) {
    append({
      ...nyStatusAndel,
    });
  }
};

export const finnStatus = (
  aktivitetStatuser: KodeverkMedNavn<'AktivitetStatus'>[],
  status: AktivitetStatus,
): string => {
  const navn = aktivitetStatuser.find(({ kode }) => kode === status)?.navn;
  if (!navn) {
    throw new Error('Fant ikke aktivitetstatus med navn' + status);
  }
  return navn;
};

const dagpenger = (aktivitetStatuser: KodeverkMedNavn<'AktivitetStatus'>[]): AndelFieldValue => ({
  andel: finnStatus(aktivitetStatuser, 'DP'),
  aktivitetStatus: 'DP',
  fastsattBelop: '',
  inntektskategori: 'DAGPENGER',
  nyAndel: true,
  skalKunneEndreAktivitet: false,
  lagtTilAvSaksbehandler: true,
});

export const leggTilDagpengerOmBesteberegning = (
  fields: AndelFieldValue[],
  skalHaBesteberegning: boolean,
  aktivitetStatuser: KodeverkMedNavn<'AktivitetStatus'>[],
  skalKunneLeggeTilDagpenger: boolean,
  remove: UseFieldArrayRemove,
  append: UseFieldArrayAppend<AndelFieldValue>,
) => {
  fjernEllerLeggTilAktivitetStatus(
    fields,
    'DP',
    skalHaBesteberegning,
    (andel: AndelFieldValue) => !skalHaBesteberegning && !skalKunneLeggeTilDagpenger && !!andel.lagtTilAvSaksbehandler,
    dagpenger(aktivitetStatuser),
    remove,
    append,
  );
};

export const getInntektskategorierAlfabetiskSortert = (kodeverkSamling: KodeverkForPanel) =>
  kodeverkSamling['Inntektskategori'].slice().sort((a, b) => a.navn.localeCompare(b.navn));
