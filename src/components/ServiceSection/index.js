import React from "react";
import { useTranslation } from "react-i18next";
// import test from "../../img/testPG.jpeg";
import experience from "../../img/experience.jpg";
import safetyImg from "../../img/safetyImg.jpg";
import diversityImg from "../../img/diversityImg.jpg";
import flexibilityImg from "../../img/flexibilityImg.jpg";
import professionalityImg from "../../img/professionalityImg.jpg";
import partnershipImg from "../../img/partnershipImg.jpg";

import "./style.css";

const ServiceSection = () => {
  const [t] = useTranslation();
  const cards = [...t("cards", { returnObjects: true })];
  const photos = [
    experience,
    safetyImg,
    diversityImg,
    flexibilityImg,
    professionalityImg,
    partnershipImg,
  ];

  return (
    <section className="service-area">
      <div className="container">
        <div className="row justify-content-center">
          {cards.length > 0 &&
            cards.map((card, index) => (
              <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                <div
                  className="service-box service-box-modified"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="service-text">
                    <div className="service-icon">
                      {/* <img src={serviceIcon1} alt="img" /> */}
                      <i className={card.img} alt="img"></i>
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    {/* <Link to="/service-single" className="cta-btn btn-border">
                    Read More
                  </Link> */}
                  </div>
                  <img src={photos[index]} alt="img" className="serviceImg" />
                </div>
              </div>
            ))}
          {/* <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <img src={serviceIcon1} alt="img" />
              </div>
              <div className="service-text">
                <h3>Interior Design</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg1} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="service-icon">
                <img src={serviceIcon2} alt="img" />
              </div>
              <div className="service-text">
                <h3>Architecture</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg2} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-icon">
                <img src={serviceIcon3} alt="img" />
              </div>
              <div className="service-text">
                <h3>House Planning</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg3} alt="img" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
