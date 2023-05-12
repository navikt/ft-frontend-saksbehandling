import React, { FunctionComponent, useRef, useEffect } from 'react';
import classnames from 'classnames/bind';

import styles from './tabMeny.module.css';

const classNames = classnames.bind(styles);

export type SvgProps = {
  className: any;
  alt: string;
};

interface OwnProps {
  tabs: {
    getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => React.ReactNode;
    tooltip: string;
    isActive: boolean;
    isDisabled: boolean;
  }[];
  onClick: (index: number) => void;
}

const TabMeny: FunctionComponent<OwnProps> = ({ tabs, onClick }) => {
  const tabRef = useRef<HTMLButtonElement[] | null>([]);

  useEffect(() => {
    if (tabRef.current) {
      tabRef.current = tabRef.current.slice(0, tabs.length);
    }
  }, [tabs]);

  return (
    <div className={styles.row}>
      {tabs.map((tab, index) => (
        <div key={tab.tooltip} className={styles.col}>
          <button
            className={classNames(styles.button, { active: tab.isActive })}
            type="button"
            onClick={() => {
              if (tabRef.current && tabRef.current[index]) {
                tabRef.current[index].focus();
              }
              onClick(index);
            }}
            data-tooltip={tab.tooltip}
            data-testid={tab.tooltip}
            disabled={tab.isDisabled}
            ref={el => {
              if (tabRef.current && el) {
                tabRef.current[index] = el;
              }
            }}
          >
            {tab.getSvg(tab.isActive, tab.isDisabled, {
              className: styles.tabImage,
              alt: tab.tooltip,
            })}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TabMeny;
