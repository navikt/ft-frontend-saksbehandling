import React from 'react';
import { bemUtils } from '@navikt/ft-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import BoxedList from '../boxed-list/BoxedList';
import styles from './boxedListWithSelection.less';

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
          <Normaltekst tag="span">{name}</Normaltekst>
        </button>
      </li>
    ))}
  </BoxedList>
);

export default BoxedListWithSelection;
