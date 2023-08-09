import React from "react";
import { useTranslation } from "react-i18next";

import "./style.css";

const ServiceList = () => {
  const { t } = useTranslation();
  const requirements = [
    ...t("citizenShip.requiredDocs", { returnObjects: true }),
  ];
  // const familyRequirments = [
  //   ...t("citizenShip.requiredDocs", { returnObjects: true }),
  // ];
  return (
    <section className="blog-page-area">
      <div className="container">
        <div className="row">
          <div>
            <div className="blog-left">
              <div className="row">
                <div className="col-lg-12"></div>
              </div>
              <div className="blog-left-content">
                <div className="blog-info"></div>
                <h2>{t("citizenShip.title")}</h2>
                <p>{t("citizenShip.firstParagraph")}</p>
                <p>{t("citizenShip.secondParagraph")}</p>
                <div className="requirements">
                  <h3>{t("citizenShip.header1")}</h3>
                  <br />
                  <ol>
                    {requirements.map((el) => (
                      <li>{el}</li>
                    ))}
                  </ol>
                </div>
                {/* <div className="requirements">
                  <h3>{t("citizenShip.header2")}</h3>
                  <br />
                  <ol>
                    {familyRequirments.map((el) => (
                      <li>{el}</li>
                    ))}
                  </ol>
                </div> */}
                <p>{t("citizenShip.thirdParagraph")}</p>
                <p>{t("citizenShip.fourthParagraph")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
