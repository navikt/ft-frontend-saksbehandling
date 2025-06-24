import React, { ReactNode } from 'react';
import {
  FieldArray,
  FieldArrayPath,
  FieldArrayWithId,
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from 'react-hook-form';

import { PlusCircleIcon, TrashIcon } from '@navikt/aksel-icons';
import { Button, Fieldset } from '@navikt/ds-react';

function onClick<
  TFieldValues extends FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
>(
  append: UseFieldArrayAppend<TFieldValues, TFieldArrayName>,
  emptyPeriodTemplate: FieldArray<TFieldValues, TFieldArrayName>,
) {
  return (): void => {
    append(emptyPeriodTemplate);
  };
}

function onKeyDown<
  TFieldValues extends FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
>(
  append: UseFieldArrayAppend<TFieldValues, TFieldArrayName>,
  emptyPeriodTemplate: FieldArray<TFieldValues, TFieldArrayName>,
) {
  return ({ key }: React.KeyboardEvent): void => {
    if (key === 'Enter') {
      append(emptyPeriodTemplate);
    }
  };
}

const getRemoveButton = (
  index: number,
  remove: (index?: number | number[]) => void,
  size?: 'small' | 'medium',
): ReactNode | undefined => {
  if (index > 0) {
    return (
      <Button
        icon={<TrashIcon aria-hidden />}
        type="button"
        variant="tertiary-neutral"
        size={size}
        onClick={() => {
          remove(index);
        }}
      />
    );
  }
  return undefined;
};

interface DefaultType extends Record<string, any> {
  periodeFom: string;
  periodeTom: string;
}

export interface Props<
  TFieldValues extends FieldValues = DefaultType,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
> {
  children: (
    field: FieldArrayWithId<TFieldValues, TFieldArrayName>,
    index: number,
    props: {
      removeButton?: ReactNode;
      size?: 'small' | 'medium';
    },
  ) => ReactNode;
  fields: FieldArrayWithId<TFieldValues, TFieldArrayName>[];
  readOnly?: boolean;
  titleText?: string;
  addButtonText: string;
  shouldShowAddButton?: boolean;
  emptyPeriodTemplate?: FieldArray<TFieldValues, TFieldArrayName>;
  remove: UseFieldArrayRemove;
  append: UseFieldArrayAppend<TFieldValues, TFieldArrayName>;
  size?: 'small' | 'medium';
}

/**
 * PeriodFieldArray
 *
 * Håndterer å legge til og fjerne perioder
 */
export const PeriodFieldArray = <
  TFieldValues extends FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
>({
  fields,
  readOnly = true,
  titleText,
  addButtonText,
  emptyPeriodTemplate = { periodeFom: '', periodeTom: '' } as FieldArray<TFieldValues, TFieldArrayName>,
  shouldShowAddButton = true,
  children,
  remove,
  append,
  size = 'small',
}: Props<TFieldValues, TFieldArrayName>) => (
  <Fieldset legend={titleText} size={size}>
    {fields.map((field, index) => children(field, index, { removeButton: getRemoveButton(index, remove, size), size }))}
    {shouldShowAddButton && !readOnly && (
      <Button
        onClick={onClick(append, emptyPeriodTemplate)}
        onKeyDown={onKeyDown(append, emptyPeriodTemplate)}
        role="button"
        tabIndex={0}
        variant="tertiary-neutral"
        icon={<PlusCircleIcon aria-hidden />}
        size={size}
      >
        {addButtonText}
      </Button>
    )}
  </Fieldset>
);
