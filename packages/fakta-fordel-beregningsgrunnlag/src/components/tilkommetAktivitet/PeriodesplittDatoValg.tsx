import React, { FC, useState, useCallback } from 'react';
// eslint-disable-next-line react/jsx-pascal-case, camelcase
import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from '@navikt/ds-react';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label } from '@navikt/ds-react/esm/typography';
import dayjs from 'dayjs';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT, TIDENES_ENDE } from '@navikt/ft-utils';
import styles from './periodesplittModal.module.css';

export type Periode = {
  fom: string;
  tom: string;
};

type PeriodesplittModalProps = {
  periode: Periode;
  forhåndsvisPeriodesplitt: (nyFom: string) => Periode[];
  setValgtDato: (dato: string) => void;
};

const formaterTomForVisning = (tom: string): string => {
  if (tom === TIDENES_ENDE) {
    return '';
  }
  return dayjs(tom).format(DDMMYYYY_DATE_FORMAT);
};

const PeriodesplittDatoValg: FC<PeriodesplittModalProps> = ({ periode, forhåndsvisPeriodesplitt, setValgtDato }) => {
  const intl = useIntl();
  const [nyePerioder, setNyePerioder] = useState<Periode[]>();

  const oppdaterSplittDatoValg = useCallback(
    (dato: Date | undefined) => {
      const splitt = dayjs(dato).format(ISO_DATE_FORMAT);
      setValgtDato(splitt);
      if (splitt) {
        const splittedePerioder = forhåndsvisPeriodesplitt(splitt);
        splittedePerioder.sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom)));
        setNyePerioder(splittedePerioder);
      }
    },
    [forhåndsvisPeriodesplitt],
  );

  const disabledDays = [
    (date: Date) => !periode || !dayjs(date).isAfter(dayjs(periode.fom)) || dayjs(date).isAfter(dayjs(periode.tom)),
  ];
  const { datepickerProps, inputProps } = UNSAFE_useDatepicker({
    today: new Date(periode.fom),
    disableWeekends: true,
    disabled: disabledDays,
    onDateChange: oppdaterSplittDatoValg,
  });

  return (
    <>
      <FlexRow className={styles.datoRad}>
        <FlexColumn>
          {/* eslint-disable-next-line react/jsx-pascal-case, camelcase */}
          <UNSAFE_DatePicker {...datepickerProps}>
            {/* eslint-disable-next-line react/jsx-pascal-case, camelcase */}
            <UNSAFE_DatePicker.Input
              {...inputProps}
              label={intl.formatMessage({ id: 'TilkommetAktivitet.Modal.DatoValg' })}
              size="small"
            />
          </UNSAFE_DatePicker>
        </FlexColumn>
        {nyePerioder && (
          <FlexColumn>
            <Label>
              <FormattedMessage id="TilkommetAktivitet.Modal.Resultat" />
            </Label>
            <ul>
              <li>
                <FormattedMessage
                  id="TilkommetAktivitet.Modal.Periode"
                  values={{
                    fom: dayjs(nyePerioder[0].fom).format(DDMMYYYY_DATE_FORMAT),
                    tom: formaterTomForVisning(nyePerioder[0].tom),
                  }}
                />
              </li>
              <li>
                <FormattedMessage
                  id="TilkommetAktivitet.Modal.Periode"
                  values={{
                    fom: dayjs(nyePerioder[1].fom).format(DDMMYYYY_DATE_FORMAT),
                    tom: formaterTomForVisning(nyePerioder[1].tom),
                  }}
                />
              </li>
            </ul>
          </FlexColumn>
        )}
      </FlexRow>
      <VerticalSpacer sixteenPx />
    </>
  );
};
export default PeriodesplittDatoValg;
