import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './contentWithTooltip.module.css';

export interface ContentWithTooltipProps {
  tooltipText: string;
  tooltipDirectionRight?: boolean;
  tooltipClassName?: string;
  children?: React.ReactNode;
  inline?: boolean;
}

const ContentWithTooltip = ({
  tooltipText,
  tooltipDirectionRight,
  tooltipClassName,
  children,
  inline,
}: ContentWithTooltipProps): ReactElement<any> => {
  const tooltipCls = classnames(styles.contentWithTooltip__tooltipText, {
    [styles['contentWithTooltip__tooltipText--right']]: tooltipDirectionRight,
  });
  const containerCls = classnames(styles.contentWithTooltip, 'contentWithTooltip', {
    [styles['contentWithTooltip--inline']]: inline,
  });
  return (
    <div className={containerCls}>
      {children}
      <div className={tooltipClassName || tooltipCls}>{tooltipText}</div>
    </div>
  );
};

export default ContentWithTooltip;
