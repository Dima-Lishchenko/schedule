import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Gauge } from 'components/Gauge';

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render a correct Gauge component', () => {
  act(() => {
    render(<Gauge status={''} />, container);
  });
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<div class=\\"loader\\"><div class=\\"loader-bg\\"><div class=\\"text false false\\"></div></div><div class=\\"spinner-holder-one animate-0-25-a\\"><div class=\\"spinner-holder-two animate-0-25-b\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-25-50-a\\"><div class=\\"spinner-holder-two animate-25-50-b\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-50-75-a\\"><div class=\\"spinner-holder-two animate-50-75-b\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-75-100-a\\"><div class=\\"spinner-holder-two animate-75-100-b\\"><div class=\\"loader-spinner\\"></div></div></div></div>"`
  );

  act(() => {
    render(<Gauge status="FT" />, container);
  });
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<div class=\\"loader\\"><div class=\\"loader-bg\\"><div class=\\"text FT false\\">FT</div></div><div class=\\"spinner-holder-one animate-0-25-a\\"><div class=\\"spinner-holder-two animate-0-25-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-25-50-a\\"><div class=\\"spinner-holder-two animate-25-50-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-50-75-a\\"><div class=\\"spinner-holder-two animate-50-75-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-75-100-a\\"><div class=\\"spinner-holder-two animate-75-100-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div></div>"`
  );

  act(() => {
    render(<Gauge status="HT" />, container);
  });
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<div class=\\"loader\\"><div class=\\"loader-bg\\"><div class=\\"text false HT\\">HT</div></div><div class=\\"spinner-holder-one animate-0-25-a\\"><div class=\\"spinner-holder-two animate-0-25-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-25-50-a\\"><div class=\\"spinner-holder-two animate-25-50-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-50-75-a\\"><div class=\\"spinner-holder-two animate-50-75-b\\" style=\\"transform: rotate(-90deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-75-100-a\\"><div class=\\"spinner-holder-two animate-75-100-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div></div>"`
  );

  act(() => {
    render(<Gauge status="canceled" />, container);
  });
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<div class=\\"loader\\"><div class=\\"loader-bg\\"><div class=\\"text false false\\"></div></div><div class=\\"spinner-holder-one animate-0-25-a\\"><div class=\\"spinner-holder-two animate-0-25-b\\" style=\\"transform: rotate(-90deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-25-50-a\\"><div class=\\"spinner-holder-two animate-25-50-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-50-75-a\\"><div class=\\"spinner-holder-two animate-50-75-b\\" style=\\"transform: rotate(-90deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-75-100-a\\"><div class=\\"spinner-holder-two animate-75-100-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div></div>"`
  );

  act(() => {
    render(<Gauge status="test" />, container);
  });
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<div class=\\"loader\\"><div class=\\"loader-bg\\"><div class=\\"text false false\\"></div></div><div class=\\"spinner-holder-one animate-0-25-a\\"><div class=\\"spinner-holder-two animate-0-25-b\\" style=\\"transform: rotate(-90deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-25-50-a\\"><div class=\\"spinner-holder-two animate-25-50-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-50-75-a\\"><div class=\\"spinner-holder-two animate-50-75-b\\" style=\\"transform: rotate(-90deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-75-100-a\\"><div class=\\"spinner-holder-two animate-75-100-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div></div>"`
  );
});
