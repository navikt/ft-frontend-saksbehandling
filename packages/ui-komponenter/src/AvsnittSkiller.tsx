import React, { FunctionComponent } from 'react';

import classnames from 'classnames/bind';
import VerticalSpacer from './VerticalSpacer';
import styles from './avsnittSkiller.less';

const classNames = classnames.bind(styles);

type OwnProps = {
  spaceUnder?: boolean;
  spaceAbove?: boolean;
  leftPanel?: boolean;
  rightPanel?: boolean;
  dividerParagraf?: boolean;
  className?: string;
};

const AvsnittSkiller: FunctionComponent<OwnProps> = ({
  spaceUnder,
  spaceAbove,
  leftPanel,
  rightPanel,
  dividerParagraf,
  className,
}) => (
  <>
    {spaceAbove && <VerticalSpacer thirtyTwoPx />}
    <div
      className={classNames(className, {
        leftPanel,
        rightPanel,
      })}
    >
      <div className={dividerParagraf ? styles.dividerParagraf : styles.divider} />
    </div>
    {spaceUnder && <VerticalSpacer thirtyTwoPx />}
  </>
);
AvsnittSkiller.defaultProps = {
  spaceUnder: false,
  spaceAbove: false,
  leftPanel: false,
  rightPanel: false,
  dividerParagraf: false,
};
export default AvsnittSkiller;
