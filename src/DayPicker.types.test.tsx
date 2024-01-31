import { render } from '@testing-library/react';

import { DayPicker } from './DayPicker';

const Test = () => {
  return (
    <>
      <DayPicker />
      <DayPicker mode="single" selected={new Date()} onSelect={() => {}} />
      {/** @ts-expect-error Wrong selected prop */}
      <DayPicker mode="multi" selected={new Date()} />
      <DayPicker
        mode="multi"
        // @ts-expect-error Wrong `onSelect`
        // eslint-disable-next-line no-console
        onSelect={(date: Date) => console.log(date.getYear())}
      />
      {/** @ts-expect-error Extra "selected" props */}
      <DayPicker mode="none" selected={undefined} />
    </>
  );
};

it('should type-check', () => {
  render(<Test />);
  expect(true).toBeTruthy();
});