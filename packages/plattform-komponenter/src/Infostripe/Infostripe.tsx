import React, { JSX } from 'react';

import styles from './infostripe.module.css';

interface BaseInfostripeProps {
  iconRenderer: () => React.ReactNode;
}

interface ElementInfostripeProps extends BaseInfostripeProps {
  element: JSX.Element;
  text?: never;
}
interface TextInfostripeProps extends BaseInfostripeProps {
  text: string;
  element?: never;
}
type InfostripeProps = ElementInfostripeProps | TextInfostripeProps;

/**
 * TODO (TOR) Kan ein heller bruka Box/VStack frå Aksel her?
 */
export const Infostripe = ({ text, iconRenderer, element }: InfostripeProps) => (
  <div className={styles.infostripe}>
    <div className={styles.infostripe__iconContainer}>{iconRenderer()}</div>
    <div className={styles.infostripe__textContainer}>
      {element || <p className={styles.infostripe__text}>{text}</p>}
    </div>
  </div>
);
