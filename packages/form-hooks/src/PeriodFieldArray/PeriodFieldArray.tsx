import { type ReactNode } from 'react';
import type {
  FieldArray,
  FieldArrayPath,
  FieldArrayWithId,
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from 'react-hook-form';

import { PlusIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, Fieldset } from '@navikt/ds-react';

interface Props<
  TFieldValues extends FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
> {
  children: (
    field: FieldArrayWithId<TFieldValues, TFieldArrayName>,
    index: number,
    removeButton?: ReactNode,
  ) => ReactNode;
  fields: FieldArrayWithId<TFieldValues, TFieldArrayName>[];
  readOnly?: boolean;
  titleText?: string;
  addButtonText: string;
  emptyTemplate: FieldArray<TFieldValues, TFieldArrayName>;
  remove: UseFieldArrayRemove;
  append: UseFieldArrayAppend<TFieldValues, TFieldArrayName>;
  size?: 'small' | 'medium';
}

export const PeriodFieldArray = <
  TFieldValues extends FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
>({
  fields,
  readOnly = true,
  titleText,
  addButtonText,
  emptyTemplate,
  children,
  remove,
  append,
  size = 'small',
}: Props<TFieldValues, TFieldArrayName>) => (
  <Fieldset legend={titleText} size={size}>
    {fields.map((field, index) =>
      children(field, index, <RemoveButton index={index} remove={remove} size={size} skjul={readOnly} />),
    )}
    <AppendButton append={append} emptyTemplate={emptyTemplate} size={size} skjul={readOnly}>
      {addButtonText}
    </AppendButton>
  </Fieldset>
);

interface RemoveButtonProps {
  index: number;
  remove: UseFieldArrayRemove;
  size?: 'small' | 'medium';
  skjul?: boolean;
}

const RemoveButton = ({ index, remove, size, skjul }: RemoveButtonProps): ReactNode | null =>
  index > 0 && !skjul ? (
    <Button
      icon={<XMarkIcon aria-hidden />}
      title="Fjern element"
      type="button"
      variant="tertiary-neutral"
      size={size}
      onClick={() => {
        remove(index);
      }}
    />
  ) : null;

interface AppendButtonProps<
  TFieldValues extends FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
> {
  append: UseFieldArrayAppend<TFieldValues, TFieldArrayName>;
  emptyTemplate: FieldArray<TFieldValues, TFieldArrayName>;
  size?: 'small' | 'medium';
  children: ReactNode;
  skjul?: boolean;
}

const AppendButton = <
  TFieldValues extends FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
>({
  append,
  size,
  skjul,
  emptyTemplate,
  children,
}: AppendButtonProps<TFieldValues, TFieldArrayName>) =>
  !skjul ? (
    <Button
      onClick={() => append(emptyTemplate)}
      type="button"
      tabIndex={0}
      variant="tertiary"
      icon={<PlusIcon aria-hidden />}
      size={size}
    >
      {children}
    </Button>
  ) : null;

PeriodFieldArray.RemoveButton = RemoveButton;
PeriodFieldArray.AppendButton = AppendButton;
