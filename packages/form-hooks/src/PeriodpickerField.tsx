import React, { FunctionComponent } from 'react';
import Datepicker from './Datepicker';
import { LabelType } from './Label';

interface PeriodpickerFieldProps {
  names: string[];
  label?: LabelType;
  readOnly?: boolean;
  isEdited?: boolean;
}

// const formatError = (otherProps: any, names: string[]): string => {
//   const getField1 = haystack(otherProps, names[0]);
//   const meta1 = getField1.meta;

//   if (meta1.submitFailed && meta1.error) {
//     return meta1.error;
//   }
//   const getField2 = haystack(otherProps, names[1]);
//   const meta2 = getField2.meta;
//   if (meta2.submitFailed && meta2.error) {
//     return meta2.error;
//   }
//   return '';
// };

// const hasValue = (value: string): boolean => !!value;

// const renderReadOnly =
//   (): FunctionComponent<Partial<PeriodpickerFieldProps>> =>
//   ({ names, renderIfMissingDateOnReadOnly, ...otherProps }: Partial<PeriodpickerFieldProps>) => {
//     const getFomDate = haystack(otherProps, names?.[0] || []);
//     const getTomDate = haystack(otherProps, names?.[1] || []);
//     const fomDate = getFomDate.input.value;
//     const tomDate = getTomDate.input.value;
//     if (hasValue(fomDate) && hasValue(tomDate)) {
//       return <ReadOnlyField value={`${fomDate} - ${tomDate}`} {...otherProps} />;
//     }
//     if (renderIfMissingDateOnReadOnly) {
//       if (hasValue(fomDate) && !hasValue(tomDate)) {
//         return <ReadOnlyField value={`${fomDate} - `} {...otherProps} />;
//       }
//       if (!hasValue(fomDate) && hasValue(tomDate)) {
//         return <ReadOnlyField value={` - ${tomDate}`} {...otherProps} />;
//       }
//     }
//     return null;
//   };

// interface PeriodePickerRenderProps {
//   label: LabelType;
//   isEdited: boolean;
//   names: string[];
// }

// const renderPeriodpicker =
//   () =>
//   ({
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     label,
//     names,
//     ...otherProps
//   }: PeriodePickerRenderProps) => {
//     const fieldProps = {
//       id: `${names[0]}-${names[1]}`,
//       feil: formatError(otherProps, names),
//       label: <Label input={label} readOnly={false} />,
//       names,
//     };
//     return <Periodpicker {...fieldProps} {...otherProps} />;
//   };

// const isoToDdMmYyyy = (string: string): string => {
//   const parsedDate = dayjs(string, ISO_DATE_FORMAT, true);
//   return parsedDate.isValid() ? parsedDate.format(DDMMYYYY_DATE_FORMAT) : string;
// };

// const acceptedFormatToIso = (value: string, name: string, names: string[]): string => {
//   const dates = value.split('-').map(d => d.trim());
//   const date = dates[names.indexOf(name)];

//   const validDate = ACCEPTED_DATE_INPUT_FORMATS.map(format => dayjs(date, format, true)).find(parsedDate =>
//     parsedDate.isValid(),
//   );

//   return validDate ? validDate.format(ISO_DATE_FORMAT) : date;
// };

// const formatValue = (format: Formatter) => (value: string, name: string) => isoToDdMmYyyy(format(value, name));
// const parseValue = (parse: Parser, names: string[]) => (value: string, name: string) =>
//   parse(acceptedFormatToIso(value, name, names), name);

const PeriodpickerField: FunctionComponent<PeriodpickerFieldProps> = ({ names, label, readOnly, isEdited }) => (
  <div>
    {names.map(name => (
      <Datepicker key={name} name={name} label={label} isReadOnly={readOnly} isEdited={isEdited} />
    ))}
  </div>
);
// const memoReadOnly = useMemo(() => renderReadOnly(), []);
// const memoPeriodpicker = useMemo(() => renderPeriodpicker(), []);

// return (
//   // @ts-ignore Fiks
//   <Fields
//     names={names}
//     component={readOnly ? memoReadOnly : memoPeriodpicker}
//     label={label}
//     {...otherProps}
//     format={formatValue(format)}
//     parse={parseValue(parse, names)}
//     readOnly={readOnly}
//     isEdited={isEdited}
//   />
// );

// PeriodpickerField.defaultProps = {
//   label: '',
//   readOnly: false,
//   isEdited: false,
//   renderIfMissingDateOnReadOnly: false,
//   format: value => value,
//   parse: value => value,
// };

export default PeriodpickerField;
