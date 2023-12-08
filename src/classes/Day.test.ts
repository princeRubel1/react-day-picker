import { Day } from './Day';

it('should set `displayMonth` to undefined when date and `displayMonth` are in the same month', () => {
  const date = new Date(2020, 0, 1);
  const displayMonth = new Date(2020, 0, 15);
  const day = new Day(date, displayMonth);
  expect(day.displayMonth).toBeUndefined();
});

it('should set `displayMonth` to the given `displayMonth` when date and `displayMonth` are not in the same month', () => {
  const date = new Date(2020, 0, 1);
  const displayMonth = new Date(2020, 1, 15);
  const day = new Day(date, displayMonth);
  expect(day.displayMonth).toEqual(displayMonth);
});
