import dayjs from 'dayjs';

import { isDateWithinInterval, ISO_DATE_FORMAT, sortPeriodsByFom, TIDENES_ENDE } from '@navikt/ft-utils';

import type { RefusjonsAndel } from '../../../types/dataTypes';
import type { RefusjonsAndelFormValues, RefusjonsAndelTilVisning } from '../formValues';

export const utledRefusjonsperioder = (
  perioder: RefusjonsAndelFormValues['refusjonsperioder'],
  opprinneligAndel: RefusjonsAndel,
): RefusjonsAndelTilVisning['refusjonsperioder'] => {
  const opprinneligePerioder = opprinneligAndel.refusjonsperioder
    .toSorted(sortPeriodsByFom)
    .map(periode => ({ ...periode, tom: periode.tom || TIDENES_ENDE }));
  const sisteOriginal = opprinneligePerioder.at(-1);

  return perioder.toSorted(sortPeriodsByFom).map((periode, index, sortertePerioder) => {
    const original = opprinneligePerioder.find(opprinnelig =>
      isDateWithinInterval(periode.fom)({
        ...opprinnelig,
        tom: opprinnelig === sisteOriginal ? TIDENES_ENDE : opprinnelig.tom,
      }),
    );
    const nestePeriode = sortertePerioder[index + 1];
    const refusjonsbeløpPrMnd =
      periode.refusjonsbeløpPrMnd === null ||
      periode.refusjonsbeløpPrMnd === undefined ||
      periode.refusjonsbeløpPrMnd === ''
        ? Number.NaN
        : Number(periode.refusjonsbeløpPrMnd);
    const utfall = refusjonsbeløpPrMnd === 0 ? 'AVSLÅTT' : periode.utfall;

    if (!original) {
      return { ...periode, tom: '', refusjonsbeløpPrMnd, kilde: opprinneligAndel.kilde, utfall };
    }

    const tom =
      nestePeriode &&
      isDateWithinInterval(nestePeriode.fom)({
        fom: periode.fom,
        tom: TIDENES_ENDE,
      })
        ? dayjs(nestePeriode.fom).subtract(1, 'day').format(ISO_DATE_FORMAT)
        : periode.tom || TIDENES_ENDE;

    if (
      periode.fom === original.fom &&
      tom === original.tom &&
      refusjonsbeløpPrMnd === original.refusjonsbeløpPrMnd &&
      periode.utfallÅrsak === original.utfallÅrsak
    ) {
      return { ...original, kilde: opprinneligAndel.kilde, utfall };
    }

    return {
      ...original,
      fom: periode.fom,
      tom,
      refusjonsbeløpPrMnd,
      kilde: 'SAKSBEHANDLER' as const,
      utfall,
      utfallÅrsak: periode.utfallÅrsak,
    };
  });
};
