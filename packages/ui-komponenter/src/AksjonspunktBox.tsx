import { type ReactNode } from 'react';

import styles from './aksjonspunktBox.module.css';

interface Props {
  children: ReactNode | ReactNode[];
  erAksjonspunktApent: boolean;
  erIkkeGodkjentAvBeslutter: boolean;
  className?: string;
}

export const AksjonspunktBox = ({ erAksjonspunktApent, erIkkeGodkjentAvBeslutter, className, children }: Props) => (
  <div
    className={[
      className,
      styles.aksjonspunkt,
      erAksjonspunktApent && !erIkkeGodkjentAvBeslutter && styles.erAksjonspunktApent,
      erIkkeGodkjentAvBeslutter && styles.erIkkeGodkjentAvBeslutter,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </div>
);
