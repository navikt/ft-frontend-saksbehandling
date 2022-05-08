import React, { FunctionComponent, useEffect, useCallback, useState } from 'react';

import { createIntl } from '@navikt/ft-utils';

import Image from './Image';
import keyImage from './images/key-1-rotert.svg';
import keyUtgraetImage from './images/key-1-rotert-utgraet.svg';

import messages from '../i18n/nb_NO.json';

import styles from './overstyringKnapp.less';

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
  const setOverstyrtFn = useCallback(() => {
    if (!isOverstyrt) {
      setOverstyrt(true);
      onClick(true);
    }
  }, []);

  useEffect(() => {
    setOverstyrt(erOverstyrt);
  }, [erOverstyrt]);

  const image = (
    <Image
      className={isOverstyrt ? styles.keyWithoutCursor : styles.key}
      src={isOverstyrt ? keyUtgraetImage : keyImage}
      tooltip={intl.formatMessage({ id: 'OverstyringKnapp.Overstyring' })}
      alt={intl.formatMessage({ id: erOverstyrt ? 'OverstyringKnapp.HarOverstyrt' : 'OverstyringKnapp.Overstyring' })}
    />
  );

  if (erOverstyrt) {
    return image;
  }

  return (
    <button data-testid="overstyringsknapp" className={styles.button} type="button" onClick={setOverstyrtFn}>
      {image}
    </button>
  );
};

export default OverstyringKnapp;
