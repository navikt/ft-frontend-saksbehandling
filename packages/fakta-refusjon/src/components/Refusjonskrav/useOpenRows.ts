import { useCallback, useState } from 'react';

import type { RefusjonskravFormRad } from './formValues';

// Holder oversikt over åpne rader og åpner rader uten utfall ved oppstart.
export const useOpenRows = (initialRows: readonly Pick<RefusjonskravFormRad, 'utfall'>[]) => {
  const [openRowsIndices, setOpenRowsIndices] = useState(
    () => new Set(initialRows.flatMap((rad, index) => (rad.utfall ? [] : index))),
  );

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
