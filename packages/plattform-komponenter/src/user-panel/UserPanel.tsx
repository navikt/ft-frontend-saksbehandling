import React from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { BodyShort } from '@navikt/ds-react';

import { bemUtils } from '@navikt/ft-utils';

import styles from './userPanel.module.css';

const userCls = bemUtils('user');

export interface UserPanelProps {
  name: string;
  unit?: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  isToggled?: boolean;
}

export const UserPanel: React.FunctionComponent<UserPanelProps> = ({ name, unit, onClick, isToggled }) => {
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
          <ChevronUpIcon className={styles[userCls.element('chevron')]} />
        ) : (
          <ChevronDownIcon className={styles[userCls.element('chevron')]} />
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
