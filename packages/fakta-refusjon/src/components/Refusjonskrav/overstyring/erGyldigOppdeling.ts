import { hasValidDate, required } from '@navikt/ft-form-validators';
import { addDaysToDate, sortPeriodsByFom, TIDENES_ENDE } from '@navikt/ft-utils';

type Periode = { fom: string; tom?: string };

export const erGyldigOppdeling = (perioder: readonly Periode[], opprinneligePerioder: readonly Periode[]): boolean => {
  const tidligsteFom = opprinneligePerioder.toSorted(sortPeriodsByFom)[0]?.fom;

  if (!tidligsteFom || perioder.length === 0) {
    return false;
  }

  const sortertePerioder = perioder
    .toSorted(sortPeriodsByFom)
    .map(periode => ({ ...periode, tom: periode.tom || TIDENES_ENDE }));

  return sortertePerioder.every(
    (periode, index) =>
      !required(periode.fom) &&
      !hasValidDate(periode.fom) &&
      (periode.tom === TIDENES_ENDE || !hasValidDate(periode.tom)) &&
      periode.fom >= tidligsteFom &&
      periode.fom <= periode.tom &&
      (index === 0 || periode.fom === addDaysToDate(sortertePerioder[index - 1].tom, 1)),
  );
};
