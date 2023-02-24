import React from 'react';
import { bemUtils } from '@navikt/ft-utils';
import { BodyShort } from '@navikt/ds-react/esm';
import BoxedList from '../boxed-list/BoxedList';
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

const BoxedListWithSelection: React.FunctionComponent<BoxedListWithSelectionProps> = ({ items, onClick }) => (
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
        // eslint-disable-next-line react/no-array-index-key
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

export default BoxedListWithSelection;
