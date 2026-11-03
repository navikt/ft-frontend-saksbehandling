import { hasValidDate, required } from '@navikt/ft-form-validators';
import { addDaysToDate, isDateWithinInterval, sortPeriodsByFom } from '@navikt/ft-utils';

import type { Refusjonsperiode } from '../../../types/dataTypes';

type Periode = Pick<Refusjonsperiode, 'fom' | 'tom'>;

export const erGyldigOppdeling = (perioder: readonly Periode[], opprinneligePerioder: readonly Periode[]): boolean => {
  if (
    perioder.length === 0 ||
    perioder.some(
      periode =>
        required(periode.fom) ||
        required(periode.tom) ||
        hasValidDate(periode.fom) ||
        hasValidDate(periode.tom) ||
        periode.fom > periode.tom ||
        !opprinneligePerioder.some(
          original => isDateWithinInterval(periode.fom)(original) && isDateWithinInterval(periode.tom)(original),
        ),
    )
  ) {
    return false;
  }

  return opprinneligePerioder.every(original => {
    const delperioder = perioder.filter(periode => isDateWithinInterval(periode.fom)(original)).sort(sortPeriodsByFom);

    return (
      delperioder[0]?.fom === original.fom &&
      delperioder.at(-1)?.tom === original.tom &&
      delperioder.every(
        (periode, index) =>
          index === 0 ||
          (periode.fom > delperioder[index - 1].tom && periode.fom === addDaysToDate(delperioder[index - 1].tom, 1)),
      )
    );
  });
};
