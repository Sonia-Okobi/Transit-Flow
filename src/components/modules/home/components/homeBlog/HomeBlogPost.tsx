import React, { ReactNode } from 'react';
import calendar from '../../../../../assets/svg/calendar.svg';
import './index.scss';

type BlogPostProps = {
  image: string
  date: string
  title: string
};

export default function HomeBlogPost({ image, date, title }: BlogPostProps) {
  return (
    <div className="home-blog-post">
      <div className="home-blog-post__image">
        <img src={image} alt="Image" />
        <div className="home-blog-post__image__hover">
          <p className="home-blog-post__image__hover__text text--sm">Read More</p>
        </div>
      </div>
      <div className="home-blog-post__calendar">
        <img
          src={calendar}
          alt="Calendar"
          className="home-blog-post__calendar__icon"
        />
        <p className="home-blog-post__calendar__date text--3xl">{date}</p>
        <p className="home-blog-post__calendar__month text--sm">September</p>
      </div>
      <div className="home-blog-post__text">
        <h4 className="home-blog-post__text__title">{title}</h4>
        <p className="home-blog-post__text__description">
          We are dedicated in creating added value for our customers by
          implementing modern technology in our work.{' '}
        </p>
        <ul className="home-blog-post__text__list text--sm">
          <li>Urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
          <li>Urgent transport solutions </li>
          <li>Reliable & experienced staffs</li>
        </ul>
      </div>
    </div>
  );
}
