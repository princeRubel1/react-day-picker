import React from 'react';

import { screen } from '@testing-library/react';
import { renderExampleApp } from 'react-day-picker/test/renderExampleApp';
import { freezeTime } from 'react-day-picker/test/utils';

import Example from './modifiers-hidden';

const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 20),
  new Date(2022, 5, 11)
];

const today = new Date(2021, 10, 25);
freezeTime(today);

test.each(days)('the day %s should be hidden', (day) => {
  renderExampleApp(<Example />);
  expect(
    screen.queryByRole('gridcell', { name: `${day.getDate()}` })
  ).not.toBeInTheDocument();
});
