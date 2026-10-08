import { act, renderHook } from '@testing-library/react';

import { useOpenRows } from './useOpenRows';

describe('useOpenRows', () => {
  it('starter uten åpne rader når listen er tom', () => {
    const { result } = renderHook(() => useOpenRows([]));

    expect(result.current.openRowsIndices.size).toBe(0);
  });

  it('åpner og lukker rader uavhengig av hverandre', () => {
    const { result } = renderHook(() => useOpenRows([{}, { utfall: 'INNVILGET' }, {}]));

    expect(result.current.openRowsIndices).toEqual(new Set([0, 2]));

    act(() => {
      result.current.onOpenChange(1, true);
      result.current.onOpenChange(0, false);
    });

    act(() => result.current.closeRow(2));
    expect(result.current.openRowsIndices).toEqual(new Set([1]));

    act(() => result.current.closeRow(1));
    expect(result.current.openRowsIndices.size).toBe(0);
  });

  it('tåler gjentatt åpning og lukking av samme rad', () => {
    const { result } = renderHook(() => useOpenRows([{ utfall: 'INNVILGET' }]));

    act(() => {
      result.current.onOpenChange(0, true);
      result.current.onOpenChange(0, true);
    });
    expect(result.current.openRowsIndices).toEqual(new Set([0]));

    act(() => {
      result.current.closeRow(0);
      result.current.closeRow(0);
    });
    expect(result.current.openRowsIndices.size).toBe(0);
  });

  it('beholder brukerens valg ved ny render selv om startverdiene er endret', () => {
    const { result, rerender } = renderHook(({ initialRows }) => useOpenRows(initialRows), {
      initialProps: { initialRows: [{}, {}] },
    });

    act(() => result.current.closeRow(0));
    rerender({ initialRows: [{}, {}, {}] });

    expect(result.current.openRowsIndices).toEqual(new Set([1]));
  });
});
