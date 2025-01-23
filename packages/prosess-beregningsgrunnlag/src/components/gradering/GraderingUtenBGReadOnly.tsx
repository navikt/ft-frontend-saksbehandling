import { BodyShort, Label } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

import { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { EditedIcon, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import styles from './graderingUtenBGReadOnly.module.css';

type Props = {
  avklaringsbehov: BeregningAvklaringsbehov;
};

/**
 * Visning av begrunnelse for aksjonspunkt 5050 som ble avviklet i 2019.
 * Vil ikke lenger oppstå men vi må kunne vise begrunnelsen som ble
 * oppgitt av saksbehandler og en kort beskrivelse av aksjonspunktet.
 */
export const GraderingUtenBGReadOnly = ({ avklaringsbehov }: Props) => {
  if (!avklaringsbehov || !avklaringsbehov.begrunnelse) {
    return null;
  }
  return (
    <>
      <Label size="small">
        <FormattedMessage id="Beregningsgrunnlag.Gradering.Beskrivelse" />
      </Label>
      <VerticalSpacer sixteenPx />
      <BodyShort size="small" className={styles.readOnlyBlokk}>
        {avklaringsbehov.begrunnelse} <EditedIcon />
      </BodyShort>
    </>
  );
};
