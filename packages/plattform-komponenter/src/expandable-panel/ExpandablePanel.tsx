import { bemUtils } from '@navikt/ft-utils';
import React from 'react';
import { Collapse } from 'react-collapse';
import styles from './expandablePanelStyles.module.css';

const expandablePanelCls = bemUtils('expandablePanel');

type ExpandablePanelTheme = 'success' | 'warn' | 'neutral';

export interface ExpandablePanelProps {
  theme?: ExpandablePanelTheme;
  children: React.ReactNode | React.ReactNode[];
  renderHeader: () => React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const ExpandablePanel: React.FunctionComponent<ExpandablePanelProps> = ({
  renderHeader,
  children,
  theme = 'neutral',
  isOpen,
  onClick,
}) => (
  <div className={styles[expandablePanelCls.block]}>
    <div className={`${styles.expandablePanel__themeBorder} ${styles[`expandablePanel__themeBorder--${theme}`]}`} />
    <div className={styles[expandablePanelCls.element('contentWrapper')]}>
      <button className={styles[expandablePanelCls.element('button')]} type="button" onClick={onClick}>
        {renderHeader()}
      </button>
      {/* @ts-ignore Fiks */}
      <Collapse isOpened={isOpen}>
        <div className={styles[expandablePanelCls.element('expandedContent')]}>{children}</div>
      </Collapse>
    </div>
  </div>
);

export default ExpandablePanel;
