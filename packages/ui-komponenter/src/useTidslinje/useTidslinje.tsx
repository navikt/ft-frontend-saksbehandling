import { type JSX, useId, useMemo, useState } from 'react';

import dayjs from 'dayjs';

import { TidslinjeController } from './TidslinjeController';

const STANDARDVINDU_MÅNEDER = 8;

interface TidslinjePeriode {
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
  const grunnSlutt = grunnintervall.end.isAfter(standardSlutt) ? grunnintervall.end : standardSlutt;
  const start = flyttMåneder(grunnintervall.start, forskyvning);
  const minimumSlutt = flyttMåneder(start, 1);
  const utledSlutt = (justering: number) => flyttMåneder(grunnSlutt, forskyvning + justering);
  const beregnetSlutt = utledSlutt(zoomjustering);
  const slutt = beregnetSlutt.isAfter(minimumSlutt) ? beregnetSlutt : minimumSlutt;
  const kanZoomeInn = !utledSlutt(zoomjustering - 1).isBefore(minimumSlutt);
  const onNeste = () => setForskyvning(offset => offset + 1);
  const onForrige = () => setForskyvning(offset => offset - 1);
  const onZoomInn = () => setZoomjustering(value => (utledSlutt(value - 1).isBefore(minimumSlutt) ? value : value - 1));
  const onZoomUt = () => setZoomjustering(value => value + 1);

  return {
    timelineProps: {
      startDate: start.toDate(),
      endDate: slutt.toDate(),
      id: resolvedTimelineId,
      'aria-controls': resolvedControllerId,
    },
    controllerElement: (
      <TidslinjeController
        id={resolvedControllerId}
        aria-controls={resolvedTimelineId}
        kanZoomeInn={kanZoomeInn}
        onNeste={onNeste}
        onForrige={onForrige}
        onZoomInn={onZoomInn}
        onZoomUt={onZoomUt}
      />
    ),
  };
};

const utledDatointervall = (perioder: TidslinjePeriode[]) => {
  const første = perioder[0];
  if (!første) {
    const today = dayjs();
    return { start: today, end: today };
  }
  return perioder.reduce(
    (range, periode) => {
      const start = dayjs(periode.fom);
      const end = dayjs(periode.tom);
      return {
        start: start.isBefore(range.start) ? start : range.start,
        end: end.isAfter(range.end) ? end : range.end,
      };
    },
    { start: dayjs(første.fom), end: dayjs(første.tom) },
  );
};

const flyttMåneder = (date: dayjs.Dayjs, months: number) => date.add(months, 'month');
