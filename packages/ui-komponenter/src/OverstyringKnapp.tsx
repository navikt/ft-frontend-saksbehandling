import React, { FunctionComponent, useEffect, useState } from 'react';

import { createIntl } from '@navikt/ft-utils';

import Image from './Image';
import keyImage from './images/key-1-rotert.svg';
import keyUtgraetImage from './images/key-1-rotert-utgraet.svg';

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
const OverstyringKnapp: FunctionComponent<OwnProps> = ({
  onClick = () => undefined,
  erOverstyrt = false,
  beregningsgrunnlagIndeks,
}) => {
  console.log(beregningsgrunnlagIndeks, erOverstyrt);
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
      data-testid="overstyringsknapp"
      className={styles.button}
      type="button"
      onClick={setOverstyrtFn}
      aria-disabled={erOverstyrt}
    >
      <Image
        className={isOverstyrt ? styles.keyWithoutCursor : styles.key}
        src={isOverstyrt ? keyUtgraetImage : keyImage}
        tooltip={intl.formatMessage({ id: 'OverstyringKnapp.Overstyring' })}
        alt={intl.formatMessage({ id: erOverstyrt ? 'OverstyringKnapp.HarOverstyrt' : 'OverstyringKnapp.Overstyring' })}
      />
    </button>
  );
};

export default OverstyringKnapp;
