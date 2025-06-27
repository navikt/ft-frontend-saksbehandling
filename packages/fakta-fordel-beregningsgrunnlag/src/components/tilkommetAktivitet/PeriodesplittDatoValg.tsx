import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { DatePicker, Label, useDatepicker } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT, sortPeriodsByFom } from '@navikt/ft-utils';

export type Periode = {
  fom: string;
  tom: string;
};

interface Props {
  periode: Periode;
  forhåndsvisPeriodesplitt: (nyFom: string) => Periode[];
  setValgtDato: (dato: string) => void;
}

export const PeriodesplittDatoValg = ({ periode, forhåndsvisPeriodesplitt, setValgtDato }: Props) => {
  const intl = useIntl();
  const [nyePerioder, setNyePerioder] = useState<Periode[]>();

  const oppdaterSplittDatoValg = (dato: Date | undefined) => {
    const splitt = dayjs(dato).format(ISO_DATE_FORMAT);
    setValgtDato(splitt);
    if (splitt) {
      const splittedePerioder = forhåndsvisPeriodesplitt(splitt);
      splittedePerioder.sort(sortPeriodsByFom);
      setNyePerioder(splittedePerioder);
    }
  };

  const disabledDays = [
    (date: Date) => !periode || !dayjs(date).isAfter(dayjs(periode.fom)) || dayjs(date).isAfter(dayjs(periode.tom)),
  ];
  const { datepickerProps, inputProps } = useDatepicker({
    today: new Date(periode.fom),
    disableWeekends: true,
    disabled: disabledDays,
    onDateChange: oppdaterSplittDatoValg,
  });

  return (
    <>
      <DatePicker {...datepickerProps}>
        <DatePicker.Input
          {...inputProps}
          label={intl.formatMessage({ id: 'TilkommetAktivitet.Modal.DatoValg' })}
          size="small"
        />
      </DatePicker>
      {nyePerioder && (
        <div>
          <Label size="small">
            <FormattedMessage id="TilkommetAktivitet.Modal.Resultat" />
          </Label>
          <ul>
            <li>
              <PeriodLabel dateStringFom={nyePerioder[0].fom} dateStringTom={nyePerioder[0].tom} />
            </li>
            <li>
              <PeriodLabel dateStringFom={nyePerioder[1].fom} dateStringTom={nyePerioder[1].tom} />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
