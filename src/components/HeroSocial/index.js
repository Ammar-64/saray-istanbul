import React from "react";
import "./style.css";
// import { useTranslation } from "react-i18next";
// import {
//   FacebookIcon,
//   // InstagramIcon,
//   TwitterIcon,
//   WhatsappIcon,
// } from "react-share";
import { SocialIcon } from "react-social-icons";

const HeroSocial = () => {
  // const [t] = useTranslation();

  return (
    <div className="hero-social">
      <ul>
        <li>
          <a href="http://wa.me/905538777222" target="_blank" rel="noreferrer">
            <SocialIcon network="whatsapp" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/SARAYISTAN"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon network="facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/sarayistan"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon network="instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/SARAYISTAN"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon network="twitter" />
          </a>
        </li>
      </ul>
      {/* <p>{t("HeroSocial.followUs")}</p> */}
    </div>
  );
};
export default HeroSocial;
