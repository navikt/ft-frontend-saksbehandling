import { act, renderHook } from '@testing-library/react';

import { useDirtyRows } from './useDirtyRows';

describe('useDirtyRows', () => {
  it('starter uten ulagrede rader', () => {
    const { result } = renderHook(() => useDirtyRows());

    expect(result.current.hasDirtyRows).toBe(false);
  });

  it('tåler gjentatte meldinger om samme rad og rydding av en annen rad', () => {
    const { result } = renderHook(() => useDirtyRows());

    act(() => {
      result.current.onDirtyChange(2, true);
      result.current.onDirtyChange(2, true);
      result.current.onDirtyChange(3, false);
    });
    expect(result.current.hasDirtyRows).toBe(true);

    act(() => result.current.onDirtyChange(2, false));
    expect(result.current.hasDirtyRows).toBe(false);

    act(() => result.current.onDirtyChange(2, false));
    expect(result.current.hasDirtyRows).toBe(false);
  });

  it('beholder samme callback når dirty-status endres og hooken rendres på nytt', () => {
    const { result, rerender } = renderHook(() => useDirtyRows());
    const onDirtyChange = result.current.onDirtyChange;

    act(() => onDirtyChange(0, true));
    expect(result.current.onDirtyChange).toBe(onDirtyChange);

    rerender();
    expect(result.current.onDirtyChange).toBe(onDirtyChange);
    expect(result.current.hasDirtyRows).toBe(true);
  });
});
