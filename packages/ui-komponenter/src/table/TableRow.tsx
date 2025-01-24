import React, { ReactNode } from 'react';

import classnames from 'classnames/bind';

import styles from './tableRow.module.css';

const classNames = classnames.bind(styles);

const createMouseDownHandler =
  <ID, MODEL>(onMouseDown?: (e: React.MouseEvent, id?: ID, model?: MODEL) => void, id?: ID, model?: MODEL) =>
  (e: React.MouseEvent): void => {
    if (onMouseDown && e.button === 0) {
      onMouseDown(e, id, model);
    }
  };

// @ts-expect-error Fiks
const findNearestRow = (element: EventTarget<HTMLElement>) =>
  element.tagName === 'TR' ? element : findNearestRow(element.parentElement);

const setFocus = (e: React.KeyboardEvent, isNext: boolean): void => {
  const row = findNearestRow(e.target);
  const otherRow = isNext ? row.nextSibling : row.previousSibling;
  const element = otherRow || row;

  if (element) {
    element.focus();
    e.preventDefault();
  }
};

const createKeyDownHandler =
  <ID, MODEL>(
    useMultiselect: boolean,
    onKeyDown?: (e: React.KeyboardEvent, id?: ID, model?: MODEL) => void,
    id?: ID,
    model?: MODEL,
  ) =>
  (e: React.KeyboardEvent): void => {
    if (e.key === 'ArrowDown') {
      setFocus(e, true);
    } else if (e.key === 'ArrowUp') {
      setFocus(e, false);
      // @ts-expect-error Fiks
    } else if (onKeyDown && e.target.tagName !== 'TD' && (e.key === 'Enter' || e.key === ' ')) {
      onKeyDown(e, id, model);
      e.preventDefault();
      // @ts-expect-error Fiks
    } else if (useMultiselect && onKeyDown && e.target.tagName !== 'TD' && e.key === 'Shift') {
      onKeyDown(e);
      e.preventDefault();
    }
  };

const createKeyUpHandler =
  <ID, MODEL>(onKeyDown?: (e: React.KeyboardEvent, id?: ID, model?: MODEL) => void) =>
  (e: React.KeyboardEvent): void => {
    // @ts-expect-error Fiks
    if (onKeyDown && e.target.tagName !== 'TD' && e.key === 'Shift') {
      onKeyDown(e);
      e.preventDefault();
    }
  };

export interface OwnProps<ID, MODEL = void> {
  id?: ID;
  model?: MODEL;
  isHeader?: boolean;
  hasGrayHeader?: boolean;
  onMouseDown?: (e: React.MouseEvent, id?: ID, model?: MODEL) => void;
  onKeyDown?: (e: React.KeyboardEvent, id?: ID, model?: MODEL) => void;
  children: ReactNode | ReactNode[];
  noHover?: boolean;
  isSelected?: boolean;
  isBold?: boolean;
  isDashedBottomBorder?: boolean;
  isSolidBottomBorder?: boolean;
  isApLeftBorder?: boolean;
  className?: string;
  useMultiselect?: boolean;
  hasNoBottomBorder?: boolean;
}

/**
 * TableRow
 *
 * Presentasjonskomponent. Tabellrad som brukes av komponenten Table.
 *
 * @deprecated Bruk heller tabellkomponent fra https://aksel.nav.no/komponenter/core/table
 */
export const TableRow = <ID, MODEL = void>({
  id,
  model,
  isHeader = false,
  hasGrayHeader = false,
  onMouseDown,
  onKeyDown,
  children,
  noHover = false,
  isSelected = false,
  isBold = false,
  isDashedBottomBorder = false,
  isSolidBottomBorder = false,
  isApLeftBorder = false,
  className,
  useMultiselect = false,
  hasNoBottomBorder = false,
}: OwnProps<ID, MODEL>) => (
  <tr
    className={classNames(className, styles.row, {
      rowHeader: isHeader,
      grayHeader: hasGrayHeader,
      rowContent: !isHeader && !noHover,
      selected: isSelected,
      harHover: !noHover,
      bold: isBold,
      dashedBottomBorder: isDashedBottomBorder,
      solidBottomBorder: isSolidBottomBorder,
      noBottomBorder: hasNoBottomBorder,
      apLeftBorder: isApLeftBorder,
    })}
    onMouseDown={createMouseDownHandler<ID, MODEL>(onMouseDown, id, model)}
    onKeyDown={createKeyDownHandler<ID, MODEL>(useMultiselect, onKeyDown, id, model)}
    onKeyUp={useMultiselect ? createKeyUpHandler<ID, MODEL>(onKeyDown) : undefined}
    tabIndex={0}
  >
    {children}
  </tr>
);
