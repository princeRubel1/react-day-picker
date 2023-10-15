import React from 'react';

import { addDays } from 'date-fns';

import { grid, gridcell } from '../../test/po';
import { renderExampleApp } from '../../test/renderExampleApp';
import { user } from '../../test/user';
import { freezeBeforeAll } from '../../test/utils';
import Example from './modifiers-today';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

let app: HTMLElement;
beforeEach(() => {
  const render = renderExampleApp(<Example />);
  app = render.app;
});

describe('when rendering a month that contains today', () => {
  test('it should add the default class name for today', () => {
    expect(gridcell(today)).toHaveClass('rdp-day_today');
  });
  test('it should have exactly one ".rdp-day_today" class', () => {
    const todays = app.querySelectorAll('.rdp-day_today');
    expect(todays).toHaveLength(1);
  });
});

describe('when the today date is clicked', () => {
  beforeEach(async () => {
    await user.click(gridcell(today));
  });
  test('should update the footer', () => {
    expect(grid()).toHaveTextContent('You clicked the today’s date');
  });
});

describe('when another date is clicked', () => {
  const date = addDays(today, 1);
  beforeEach(async () => act(() => user.click(gricell(date))));
  test('should update the footer', () => {
    expect(grid()).toHaveTextContent('Try clicking the today’s date.');
  });
});
