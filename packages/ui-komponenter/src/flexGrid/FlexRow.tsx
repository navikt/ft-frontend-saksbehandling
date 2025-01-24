import classnames from 'classnames/bind';
import { ReactNode } from 'react';

import styles from './flexRow.module.css';

const classNames = classnames.bind(styles);

export interface Props {
  children: ReactNode | ReactNode[];
  /**
   * spaceBetween: aktiverer { justify-content: space-between } på raden. Default er false.
   */
  spaceBetween?: boolean;
  alignItemsToBaseline?: boolean;
  alignItemsToFlexEnd?: boolean;
  wrap?: boolean;
  className?: string;
}

/**
 * @deprecated Bruk heller HStack og VStack fra https://aksel.nav.no/komponenter
 */
export const FlexRow = ({
  children,
  spaceBetween = false,
  alignItemsToBaseline = false,
  alignItemsToFlexEnd = false,
  wrap = false,
  className,
}: Props) => (
  <div
    className={classNames(
      'flexRow',
      { spaceBetween },
      { alignItemsToBaseline },
      { alignItemsToFlexEnd },
      { wrap },
      className,
    )}
  >
    {children}
  </div>
);
