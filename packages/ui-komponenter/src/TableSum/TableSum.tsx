import type { ComponentProps } from 'react';

import { classNames } from '@navikt/ft-utils';

import styles from './tableSum.module.css';

interface Props extends ComponentProps<'tfoot'> {
  bottomBorder?: 'single' | 'double';
  withSubtotals?: boolean;
}

export const TableSum = ({ bottomBorder = 'single', withSubtotals = false, className, ...rest }: Props) => (
  <tfoot
    {...rest}
    className={classNames(styles.tableSum, className)}
    data-bottom-border={bottomBorder}
    data-with-subtotals={withSubtotals}
  />
);
