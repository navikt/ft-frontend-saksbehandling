import React, { ReactNode, FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { Panel } from '@navikt/ds-react';

import styles from './borderBox.module.css';

const classNames = classnames.bind(styles);

export interface OwnProps {
  error?: boolean;
  className?: string;
  children?: ReactNode | ReactNode[];
}

/*
 * BorderBox
 *
 * Valideringskomponent. Visar en box kring noe som skall fikses.
 */
const BorderBox: FunctionComponent<OwnProps> = ({ error = false, className, children }) => (
  <Panel border className={classNames('borderbox', { error }, className)}>
    {children}
  </Panel>
);

export default BorderBox;
