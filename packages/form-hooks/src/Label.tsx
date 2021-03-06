import React, { ReactElement, ElementType, FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { Undertekst } from 'nav-frontend-typografi';

import styles from './label.less';

const classNames = classnames.bind(styles);

export type LabelType = string | ReactElement;

interface OwnProps {
  input?: LabelType;
  typographyElement?: ElementType;
  readOnly?: boolean;
}

const Label: FunctionComponent<OwnProps> = ({ input, readOnly = false, typographyElement: TypoElem = Undertekst }) => {
  if (!input) {
    return null;
  }

  return (
    <span className={classNames('labelWrapper', { readOnly })}>
      {/* @ts-ignore */}
      <TypoElem tag="span" className={styles.label}>
        {input}
      </TypoElem>
    </span>
  );
};

export default Label;
