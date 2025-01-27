export type StandardProsessPanelProps<AP_TYPE, DATA_TYPE> = Readonly<{
  submitCallback: (aksjonspunktData: AP_TYPE) => Promise<void>;
  isReadOnly: boolean;
  formData?: DATA_TYPE;
  setFormData: (data: DATA_TYPE) => void;
}>;
