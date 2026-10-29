import type { ReactElement, ReactNode } from 'react';

import { BodyShort, Label } from '@navikt/ds-react';

import styles from './næringFraSøknad.module.css';

interface Props {
  label: ReactNode;
  value: ReactElement | string | number;
}

export const OpplysningsRad = ({ label, value }: Props) => (
  <div className={styles.opplysningsRad}>
    <Label as="dt" size="small">
      {label}
    </Label>
    <BodyShort as="dd" size="small">
      {value}
    </BodyShort>
  </div>
);
