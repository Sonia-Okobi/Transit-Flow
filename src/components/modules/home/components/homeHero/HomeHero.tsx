import React from 'react';
import BaseTag from '../../../../ui/baseTag/BaseTag';
import BaseButton from '../../../../ui/button/BaseButton';
import NavBar from '../../../../ui/navBar/NavBar';
import './index.scss';

type Props = {};

export default function HomeHero({}: Props) {
  return (
    <div className="home-hero">
      <NavBar />
      <div className="home-hero__content">
        <BaseTag value="Logistics & Supply Chain Solutions" className='hero-tag' />
        <h1 className="home-hero__content__header">
          Your Gateway to any Destination in the World
        </h1>
        <p className="home-hero__content__description">
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.{' '}
        </p>
        <BaseButton variant="primary">Explore More</BaseButton>
      </div>
    </div>
  );
}
