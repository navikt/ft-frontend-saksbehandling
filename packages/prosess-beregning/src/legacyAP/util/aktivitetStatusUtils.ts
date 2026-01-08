import type { AktivitetStatus } from '@navikt/ft-types';

const statuserSomStøtterFrilanser = new Set<AktivitetStatus>(['FL', 'AT_FL', 'AT_FL_SN', 'FL_SN']);
const statuserSomStøtterArbeidstaker = new Set<AktivitetStatus>(['AT', 'AT_FL', 'AT_FL_SN', 'AT_SN']);
const statuserSomStøtterSelvstendigNaeringsdrivende = new Set<AktivitetStatus>(['SN', 'FL_SN', 'AT_FL_SN', 'AT_SN']);

export const isStatusFrilanserOrKombinasjon = (status: AktivitetStatus) => statuserSomStøtterFrilanser.has(status);
export const isStatusArbeidstakerOrKombinasjon = (status: AktivitetStatus) =>
  statuserSomStøtterArbeidstaker.has(status);
export const isStatusSNOrKombinasjon = (status: AktivitetStatus) =>
  statuserSomStøtterSelvstendigNaeringsdrivende.has(status);
