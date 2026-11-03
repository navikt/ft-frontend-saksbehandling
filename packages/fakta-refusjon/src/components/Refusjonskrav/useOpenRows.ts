import { useCallback, useState } from 'react';

export const useOpenRows = () => {
  const [openRowsIndices, setOpenRowsIndices] = useState(() => new Set<number>());

  const onOpenChange = useCallback((index: number, open: boolean) => {
    setOpenRowsIndices(current => {
      if (current.has(index) === open) {
        return current;
      }
      const next = new Set(current);
      if (open) {
        next.add(index);
      } else {
        next.delete(index);
      }
      return next;
    });
  }, []);

  const closeRow = useCallback((index: number) => onOpenChange(index, false), [onOpenChange]);

  return { openRowsIndices, onOpenChange, closeRow };
};
