import React from 'react';
import { reduxForm } from 'redux-form';
import { IntlProvider } from 'react-intl';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import ReduxWrapper from './ReduxWrapper';
import InputField from './InputField';
import CheckboxField from './CheckboxField';
import DecimalField from './DecimalField';
import RadioGroupField from './RadioGroupField';
import RadioOption from './RadioOption';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';

export default {
  title: 'form-redux/FormRedux',
  component: ReduxWrapper,
};

const MockForm = reduxForm({ form: 'mock' })(({ handleSubmit, children }) => <form onSubmit={handleSubmit}>{children}</form>);

export const visFormkomponenter = () => (
  <IntlProvider locale="nb-NO" messages={{}}>
    <ReduxWrapper formName="test">
      <MockForm>
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
        <DecimalField
          label="DecimalField"
          name="testdecimalField"
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
      </MockForm>
    </ReduxWrapper>
  </IntlProvider>
);
