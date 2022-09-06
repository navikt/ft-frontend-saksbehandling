import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Textarea as NavTextarea, Tag } from '@navikt/ds-react';

import ReadOnlyField from './ReadOnlyField';
import { getError, getValidationRules } from './formUtils';

import styles from './textAreaField.less';

type BadgesType = 'success' | 'info' | 'error' | 'warning';

interface Badges {
  type: BadgesType;
  titleText: string;
}

interface OwnProps {
  name: string;
  label: string | ReactNode;
  readOnly?: boolean;
  maxLength?: number;
  badges?: Badges[];
  validate?: ((value: string) => any)[];
  parse?: (value: string | number) => string | number;
  className?: string;
  description?: string;
}

const TextAreaField: FunctionComponent<OwnProps> = ({
  name,
  label,
  readOnly,
  maxLength,
  badges,
  validate = [],
  parse = value => value,
  className,
  description,
}) => {
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
    return <ReadOnlyField label={label} value={field.value} type="textarea" />;
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
      <NavTextarea
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
      />
    </div>
  );
};

export default TextAreaField;
