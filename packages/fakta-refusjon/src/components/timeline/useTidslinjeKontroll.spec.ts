import { act, renderHook } from '@testing-library/react';

import type { RefusjonsAndel } from '../../types/dataTypes';
import { useTidslinjeKontroll } from './useTidslinjeKontroll';

const lagAndel = (perioder: Array<{ fom: string; tom: string }>, arbeidsgiverIdent = '123456789'): RefusjonsAndel => ({
  arbeidsgiverIdent,
  kilde: 'IM',
  refusjonsperioder: perioder.map(({ fom, tom }) => ({
    fom,
    tom,
    refusjonsbeløpPrMnd: 10000,
    fristForInnsendingAvRefusjonskrav: '2025-01-01',
    tidligsteMuligeDatoMedRefusjonEtterFrist: '2025-01-01',
    datoForInnsendtEllerEndretIM: '2025-01-01',
  })),
});

describe('useTidslinjeKontroll', () => {
  it('viser som standard 8 måneder fra tidligste fom på tvers av andeler når alle perioder er kortere', () => {
    const andeler = [
      lagAndel([{ fom: '2025-02-01', tom: '2025-02-28' }], '111111111'),
      lagAndel([{ fom: '2025-01-01', tom: '2025-01-31' }], '222222222'),
    ];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    expect(result.current.utvidelseIMåneder).toBe('8');
    expect(result.current.start).toEqual(new Date(2025, 0, 1));
    expect(result.current.end).toEqual(new Date(2025, 8, 1));
  });

  it('bruker seneste tom på tvers av andeler og perioder når perioden er lengre enn minimumsvinduet', () => {
    const andeler = [
      lagAndel(
        [
          { fom: '2025-03-01', tom: '2025-04-30' },
          { fom: '2026-01-01', tom: '2026-05-15' },
        ],
        '111111111',
      ),
      lagAndel([{ fom: '2025-01-01', tom: '2025-02-28' }], '222222222'),
    ];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    expect(result.current.start).toEqual(new Date(2025, 0, 1));
    expect(result.current.end).toEqual(new Date(2026, 4, 15));
  });

  it.each([
    { utvidelse: '4', forventetSlutt: new Date(2025, 4, 1) },
    { utvidelse: '12', forventetSlutt: new Date(2026, 0, 1) },
  ] as const)(
    'gir minimumsslutt $utvidelse måneder etter start når $utvidelse måneder velges',
    ({ utvidelse, forventetSlutt }) => {
      const andeler = [lagAndel([{ fom: '2025-01-01', tom: '2025-01-31' }])];
      const { result } = renderHook(() => useTidslinjeKontroll(andeler));

      act(() => result.current.velgUtvidelse(utvidelse));

      expect(result.current.utvidelseIMåneder).toBe(utvidelse);
      expect(result.current.start).toEqual(new Date(2025, 0, 1));
      expect(result.current.end).toEqual(forventetSlutt);
    },
  );

  it('nullstiller navigasjonsforskyvning når utvidelse velges', () => {
    const andeler = [lagAndel([{ fom: '2025-01-01', tom: '2025-01-31' }])];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    act(() => result.current.visNestePeriode());
    act(() => result.current.visNestePeriode());
    expect(result.current.start).toEqual(new Date(2025, 2, 1));

    act(() => result.current.velgUtvidelse('4'));

    expect(result.current.start).toEqual(new Date(2025, 0, 1));
    expect(result.current.end).toEqual(new Date(2025, 4, 1));
  });

  it('zoomer inn én måned per klikk til minimum én måned og stopper der', () => {
    const andeler = [lagAndel([{ fom: '2025-01-01', tom: '2025-01-31' }])];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    act(() => result.current.zoomInn());

    expect(result.current.start).toEqual(new Date(2025, 0, 1));
    expect(result.current.end).toEqual(new Date(2025, 7, 1));

    act(() => result.current.zoomInn());

    expect(result.current.end).toEqual(new Date(2025, 6, 1));

    for (let i = 0; i < 4; i++) {
      act(() => result.current.zoomInn());
    }

    expect(result.current.end).toEqual(new Date(2025, 2, 1));
    expect(result.current.kanZoomeInn).toBe(true);

    act(() => result.current.zoomInn());

    expect(result.current.end).toEqual(new Date(2025, 1, 1));
    expect(result.current.kanZoomeInn).toBe(false);

    act(() => result.current.zoomInn());
    act(() => result.current.zoomInn());

    expect(result.current.start).toEqual(new Date(2025, 0, 1));
    expect(result.current.end).toEqual(new Date(2025, 1, 1));
  });

  it('stopper på nærmeste månedssteg som ikke er kortere enn én måned ved månedsslutt', () => {
    const andeler = [lagAndel([{ fom: '2025-01-31', tom: '2025-01-31' }])];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    for (let i = 0; i < 12; i++) {
      act(() => result.current.zoomInn());
    }

    expect(result.current.start).toEqual(new Date(2025, 0, 31));
    expect(result.current.end).toEqual(new Date(2025, 1, 28));

    act(() => result.current.visNestePeriode());

    expect(result.current.start).toEqual(new Date(2025, 1, 28));
    expect(result.current.end.getTime()).toBeGreaterThan(result.current.start.getTime());

    act(() => result.current.zoomInn());
    act(() => result.current.zoomInn());

    expect(result.current.end).toEqual(new Date(2025, 2, 30));
    expect(result.current.kanZoomeInn).toBe(false);
  });

  it('zoomer ut én måned per klikk uten øvre grense, også forbi 12 måneder', () => {
    const andeler = [lagAndel([{ fom: '2025-01-01', tom: '2025-01-31' }])];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    act(() => result.current.zoomUt());

    expect(result.current.end).toEqual(new Date(2025, 9, 1));

    for (let i = 0; i < 4; i++) {
      act(() => result.current.zoomUt());
    }

    expect(result.current.start).toEqual(new Date(2025, 0, 1));
    expect(result.current.end).toEqual(new Date(2026, 1, 1));

    for (let i = 0; i < 30; i++) {
      act(() => result.current.zoomUt());
    }

    expect(result.current.end).toEqual(new Date(2028, 7, 1));
  });

  it('bevarer navigasjonsforskyvning når det zoomes', () => {
    const andeler = [lagAndel([{ fom: '2025-01-01', tom: '2025-01-31' }])];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    act(() => result.current.visNestePeriode());
    act(() => result.current.visNestePeriode());
    act(() => result.current.zoomInn());

    expect(result.current.start).toEqual(new Date(2025, 2, 1));
    expect(result.current.end).toEqual(new Date(2025, 9, 1));

    act(() => result.current.zoomUt());
    act(() => result.current.zoomUt());

    expect(result.current.start).toEqual(new Date(2025, 2, 1));
    expect(result.current.end).toEqual(new Date(2025, 11, 1));

    act(() => result.current.visForrigePeriode());

    expect(result.current.start).toEqual(new Date(2025, 1, 1));
    expect(result.current.end).toEqual(new Date(2025, 10, 1));
  });

  it('markerer ingen av 4/8/12 som aktiv etter manuell zoom, og aktiverer valget igjen når det klikkes', () => {
    const andeler = [lagAndel([{ fom: '2025-01-01', tom: '2025-01-31' }])];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    expect(result.current.aktivUtvidelse).toBe('8');

    act(() => result.current.zoomUt());

    expect(result.current.aktivUtvidelse).toBe('');

    act(() => result.current.velgUtvidelse('8'));

    expect(result.current.aktivUtvidelse).toBe('8');
  });

  it('nullstiller både zoom og navigasjonsforskyvning når 4, 8 eller 12 velges', () => {
    const andeler = [lagAndel([{ fom: '2025-01-01', tom: '2025-01-31' }])];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    act(() => result.current.visNestePeriode());
    act(() => result.current.visNestePeriode());
    act(() => result.current.zoomUt());
    act(() => result.current.zoomUt());
    act(() => result.current.zoomUt());
    act(() => result.current.zoomUt());
    act(() => result.current.zoomUt());
    act(() => result.current.zoomUt());

    expect(result.current.end).toEqual(new Date(2026, 4, 1));

    act(() => result.current.velgUtvidelse('12'));

    expect(result.current.aktivUtvidelse).toBe('12');
    expect(result.current.start).toEqual(new Date(2025, 0, 1));
    expect(result.current.end).toEqual(new Date(2026, 0, 1));

    act(() => result.current.zoomInn());
    act(() => result.current.visForrigePeriode());
    act(() => result.current.velgUtvidelse('4'));

    expect(result.current.aktivUtvidelse).toBe('4');
    expect(result.current.start).toEqual(new Date(2025, 0, 1));
    expect(result.current.end).toEqual(new Date(2025, 4, 1));
  });

  it('flytter hele vinduet én måned per kall og kommer tilbake til utgangspunktet', () => {
    const andeler = [lagAndel([{ fom: '2025-01-01', tom: '2026-02-15' }])];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    act(() => result.current.visNestePeriode());

    expect(result.current.start).toEqual(new Date(2025, 1, 1));
    expect(result.current.end).toEqual(new Date(2026, 2, 15));

    act(() => result.current.visForrigePeriode());
    act(() => result.current.visForrigePeriode());

    expect(result.current.start).toEqual(new Date(2024, 11, 1));
    expect(result.current.end).toEqual(new Date(2026, 0, 15));

    act(() => result.current.visNestePeriode());

    expect(result.current.start).toEqual(new Date(2025, 0, 1));
    expect(result.current.end).toEqual(new Date(2026, 1, 15));
  });

  it('flytter minimumsvinduet over årsskifte uten å endre dag i måneden', () => {
    const andeler = [lagAndel([{ fom: '2025-11-01', tom: '2025-11-30' }])];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    act(() => result.current.visNestePeriode());
    act(() => result.current.visNestePeriode());

    expect(result.current.start).toEqual(new Date(2026, 0, 1));
    expect(result.current.end).toEqual(new Date(2026, 8, 1));
  });

  it('håndterer månedsslutt uten å hoppe over målmåneden eller akkumulere avvik', () => {
    const andeler = [lagAndel([{ fom: '2025-01-31', tom: '2025-01-31' }])];
    const { result } = renderHook(() => useTidslinjeKontroll(andeler));

    expect(result.current.start).toEqual(new Date(2025, 0, 31));

    act(() => result.current.visNestePeriode());

    expect(result.current.start).toEqual(new Date(2025, 1, 28));

    act(() => result.current.visNestePeriode());

    expect(result.current.start).toEqual(new Date(2025, 2, 31));

    act(() => result.current.visForrigePeriode());
    act(() => result.current.visForrigePeriode());

    expect(result.current.start).toEqual(new Date(2025, 0, 31));
  });
});
