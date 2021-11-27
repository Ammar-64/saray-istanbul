import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import VideoModal from "../../components/ModalVideo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import hero1 from "../../img/header-slider.jpg";
import hero2 from "../../img/slider-2.png";
import HeroSocial from "../HeroSocial";
import "./style.css";

const Hero = () => {
  const { i18n } = useTranslation();
  const customSlider = useRef();

  const settings = {
    dots: false,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    cssEase: "linear",
    rtl: i18n.language === "ar" ? true : false,
  };

  return (
    <section className="hero-area">
      <HeroSocial />
      <div className={`hero-slider`}>
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
          <div className="slide">
            <div
              className={`hero-slide-item 

              `}
              // style={{ backgroundImage: `url(${hero1})` }}
            >
              <img src={hero1} alt="hero1" />
              <div className="container">
                <div className="hero-text">
                  <h2>
                    Lorem Ipsum <br />1
                  </h2>
                  <div className="hero-action">
                    <Link to="/projects" className="cta-btn btn-fill">
                      See Projects
                    </Link>
                    <Link to="/contact" className="cta-btn btn-border">
                      Get Contact
                    </Link>
                  </div>
                </div>
                {/* <div className="video-main">
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1" />
                      <div className="waves wave-2" />
                      <div className="waves wave-3" />
                    </div>
                  </div>
                  <VideoModal videoId="BqI0Q7e4kbk" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className={`hero-slide-item

              `}
              // style={{ backgroundImage: `url(${hero2})` }}
            >
              <img src={hero1} alt="hero1" />
              <div className="container">
                <div className="hero-text">
                  <h2>
                    Lorem Ipsum <br />2
                  </h2>
                  <div className="hero-action">
                    <Link to="/projects" className="cta-btn btn-fill">
                      See Projects
                    </Link>
                    <Link to="/contact" className="cta-btn btn-border">
                      Get Contact
                    </Link>
                  </div>
                </div>
                {/* <div className="video-main">
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1" />
                      <div className="waves wave-2" />
                      <div className="waves wave-3" />
                    </div>
                  </div>
                  <VideoModal videoId="WVPfu1yOOko" />
                </div> */}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
