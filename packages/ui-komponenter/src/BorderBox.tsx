import { type ReactNode } from 'react';

import { Box } from '@navikt/ds-react';

import { classNames } from '@navikt/ft-utils';

import styles from './borderBox.module.css';

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
  <Box padding="space-16" className={classNames(styles.borderbox, error && styles.error, className)}>
    {children}
  </Box>
);
