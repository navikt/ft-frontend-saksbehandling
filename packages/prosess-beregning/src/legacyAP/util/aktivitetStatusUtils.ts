import type { AktivitetStatus } from '@navikt/ft-types';

const statuserSomStotterFrilanser = new Set<AktivitetStatus>(['FL', 'AT_FL', 'AT_FL_SN', 'FL_SN']);
const statuserSomStotterArbeidstaker = new Set<AktivitetStatus>(['AT', 'AT_FL', 'AT_FL_SN', 'AT_SN']);
const statuserSomStotterSelvstendigNaeringsdrivende = new Set<AktivitetStatus>(['SN', 'FL_SN', 'AT_FL_SN', 'AT_SN']);

export const isStatusFrilanserOrKombinasjon = (status: AktivitetStatus) => statuserSomStotterFrilanser.has(status);
export const isStatusArbeidstakerOrKombinasjon = (status: AktivitetStatus) =>
  statuserSomStotterArbeidstaker.has(status);
export const isStatusSNOrKombinasjon = (status: AktivitetStatus) =>
  statuserSomStotterSelvstendigNaeringsdrivende.has(status);
