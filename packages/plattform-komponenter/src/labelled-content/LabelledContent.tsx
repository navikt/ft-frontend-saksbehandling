import React from 'react';

import { Label } from '@navikt/ds-react';
import classNames from 'classnames';

import styles from './labelledContent.module.css';

export interface LabelledContentProps {
  label: string | React.ReactNode;
  content: React.ReactNode;
  labelTag?: React.ElementType;
  indentContent?: boolean;
}

export const LabelledContent = ({ label, content, labelTag, indentContent }: LabelledContentProps) => {
  const cl = classNames(styles.labelledContent__content, {
    [styles.labelledContent__indentation]: indentContent,
  });
  return (
    <div className={styles.labelledContent}>
      <Label size="small" className={styles.labelledContent__label} as={labelTag || 'p'}>
        {label}
      </Label>
      <div className={cl}>
        <div>{content}</div>
      </div>
    </div>
  );
};
