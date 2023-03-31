import React, { ReactNode } from 'react';
import linkedin from '../../../../../assets/svg/dark-linkedin.svg';
import twitter from '../../../../../assets/svg/dark-twitter.svg';
import facebook from '../../../../../assets/svg/dark-facebook.svg';
import instagram from '../../../../../assets/svg/dark-instagram.svg';

type HomeTeamProps = {
  image: string;
  name: string;
 
  
};

export default function HomeTeam({ image, name}: HomeTeamProps) {
  return (
    <div className="home-team">
      <div className="home-team__image">
        <img src={image} alt="Team" />
      </div>
      <div className="home-team__details">
        <h5 className="home-team__details__name">{name}</h5>
        <p className="home-team__details__role">Designer</p>
      </div>
      <div className="home-team__socials">
        {linkedin ? <img src={linkedin} alt="Icons" /> : null}
        {twitter ? <img src={twitter} alt="Icons" /> : null}
        {facebook ? <img src={facebook} alt="Icons" /> : null}
        {instagram ? <img src={instagram} alt="Icons" /> : null}
      </div>
    </div>
  );
}
