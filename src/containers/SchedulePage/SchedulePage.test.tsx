import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { SchedulePage } from 'containers/SchedulePage';

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Changes current active filter when clicked', () => {
  act(() => {
    render(<SchedulePage />, container);
  });

  // get buttons element, and trigger click on them
  const buttonAll = document.querySelector('button.all')!;
  expect(buttonAll.innerHTML).toBe('ALL');
  act(() => {
    buttonAll.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(buttonAll).toHaveClass('active');

  // get buttons element, and trigger click on them
  const buttonResult = document.querySelector('button.result')!;
  expect(buttonResult.innerHTML).toBe('Result');
  act(() => {
    buttonResult.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(buttonResult).toHaveClass('active');

  // get buttons element, and trigger click on them
  const buttonUpcoming = document.querySelector('button.upcoming')!;
  expect(buttonUpcoming.innerHTML).toBe('Upcoming');
  act(() => {
    buttonUpcoming.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(buttonUpcoming).toHaveClass('active');

  // get buttons element, and trigger click on them
  const buttonLive = document.querySelector('button.live')!;
  expect(buttonLive.innerHTML).toBe('Live');
  act(() => {
    buttonLive.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(buttonLive).toHaveClass('active');
});