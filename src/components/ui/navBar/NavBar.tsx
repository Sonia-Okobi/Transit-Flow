import React from 'react';
import instagram from '../../../assets/svg/white-instagram.svg';
import facebook from '../../../assets/svg/white-facebook.svg';
import twitter from '../../../assets/svg/white-twitter.svg';
import linkedin from '../../../assets/svg/white-linkedin.svg';
import './index.scss';
import down from '../../../assets/svg/drop-down.svg';

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="nav-bar">
      <div className="nav-bar__content">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">
              Pages{' '}
              <span>
                <img src={down} alt="Drop Down" />
              </span>
            </a>
          </li>
          <li><a href="/">Project</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
        <div className="nav-bar__content__info">
          <div className="nav-bar__content__info__socials">
            <a href="/">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="/">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="/">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="/">
              <img src={linkedin} alt="Linkedin" />
            </a>
          </div>
          <button className="nav-bar__content__info__button">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}
