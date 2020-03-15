import React  from "react";

import { Gauge } from 'components/Gauge';
import './Match.sass';

import { IMatch } from 'typings/match';
import { matchType } from 'utils/matchType';

export interface IMatchesC {
  matches: IMatch[];
}

export const Match = React.memo(({ matches }: IMatchesC) => {
  return (
    <section className="matches row">
      {matches.length > 0 &&
        matches.map((match: IMatch) => {
          const {
            id,
            country,
            status: { type },
            homeScore,
            awayScore,
            homeTeam,
            awayTeam,
            liveStatus,
            timestamp,
          } = match;

          return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={id}>
              <div className="info">
                <h4 className="country">{country}</h4>
                <h2>{match.competition}</h2>
                <h5 className={`status ${type}`}>{matchType(type, timestamp)}</h5>
                <div className="score">
                  {homeScore.current || 0} - {awayScore.current || 0}
                </div>
                <div className="result row">
                  <div className="team col-5">
                    <p>{homeTeam.name}</p>
                  </div>
                  <div className="time col-2">
                    <Gauge status={liveStatus} />
                  </div>
                  <div className="team col-5">
                    <p>{awayTeam.name}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
});