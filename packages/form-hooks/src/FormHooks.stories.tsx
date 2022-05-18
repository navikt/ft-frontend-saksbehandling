import React from 'react';
import { useForm } from 'react-hook-form';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate } from '@navikt/ft-form-validators';
import {
  RadioOption,
  TextAreaField,
  SelectField,
  RadioGroupField,
  CheckboxField,
  InputField,
  Datepicker,
} from '../index';
import Form from './Form';

// TODO Kvifor feilar denne kun på Github?
// eslint-disable-next-line import/no-unresolved
import '@navikt/ft-ui-komponenter/dist/style.css';
import RadioGroupPanel from './RadioGroupPanel';

export default {
  title: 'FormHooks',
};

const Template: Story = () => {
  const formMethods = useForm();
  return (
    <Form formMethods={formMethods}>
      <InputField label="Dette er et inputfelt" name="testinput" />
      <VerticalSpacer sixteenPx />
      <CheckboxField label="Dette er en checkbox" name="testcheckbox" />
      <VerticalSpacer sixteenPx />
      <RadioGroupField label="Dette er en gammel type radioknapp" name="testRadioField">
        <RadioOption label="Dette er en test 1" value="test1" />
        <RadioOption label="Dette er en test 2" value="test2" />
      </RadioGroupField>
      <RadioGroupPanel
        name="radio"
        label="Dette er en radioknapp"
        radios={[
          {
            label: 'Verdi 1',
            value: 'true',
          },
          {
            label: 'Verdi 2',
            value: 'false',
          },
        ]}
        parse={(value: string) => value === 'true'}
        isHorizontal
      />
      <VerticalSpacer sixteenPx />
      <SelectField
        label="Dette er en dropdown"
        name="testSelectField"
        selectValues={[
          <option value="value" key="1">
            Test
          </option>,
        ]}
      />
      <VerticalSpacer sixteenPx />
      <TextAreaField label="Dette er et tekstfelt" name="testTextAreaField" />
      <VerticalSpacer sixteenPx />
      <Datepicker
        label="Dette er en label"
        name="reserverTil"
        validate={[hasValidDate, dateAfterOrEqual(new Date()), dateBeforeOrEqual(new Date())]}
      />
    </Form>
  );
};

export const VisFormkomponenter = Template.bind({});
