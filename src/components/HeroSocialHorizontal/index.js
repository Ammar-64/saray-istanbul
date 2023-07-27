import React from "react";
import "./style.css";

import { SocialIcon } from "react-social-icons";

const HeroSocialHorizontal = () => {
  return (
    <div className="hero-social-horizon">
      <ul>
        <li>
          <a href="http://wa.me/905538777222" target="_blank" rel="noreferrer">
            <SocialIcon network="whatsapp" className="social-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/SARAYISTAN"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon network="facebook" className="social-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/sarayistan"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon
              network="instagram"
              className="social-icon"
              url="https://www.instagram.com/sarayistan"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/SARAYISTAN"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon network="twitter" className="social-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default HeroSocialHorizontal;
