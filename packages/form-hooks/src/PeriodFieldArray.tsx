import React, { ReactNode } from 'react';
import { FieldArrayMethodProps } from 'react-hook-form';
import { Button, Detail, Fieldset } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons';

import styles from './periodFieldArray.module.css';

function onClick<PERIOD_TYPE>(
  append: (value: PERIOD_TYPE, options?: FieldArrayMethodProps) => void,
  emptyPeriodTemplate?: any,
) {
  return (): void => {
    append(emptyPeriodTemplate);
  };
}

function onKeyDown<PERIOD_TYPE>(
  append: (value: PERIOD_TYPE, options?: FieldArrayMethodProps) => void,
  emptyPeriodTemplate?: any,
) {
  return ({ key }: React.KeyboardEvent): void => {
    if (key === 'Enter') {
      append(emptyPeriodTemplate);
    }
  };
}

const getRemoveButton =
  (index: number, remove: (index?: number | number[]) => void) =>
  (className?: string): ReactNode | undefined => {
    if (index > 0) {
      return (
        <Button
          className={className}
          icon={<XMarkIcon aria-hidden />}
          type="button"
          onClick={() => {
            remove(index);
          }}
        />
      );
    }
    return undefined;
  };

export interface OwnProps<PERIOD_TYPE> {
  children: (id: any, index: number, removeButtonElmt?: (className?: string) => ReactNode) => ReactNode;
  fields: PERIOD_TYPE[];
  readOnly?: boolean;
  titleText?: string;
  bodyText: string;
  emptyPeriodTemplate?: any;
  shouldShowAddButton?: boolean;
  createAddButtonInsteadOfImageLink?: boolean;
  remove: (index?: number | number[]) => void;
  append: (value: PERIOD_TYPE, options?: FieldArrayMethodProps) => void;
}

/**
 * PeriodFieldArray
 *
 * Håndterer å legge til og fjerne perioder
 */
const PeriodFieldArray = <PERIOD_TYPE,>({
  fields,
  readOnly = true,
  titleText,
  bodyText,
  emptyPeriodTemplate = {
    periodeFom: '',
    periodeTom: '',
  },
  shouldShowAddButton = true,
  createAddButtonInsteadOfImageLink = false,
  children,
  remove,
  append,
}: OwnProps<PERIOD_TYPE>) => (
  <Fieldset legend={titleText}>
    {fields.map((field, index) => children(field, index, getRemoveButton(index, remove)))}
    {shouldShowAddButton && (
      <>
        {!createAddButtonInsteadOfImageLink && !readOnly && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            onClick={onClick<PERIOD_TYPE>(append, emptyPeriodTemplate)}
            onKeyDown={onKeyDown<PERIOD_TYPE>(append, emptyPeriodTemplate)}
            className={styles.addPeriode}
            role="button"
            tabIndex={0}
          >
            <PlusCircleIcon className={styles.addCircleIcon} title={bodyText} />
            <Detail className={styles.imageText}>{bodyText}</Detail>
          </div>
        )}
        {createAddButtonInsteadOfImageLink && !readOnly && (
          <Button
            icon={<PlusCircleIcon aria-hidden />}
            type="button"
            onClick={onClick<PERIOD_TYPE>(append, emptyPeriodTemplate)}
          >
            {bodyText}
          </Button>
        )}
        <VerticalSpacer sixteenPx />
      </>
    )}
  </Fieldset>
);

export default PeriodFieldArray;
