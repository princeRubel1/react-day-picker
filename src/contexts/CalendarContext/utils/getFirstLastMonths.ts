import { addMonths, differenceInCalendarMonths, startOfMonth } from 'date-fns';
import { DayPickerBaseProps } from 'DayPicker';

import { defaultProps } from 'contexts/DayPickerContext/defaultProps';
import { parseFromToProps } from 'contexts/DayPickerContext/utils/parseFromToProps';

/**
 * Return the first and the last months according to the props passed to
 * DayPicker, with some extra checks for the extra props.
 */
export function getFirstLastMonths(
  props: Partial<
    Pick<
      DayPickerBaseProps,
      | 'fromYear'
      | 'toYear'
      | 'fromDate'
      | 'toDate'
      | 'fromMonth'
      | 'toMonth'
      | 'month'
      | 'defaultMonth'
      | 'today'
      | 'numberOfMonths'
    >
  >
): [firstMonth: Date, lastMonth?: Date] {
  const {
    month,
    defaultMonth,
    today,
    numberOfMonths = defaultProps.numberOfMonths
  } = props;
  let initialMonth = month || defaultMonth || today || new Date();
  const { fromDate, toDate } = parseFromToProps(props);

  // Fix the initialMonth if is after the to-date
  if (toDate && differenceInCalendarMonths(toDate, initialMonth) < 0) {
    const offset = -1 * (numberOfMonths - 1);
    initialMonth = addMonths(toDate, offset);
  }
  // Fix the initialMonth if is before the from-date
  if (fromDate && differenceInCalendarMonths(initialMonth, fromDate) < 0) {
    initialMonth = fromDate;
  }
  return [startOfMonth(initialMonth), toDate];
}