import { type ReactNode } from 'react';

import classnames from 'classnames/bind';

import styles from './aksjonspunktBox.module.css';

const classNames = classnames.bind(styles);

interface Props {
  children: ReactNode | ReactNode[];
  erAksjonspunktApent: boolean;
  erIkkeGodkjentAvBeslutter: boolean;
  className?: string;
}

export const AksjonspunktBox = ({ erAksjonspunktApent, erIkkeGodkjentAvBeslutter, className, children }: Props) => (
  <div
    className={classNames(className, 'aksjonspunkt', {
      erAksjonspunktApent: erAksjonspunktApent && !erIkkeGodkjentAvBeslutter,
      erIkkeGodkjentAvBeslutter,
    })}
  >
    {children}
  </div>
);
