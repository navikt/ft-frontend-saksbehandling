import {
  useFormContext as useOriginalFormContext,
  useFieldArray as useOriginalFormArray,
  useFormState as useOriginalFormState,
  useWatch as useOriginalWatch,
} from 'react-hook-form';

export default {
  useFormContext: useOriginalFormContext,
  useFieldArray: useOriginalFormArray,
  useFormState: useOriginalFormState,
  useWatch: useOriginalWatch,
};
