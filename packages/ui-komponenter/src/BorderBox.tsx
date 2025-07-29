import { type ReactNode } from 'react';

import { Box } from '@navikt/ds-react';
import classnames from 'classnames/bind';

import styles from './borderBox.module.css';

const classNames = classnames.bind(styles);

interface Props {
  error?: boolean;
  className?: string;
  children?: ReactNode | ReactNode[];
}

/*
 * BorderBox
 *
 * Valideringskomponent. Visar en box kring noe som skall fikses.
 */
export const BorderBox = ({ error = false, className, children }: Props) => (
  <Box padding="4" className={classNames('borderbox', { error }, className)}>
    {children}
  </Box>
);
