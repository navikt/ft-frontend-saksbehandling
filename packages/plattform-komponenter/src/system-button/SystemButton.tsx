import { bemUtils } from '@navikt/ft-utils';
import React from 'react';
import { Systemerknapp } from 'nav-frontend-ikonknapper';
import styles from './systemButton.less';

const systemsCls = bemUtils('systems');

export interface SystemButtonProps {
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
    isToggled?: boolean;
}

const SystemButton: React.FunctionComponent<SystemButtonProps> = ({ onClick, isToggled }) => (
  <div className={styles[systemsCls.block]}>
    <Systemerknapp
      onClick={onClick}
      className={styles[systemsCls.element('button')]}
      aria-haspopup="dialog"
      aria-expanded={isToggled}
    />
  </div>
);

export default SystemButton;
