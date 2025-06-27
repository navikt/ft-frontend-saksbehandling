import React, { ReactNode, useMemo } from 'react';
import { FieldValues, useController, UseControllerProps, useFormContext } from 'react-hook-form';

import { Tag, Textarea, TextareaProps } from '@navikt/ds-react';

import { getError, getValidationRules, ValidationReturnType } from '../formUtils';
import { ReadOnlyField } from '../ReadOnlyField/ReadOnlyField';

import styles from './rhfTextarea.module.css';

type BadgesType = 'success' | 'info' | 'error' | 'warning';

export interface Badges {
  type: BadgesType;
  titleText: string;
}

export type Props<T extends FieldValues> = {
  label: string | ReactNode;
  readOnly?: boolean;
  maxLength?: number;
  badges?: Badges[];
  validate?: ((value: string) => ValidationReturnType)[];
  parse?: (value: string | number) => string | number;
  className?: string;
  description?: string;
  isEdited?: boolean;
  size?: 'small' | 'medium';
} & TextareaProps &
  UseControllerProps<T>;

export const RhfTextarea = <T extends FieldValues>({
  name,
  control,
  label,
  readOnly,
  maxLength,
  badges,
  validate = [],
  parse = value => value,
  className,
  description,
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
        description={description}
        className={className}
        autoComplete="off"
        {...field}
        onChange={event => field.onChange(event.currentTarget.value !== '' ? parse(event.currentTarget.value) : null)}
        value={field.value ? field.value : ''}
        error={getError(errors, name)}
        maxLength={maxLength}
        {...props}
      />
    </div>
  );
};
