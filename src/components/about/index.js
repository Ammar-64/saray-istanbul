import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import homeAboutBG from "../../img/homeAbout.jpg";
import homeAboutBGRtl from "../../img/homeAboutRtl.jpg";
import homeAboutOuter from "../../img/front.jpeg";
import homeAboutOuter2 from "../../img/back.jpeg";
import { Link } from "react-router-dom";

import "./style.css";

const About = () => {
  const [t, i18n] = useTranslation();
  const baseUrl = "";
  return (
    <section
      className="about-area"
      style={{
        backgroundImage: `url(${
          i18n.language === "ar" ? homeAboutBGRtl : homeAboutBG
        })`,
      }}
    >
      <div className="container">
        <div className="mb-5">
          <h2 className="section-title" style={{ color: "#c1952b" }}>
            {t("header.navbar.about")}
          </h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-left" data-aos="fade-right">
              <div className="site-heading">
                <h3 className="sub-title">{t("home.about.aboutUs")}</h3>
                <p>{t("home.about.aboutUsText")}</p>

                <h3 className="sub-title">{t("aboutPage.vision")}</h3>
                <p>{t("aboutPage.visionText")}</p>

                <h3 className="sub-title">{t("aboutPage.mission")}</h3>
                <p>{t("aboutPage.missionText")}</p>

                <div className="hero-action">
                  <Link to={baseUrl + "/about"} className="cta-btn btn-fill">
                    {t("home.hero.checkAbout")}
                  </Link>
                </div>
              </div>

              <div className="about-signature">
                <div className="signature-left"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-counter">
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={19} duration={2} />
                  </span>
                </h2>
                <p>{t("home.about.numberOfProjects")}</p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={112} duration={2.5} />
                  </span>
                  +
                </h2>
                <p>{t("home.about.numberOfInvestors")}</p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={31} duration={2} />
                  </span>
                  +
                </h2>
                <p>{t("home.about.numberOfEmployees")}</p>
              </div>
            </div>
            <div className="about-right" data-aos="fade-left">
              <img className="about_img_1" src={homeAboutOuter2} alt="img" />
              <img className="about_img_2" src={homeAboutOuter} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
