import { useFormContext as useOriginalFormContext } from 'react-hook-form';

const useFormContext = <T, >() => useOriginalFormContext<T>();

export default useFormContext;
