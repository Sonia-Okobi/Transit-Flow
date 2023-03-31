import React from 'react';
import quote from '../../../../../assets/svg/quote.svg';
import star from '../../../../../assets/svg/Star.svg';
import './index.scss';

type HomeTestimonialProps = {
    className?: string
    avatar: string
    person: string
    designation: string
};

export default function HomeTestimonial({ className ,avatar, person, designation}: HomeTestimonialProps) {
  return (
    <div className={`home-testimonial ${className}`}>
      <div className="home-testimonial__top">
        <div className="home-testimonial__top__author">
          <img
            className="home-testimonial__top__author__avatar"
            src={avatar}
            alt="Avatar"
          />
          <div className="home-testimonial__top__author__details">
            <h5 className="name">{person}</h5>
            <p className="designation">{designation}</p>
          </div>
        </div>
        <img className="home-testimonial__top__icon" src={quote} alt="Icon" />
      </div>
      <p className="home-testimonial__testimony block-quote">
        Leverage agile frameworks to provide a robust synopsis for strategy
        foster collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment.
      </p>
      <div className="home-testimonial__rates">
        <img className="rate" src={star} alt="Rates" />
        <img className="rate" src={star} alt="Rates" />
        <img className="rate" src={star} alt="Rates" />
        <img className="rate" src={star} alt="Rates" />
        <img className="rate" src={star} alt="Rates" />
      </div>
    </div>
  );
}
