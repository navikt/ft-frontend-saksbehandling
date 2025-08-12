import { type ReactNode } from 'react';

import { BodyShort, Detail } from '@navikt/ds-react';

import styles from './labelWithHeader.module.css';

export interface Props {
  header: string | ReactNode;
  texts: string[];
}

/**
 * LabelWithHeader
 *
 * Presentasjonskomponent. Presenterer tekst med en overskrift. (På samme måte som input-felter med overskrifter)
 */
export const LabelWithHeader = ({ header, texts }: Props) => (
  <div className={styles.container}>
    <Detail>{header}</Detail>
    <div className={styles.text}>
      {texts.map(text => (
        <BodyShort size="small" key={text}>
          {text}
        </BodyShort>
      ))}
    </div>
  </div>
);
