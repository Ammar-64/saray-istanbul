import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

const HeroSocial = () => {
  const [t] = useTranslation();

  return (
    <div className="hero-social">
      <ul>
        <li>
          <a href="http://wa.me/905538777222" target="_blank">
            <i className="fab fa-whatsapp" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/SARAYISTAN" target="_blank">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sarayistan" target="_blank">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/SARAYISTAN" target="_blank">
            <i className="fab fa-twitter" />
          </a>
        </li>
      </ul>
      <p>{t("HeroSocial.followUs")}</p>
    </div>
  );
};
export default HeroSocial;
