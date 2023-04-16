import React from 'react';
import { contactDetails } from '../../modules/home/resource';
import ContactDetail from '../contactDetail/ContactDetail';
import Logo from '../logo/Logo';
import './index.scss'

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="app-container banner">
      <div className="banner__content">
        <Logo />
        <div className="banner__content__contact-details">
          {[
            contactDetails.clock,
            contactDetails.email,
            contactDetails.call,
          ].map((detail, index) => (
            <ContactDetail
              icon={detail.icon}
              title={detail.title}
              value={detail.value}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
