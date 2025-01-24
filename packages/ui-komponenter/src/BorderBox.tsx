import { ReactNode } from 'react';

import { Panel } from '@navikt/ds-react';
import classnames from 'classnames/bind';

import styles from './borderBox.module.css';

const classNames = classnames.bind(styles);

export interface Props {
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
  <Panel border className={classNames('borderbox', { error }, className)}>
    {children}
  </Panel>
);
