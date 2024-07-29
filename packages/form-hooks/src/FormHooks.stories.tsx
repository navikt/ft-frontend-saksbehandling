import React from 'react';
import { useForm } from 'react-hook-form';
import { StoryFn } from '@storybook/react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { TextAreaField, SelectField, CheckboxField, InputField } from '../index';
import Form from './Form';
import RadioGroupPanel from './RadioGroupPanel';
import CheckboxPanel from './CheckboxPanel';
import Rangepicker from './Rangepicker';
import Datepicker from './Datepicker';

import styles from './formHooks.stories.module.css';

import '@navikt/ft-ui-komponenter/dist/style.css';
import NumberField from './NumberField';

export default {
  title: 'FormHooks',
};

const Template: StoryFn = () => {
  const formMethods = useForm({
    defaultValues: {
      testinputpre: 'Hei hei',
      testnumberpre: 45.1,
      testcheckboxpre: true,
      checkboxpanelpre: ['verdi3', 'verdi5'],
      radiopre: true,
      testSelectFieldpre: 'value3',
      testTextAreaFieldPre: 'Dette er en begrunnelse',
      datepickerFieldPre: '2022-10-22',
      fomPre: '2022-10-22',
      tomPre: '2022-10-27',
    },
  });

  return (
    <Form formMethods={formMethods}>
      <InputField label="Dette er et inputfelt" name="testinput" className={styles.bredde} />
      <VerticalSpacer sixteenPx />
      <InputField label="Dette er et inputfelt der verdi er valgt" name="testinputpre" className={styles.bredde} />
      <VerticalSpacer sixteenPx />
      <InputField
        label="Dette er et inputfelt som er readonly"
        name="testinputpre"
        className={styles.bredde}
        readOnly
      />
      <VerticalSpacer sixteenPx />
      <NumberField label="Dette er et numberfelt" name="testnumber" className={styles.bredde} forceTwoDecimalDigits />
      <VerticalSpacer sixteenPx />
      <NumberField label="Dette er et numberfelt der verdi er valgt" name="testnumberpre" className={styles.bredde} />
      <VerticalSpacer sixteenPx />
      <NumberField
        label="Dette er et numberfelt som er readonly"
        name="testnumberpre"
        className={styles.bredde}
        readOnly
      />
      <VerticalSpacer sixteenPx />
      <CheckboxField label="Dette er en checkbox" name="testcheckbox" />
      <VerticalSpacer sixteenPx />
      <CheckboxField label="Dette er en checkbox der verdi er valgt" name="testcheckboxpre" />
      <VerticalSpacer sixteenPx />
      <CheckboxField label="Dette er en checkbox som er readonly" name="testcheckboxpre" readOnly />
      <VerticalSpacer sixteenPx />
      <CheckboxPanel
        name="checkboxpanel"
        label="Dette er et checkboxpanel"
        checkboxes={[
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
      <CheckboxPanel
        name="checkboxpanelpre"
        label="Dette er et checkboxpanel der en verdi er valgt"
        description="Dette er en mer utfyllende tekst"
        checkboxes={[
          {
            label: 'Verdi 3',
            value: 'verdi3',
          },
          {
            label: 'Verdi 4',
            value: 'verdi4',
          },
          {
            label: 'Verdi 5',
            value: 'verdi5',
          },
        ]}
      />
      <VerticalSpacer sixteenPx />
      <CheckboxPanel
        name="checkboxpanelpre"
        label="Dette er et checkboxpanel som er readonly"
        isReadOnly
        checkboxes={[
          {
            label: 'Verdi 3',
            value: 'verdi3',
          },
          {
            label: 'Verdi 4',
            value: 'verdi4',
          },
          {
            label: 'Verdi 5',
            value: 'verdi5',
          },
        ]}
      />
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name="radio"
        description="Dette er en mer utfyllende tekst"
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
        label="Dette er en radioknapp som er readonly"
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
      <SelectField
        label="Dette er en dropdown som er readonly"
        name="testSelectFieldpre"
        readOnly
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
      <TextAreaField
        label="Dette er et tekstfelt som er readonly"
        name="testTextAreaFieldPre"
        readOnly
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
        label="Dette er en datepicker"
        name="datepickerField"
        description="Dette er en mer utfyllende tekst"
        disabledDays={{
          fromDate: new Date('2022-10-10'),
          toDate: new Date('2022-10-14'),
        }}
      />
      <VerticalSpacer sixteenPx />
      <Datepicker label="Dette er en datepicker der verdi er valgt" name="datepickerFieldPre" />
      <VerticalSpacer sixteenPx />
      <Datepicker label="Dette er en datepicker som er readonly" name="datepickerFieldPre" isReadOnly />
      <VerticalSpacer sixteenPx />
      <Rangepicker label="Periode" fomName="fom" tomName="tom" />
      <VerticalSpacer sixteenPx />
      <Rangepicker label="Periode der verdi er valgt" fomName="fomPre" tomName="tomPre" />
      <VerticalSpacer sixteenPx />
      <Rangepicker label="Periode som er readonly" fomName="fomPre" tomName="tomPre" isReadOnly />
    </Form>
  );
};

export const VisFormkomponenter = Template.bind({});
