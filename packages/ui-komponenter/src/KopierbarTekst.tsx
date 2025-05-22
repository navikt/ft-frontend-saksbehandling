import { ReactElement, useState } from 'react';

import { Tooltip } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type Props = { tekst: string | undefined; children?: ReactElement | string };

export const KopierbarTekst = ({ tekst, children }: Props) => {
  const kopierTekst = intl.formatMessage({ id: 'KopierbarTekst.Kopier' });
  const kopiertTekst = intl.formatMessage({ id: 'KopierbarTekst.Kopiert' });

  const [tooltipText, setTooltipText] = useState(kopierTekst);

  if (!tekst) {
    return children;
  }
  const copy = async (): Promise<void> => {
    await navigator.clipboard.writeText(tekst);
    setTooltipText(kopiertTekst);

    setTimeout(() => {
      setTooltipText(kopierTekst);
    }, 1000);
  };
  return (
    <Tooltip content={tooltipText}>
      <span aria-hidden="true" onClick={copy}>
        {children ?? tekst}
      </span>
    </Tooltip>
  );
};
