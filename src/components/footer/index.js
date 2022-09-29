import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";

const Footer = () => {
  const [t] = useTranslation();
  const baseUrl = "";

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
              <div className="single-footer">
                <h3>{t("header.navbar.about")}</h3>
                <p>{t("aboutPage.whoAreWeText")}</p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
              <div className="single-footer">
                <h3>{t("footer.qucikLinks")}</h3>
                <ul>
                  <li>
                    <Link to={baseUrl + "/about"}>
                      {t("header.navbar.about")}
                    </Link>
                  </li>
                  <li>
                    <Link to={baseUrl + "/projects"}>
                      {t("header.navbar.realTurkey")}
                    </Link>
                  </li>
                  <li>
                    <Link to={baseUrl + "/citizenship"}>
                      {t("header.navbar.turkishCitizenship")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">{t("header.navbar.contact")}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
              <div className="single-footer">
                <h3>{t("footer.explore")}</h3>
                <ul>
                  <li>
                    <Link to={baseUrl + "/blog"}>
                      {t("header.navbar.blog")}
                    </Link>
                  </li>

                  <li>
                    <Link to="/privacy-policy">{t("footer.privacy")}</Link>
                  </li>
                  <li>
                    <Link to="/">{t("footer.terms")}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
              <div className="single-footer">
                <ul className="footer-social">
                  <li>
                    <a
                      href="http://wa.me/905538777222"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/SARAYISTAN"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/sarayistan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/SARAYISTAN"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
                <ul className="footer-contact">
                  <li>
                    <i className="fas fa-phone-square-alt" /> 00905538777222
                  </li>
                  <li>
                    <i className="fas fa-envelope" /> info@sarayistanbul.com.tr
                  </li>
                  <li>
                    <i className="fas fa-map" /> {t("footer.adress")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fade_rule" />
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>&copy; {t("footer.copyright")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
