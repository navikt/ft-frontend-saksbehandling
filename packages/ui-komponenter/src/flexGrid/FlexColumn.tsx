import React, { ReactNode, FunctionComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './flexColumn.module.css';

const classNames = classnames.bind(styles);

export interface OwnProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}

/**
 * @deprecated Bruk heller HStack og VStack fra https://aksel.nav.no/komponenter
 */
const FlexColumn: FunctionComponent<OwnProps> = ({ children, className }) => (
  <div className={classNames('flexColumnNew', className)}>{children}</div>
);

export default FlexColumn;
