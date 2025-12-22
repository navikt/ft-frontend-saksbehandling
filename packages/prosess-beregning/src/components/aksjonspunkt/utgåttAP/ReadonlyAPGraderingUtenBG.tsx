import { FormattedMessage } from 'react-intl';

import type { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { AksjonspunktBoks, LabeledValue } from '@navikt/ft-ui-komponenter';

interface Props {
  avklaringsbehov: BeregningAvklaringsbehov | undefined;
}

/**
 * Visning av begrunnelse for aksjonspunkt 5050 som ble avviklet i 2019.
 * Vil ikke lenger oppstå men vi må kunne vise begrunnelsen som ble
 * oppgitt av saksbehandler og en kort beskrivelse av aksjonspunktet.
 */
export const ReadonlyAPGraderingUtenBG = ({ avklaringsbehov }: Props) => {
  if (!avklaringsbehov?.begrunnelse) {
    return null;
  }
  return (
    <AksjonspunktBoks
      tittel={<FormattedMessage id="ReadonlyAPGraderingUtenBG.Tittel" />}
      aksjonspunkt={avklaringsbehov}
    >
      <LabeledValue
        size="small"
        label={<FormattedMessage id="ReadonlyAPGraderingUtenBG.Begrunnelse" />}
        value={avklaringsbehov.begrunnelse}
      />
    </AksjonspunktBoks>
  );
};
