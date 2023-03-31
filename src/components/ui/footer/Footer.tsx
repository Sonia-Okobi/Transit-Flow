import React from 'react';
import footer from '../../../assets/images/footer-image.png';
import { contactDetails } from '../../modules/home/resource';
import BaseButton from '../button/BaseButton';
import ContactDetail from '../contactDetail/ContactDetail';
import BaseInput from '../input/input/BaseInput';
import Logo from '../logo/Logo';
import './index.scss';
import linkedin from '../../../assets/svg/white-linkedin.svg';
import twitter from '../../../assets/svg/white-twitter.svg';
import facebook from '../../../assets/svg/white-facebook.svg';

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="footer">
      <img src={footer} alt="Port" className="footer-image" />
      <div className="footer__content">
        <div className="footer__content__text">
          <div className="footer__content__text__banner">
            <div className="footer-logo">
              <Logo />
            </div>

            <ul className="footer__content__text__banner__header">
              <li>Pages</li>
              <li>Utility</li>
              <li>Subscribe</li>
            </ul>
          </div>
          <div className="footer__content__text__body">
            <div className="footer__content__text__body__info">
              <p className="footer__content__text__body__info__description text--sm">
                Leverage agile frameworks to provide a robust synopsis for
                strategy collaborative thinking to further the overall value
                proposition.
              </p>
              <div className="footer__content__text__body__info__contact-details">
                {[contactDetails.email, contactDetails.call].map(
                  (detail, index) => (
                    <ContactDetail
                      icon={detail.icon}
                      title={detail.title}
                      value={detail.value}
                      key={index}
                    />
                  )
                )}
              </div>
            </div>
            <ul className="footer__content__text__body__links pages">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Our Team</a></li>
              <li><a href="/">Our Project</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
            <ul className="footer__content__text__body__links utility">
              <li><a href="/">Style Guide</a></li>
              <li><a href="/">Changelog</a></li>
              <li><a href="/">Licenses</a></li>
              <li><a href="/">Protected</a></li>
              <li><a href="/">Not Found</a></li>
            </ul>
            <div className="footer__content__text__body__links subscribe">
              <BaseInput placeholder="Email here*" />
              <div className="subscribe-buttons">
                <BaseButton variant="primary">Send Now</BaseButton>
                <div className="subscribe-socials">
                  <a href="/">
                    <img src={linkedin} alt="Linkedin" />
                  </a>
                  <a href="/">
                    <img src={twitter} alt="Twitter" />
                  </a>
                  <a href="/">
                    <img src={facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__content__text__base">
            <p className="footer__content__text__base__copyright">
              Copyright © TransitFlow | Designed by VictorFlow - Powered by
              Webflow.
            </p>
            <ul className="footer__content__text__base__links">
              <li>Style Guide</li>
              <li>Licenses </li>
              <li>Changelog </li>
              <li>Password</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
