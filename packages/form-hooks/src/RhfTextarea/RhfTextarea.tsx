import { useMemo } from 'react';
import { type FieldValues, useController, type UseControllerProps, useFormContext } from 'react-hook-form';

import { Tag, Textarea, type TextareaProps } from '@navikt/ds-react';

import { getError, getValidationRules, type ValidationReturnType } from '../formUtils';
import { ReadOnlyField } from '../ReadOnlyField/ReadOnlyField';

import styles from './rhfTextarea.module.css';

type BadgesType = 'success' | 'info' | 'error' | 'warning';

interface Badges {
  type: BadgesType;
  titleText: string;
}

type Props<T extends FieldValues> = {
  badges?: Badges[];
  validate?: ((value: string) => ValidationReturnType)[];
  parse?: (value: string | number) => string | number;
  isEdited?: boolean;
  control: UseControllerProps<T>['control'];
} & Omit<TextareaProps, 'value' | 'defaultValue'> &
  Omit<UseControllerProps<T>, 'control'>;

export const RhfTextarea = <T extends FieldValues>({
  name,
  control,
  label,
  readOnly,
  badges,
  validate = [],
  parse = value => value,
  isEdited,
  size = 'small',
  ...props
}: Props<T>) => {
  const {
    formState: { errors },
  } = useFormContext();

  const { field } = useController({
    name,
    control,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  if (readOnly) {
    return (
      <ReadOnlyField
        size={size}
        label={label}
        value={field.value}
        type="textarea"
        isEdited={isEdited}
        hideLabel={props.hideLabel}
      />
    );
  }

  return (
    <div className={badges ? styles.textAreaFieldWithBadges : null}>
      {badges && (
        <div className={styles.etikettWrapper}>
          {badges.map(({ type, titleText }) => (
            <Tag key={titleText} variant={type} size="small">
              {titleText}
            </Tag>
          ))}
        </div>
      )}
      <Textarea
        size={size}
        label={label}
        autoComplete="off"
        {...field}
        onChange={event => field.onChange(event.currentTarget.value !== '' ? parse(event.currentTarget.value) : null)}
        value={field.value ? field.value : ''}
        error={getError(errors, name)}
        {...props}
      />
    </div>
  );
};
