import { useCallback, useState } from 'react';

// Holder oversikt over rader med ulagrede endringer.
export const useDirtyRows = () => {
  const [dirtyRowsIndices, setDirtyRowsIndices] = useState(() => new Set<number>());

  const onDirtyChange = useCallback((index: number, dirty: boolean) => {
    setDirtyRowsIndices(current => {
      if (current.has(index) === dirty) {
        return current;
      }
      const next = new Set(current);
      if (dirty) {
        next.add(index);
      } else {
        next.delete(index);
      }
      return next;
    });
  }, []);

  return { hasDirtyRows: dirtyRowsIndices.size > 0, onDirtyChange };
};
