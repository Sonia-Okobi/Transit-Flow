import React from 'react';
import BaseTag from '../../../../ui/baseTag/BaseTag';
import HomeTeam from './HomeTeam';
import Jessica from '../../../../../assets/images/Jessica.png';
import Smith from '../../../../../assets/images/Smith.png';
import Tylor from '../../../../../assets/images/Tylor.png';
import './index.scss';

export default function HomeTeams() {
  return (
    <div className="home-teams">
      <div className="home-teams__content">
        <BaseTag
          className="home-teams__content__tag"
          value="The Transporters"
        />
        <h3 className="home-teams__content__header">Meet Expert Team</h3>
        <div className="home-teams__content__team-mates">
          <HomeTeam name="Jessca Arow" image={Jessica} />
          <HomeTeam name="Kathleen Smith" image={Smith} />
          <HomeTeam name="Rebecca Tylor" image={Tylor} />
        </div>
      </div>
    </div>
  );
}
