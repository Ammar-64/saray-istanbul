import React from "react";
import { useTranslation } from "react-i18next";

import Icon1 from "../../img/logo01-1.png";
import Icon2 from "../../img/logo02-1.png";
import Icon3 from "../../img/logo03-1.png";
import img1 from "../../img/about-3.png";
import img2 from "../../img/about-4.png";
import "./style.css";

const Feature = () => {
  const { t } = useTranslation();
  return (
    <section className="about-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading text-center">
              <h3 className="sub-title">{t("aboutPage.sarayIstanbul")}</h3>
              <h2 className="section-title">
                {t("aboutPage.slogan")}
                {/* <br /> architecture and interior design */}
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-left">
              <div className="single-about-listing">
                <div className="about-icon">
                  <img src={Icon1} alt="icon" />
                </div>
                <div className="about-text">
                  <h3>{t("aboutPage.whoAreWe")}</h3>
                  <p>{t("aboutPage.whoAreWeText")}</p>
                </div>
              </div>
              <div
                className="single-about-listing wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="about-icon">
                  <img src={Icon2} alt="icon" />
                </div>
                <div className="about-text">
                  <h3>{t("aboutPage.vision")}</h3>
                  <p>{t("aboutPage.visionText")}</p>
                </div>
              </div>
              <div
                className="single-about-listing wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="about-icon">
                  <img src={Icon3} alt="icon" />
                </div>
                <div className="about-text">
                  <h3>{t("aboutPage.mission")}</h3>
                  <p>{t("aboutPage.missionText")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-right">
              <div className="single-about-image">
                <img src={img1} alt="img" />
              </div>
              <div className="single-about-image">
                <img src={img2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feature;
