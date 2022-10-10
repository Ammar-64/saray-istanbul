import React from "react";
import { useTranslation } from "react-i18next";
import experience from "../../img/experiance.jpg";
import safetyImg from "../../img/security.jpg";
import diversityImg from "../../img/diversity.jpg";
import flexibilityImg from "../../img/flexibility.jpg";
import professionalityImg from "../../img/professionality.jpg";
import partnershipImg from "../../img/partnership.jpg";

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
                    </div>
                    <h3>
                      {card.title} <i className={card.img} alt="img"></i>
                    </h3>
                    <p>{card.description}</p>
                    {/* <Link to="/service-single" className="cta-btn btn-border">
                    Read More
                  </Link> */}
                  </div>
                  <img src={photos[index]} alt="img" className="serviceImg" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
