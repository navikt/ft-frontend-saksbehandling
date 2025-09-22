export type StandardFaktaPanelProps<AP_TYPE, DATA_TYPE> = Readonly<{
  submitCallback: (aksjonspunktData: AP_TYPE) => Promise<void>;
  readOnly: boolean;
  formData?: DATA_TYPE;
  setFormData: (data: DATA_TYPE) => void;
}>;
