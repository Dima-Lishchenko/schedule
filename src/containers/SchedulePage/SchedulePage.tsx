import React, { useEffect, useState } from 'react';

import 'assets/styles/grid.sass';
import './SchedulePage.sass';

import { Match } from 'components/Match';
import { IMatch } from 'typings/match';

export const SchedulePage = () => {
  const [data, setData] = useState<IMatch[]>([]);
  const [filteredData, filterData] = useState<IMatch[]>([]);
  const [currentFilter, setCurrentFilter] = useState<'all' | 'inprogress' | 'notstarted' | 'finished'>('all');

  const allMatches = () => {
    filterData(data);
    setCurrentFilter('all');
  };

  const onlyFinished = () => {
    if (data.length > 0) {
      const result = data.filter((match: IMatch) => match.status.type === 'finished');
      filterData(result);
    }
    setCurrentFilter('finished');
  };

  const liveMatches = () => {
    if (data.length > 0) {
      const result = data.filter((match: IMatch) => match.status.type === 'inprogress');
      filterData(result);
    }
    setCurrentFilter('inprogress');
  };

  const upComingMatches = () => {
    if (data.length > 0) {
      const result: IMatch[] = data.filter((match: IMatch) => match.status.type === 'notstarted');
      filterData(result);
    }
    setCurrentFilter('notstarted');
  };

  const getData = () => {
    // there is no need to import react-redux with action, reducer, saga middleware if we do not have event real API call
    // but good practice would be move any side effects to saga and import it from store with the help of useSelector hook
    fetch('./sports.json').then(async res => {
      const response: IMatch[] = await res.json();
      setData(response);
      filterData(response);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="schedule">
      <div className="row">
        <div className="filters col-12" style={{ textAlign: 'center' }}>
          <button className={`all ${currentFilter === 'all' && 'active'}`} onClick={allMatches}>
            ALL
          </button>
          <button className={`result ${currentFilter === 'finished' && 'active'}`} onClick={onlyFinished}>
            Result
          </button>
          <button className={`upcoming ${currentFilter === 'notstarted' && 'active'}`} onClick={upComingMatches}>
            Upcoming
          </button>
          <button className={`live ${currentFilter === 'inprogress' && 'active'}`} onClick={liveMatches}>
            Live
          </button>
          <h2>Current count: {filteredData.length}</h2>
        </div>
      </div>
      <Match matches={filteredData} />
    </div>
  );
};