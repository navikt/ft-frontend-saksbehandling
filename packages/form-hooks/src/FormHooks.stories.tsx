import React from 'react';
import { useForm } from 'react-hook-form';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate } from '@navikt/ft-form-validators';
import { TextAreaField, SelectField, CheckboxField, InputField, Datepicker } from '../index';
import Form from './Form';
import RadioGroupPanel from './RadioGroupPanel';

import styles from './formHooks.stories.less';

// TODO Kvifor feilar denne kun på Github?
// eslint-disable-next-line import/no-unresolved
import '@navikt/ft-ui-komponenter/dist/style.css';

export default {
  title: 'FormHooks',
};

const Template: Story = () => {
  const formMethods = useForm({
    defaultValues: {
      testinputpre: 'Hei hei',
      testcheckboxpre: true,
      radiopre: true,
      testSelectFieldpre: 'value3',
      testTextAreaFieldPre: 'Dette er en begrunnelse',
    },
  });

  return (
    <Form formMethods={formMethods}>
      <InputField label="Dette er et inputfelt" name="testinput" className={styles.bredde} />
      <VerticalSpacer sixteenPx />
      <InputField label="Dette er et inputfelt der verdi er valgt" name="testinputpre" className={styles.bredde} />
      <VerticalSpacer sixteenPx />
      <CheckboxField label="Dette er en checkbox" name="testcheckbox" />
      <VerticalSpacer sixteenPx />
      <CheckboxField label="Dette er en checkbox der verdi er valgt" name="testcheckboxpre" />
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="radio"
        label="Dette er en radioknapp"
        radios={[
          {
            label: 'Verdi 1',
            value: 'verdi1',
          },
          {
            label: 'Verdi 2',
            value: 'verdi2',
          },
        ]}
      />
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="radiopre"
        label="Dette er en radioknapp der verdi er valgt"
        isReadOnly
        isEdited
        radios={[
          {
            label: 'Verdi 1',
            value: 'true',
            element: <div>Innhold for verdi 1</div>,
          },
          {
            label: 'Verdi 2',
            value: 'false',
            element: <div>Innhold for verdi 2</div>,
          },
        ]}
        isTrueOrFalseSelection
        isHorizontal
      />
      <VerticalSpacer sixteenPx />
      <SelectField
        label="Dette er en dropdown"
        name="testSelectField"
        className={styles.bredde}
        description="Dette er en nærmere beskrivelse"
        selectValues={[
          <option value="value1" key="1">
            Test 1
          </option>,
          <option value="value2" key="2">
            Test 2
          </option>,
        ]}
      />
      <VerticalSpacer sixteenPx />
      <SelectField
        label="Dette er en dropdown der verdi er valgt"
        name="testSelectFieldpre"
        className={styles.bredde}
        selectValues={[
          <option value="value3" key="1">
            Test 3
          </option>,
          <option value="value4" key="2">
            Test 4
          </option>,
        ]}
      />
      <VerticalSpacer sixteenPx />
      <TextAreaField
        label="Dette er et tekstfelt"
        name="testTextAreaField"
        maxLength={50}
        badges={[
          {
            type: 'warning',
            titleText: 'Dette er en test',
          },
        ]}
      />
      <VerticalSpacer sixteenPx />
      <TextAreaField
        label="Dette er et tekstfelt der verdi er valgt"
        name="testTextAreaFieldPre"
        maxLength={50}
        badges={[
          {
            type: 'warning',
            titleText: 'Dette er en test',
          },
        ]}
      />
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
