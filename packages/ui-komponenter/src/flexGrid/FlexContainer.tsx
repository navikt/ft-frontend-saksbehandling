import React, { ReactNode, FunctionComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './flexContainer.module.css';

const classNames = classnames.bind(styles);

export interface OwnProps {
  children?: ReactNode | ReactNode[];
  wrap?: boolean;
  fullHeight?: boolean;
}

/**
 * @deprecated Bruk heller HStack og VStack fra https://aksel.nav.no/komponenter
 */
const FlexContainer: FunctionComponent<OwnProps> = ({ children, wrap = false, fullHeight = false }) => (
  <div className={classNames('flexContainer', 'fluid', { flexWrap: wrap, fullHeight })}>{children}</div>
);

export default FlexContainer;
