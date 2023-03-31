import React from 'react';

type ServiceProps = {
  icon: string;
  title: string;
};

export default function Service({ icon, title }: ServiceProps) {
  return (
    <div className="service">
      <img src={icon} alt="Icon" className="service__icon" />
      <div className="service__text">
        <h4>{title}</h4>
        <p className="service__text__description">
          Following the quality of our service thus having gained trust of our
          many clients.
        </p>
      </div>
    </div>
  );
}
