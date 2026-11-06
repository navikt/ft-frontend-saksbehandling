import { act, renderHook } from '@testing-library/react';

import { useOpenRows } from './useOpenRows';

describe('useOpenRows', () => {
  it('starter uten åpne rader', () => {
    const { result } = renderHook(() => useOpenRows());

    expect(result.current.openRowsIndices.size).toBe(0);
  });

  it('åpner og lukker rader uavhengig av hverandre', () => {
    const { result } = renderHook(() => useOpenRows());

    act(() => {
      result.current.onOpenChange(1, true);
      result.current.onOpenChange(0, true);
      result.current.onOpenChange(2, true);
      result.current.onOpenChange(0, false);
    });

    act(() => result.current.closeRow(2));
    expect(result.current.openRowsIndices).toEqual(new Set([1]));

    act(() => result.current.closeRow(1));
    expect(result.current.openRowsIndices.size).toBe(0);
  });

  it('tåler gjentatt åpning og lukking av samme rad', () => {
    const { result } = renderHook(() => useOpenRows());

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

  it('beholder brukerens valg ved ny render', () => {
    const { result, rerender } = renderHook(() => useOpenRows());

    act(() => {
      result.current.onOpenChange(0, true);
      result.current.onOpenChange(1, true);
    });

    act(() => result.current.closeRow(0));
    rerender();

    expect(result.current.openRowsIndices).toEqual(new Set([1]));
  });
});
