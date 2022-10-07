import { bemUtils } from '@navikt/ft-utils';
import React from 'react';
import { Button } from '@navikt/ds-react';
import { SystemFilled } from '@navikt/ds-icons';
import styles from './systemButton.less';

const systemsCls = bemUtils('systems');

export interface SystemButtonProps {
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
  isToggled?: boolean;
}

const SystemButton: React.FunctionComponent<SystemButtonProps> = ({ onClick, isToggled }) => (
  <div className={styles[systemsCls.block]}>
    <Button
      variant="tertiary"
      icon={<SystemFilled aria-hidden />}
      onClick={onClick}
      className={styles[systemsCls.element('button')]}
      aria-haspopup="dialog"
      aria-expanded={isToggled}
    />
  </div>
);

export default SystemButton;
