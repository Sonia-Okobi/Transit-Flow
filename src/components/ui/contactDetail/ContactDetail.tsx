import React from 'react';
import './index.scss';

type ContactDetailProps = {
  icon: string;
  title: string;
  value: string;
};

export default function ContactDetail({
  icon,
  title,
  value,
}: ContactDetailProps) {
  return (
    <div className="contact-detail">
      <img className="contact-detail__icon" src={icon} alt="Icon" />
      <div className="contact-detail__text">
        <p className="contact-detail__text__title">{title}</p>
        <p className="contact-detail__text__value">{value}</p>
      </div>
    </div>
  );
}
