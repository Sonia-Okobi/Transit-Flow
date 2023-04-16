import React from 'react';
import BaseTag from '../../../../ui/baseTag/BaseTag';
import zealand from '../../../../../assets/images/zealand.png';
import girl from '../../../../../assets/images/girl.png';
import './index.scss';
import delivery from '../../../../../assets/svg/package.svg'
import cost from '../../../../../assets/svg/cost.svg'
import List from '../../../../ui/lists/List';


type Props = {};

export default function HomeWhyUs({}: Props) {
  return (
    <div className="app-container home-why-us">
      <div className="home-why-us__content">
        <div className="home-why-us__content__top">
          <div className="home-why-us__content__top__text">
            <BaseTag value="Why Us" />
            <h3 className="home-why-us__content__top__text__header">
              We provide full range global logistics solution
            </h3>
            <p className="home-why-us__content__top__text__description">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. <br /> <br /> Organically grow the holistic
              world view of disruptive innovation via workplace diversity and
              empowerment.
            </p>
            <div className="home-why-us__content__top__text__lists">
                <List icon={delivery} text='Delivery on Time'/>
                <List icon={cost} text='Optimized Travel Cost'/>
            </div>
          </div>
          <div className="home-why-us__content__top__image">
            <div className="home-why-us__content__top__image__image1">
              <img src={zealand} alt="Airplane" />
            </div>
            <div className="home-why-us__content__top__image__image2">
              <img src={girl} alt="Image of a girl" />
            </div>
          </div>
        </div>
        <div className="home-why-us__content__base">
          <div className='home-why-us__content__base__text packages'>
            <h2>1294</h2>
            <div className='home-why-us__content__base__text__pattern'></div>
            <p className='home-why-us__content__base__text__services text--md'>Delivered Packages</p>
          </div>
          <div className='home-why-us__content__base__text clients'>
            <h2>3594</h2>
            <div className='home-why-us__content__base__text__pattern'></div>
            <p className='home-why-us__content__base__text__services text--md'>Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}
