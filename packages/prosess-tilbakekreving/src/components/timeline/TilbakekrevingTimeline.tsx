import React, { ReactElement, FunctionComponent, useState } from 'react';
import moment from 'moment';
import { Timeline } from '@navikt/ds-react-internal';
import dayjs from 'dayjs';
import {
  XMarkOctagonIcon,
  CheckmarkCircleIcon,
  ExclamationmarkTriangleIcon,
  FigureOutwardFillIcon,
  SilhouetteFillIcon,
  FigureCombinationIcon,
  PlusIcon,
  MinusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@navikt/aksel-icons';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { NavBrukerKjonn } from '@navikt/ft-kodeverk';

import { FloatRight, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Button } from '@navikt/ds-react';
import { useIntl } from 'react-intl';
import styles from './tilbakekrevingTimeline.module.css';
import TidslinjePeriode from '../../types/tidslinjePeriodeTsType';

export const GODKJENT_CLASSNAME = 'godkjentPeriode';
export const AVVIST_CLASSNAME = 'avvistPeriode';

type Periode = {
  status: 'success' | 'danger' | 'warning';
} & TidslinjePeriode;

const PERIODE_STATUS_IKON_MAP = {
  danger: <XMarkOctagonIcon />,
  success: <CheckmarkCircleIcon />,
  warning: <ExclamationmarkTriangleIcon />,
} as Record<string, ReactElement>;

const parseDateString = (dateString: moment.Moment | string) => moment(dateString, ISO_DATE_FORMAT).toDate();

function sortByDate(a: TidslinjePeriode, b: TidslinjePeriode) {
  if (a.fom < b.fom) {
    return -1;
  }
  if (a.fom > b.fom) {
    return 1;
  }
  return 0;
}

const finnStatus = (periode: TidslinjePeriode): 'success' | 'danger' | 'warning' => {
  const status = periode.isGodkjent ? 'success' : 'danger';
  return periode.isAksjonspunktOpen ? 'warning' : status;
};

const formatItems = (periodItems: TidslinjePeriode[] = []): Periode[] => {
  const itemsWithDates = [...periodItems].sort(sortByDate).map(p => ({
    ...p,
    start: parseDateString(p.fom),
    end: parseDateString(moment(p.tom).add(1, 'days')),
    status: finnStatus(p),
  }));
  const formattedItemsArray: any = [];
  formattedItemsArray.length = 0;
  itemsWithDates.forEach(item => {
    formattedItemsArray.push(item);
  });
  return formattedItemsArray;
};

const finnIkonGittKjønnkode = (kjonn: string) => {
  if (kjonn === NavBrukerKjonn.KVINNE) {
    return <FigureOutwardFillIcon width={20} height={20} color="var(--a-red-200)" />;
  }
  if (kjonn === NavBrukerKjonn.MANN) {
    return <SilhouetteFillIcon width={20} height={20} color="var(--a-blue-600)" />;
  }
  return <FigureCombinationIcon width={20} height={20} />;
};

interface OwnProps {
  perioder: TidslinjePeriode[];
  valgtPeriode?: TidslinjePeriode;
  setPeriode: (periode?: TidslinjePeriode) => void;
  kjonn: string;
}

/**
 * TilbakekrevingTimeLine
 *
 * Presentationskomponent. Masserer data og populerer felten samt formatterar tidslinjen for tilbakekreving
 */
const TilbakekrevingTimeline: FunctionComponent<OwnProps> = ({ perioder, valgtPeriode, setPeriode, kjonn }) => {
  const intl = useIntl();

  const formatertePerioder = formatItems(perioder);

  const velgPeriode = (id: number): void => {
    const periode = perioder.find(p => p.id === id);
    if (periode) {
      setPeriode(periode);
    }
  };

  const originalFomDato = dayjs(formatertePerioder[0].fom);
  const originalTomDato = dayjs(formatertePerioder[formatertePerioder.length - 1].tom);

  const [fomDato, setFomDato] = useState(originalFomDato);
  const [tomDato, setTomDato] = useState(originalTomDato);

  const goBackward = () => {
    if (!fomDato.subtract(1, 'month').isBefore(originalFomDato)) {
      setFomDato(fomDato.subtract(1, 'month'));
      setTomDato(tomDato.subtract(1, 'month'));
    }
  };
  const goForward = () => {
    if (!tomDato.add(1, 'month').isAfter(originalTomDato)) {
      setFomDato(fomDato.add(1, 'month'));
      setTomDato(tomDato.add(1, 'month'));
    }
  };

  const zoomIn = () => {
    if (!fomDato.add(3, 'month').isAfter(tomDato)) {
      setFomDato(fomDato.add(1, 'month'));
      setTomDato(tomDato.subtract(1, 'month'));
    }
  };

  const zoomOut = () => {
    if (tomDato.add(1, 'month').diff(fomDato.subtract(1, 'month'), 'months') < 36) {
      setFomDato(fomDato.subtract(1, 'month'));
      setTomDato(tomDato.add(1, 'month'));
    }
  };

  return (
    <>
      <VerticalSpacer fourtyPx />
      <Timeline startDate={dayjs(fomDato).toDate()} endDate={dayjs(tomDato).add(1, 'days').toDate()}>
        <Timeline.Row label="-" icon={finnIkonGittKjønnkode(kjonn)}>
          {formatertePerioder.map(periode => (
            <Timeline.Period
              key={periode.id}
              start={dayjs(periode.fom).toDate()}
              end={dayjs(periode.tom).toDate()}
              status={periode.status}
              icon={PERIODE_STATUS_IKON_MAP[periode.status]}
              onSelectPeriod={() => velgPeriode(periode.id)}
              isActive={valgtPeriode?.id === periode.id}
            />
          ))}
        </Timeline.Row>
      </Timeline>
      <VerticalSpacer twentyPx />
      <FloatRight>
        <Button
          className={styles.margin}
          size="small"
          icon={<PlusIcon aria-hidden />}
          onClick={zoomIn}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ZoomInn' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<MinusIcon aria-hidden />}
          onClick={zoomOut}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ZoomUt' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<ArrowLeftIcon aria-hidden />}
          onClick={goBackward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ScrollTilVenstre' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<ArrowRightIcon aria-hidden />}
          onClick={goForward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ScrollTilHogre' })}
        />
      </FloatRight>
    </>
  );
};

export default TilbakekrevingTimeline;
