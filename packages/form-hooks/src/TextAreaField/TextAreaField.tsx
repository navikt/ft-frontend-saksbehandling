import React, { ReactNode, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Textarea, TextareaProps, Tag } from '@navikt/ds-react';

import ReadOnlyField from '../ReadOnlyField/ReadOnlyField';
import { getError, getValidationRules } from '../formUtils';

import styles from './textAreaField.module.css';

type BadgesType = 'success' | 'info' | 'error' | 'warning';

export interface Badges {
  type: BadgesType;
  titleText: string;
}

export interface Props extends TextareaProps {
  name: string;
  label: string | ReactNode;
  readOnly?: boolean;
  maxLength?: number;
  badges?: Badges[];
  validate?: ((value: string) => any)[];
  parse?: (value: string | number) => string | number;
  className?: string;
  description?: string;
  isEdited?: boolean;
}

const TextAreaField = ({
  name,
  label,
  readOnly,
  maxLength,
  badges,
  validate = [],
  parse = value => value,
  className,
  description,
  isEdited,
  ...props
}: Props) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field } = useController({
    name,
    rules: {
      validate: useMemo(() => getValidationRules(validate), [validate]),
    },
  });

  if (readOnly) {
    return (
      <ReadOnlyField
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
        size="small"
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

export default TextAreaField;
