import React from 'react';
import { useForm } from 'react-hook-form';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  RadioOption, TextAreaField, SelectField, RadioGroupField, CheckboxField, InputField,
} from '../index';
import Form from './Form';

import '@navikt/ft-ui-komponenter/dist/style.css';

export default {
  title: 'FormHooks',
};

export const visFormkomponenter = () => {
  const formMethods = useForm();
  return (
    <Form formMethods={formMethods}>
      <InputField
        label="InputField"
        name="testinput"
      />
      <VerticalSpacer sixteenPx />
      <CheckboxField
        label="CheckboxField"
        name="testcheckbox"
      />
      <VerticalSpacer sixteenPx />
      <RadioGroupField
        label="RadioGroupField"
        name="testRadioField"
      >
        <RadioOption label="Dette er en test 1" value="test1" />
        <RadioOption label="Dette er en test 2" value="test2" />
      </RadioGroupField>
      <VerticalSpacer sixteenPx />
      <SelectField
        label="SelectField"
        name="testSelectField"
        selectValues={[
          <option value="value" key="1">
            Test
          </option>,
        ]}
      />
      <VerticalSpacer sixteenPx />
      <TextAreaField
        label="TextAreaField"
        name="testTextAreaField"
      />
    </Form>
  );
};
