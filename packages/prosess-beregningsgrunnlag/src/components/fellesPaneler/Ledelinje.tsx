import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';

import styles from './ledelinje.module.css';

export interface Props {
  prosentBredde: number;
}

/**
 * Ledelinje
 *
 * Presentasjonskomponent. Legger inn en horisontal ledelinje for å skille på innhold.
 */
export const Ledelinje = ({ prosentBredde }: Props) => {
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
