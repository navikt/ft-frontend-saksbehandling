import { FormattedMessage } from 'react-intl';

import type { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { EditedIcon, LabeledValue } from '@navikt/ft-ui-komponenter';

interface Props {
  avklaringsbehov: BeregningAvklaringsbehov | undefined;
}

/**
 * Visning av begrunnelse for aksjonspunkt 5050 som ble avviklet i 2019.
 * Vil ikke lenger oppstå men vi må kunne vise begrunnelsen som ble
 * oppgitt av saksbehandler og en kort beskrivelse av aksjonspunktet.
 */
export const GraderingUtenBGReadOnly = ({ avklaringsbehov }: Props) => {
  if (!avklaringsbehov?.begrunnelse) {
    return null;
  }
  return (
    <LabeledValue
      size="small"
      label={<FormattedMessage id="GraderingUtenBGReadOnly.Label" />}
      value={
        <>
          {avklaringsbehov.begrunnelse} <EditedIcon />
        </>
      }
    />
  );
};
