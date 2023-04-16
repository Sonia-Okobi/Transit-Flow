import React from 'react';
import BaseButton from '../../../../ui/button/BaseButton';
import BaseInput from '../../../../ui/input/input/BaseInput';
import BaseTextArea from '../../../../ui/input/input/BaseTextArea';
import green from '../../../../../assets/images/green.png';
import norto from '../../../../../assets/images/norto.png';
import points from '../../../../../assets/images/points.png';
import sandbox from '../../../../../assets/images/sandbox.png';
import BaseTag from '../../../../ui/baseTag/BaseTag';
import './index.scss';
import ContactDetail from '../../../../ui/contactDetail/ContactDetail';
import { contactDetails } from '../../resource';

type Props = {};

export default function HomeContact({}: Props) {
  const partners = [green, norto, points, sandbox];

  return (
    <div className="app-container home-contact">
      <div className="home-contact__content">
        <div className="home-contact__content__form-area">
          <div className="home-contact__content__form-area__details">
            <div className="home-contact__content__form-area__details__heading">
              <BaseTag className="contact-tag" value="Contact" />
              <h3 className="home-contact__content__form-area__details__heading__header">Get in touch with us</h3>
              <p className="description">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </p>
            </div>
            <div className="home-contact__content__form-area__details__info">
              {[contactDetails.email, contactDetails.call, contactDetails.clock].map((detail, index) => (
                <ContactDetail
                  icon={detail.icon}
                  title={detail.title}
                  value={detail.value}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="home-contact__content__form-area__form">
            <div className="home-contact__content__form-area__form__inputs">
              <BaseInput placeholder="Your name*" />
              <BaseInput placeholder="Email*" />
              <BaseInput placeholder="Phone Number*" />
              <BaseInput placeholder="City*" />
            </div>
            <BaseTextArea placeholder="Your Message" className="contact-text" />
            <BaseButton variant="primary">Submit Message</BaseButton>
          </div>
        </div>
        <div className="home-contact__content__patners">
          {partners.map((partner, index) => (
            <img src={partner} alt="Partners" key={index} className="partner" />
          ))}
        </div>
      </div>
    </div>
  );
}
