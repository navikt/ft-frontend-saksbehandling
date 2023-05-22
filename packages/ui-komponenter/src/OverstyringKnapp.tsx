import React, { FunctionComponent, useEffect, useState } from 'react';
import { KeyVerticalIcon, KeyVerticalFillIcon } from '@navikt/aksel-icons';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

import styles from './overstyringKnapp.module.css';

const intl = createIntl(messages);

interface OwnProps {
  onClick?: (overstyrt: boolean) => void;
  erOverstyrt?: boolean;
}

/*
 * OverstyringKnapp
 */
const OverstyringKnapp: FunctionComponent<OwnProps> = ({ onClick = () => undefined, erOverstyrt = false }) => {
  const [isOverstyrt, setOverstyrt] = useState(erOverstyrt);
  const setOverstyrtFn = () => {
    if (!isOverstyrt) {
      setOverstyrt(true);
      onClick(true);
    }
  };

  useEffect(() => {
    setOverstyrt(erOverstyrt);
  }, [erOverstyrt]);

  return (
    <button
      className={styles.button}
      data-testid="overstyringsknapp"
      type="button"
      onClick={setOverstyrtFn}
      aria-disabled={erOverstyrt}
    >
      {isOverstyrt ? (
        <KeyVerticalFillIcon
          aria-hidden
          color="var(--a-gray-300)"
          height={25}
          width={25}
          title={intl.formatMessage({ id: 'OverstyringKnapp.HarOverstyrt' })}
        />
      ) : (
        <KeyVerticalIcon
          aria-hidden
          color="var(--a-blue-400)"
          height={25}
          width={25}
          title={intl.formatMessage({ id: 'OverstyringKnapp.Overstyring' })}
        />
      )}
    </button>
  );
};

export default OverstyringKnapp;
