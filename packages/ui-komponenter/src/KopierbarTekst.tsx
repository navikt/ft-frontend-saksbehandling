import { type ReactElement, useState } from 'react';

import { Tooltip } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import style from './kopierbarTekst.module.css';

import messages from '../i18n/nb_NO.json';
const intl = createIntl(messages);

type Props = { tekst: string | undefined; children?: ReactElement | string };

export const KopierbarTekst = ({ tekst, children }: Props) => {
  const [skalViseKopiert, setSkalViseKopiert] = useState(false);

  if (!tekst) {
    return children;
  }
  const copy = async (e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>): Promise<void> => {
    e.stopPropagation();
    await navigator.clipboard.writeText(tekst);
    setSkalViseKopiert(true);

    setTimeout(() => {
      setSkalViseKopiert(false);
    }, 1000);
  };

  return (
    <Tooltip content={intl.formatMessage({ id: skalViseKopiert ? 'KopierbarTekst.Kopiert' : 'KopierbarTekst.Kopier' })}>
      <span role="button" tabIndex={0} onClick={copy} onKeyDown={copy} className={style.kopierbarTekst}>
        {children ?? tekst}
      </span>
    </Tooltip>
  );
};
