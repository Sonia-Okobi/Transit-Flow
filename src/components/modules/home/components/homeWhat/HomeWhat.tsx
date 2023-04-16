import React from 'react';
import BaseTag from '../../../../ui/baseTag/BaseTag';
import './index.scss';
import {solutions} from '../../resource'
import Service from './Service';

type Props = {};

export default function HomeWhat({}: Props) {
  return (
    <div className="app-container home-what">
      <div className="home-what__content">
        <div className="home-what__content__heading">
          <BaseTag value="What We Do" />
          <h3 className="home-what__content__heading__header">
            Safe & Reliable Cargo Solutions
          </h3>
        </div>
        <div className="home-what__content__services">
           {solutions.map((solution, index) => (
            <Service icon={solution.icon} title={solution.title} key={index}/>
           ))}
        </div>
      </div>
    </div>
  );
}
