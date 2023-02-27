import React from 'react';
import { bemUtils } from '@navikt/ft-utils';
import { Collapse, Expand } from '@navikt/ds-icons/esm';

import { BodyShort } from '@navikt/ds-react/esm';
import styles from './userPanel.module.css';

const userCls = bemUtils('user');

interface UserPanelProps {
  name: string;
  unit?: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  isToggled?: boolean;
}

const UserPanel: React.FunctionComponent<UserPanelProps> = ({ name, unit, onClick, isToggled }) => {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        type="button"
        className={styles[userCls.block]}
        aria-haspopup="dialog"
        aria-expanded={isToggled}
      >
        <span>
          <BodyShort size="small" as="span" className={styles[userCls.element('name')]}>
            {name}
          </BodyShort>
          {unit && (
            <BodyShort size="small" as="span" className={styles[userCls.element('unit')]}>
              {unit}
            </BodyShort>
          )}
        </span>
        {isToggled ? (
          <Collapse className={styles[userCls.element('chevron')]} />
        ) : (
          <Expand className={styles[userCls.element('chevron')]} />
        )}
      </button>
    );
  }
  return (
    <div className={styles[userCls.block]}>
      <BodyShort size="small" className={styles[userCls.element('name')]}>
        {name}
      </BodyShort>
      {unit && (
        <BodyShort size="small" className={styles[userCls.element('unit')]}>
          {unit}
        </BodyShort>
      )}
    </div>
  );
};

export default UserPanel;
