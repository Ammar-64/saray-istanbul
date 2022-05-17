import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import hero1 from "../../img/P1.jpg";
import hero2 from "../../img/P2.jpg";
import hero3 from "../../img/P3.jpg";

import HeroSocial from "../HeroSocial";
import "./style.css";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const baseUrl = "";
  const customSlider = useRef();

  const settings = {
    dots: false,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <section className="hero-area">
      <HeroSocial />
      <div className={`hero-slider`} dir="ltr">
        <div className="hero_arrows">
          <button
            className="button"
            onClick={() => customSlider.current.slickPrev()}
          >
            <i className="fas fa-angle-left"></i>
          </button>
          <button
            className="button"
            onClick={() => customSlider.current.slickNext()}
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
        <Slider ref={customSlider} {...settings}>
          <div className="slide" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
            <div
              className={`hero-slide-item`}
              style={{ backgroundImage: `url(${hero1})` }}
            >
              <div className="container">
                <div className="hero-text">
                  <h2>{t("home.hero.header1")}</h2>
                  <div className="hero-action">
                    <Link
                      to={baseUrl + "/projects"}
                      className="cta-btn btn-fill"
                    >
                      {t("home.hero.seeProjects")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
            <div
              className={`hero-slide-item

              `}
              style={{ backgroundImage: `url(${hero2})` }}
            >
              <div className="container">
                <div className="hero-text">
                  <h2>{t("home.hero.header2")}</h2>
                  <div className="hero-action">
                    <Link to={baseUrl + "/blog"} className="cta-btn btn-fill">
                      {t("home.hero.checkBlogs")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
            <div
              className={`hero-slide-item

              `}
              style={{ backgroundImage: `url(${hero3})` }}
            >
              <div className="container">
                <div className="hero-text">
                  <h2>{t("home.hero.header3")}</h2>
                  <div className="hero-action">
                    <Link
                      to={baseUrl + "/citizenship"}
                      className="cta-btn btn-fill"
                    >
                      {t("home.hero.checkcitizenship")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
