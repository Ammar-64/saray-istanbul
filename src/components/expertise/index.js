import React from "react";
import { useTranslation } from "react-i18next";
import bg from "../../img/2.jpg";
import "./style.css";

const Expertise = () => {
  const { t } = useTranslation();
  return (
    <section className="expertise-area" dir="ltr">
      <div className="expertise-bg" style={{ backgroundImage: `url(${bg})` }} />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="expertise-inn">
              <div className="site-heading">
                <h3 className="sub-title">{t("aboutPage.epertise")}</h3>
                <h2 className="section-title">
                  {t("aboutPage.seeOurExpertise")}
                </h2>
              </div>
              <div className="skills-prog half">
                <div className="skillbar">
                  <h6>{t("aboutPage.realEstate")}</h6>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>60%</span>
                    </div>
                  </div>
                </div>
                <div className="skillbar">
                  <h6>{t("aboutPage.agriculture")}</h6>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>15%</span>
                    </div>
                  </div>
                </div>
                <div className="skillbar">
                  <h6>{t("aboutPage.industrial")}</h6>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
