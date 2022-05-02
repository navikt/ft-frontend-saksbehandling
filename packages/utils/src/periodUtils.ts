import Period from './Period';

// eslint-disable-next-line import/prefer-default-export
export const sortPeriodsByFomDate = (period1: Period, period2: Period): number => {
  if (period1.startsBefore(period2)) {
    return -1;
  }
  if (period2.startsBefore(period1)) {
    return 1;
  }
  return 0;
};
