import { renderHook } from '@testing-library/react';
import { expect } from 'vitest';

import { defaultStorageKey, useStorageToggle } from './useStorageToggle';

describe('useStorageToggle', () => {
  it('skal gi false for default oppførsel uten verdi i default storage', () => {
    const { result } = renderHook(() => useStorageToggle());
    expect(result.current).toBe(false);
  });

  it('skal gi true når default key er satt i default storage', () => {
    localStorage.setItem(defaultStorageKey, 'true');
    const { result } = renderHook(() => useStorageToggle());
    expect(result.current).toBe(true);
  });

  describe.each([
    ['localStorage', window.localStorage],
    ['sessionStorage', window.sessionStorage],
  ])('med %s', (name, storageArea) => {
    beforeEach(() => {
      storageArea.clear();
    });

    it(`skal gi false når default key ikke er satt i ${name}`, () => {
      const { result } = renderHook(() => useStorageToggle({ storageArea }));
      expect(result.current).toBe(false);
    });

    it(`skal gi true når default key er satt i ${name}`, () => {
      storageArea.setItem(defaultStorageKey, 'true');
      const { result } = renderHook(() => useStorageToggle({ storageArea }));
      expect(result.current).toBe(true);
    });

    it(`skal gi false når default key er satt til false i ${name}`, () => {
      storageArea.setItem(defaultStorageKey, 'false');
      const { result } = renderHook(() => useStorageToggle({ storageArea }));
      expect(result.current).toBe(false);
    });

    it(`skal gi false når default key er satt til noe annet enn true i ${name}`, () => {
      storageArea.setItem(defaultStorageKey, 'hei');
      const { result } = renderHook(() => useStorageToggle({ storageArea }));
      expect(result.current).toBe(false);
    });

    it(`skal gi true når custom key er satt til true i ${name}`, () => {
      storageArea.setItem('devmode', 'true');
      const { result } = renderHook(() => useStorageToggle({ key: 'devmode', storageArea }));
      expect(result.current).toBe(true);
    });
  });
});
