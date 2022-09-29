import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';

import { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { AvsnittSkiller, VerticalSpacer, EditedIcon } from '@navikt/ft-ui-komponenter';

import styles from './graderingUtenBGReadOnly.less';

type OwnProps = {
  avklaringsbehov: BeregningAvklaringsbehov;
};

/**
 * Visning av begrunnelse for aksjonspunkt 5050 som ble avviklet i 2019.
 * Vil ikke lenger oppstå men vi må kunne vise begrunnelsen som ble
 * oppgitt av saksbehandler og en kort beskrivelse av aksjonspunktet.
 */
const GraderingUtenBGReadOnly: FunctionComponent<OwnProps> = ({ avklaringsbehov }) => {
  if (!avklaringsbehov || !avklaringsbehov.begrunnelse) {
    return null;
  }
  return (
    <>
      <AvsnittSkiller spaceAbove spaceUnder leftPanel />
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

export default GraderingUtenBGReadOnly;
