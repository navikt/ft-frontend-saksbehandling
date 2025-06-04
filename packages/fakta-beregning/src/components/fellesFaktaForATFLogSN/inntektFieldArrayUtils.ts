import { UseFieldArrayAppend, UseFieldArrayRemove } from 'react-hook-form';

import { AktivitetStatus, Inntektskategori } from '@navikt/ft-kodeverk';

import { AndelFieldValue } from '../../typer/FieldValues';
import { KodeverkForPanel, KodeverkMedNavn } from '../../typer/KodeverkForPanel';

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
  aktivitetStatusKode: string,
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

export const finnStatus = (aktivitetStatuser: KodeverkMedNavn<'AktivitetStatus'>[], status: string): string => {
  const navn = aktivitetStatuser.find(({ kode }) => kode === status)?.navn;
  if (!navn) {
    throw new Error('Fant ikke aktivitetstatus med navn' + status);
  }
  return navn;
};

const dagpenger = (aktivitetStatuser: KodeverkMedNavn<'AktivitetStatus'>[]): AndelFieldValue => ({
  andel: finnStatus(aktivitetStatuser, AktivitetStatus.DAGPENGER),
  aktivitetStatus: AktivitetStatus.DAGPENGER,
  fastsattBelop: '',
  inntektskategori: Inntektskategori.DAGPENGER,
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
    AktivitetStatus.DAGPENGER,
    skalHaBesteberegning,
    (andel: AndelFieldValue) => !skalHaBesteberegning && !skalKunneLeggeTilDagpenger && !!andel.lagtTilAvSaksbehandler,
    dagpenger(aktivitetStatuser),
    remove,
    append,
  );
};

export const getInntektskategorierAlfabetiskSortert = (kodeverkSamling: KodeverkForPanel) =>
  kodeverkSamling['Inntektskategori'].slice().sort((a, b) => a.navn.localeCompare(b.navn));
