import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Match } from 'components/Match';
import { IMatch } from '../../typings/match';

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

it('should render a correct Match component', () => {
  const testData1: IMatch[] = [
    {
      id: 'hbaffaf',
      name: 'FK Tyumen - Luch-Energiya Vladivostok',
      competitionId: 'bbbg',
      competition: 'Football National League',
      countryId: 'cb',
      country: 'Russia',
      timestamp: 1470484800,
      date: '06.08.2016.',
      time: '12:00',
      status: {
        code: 100,
        type: 'finished',
      },
      round: {
        round: 6,
      },
      homeTeam: {
        id: 75207,
        name: 'FK Tyumen',
        slug: 'fk-tyumen',
        gender: 'M',
        subTeams: [],
      },
      awayTeam: {
        id: 5852,
        name: 'Luch-Energiya Vladivostok',
        slug: 'luch-energiya-vladivostok',
        gender: 'M',
        subTeams: [],
      },
      homeScore: {
        current: 0,
        period1: 0,
        normaltime: 0,
      },
      awayScore: {
        current: 0,
        period1: 0,
        normaltime: 0,
      },
      liveStatus: 'HT',
    },
  ]; // type = finished
  const testData2: IMatch[] = [
    {
      id: 'hbbeagj',
      name: 'KSC Lokeren - KVC Westerlo',
      competitionId: 'di',
      competition: 'Pro League',
      countryId: 'dd',
      country: 'Belgium',
      timestamp: 1470573000,
      date: '07.08.2016.',
      time: '12:30',
      status: {
        code: 7,
        type: 'inprogress',
      },
      round: {
        round: 2,
      },
      homeTeam: {
        id: 2887,
        name: 'KSC Lokeren',
        slug: 'ksc-lokeren',
        gender: 'M',
        subTeams: [],
      },
      awayTeam: {
        id: 2893,
        name: 'KVC Westerlo',
        slug: 'kvc-westerlo',
        gender: 'M',
        subTeams: [],
      },
      homeScore: {
        current: 3,
        period1: 2,
        normaltime: 0,
      },
      awayScore: {
        current: 0,
        period1: 0,
        normaltime: 0,
      },
      liveStatus: '89',
    },
  ]; // type = in progress
  const testData3: IMatch[] = [
    {
      id: 'hbaaeha',
      name: 'Independiente Santa Fe - Deportivo La Equidad',
      competitionId: 'bjcdg',
      competition: 'Primera A, Finalizacion',
      countryId: 'che',
      country: 'Colombia',
      timestamp: 1470600000,
      date: '07.08.2016.',
      time: '20:00',
      status: {
        code: 70,
        type: 'canceled',
      },
      round: {
        round: 7,
      },
      homeTeam: {
        id: 6116,
        name: 'Independiente Santa Fe',
        slug: 'independiente-santa-fe',
        gender: 'M',
        subTeams: [],
      },
      awayTeam: {
        id: 6975,
        name: 'Deportivo La Equidad',
        slug: 'deportivo-la-equidad',
        gender: 'M',
        subTeams: [],
      },
      homeScore: {},
      awayScore: {},
      liveStatus: 'Canceled',
    },
  ]; // type = cancelled
  const testData4: IMatch[] = [
    {
      id: 'gjhjgee',
      name: 'Portland Timbers - Sporting Kansas City',
      competitionId: 'bi',
      competition: 'Major League Soccer',
      countryId: 'cg',
      country: 'USA',
      timestamp: 1470600000,
      date: '07.08.2016.',
      time: '20:00',
      status: {
        code: 0,
        type: 'notstarted',
      },
      homeTeam: {
        id: 22007,
        name: 'Portland Timbers',
        slug: 'portland-timbers',
        gender: 'M',
        subTeams: [],
      },
      awayTeam: {
        id: 2509,
        name: 'Sporting Kansas City',
        slug: 'sporting-kansas-city',
        gender: 'M',
        subTeams: [],
      },
      homeScore: {},
      awayScore: {},
      liveStatus: '-',
    },
  ]; // type = not started

  act(() => {
    render(<Match matches={testData1} />, container);
  });
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<section class=\\"matches row\\"><div class=\\"col-12 col-md-6 col-lg-4 col-xl-3\\"><div class=\\"info\\"><h4 class=\\"country\\">Russia</h4><h2>Football National League</h2><h5 class=\\"status finished\\">ended</h5><div class=\\"score\\">0 - 0</div><div class=\\"result row\\"><div class=\\"team col-5\\"><p>FK Tyumen</p></div><div class=\\"time col-2\\"><div class=\\"loader\\"><div class=\\"loader-bg\\"><div class=\\"text false HT\\">HT</div></div><div class=\\"spinner-holder-one animate-0-25-a\\"><div class=\\"spinner-holder-two animate-0-25-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-25-50-a\\"><div class=\\"spinner-holder-two animate-25-50-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-50-75-a\\"><div class=\\"spinner-holder-two animate-50-75-b\\" style=\\"transform: rotate(-90deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-75-100-a\\"><div class=\\"spinner-holder-two animate-75-100-b\\"><div class=\\"loader-spinner\\"></div></div></div></div></div><div class=\\"team col-5\\"><p>Luch-Energiya Vladivostok</p></div></div></div></div></section>"`
  );

  act(() => {
    render(<Match matches={testData2} />, container);
  });
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<section class=\\"matches row\\"><div class=\\"col-12 col-md-6 col-lg-4 col-xl-3\\"><div class=\\"info\\"><h4 class=\\"country\\">Belgium</h4><h2>Pro League</h2><h5 class=\\"status inprogress\\">live</h5><div class=\\"score\\">3 - 0</div><div class=\\"result row\\"><div class=\\"team col-5\\"><p>KSC Lokeren</p></div><div class=\\"time col-2\\"><div class=\\"loader\\"><div class=\\"loader-bg\\"><div class=\\"text false false\\">89</div></div><div class=\\"spinner-holder-one animate-0-25-a\\"><div class=\\"spinner-holder-two animate-0-25-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-25-50-a\\"><div class=\\"spinner-holder-two animate-25-50-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-50-75-a\\"><div class=\\"spinner-holder-two animate-50-75-b\\" style=\\"transform: rotate(0deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-75-100-a\\"><div class=\\"spinner-holder-two animate-75-100-b\\" style=\\"transform: rotate(-39.599999999999994deg);\\"><div class=\\"loader-spinner\\"></div></div></div></div></div><div class=\\"team col-5\\"><p>KVC Westerlo</p></div></div></div></div></section>"`
  );

  act(() => {
    render(<Match matches={testData3} />, container);
  });
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<section class=\\"matches row\\"><div class=\\"col-12 col-md-6 col-lg-4 col-xl-3\\"><div class=\\"info\\"><h4 class=\\"country\\">Colombia</h4><h2>Primera A, Finalizacion</h2><h5 class=\\"status canceled\\">cancelled</h5><div class=\\"score\\">0 - 0</div><div class=\\"result row\\"><div class=\\"team col-5\\"><p>Independiente Santa Fe</p></div><div class=\\"time col-2\\"><div class=\\"loader\\"><div class=\\"loader-bg\\"><div class=\\"text false false\\"></div></div><div class=\\"spinner-holder-one animate-0-25-a\\"><div class=\\"spinner-holder-two animate-0-25-b\\" style=\\"transform: rotate(-90deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-25-50-a\\"><div class=\\"spinner-holder-two animate-25-50-b\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-50-75-a\\"><div class=\\"spinner-holder-two animate-50-75-b\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-75-100-a\\"><div class=\\"spinner-holder-two animate-75-100-b\\"><div class=\\"loader-spinner\\"></div></div></div></div></div><div class=\\"team col-5\\"><p>Deportivo La Equidad</p></div></div></div></div></section>"`
  );

  act(() => {
    render(<Match matches={testData4} />, container);
  });
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<section class=\\"matches row\\"><div class=\\"col-12 col-md-6 col-lg-4 col-xl-3\\"><div class=\\"info\\"><h4 class=\\"country\\">USA</h4><h2>Major League Soccer</h2><h5 class=\\"status notstarted\\">Aug 7th  2016 23 : 00</h5><div class=\\"score\\">0 - 0</div><div class=\\"result row\\"><div class=\\"team col-5\\"><p>Portland Timbers</p></div><div class=\\"time col-2\\"><div class=\\"loader\\"><div class=\\"loader-bg\\"><div class=\\"text false false\\"></div></div><div class=\\"spinner-holder-one animate-0-25-a\\"><div class=\\"spinner-holder-two animate-0-25-b\\" style=\\"transform: rotate(-90deg);\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-25-50-a\\"><div class=\\"spinner-holder-two animate-25-50-b\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-50-75-a\\"><div class=\\"spinner-holder-two animate-50-75-b\\"><div class=\\"loader-spinner\\"></div></div></div><div class=\\"spinner-holder-one animate-75-100-a\\"><div class=\\"spinner-holder-two animate-75-100-b\\"><div class=\\"loader-spinner\\"></div></div></div></div></div><div class=\\"team col-5\\"><p>Sporting Kansas City</p></div></div></div></div></section>"`
  );

  act(() => {
    render(<Match matches={[]} />, container);
  });
  expect(container.innerHTML).toMatchInlineSnapshot(`"<section class=\\"matches row\\"></section>"`);
});
