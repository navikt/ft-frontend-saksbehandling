import React from 'react';
import { bemUtils } from '@navikt/ft-utils';
import { BodyShort } from '@navikt/ds-react';
import BoxedList from '../boxed-list/BoxedList';
import styles from './boxedListWithLinks.module.css';

interface ListItemProps {
  /** Display name for link */
  name: string;
  /** Url for link */
  href: string;
  /** Whether to open link in a new window */
  isExternal?: boolean;
}

interface BoxedListWithLinksProps {
  /** Array of links */
  items: ListItemProps[];
  /** Onclick handler */
  onClick?: (index: number, e: React.SyntheticEvent) => void;
}

const listItemCls = bemUtils('boxedList__item');

/** Bordered list with links */
export const BoxedListWithLinks: React.FunctionComponent<BoxedListWithLinksProps> = ({
  items,
  onClick,
}: BoxedListWithLinksProps) => (
  <BoxedList>
    {items.map(({ name, href, isExternal }, index) => (
      <li className={styles[listItemCls.block]} key={href}>
        <a
          href={href}
          className={styles[listItemCls.element('anchor')]}
          target={isExternal ? '_blank' : ''}
          rel={isExternal ? 'noopener noreferrer' : ''}
          onClick={e => {
            if (onClick) onClick(index, e);
          }}
        >
          <BodyShort size="small">{name}</BodyShort>
        </a>
      </li>
    ))}
  </BoxedList>
);

export default BoxedListWithLinks;
