import React from 'react';
import { bemUtils } from '@navikt/ft-utils';
import { BodyShort } from '@navikt/ds-react';
import { BoxedList } from '../boxed-list/BoxedList';
import styles from './boxedListWithSelection.module.css';

interface ListItemProps {
  name: string;
  selected?: boolean;
}

interface BoxedListWithSelectionProps {
  items: ListItemProps[];
  onClick?: (index: number, e: React.SyntheticEvent) => void;
}

const boxedListWithSelectionItemCls = bemUtils('boxedList__selectItem');

export const BoxedListWithSelection = ({ items, onClick }: BoxedListWithSelectionProps) => (
  <BoxedList>
    {items.map(({ name, selected }, index) => (
      <li
        className={
          selected
            ? `${styles[boxedListWithSelectionItemCls.block]} ${
                styles[boxedListWithSelectionItemCls.modifier('selected')]
              }`
            : styles[boxedListWithSelectionItemCls.block]
        }
        key={`${name}_${index}`}
      >
        <button
          className={styles[boxedListWithSelectionItemCls.element('button')]}
          aria-current={selected}
          type="button"
          onClick={e => (onClick ? onClick(index, e) : undefined)}
        >
          <BodyShort size="small" as="span">
            {name}
          </BodyShort>
        </button>
      </li>
    ))}
  </BoxedList>
);
