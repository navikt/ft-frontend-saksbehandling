import { ReactNode } from 'react';

import { HStack } from '@navikt/ds-react';

import styles from './horizontalBox.module.css';

interface HorizontalBoxProps {
  borderTop?: boolean;
  doubleBorderBottom?: boolean;
  borderBottom?: boolean;
  children: ReactNode;
}

export const HorizontalBox = ({
  children,
  borderTop = false,
  borderBottom = false,
  doubleBorderBottom = false,
}: HorizontalBoxProps) => {
  return (
    <HStack
      wrap={false}
      justify="space-between"
      className={`${styles.horizontalBox} ${borderTop && styles.borderTop} ${borderBottom && styles.borderBottom} ${doubleBorderBottom && styles.doubleBorder}`}
    >
      {children}
    </HStack>
  );
};
