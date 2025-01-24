import { ReactNode } from 'react';

import classnames from 'classnames/bind';

import styles from './flexColumn.module.css';

const classNames = classnames.bind(styles);

interface Props {
  children?: ReactNode | ReactNode[];
  className?: string;
}

/**
 * @deprecated Bruk heller HStack og VStack fra https://aksel.nav.no/komponenter
 */
export const FlexColumn = ({ children, className }: Props) => (
  <div className={classNames('flexColumnNew', className)}>{children}</div>
);
