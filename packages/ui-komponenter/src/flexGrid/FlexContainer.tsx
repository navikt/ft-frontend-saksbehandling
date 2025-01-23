import classnames from 'classnames/bind';
import { ReactNode } from 'react';

import styles from './flexContainer.module.css';

const classNames = classnames.bind(styles);

export interface Props {
  children?: ReactNode | ReactNode[];
  wrap?: boolean;
  fullHeight?: boolean;
}

/**
 * @deprecated Bruk heller HStack og VStack fra https://aksel.nav.no/komponenter
 */
export const FlexContainer = ({ children, wrap = false, fullHeight = false }: Props) => (
  <div className={classNames('flexContainer', 'fluid', { flexWrap: wrap, fullHeight })}>{children}</div>
);
