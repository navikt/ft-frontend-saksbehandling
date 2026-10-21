import dayjs from 'dayjs';
import { useMemo, useState } from 'react';

import type { RefusjonsAndel } from '../../types/dataTypes';
import type { TidslinjeUtvidelse } from './tidslinjeUtvidelser';

export const useTidslinjeKontroll = (refusjonsandeler: RefusjonsAndel[]) => {
  const [utvidelseIMåneder, setUtvidelseIMåneder] = useState<TidslinjeUtvidelse>('8');
  const [forskyvningIMåneder, setForskyvningIMåneder] = useState(0);
  const [zoomjusteringIMåneder, setZoomjusteringIMåneder] = useState(0);
  const grunnintervall = useMemo(() => utledDatointervall(refusjonsandeler), [refusjonsandeler]);
  const minimumSlutt = flyttMåneder(grunnintervall.start, Number(utvidelseIMåneder));
  const grunnSlutt = grunnintervall.end > minimumSlutt ? grunnintervall.end : minimumSlutt;

  const synligStart = flyttMåneder(grunnintervall.start, forskyvningIMåneder);
  const tidligsteSlutt = flyttMåneder(synligStart, 1);
  const utledZoometSlutt = (zoomjustering: number) =>
    flyttMåneder(grunnSlutt, forskyvningIMåneder + zoomjustering);

  const zoometSlutt = utledZoometSlutt(zoomjusteringIMåneder);
  const synligSlutt = zoometSlutt > tidligsteSlutt ? zoometSlutt : tidligsteSlutt;
  const nesteZoomInnSlutt = utledZoometSlutt(zoomjusteringIMåneder - 1);
  const kanZoomeInn = nesteZoomInnSlutt >= tidligsteSlutt;

  return {
    start: synligStart,
    end: synligSlutt,
    visNestePeriode: () => setForskyvningIMåneder(offset => offset + 1),
    visForrigePeriode: () => setForskyvningIMåneder(offset => offset - 1),
    utvidelseIMåneder,
    aktivUtvidelse: zoomjusteringIMåneder === 0 ? utvidelseIMåneder : ('' as const),
    kanZoomeInn,
    zoomInn: () =>
      setZoomjusteringIMåneder(zoomjustering =>
        utledZoometSlutt(zoomjustering - 1) >= tidligsteSlutt ? zoomjustering - 1 : zoomjustering,
      ),
    zoomUt: () => setZoomjusteringIMåneder(zoomjustering => zoomjustering + 1),
    velgUtvidelse: (value: TidslinjeUtvidelse) => {
      setUtvidelseIMåneder(value);
      setForskyvningIMåneder(0);
      setZoomjusteringIMåneder(0);
    },
  };
};
const utledDatointervall = (refusjonsandeler: RefusjonsAndel[]) => {
  const perioder = refusjonsandeler.flatMap(andel => andel.refusjonsperioder);
  const førstePeriode = perioder[0];

  if (!førstePeriode) {
    const today = new Date();
    return { start: today, end: today };
  }

  return perioder.reduce(
    (range, periode) => {
      const start = dayjs(periode.fom).toDate();
      const end = dayjs(periode.tom).toDate();

      return {
        start: start < range.start ? start : range.start,
        end: end > range.end ? end : range.end,
      };
    },
    { start: dayjs(førstePeriode.fom).toDate(), end: dayjs(førstePeriode.tom).toDate() },
  );
};
const flyttMåneder = (date: Date, months: number) => {
  return dayjs(date).add(months, 'month').toDate();
};
