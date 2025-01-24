import { ReactNode } from 'react';

import classnames from 'classnames/bind';

import styles from './tableColumn.module.css';

const classNames = classnames.bind(styles);

export interface Props {
  children?: number | string | ReactNode;
  className?: string;
  hidden?: boolean;
  colspanAll?: boolean;
}

/**
 * TableColumn
 *
 * Presentasjonskomponent. Tabellkolonne som brukes av komponenten Table.
 *
 * @deprecated Bruk heller tabellkomponent fra https://aksel.nav.no/komponenter/core/table
 */
export const TableColumn = ({ children = '', className, hidden = false, colspanAll = false }: Props) => {
  if (hidden) {
    return null;
  }
  return (
    <td className={classNames(styles.columnStyle, className)} colSpan={colspanAll ? 100 : undefined}>
      {children}
    </td>
  );
};
