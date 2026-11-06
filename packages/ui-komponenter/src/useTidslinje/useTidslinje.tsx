import { type JSX, useId, useMemo, useState } from 'react';

import dayjs from 'dayjs';

import { TidslinjeController } from './TidslinjeController';

interface TidslinjePeriode {
  fom: string;
  tom: string;
}

export interface UseTidslinjeProps {
  perioder: TidslinjePeriode[];
}

export interface UseTidslinjeResult {
  timelineProps: { startDate: Date; endDate: Date; id: string; 'aria-controls': string };
  controllerElement: JSX.Element;
}

export const useTidslinje = ({ perioder }: UseTidslinjeProps): UseTidslinjeResult => {
  const generatedId = useId();
  const timelineId = `tidslinje-${generatedId}`;
  const controllerId = `tidslinje-kontroller-${generatedId}`;

  const grunnintervall = useMemo(() => utledDatointervall(perioder), [perioder]);
  const originalFomDato = dayjs(grunnintervall.start);
  const originalTomDato = dayjs(grunnintervall.end);

  const [valgtFomDato, setValgtFomDato] = useState<dayjs.Dayjs>();
  const [valgtTomDato, setValgtTomDato] = useState<dayjs.Dayjs>();
  const fomDato = valgtFomDato ?? originalFomDato;
  const tomDato = valgtTomDato ?? originalTomDato;

  const onForrige = () => {
    setValgtFomDato(fomDato.subtract(1, 'month'));
    setValgtTomDato(tomDato.subtract(1, 'month'));
  };

  const onNeste = () => {
    setValgtFomDato(fomDato.add(1, 'month'));
    setValgtTomDato(tomDato.add(1, 'month'));
  };

  const onZoomInn = () => {
    setValgtFomDato(fomDato.add(1, 'month'));
    setValgtTomDato(tomDato.subtract(1, 'month'));
  };

  const onZoomUt = () => {
    setValgtFomDato(fomDato.subtract(1, 'month'));
    setValgtTomDato(tomDato.add(1, 'month'));
  };

  return {
    timelineProps: {
      startDate: fomDato.toDate(),
      endDate: tomDato.add(1, 'days').toDate(),
      id: timelineId,
      'aria-controls': controllerId,
    },
    controllerElement: (
      <TidslinjeController
        id={controllerId}
        aria-controls={timelineId}
        kanGåFremover={!tomDato.add(1, 'month').isAfter(originalTomDato)}
        kanGåBakover={!fomDato.subtract(1, 'month').isBefore(originalFomDato)}
        kanZoomeInn={!fomDato.add(3, 'month').isAfter(tomDato)}
        kanZoomeUt={tomDato.add(1, 'month').diff(fomDato.subtract(1, 'month'), 'months') < 36}
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
