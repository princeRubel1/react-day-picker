import React from 'react';

import { addDays } from 'date-fns';
import { user, axe, gridcell, renderExampleApp } from 'react-day-picker/test';
import { getAllSelectedDays } from 'react-day-picker/test/selectors';

import Example from './range';

const pastMonth = new Date(2020, 10, 15);
const days = [
  pastMonth,
  addDays(pastMonth, 1),
  addDays(pastMonth, 2),
  addDays(pastMonth, 3),
  addDays(pastMonth, 4)
];

let app: HTMLElement;
beforeEach(() => {
  const render = renderExampleApp(<Example />);
  app = render.app;
});

test('should be accessible', async () => {
  expect(await axe(app)).toHaveNoViolations();
});

test('should match the snapshot', () => {
  expect(app).toMatchSnapshot();
});
test.each(days)('%s should be selected', (day) => {
  expect(gridcell(day)).toHaveAttribute('aria-selected', 'true');
});

describe('when a day in the range is clicked', () => {
  const day = days[2];
  beforeEach(async () => {
    await user.click(gridcell(day));
  });
  test.each([days[0], days[1], day])('%s should be selected', (day) => {
    expect(gridcell(day)).toHaveAttribute('aria-selected', 'true');
  });
  test.each([days[3], days[4]])('%s should not be selected', (day) => {
    expect(gridcell(day)).not.toHaveAttribute('aria-selected');
  });
  describe('when the day is clicked again', () => {
    const day = days[2];
    beforeEach(async () => {
      await user.click(gridcell(day));
    });
    test('only one day should be selected', () => {
      expect(getAllSelectedDays()).toHaveLength(1);
    });
    test('only a day in the range should be selected', () => {
      expect(gridcell(day)).toHaveAttribute('aria-selected', 'true');
    });

    describe('when a day in the range is clicked again', () => {
      const day = days[2];
      beforeEach(async () => {
        await user.click(gridcell(day));
      });
      test('only one day should be selected', () => {
        expect(getAllSelectedDays()).toHaveLength(1);
      });
      test('should match the snapshot', () => {
        expect(app).toMatchSnapshot();
      });
    });
  });
});