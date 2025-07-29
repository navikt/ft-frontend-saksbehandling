import { useEffect, useState } from 'react';

import { KeyVerticalFillIcon, KeyVerticalIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  onClick?: (overstyrt: boolean) => void;
  erOverstyrt?: boolean;
}

export const OverstyringKnapp = ({ onClick = () => undefined, erOverstyrt = false }: Props) => {
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
    <Button
      variant={isOverstyrt ? 'tertiary-neutral' : 'tertiary'}
      data-testid="overstyringsknapp"
      type="button"
      size="small"
      onClick={setOverstyrtFn}
      aria-disabled={erOverstyrt}
      disabled={erOverstyrt}
      icon={
        isOverstyrt ? (
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
        )
      }
    />
  );
};
