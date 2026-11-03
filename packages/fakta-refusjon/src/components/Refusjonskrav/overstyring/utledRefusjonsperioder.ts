import dayjs from 'dayjs';

import { isDateWithinInterval, ISO_DATE_FORMAT, sortPeriodsByFom } from '@navikt/ft-utils';

import type { RefusjonsAndel } from '../../../types/dataTypes';
import type { RefusjonsAndelFormValues } from '../formValues';

export const utledRefusjonsperioder = (
  perioder: RefusjonsAndelFormValues['refusjonsperioder'],
  opprinneligAndel: RefusjonsAndel,
) =>
  perioder.toSorted(sortPeriodsByFom).map((periode, index, sortertePerioder) => {
    const original = opprinneligAndel.refusjonsperioder.find(isDateWithinInterval(periode.fom));
    const nestePeriode = sortertePerioder[index + 1];
    const refusjonsbeløpPrMnd =
      periode.refusjonsbeløpPrMnd === null || periode.refusjonsbeløpPrMnd === undefined
        ? Number.NaN
        : Number(periode.refusjonsbeløpPrMnd);
    const tom = original
      ? nestePeriode && isDateWithinInterval(nestePeriode.fom)(original)
        ? dayjs(nestePeriode.fom).subtract(1, 'day').format(ISO_DATE_FORMAT)
        : original.tom
      : '';

    if (!original) {
      return { ...periode, tom, refusjonsbeløpPrMnd };
    }

    if (
      periode.fom === original.fom &&
      tom === original.tom &&
      refusjonsbeløpPrMnd === original.refusjonsbeløpPrMnd &&
      periode.utfallÅrsak === original.utfallÅrsak
    ) {
      return { ...original, kilde: opprinneligAndel.kilde, utfall: periode.utfall };
    }

    return {
      ...original,
      fom: periode.fom,
      tom,
      refusjonsbeløpPrMnd,
      kilde: 'SAKSBEHANDLER' as const,
      utfall: periode.utfall,
      utfallÅrsak: periode.utfallÅrsak,
    };
  });
