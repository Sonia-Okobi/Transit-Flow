import React, { ReactNode } from 'react';

type HomeTeamProps = {
  image: string;
  name: string;
  socials?: string;
};

export default function HomeTeam({ image, name, socials }: HomeTeamProps) {
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
        <img src={socials} alt="Icons" />
      </div>
    </div>
  );
}
