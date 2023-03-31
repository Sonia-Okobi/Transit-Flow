import React from 'react';
import BaseTag from '../../../../ui/baseTag/BaseTag';
import left from '../../../../../assets/svg/slider-left.svg';
import right from '../../../../../assets/svg/slider-right.svg';
import './index.scss';
import HomeTestimonial from './HomeTestimonial';
import kathleen from '../../../../../assets/svg/kathleen.svg'
import john from '../../../../../assets/svg/john.svg'

export default function HomeTestimonials() {
  return (
    <div className="home-testimonials">
      <div className="home-testimonials__content">
        <BaseTag value="Testimonial" />
        <div className="home-testimonials__content__slider-header">
          <h3>What Our Customer Say</h3>
          <div className="home-testimonials__content__slider-header__controls">
            <button className="slider-left">
              <img src={left} alt="Button" />
            </button>
            <button className="slider-right">
              <img src={right} alt="Button" />
            </button>
          </div>
        </div>
        <div className="home-testimonials__content__slider-card">
          <HomeTestimonial avatar={kathleen} person='Kathleen Smith' designation='Fuel Company' className='slider-light'/>
          <HomeTestimonial avatar={john} person='John Martin' designation='Restoration Company'className='slider-dark'/>
        </div>
      </div>
    </div>
  );
}
