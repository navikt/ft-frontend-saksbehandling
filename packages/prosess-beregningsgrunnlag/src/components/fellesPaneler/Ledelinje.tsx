import React, { FunctionComponent } from 'react';

import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import styles from './ledelinje.less';

interface OwnProps {
  prosentBredde: number;
}

/**
 * Ledelinje
 *
 * Presentasjonskomponent. Legger inn en horisontal ledelinje for å skille på innhold.
 */
const Ledelinje: FunctionComponent<OwnProps> = ({ prosentBredde }) => {
  const styleBredde = `${prosentBredde}%`;
  return (
    <FlexRow>
      <div style={{ width: styleBredde }}>
        <FlexColumn>
          <div className={styles.colDevider} />
        </FlexColumn>
      </div>
    </FlexRow>
  );
};

export default Ledelinje;
