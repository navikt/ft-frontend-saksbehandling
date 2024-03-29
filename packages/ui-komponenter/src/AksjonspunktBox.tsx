import React, { ReactNode, FunctionComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './aksjonspunktBox.module.css';

const classNames = classnames.bind(styles);

export interface OwnProps {
  children: ReactNode | ReactNode[];
  erAksjonspunktApent: boolean;
  erIkkeGodkjentAvBeslutter: boolean;
  className?: string;
}

const AksjonspunktBox: FunctionComponent<OwnProps> = ({
  erAksjonspunktApent,
  erIkkeGodkjentAvBeslutter,
  className,
  children,
}) => (
  <div
    className={classNames(className, 'aksjonspunkt', {
      erAksjonspunktApent: erAksjonspunktApent && !erIkkeGodkjentAvBeslutter,
      erIkkeGodkjentAvBeslutter,
    })}
  >
    {children}
  </div>
);

export default AksjonspunktBox;
