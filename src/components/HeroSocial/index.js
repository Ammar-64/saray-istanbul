import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import {
  FacebookIcon,
  // InstagramIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
  TelegramIcon,
} from "react-share";

const HeroSocial = () => {
  const [t] = useTranslation();

  return (
    <div className="hero-social">
      <ul>
        <li>
          <a href="http://wa.me/905538777222" target="_blank">
            <WhatsappIcon size={42} round />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/SARAYISTAN" target="_blank">
            <FacebookIcon size={42} round />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sarayistan" target="_blank">
            {/* <InstagramIcon size={32} round /> */}
          </a>
        </li>
        <li>
          <a href="https://twitter.com/SARAYISTAN" target="_blank">
            <TwitterIcon size={42} round />
          </a>
        </li>
      </ul>
      <p>{t("HeroSocial.followUs")}</p>
    </div>
  );
};
export default HeroSocial;
