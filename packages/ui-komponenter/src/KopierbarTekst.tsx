import { type ReactElement, useState } from 'react';

import { Tooltip } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type Props = { tekst: string | undefined; children?: ReactElement | string };

export const KopierbarTekst = ({ tekst, children }: Props) => {
  const [skalViseKopiert, setSkalViseKopiert] = useState(false);

  if (!tekst) {
    return children;
  }
  const copy: React.MouseEventHandler<HTMLSpanElement> = async (e): Promise<void> => {
    e.stopPropagation();
    await navigator.clipboard.writeText(tekst);
    setSkalViseKopiert(true);

    setTimeout(() => {
      setSkalViseKopiert(false);
    }, 1000);
  };
  return (
    <Tooltip content={intl.formatMessage({ id: skalViseKopiert ? 'KopierbarTekst.Kopiert' : 'KopierbarTekst.Kopier' })}>
      <span role="button" tabIndex={0} onClick={copy} onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          copy(e as unknown as React.MouseEvent<HTMLSpanElement>);
        }
      }}>
        {children ?? tekst}
      </span>
    </Tooltip>
  );
};
