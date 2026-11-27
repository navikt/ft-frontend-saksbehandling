import { addDaysToDate, TIDENES_ENDE } from '@navikt/ft-utils';

import type { RefusjonsandelDto } from '../../../types/dataTypes';
import { erAvslåttEtterFrist } from '../erAvslåttEtterFrist';
import type { RefusjonsAndelFormValues } from '../formValues';
import { utledRefusjonsperioder } from './utledRefusjonsperioder';

export const erGyldigeLåstePerioder = (
  perioder: RefusjonsAndelFormValues['refusjonsperioder'],
  opprinneligAndel: RefusjonsandelDto,
) => {
  const låstePerioder = opprinneligAndel.refusjonsperioder.filter(erAvslåttEtterFrist);
  if (låstePerioder.length === 0) {
    return true;
  }
  const utlededePerioder = utledRefusjonsperioder(perioder, opprinneligAndel);

  return låstePerioder.every(original => {
    const originalTom = original.tom || TIDENES_ENDE;
    const overlappendePerioder = utlededePerioder.filter(
      periode => periode.fom <= originalTom && periode.tom >= original.fom,
    );
    const periode = overlappendePerioder[0];
    return (
      overlappendePerioder.length === 1 &&
      periode.fom === original.fom &&
      periode.tom === originalTom &&
      periode.refusjonPrMnd === original.refusjonPrMnd &&
      !periode.overstyringsÅrsak &&
      erAvslåttEtterFrist(periode) &&
      (!opprinneligAndel.refusjonsperioder.some(p => p.fom > originalTom) ||
        utlededePerioder.some(p => p.fom === addDaysToDate(originalTom, 1)))
    );
  });
};
