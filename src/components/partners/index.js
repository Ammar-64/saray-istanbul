import React from "react";
import { useTranslation } from "react-i18next";

import azdanLogo from "../../img/azdanLogo.png";

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
                    <p>{t("home.partnerName")}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
