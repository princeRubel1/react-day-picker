import React from 'react';

import { act, render } from '@testing-library/react';
import { user } from 'react-day-picker/test';
import { axe } from 'react-day-picker/test/axe';
import {
  grid,
  monthDropdown,
  nextButton,
  previousButton,
  yearDropdown
} from 'react-day-picker/test/po';
import { renderExampleApp } from 'react-day-picker/test/renderExampleApp';
import { freezeTime } from 'react-day-picker/test/utils';

import Example from './dropdown-buttons';

const today = new Date(2022, 5, 10);
freezeTime(today);

let app: HTMLElement;
beforeEach(() => {
  const render = renderExampleApp(<Example />);
  app = render.app;
});

test('should be accessible', async () => {
  expect(await axe(app)).toHaveNoViolations();
});

test('should display the year dropdown', () => {
  expect(yearDropdown()).toBeInTheDocument();
});
test('should display the month dropdown', () => {
  expect(monthDropdown()).toBeInTheDocument();
});
test('should render the next month button', () => {
  expect(nextButton()).toBeInTheDocument();
});
test('should render the previous month button', () => {
  expect(previousButton()).toBeInTheDocument();
});

describe('when choosing a month', () => {
  const monthName = 'January';
  beforeEach(() => act(() => user.selectOptions(monthDropdown(), monthName)));
  test('should be accessible', async () => {
    expect(await axe(app)).toHaveNoViolations();
  });
  test('should display the month', () => {
    expect(grid()).toHaveAccessibleName(`${monthName} 2022`);
  });
});
