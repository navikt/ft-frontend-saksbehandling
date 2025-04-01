import React from 'react';

import styles from './linkButton.module.css';

export interface LinkButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

/**
 * @deprecated Bruk heller Link frå Aksel https://aksel.nav.no/komponenter/core/link
 */
export const LinkButton = ({ className, onClick, children }: LinkButtonProps) => {
  const cls = `${className || ''} ${styles.linkButton}`;
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
};
