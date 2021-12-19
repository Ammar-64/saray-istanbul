import React from "react";
import { useTranslation } from "react-i18next";

import azdanLogo from "../../img/azdanLogo.png";
// import partnerImg1 from "../../img/partner-1.png";
// import partnerImg2 from "../../img/partner-2.png";
// import partnerImg3 from "../../img/partner-3.png";
// import partnerImg4 from "../../img/partner-4.png";
// import partnerImg5 from "../../img/partner-5.png";
// import partnerImg6 from "../../img/partner-6.png";
// import partnerImg7 from "../../img/partner-7.png";

import "./style.css";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <section className="partners-area pt-0" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="partner-inn">
              <h2 className="text-center">{t("home.partner")}</h2>
              <ul className="d-flex justify-content-center">
                <li>
                  <a
                    href="http://azdan.com.tr/ar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={azdanLogo} alt="img" />
                  </a>
                </li>
                {/* <li>
                  <img src={partnerImg2} alt="img" />
                </li>
                <li>
                  <img src={partnerImg3} alt="img" />
                </li>
                <li>
                  <img src={partnerImg7} alt="img" />
                </li>
                <li>
                  <img src={partnerImg7} alt="img" />
                </li>
                <li>
                  <img src={partnerImg5} alt="img" />
                </li>
                <li>
                  <img src={partnerImg6} alt="img" />
                </li>
                <li>
                  <img src={partnerImg4} alt="img" />
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
