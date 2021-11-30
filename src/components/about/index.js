import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import bg from "../../img/about-bg.png";
import img1 from "../../img/about-1.png";
import img2 from "../../img/about-2.png";
import signature from "../../img/signature.png";

import "./style.css";

const About = () => {
  const [t] = useTranslation();
  return (
    <section className="about-area" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-left" data-aos="fade-right">
              <div className="site-heading">
                <h3 className="sub-title">{t("about.aboutUs")}</h3>
                <h2 className="section-title">{t("about.slogan")}</h2>
              </div>
              <p>{t("about.aboutUsText")}</p>

              <div className="about-signature">
                <div className="signature-left">
                  <img src={signature} alt="signature" />
                </div>
                {/* <div className="signature-right">
                  <h3>Robertho Garcia</h3>
                  <p>President</p>
                </div> */}
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
                <p>{t("about.numberOfProjects")}</p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={112} duration={2.5} />
                  </span>
                  +
                </h2>
                <p>{t("about.numberOfInvestors")}</p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={31} duration={2} />
                  </span>
                  +
                </h2>
                <p>{t("about.numberOfEmployees")}</p>
              </div>
            </div>
            <div className="about-right" data-aos="fade-left">
              <img className="about_img_1" src={img2} alt="img" />
              <img className="about_img_2" src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
