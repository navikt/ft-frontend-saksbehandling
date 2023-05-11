import React, { ReactElement, FunctionComponent, useState } from 'react';
import moment from 'moment';
import dayjs from 'dayjs';
import { useIntl } from 'react-intl';
import { Timeline } from '@navikt/ds-react-internal';
import {
  XMarkOctagonIcon,
  CheckmarkCircleIcon,
  ExclamationmarkTriangleIcon,
  FigureOutwardFillIcon,
  SilhouetteFillIcon,
  FigureCombinationIcon,
  PlusIcon,
  ArrowLeftIcon,
  MinusIcon,
  ArrowRightIcon,
} from '@navikt/aksel-icons';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { NavBrukerKjonn } from '@navikt/ft-kodeverk';

import { Button } from '@navikt/ds-react';
import { FloatRight, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import TidslinjePeriode from '../../types/tidslinjePeriodeTsType';

import styles from './tilbakekrevingTimeline.module.css';

type Periode = {
  status: 'success' | 'danger' | 'warning';
} & TidslinjePeriode;

const parseDateString = (dateString: moment.Moment | string): Date => moment(dateString, ISO_DATE_FORMAT).toDate();

const finnStatus = (periode: TidslinjePeriode): 'success' | 'danger' | 'warning' => {
  const status = periode.isGodkjent ? 'success' : 'danger';
  return periode.isAksjonspunktOpen ? 'warning' : status;
};

function sortByDate(a: TidslinjePeriode, b: TidslinjePeriode): number {
  if (a.fom < b.fom) {
    return -1;
  }
  if (a.fom > b.fom) {
    return 1;
  }
  return 0;
}

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

const PERIODE_STATUS_IKON_MAP = {
  danger: <XMarkOctagonIcon />,
  success: <CheckmarkCircleIcon />,
  warning: <ExclamationmarkTriangleIcon />,
} as Record<string, ReactElement>;

interface PureOwnProps {
  perioder: TidslinjePeriode[];
  valgtPeriode?: TidslinjePeriode;
  kjonn: string;
  setPeriode: (periode?: TidslinjePeriode) => void;
}

/**
 * TilbakekrevingTimeLine
 *
 * Presentationskomponent. Masserer data og populerer felten samt formatterar tidslinjen for tilbakekreving
 */
const TilbakekrevingTimeline: FunctionComponent<PureOwnProps> = ({ perioder, setPeriode, valgtPeriode, kjonn }) => {
  const intl = useIntl();

  const tPerioder = formatItems(perioder);

  const velgPeriode = (id: number): void => {
    const periode = perioder.find(p => p.id === id);
    if (periode) {
      setPeriode(periode);
    }
  };

  const originalFomDato = dayjs(tPerioder[0].fom);
  const originalTomDato = dayjs(tPerioder[tPerioder.length - 1].tom);

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
          {tPerioder.map(p => (
            <Timeline.Period
              key={p.id}
              start={dayjs(p.fom).toDate()}
              end={dayjs(p.tom).toDate()}
              status={p.status}
              onSelectPeriod={() => velgPeriode(p.id)}
              isActive={valgtPeriode?.id === p.id}
              icon={PERIODE_STATUS_IKON_MAP[p.status]}
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
