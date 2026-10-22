import dayjs from 'dayjs';
import { useId, useMemo, useState, type JSX } from 'react';

import { TidslinjeController } from './TidslinjeController';

const STANDARDVINDU_MÅNEDER = 8;

export interface TidslinjePeriode {
  fom: string;
  tom: string;
}

export interface UseTidslinjeProps {
  perioder: TidslinjePeriode[];
  timelineId?: string;
  controllerId?: string;
}

export interface UseTidslinjeResult {
  timelineProps: { startDate: Date; endDate: Date; id: string; 'aria-controls': string };
  controllerElement: JSX.Element;
}

export const useTidslinje = ({ perioder, timelineId, controllerId }: UseTidslinjeProps): UseTidslinjeResult => {
  const generatedId = useId();
  const resolvedTimelineId = timelineId ?? `tidslinje-${generatedId}`;
  const resolvedControllerId = controllerId ?? `tidslinje-kontroller-${generatedId}`;
  const [forskyvning, setForskyvning] = useState(0);
  const [zoomjustering, setZoomjustering] = useState(0);
  const grunnintervall = useMemo(() => utledDatointervall(perioder), [perioder]);
  const standardSlutt = flyttMåneder(grunnintervall.start, STANDARDVINDU_MÅNEDER);
  const grunnSlutt = grunnintervall.end > standardSlutt ? grunnintervall.end : standardSlutt;
  const startDate = flyttMåneder(grunnintervall.start, forskyvning);
  const minimumSlutt = flyttMåneder(startDate, 1);
  const utledSlutt = (justering: number) => flyttMåneder(grunnSlutt, forskyvning + justering);
  const endDate = utledSlutt(zoomjustering) > minimumSlutt ? utledSlutt(zoomjustering) : minimumSlutt;
  const kanZoomeInn = utledSlutt(zoomjustering - 1) >= minimumSlutt;

  return {
    timelineProps: { startDate, endDate, id: resolvedTimelineId, 'aria-controls': resolvedControllerId },
    controllerElement: (
      <TidslinjeController
        id={resolvedControllerId}
        aria-controls={resolvedTimelineId}
        kanZoomeInn={kanZoomeInn}
        onNeste={() => setForskyvning(offset => offset + 1)}
        onForrige={() => setForskyvning(offset => offset - 1)}
        onZoomInn={() => setZoomjustering(value => (utledSlutt(value - 1) >= minimumSlutt ? value - 1 : value))}
        onZoomUt={() => setZoomjustering(value => value + 1)}
      />
    ),
  };
};

const utledDatointervall = (perioder: TidslinjePeriode[]) => {
  const første = perioder[0];
  if (!første) {
    const today = new Date();
    return { start: today, end: today };
  }
  return perioder.reduce(
    (range, periode) => {
      const start = dayjs(periode.fom).toDate();
      const end = dayjs(periode.tom).toDate();
      return { start: start < range.start ? start : range.start, end: end > range.end ? end : range.end };
    },
    { start: dayjs(første.fom).toDate(), end: dayjs(første.tom).toDate() },
  );
};

const flyttMåneder = (date: Date, months: number) => dayjs(date).add(months, 'month').toDate();
