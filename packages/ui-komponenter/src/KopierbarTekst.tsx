import { type ReactElement, useState } from 'react';

import { Tooltip } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import style from './kopierbarTekst.module.css';

import messages from '../i18n/nb_NO.json';
const intl = createIntl(messages);

type Props = { tekst: string | undefined; children?: ReactElement | string };

/**
 * MERK: Endringer i aria-attributter, rolle og tastaturhåndtering her må testes med
 * skjermleser, ikke bare med automatiske tester.
 * Se FAGSYSTEM-443070 (og FAGSYSTEM-431184): beløpet – ikke tooltip-hintet – skal
 * være knappens tilgjengelige navn.
 */
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

  const onKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      void copy(e);
    }
  };

  return (
    <Tooltip
      describesChild
      content={intl.formatMessage({ id: skalViseKopiert ? 'KopierbarTekst.Kopiert' : 'KopierbarTekst.Kopier' })}
    >
      <span role="button" tabIndex={0} onClick={copy} onKeyDown={onKeyDown} className={style.kopierbarTekst}>
        {children ?? tekst}
      </span>
    </Tooltip>
  );
};
