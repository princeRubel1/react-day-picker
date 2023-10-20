import { screen } from '@testing-library/react';
import {
  axe,
  freezeTime,
  previousButton,
  user,
  renderApp
} from 'react-day-picker/test';

import Example from './multiple-months-paged';

const today = new Date(2021, 10, 25);
freezeTime(today);

let app: HTMLElement;
beforeEach(() => {
  const render = renderApp(<Example />);
  app = render.app;
});

test('should be accessible', async () => {
  expect(await axe(app)).toHaveNoViolations();
});

describe('when rendering November 2021', () => {
  test('should render 2 grids', () => {
    expect(screen.getAllByRole('grid')).toHaveLength(2);
  });
  test('the first grid should be November', () => {
    const grids = screen.getAllByRole('grid');
    expect(grids[0]).toHaveAccessibleName('November 2021');
  });
  test('the second grid should be December', () => {
    expect(screen.getAllByRole('grid')[1]).toHaveAccessibleName(
      'December 2021'
    );
  });
  // Test pagination
  describe('when the previous month button is clicked', () => {
    beforeEach(async () => user.click(previousButton()));
    test('the first month should be September', () => {
      expect(screen.getAllByRole('grid')[0]).toHaveAccessibleName(
        'September 2021'
      );
    });
    test('the last month should be October', () => {
      expect(screen.getAllByRole('grid')[1]).toHaveAccessibleName(
        'October 2021'
      );
    });
  });
});
