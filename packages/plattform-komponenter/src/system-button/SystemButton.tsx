import { MenuGridIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';
import { bemUtils } from '@navikt/ft-utils';
import React from 'react';
import styles from './systemButton.module.css';

const systemsCls = bemUtils('systems');

export interface SystemButtonProps {
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
  isToggled?: boolean;
}

export const SystemButton = ({ onClick, isToggled }: SystemButtonProps) => (
  <div className={styles[systemsCls.block]}>
    <Button
      variant="tertiary"
      icon={<MenuGridIcon aria-hidden />}
      onClick={onClick}
      className={styles[systemsCls.element('button')]}
      aria-haspopup="dialog"
      aria-expanded={isToggled}
    >
      <span className="navds-sr-only">Systemer</span>
    </Button>
  </div>
);
