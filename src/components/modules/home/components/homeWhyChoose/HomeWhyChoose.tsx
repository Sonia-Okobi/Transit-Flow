import React from 'react';
import BaseTag from '../../../../ui/baseTag/BaseTag';
import airplane from '../../../../../assets/images/airplane.png';
import icon from '../../../../../assets/svg/airplane.svg';
import './index.scss';
import { lists } from '../../resource';
import List from '../../../../ui/lists/List';

type Props = {};

export default function HomeWhyChoose({}: Props) {
  return (
    <div className="home-why-choose">
      <div className="home-why-choose__content">
        <div className="home-why-choose__content__background">
          <div className="home-why-choose__content__background__image">
            <img src={airplane} alt="Airplane" />
            <div className="home-why-choose__content__background__image__tag">
              <img
                src={icon}
                alt="Icon"
                className="home-why-choose__content__background__image__tag__icon"
              />
              <h4 className="home-why-choose__content__background__image__tag__text">
                Moving your products across borders
              </h4>
            </div>
          </div>
        </div>

        <div className="home-why-choose__content__text">
          <BaseTag value="Why Choose" />
          <h3 className="home-why-choose__content__text__header">
            We create opportunity to reach potential
          </h3>
          <p className="home-why-choose__content__text__description">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.{' '}
          </p>
          <div className="home-why-choose__content__text__lists">
            {lists.map((list, index) => (
                <List icon={list.icon} text={list.text} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
