import React from 'react';

import { renderApp, freezeTime } from 'react-day-picker/test';

import Example from './styling-css';

const today = new Date(2021, 10, 25);
freezeTime(today);

let app: HTMLElement;
beforeEach(() => {
  const render = renderApp(<Example />);
  app = render.app;
});

test('the caption should use the custom class name', () => {
  expect(app.getElementsByClassName('caption_aqua')[0]).toHaveTextContent(
    'November 2021'
  );
});
