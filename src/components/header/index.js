import React from "react";
import Logo from "../../img/logo_saray.png";
import MobileMenu from "../../components/MobileMenu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./style.css";

const Header = () => {
  const [t, i18n] = useTranslation();
  const baseUrl = "";
  // const LANG_SPECS = [
  //   {
  //     code: "en",
  //     name: "English",
  //   },
  //   {
  //     code: "ar",
  //     name: "العربية",
  //   },
  //   {
  //     code: "tr",
  //     name: "Türkçe",
  //   },
  // ];

  const BUILDING_TYPES = [
    {
      code: "apartments",
      name: t("header.navbar.apartments"),
    },
    {
      code: "villas",
      name: t("header.navbar.villas"),
    },
  ];

  // const onClick = (e) => {
  //   e.preventDefault();
  // };

  return (
    <header
      className={`header ${
        i18n.language === "ar" ? "headerRight" : "headerLeft"
      }`}
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="header-inn">
            <div className="site-logo">
              <Link to={baseUrl + "/"}>
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown">
                    <li>
                      <Link to={baseUrl + "/"}>{t("header.navbar.home")}</Link>
                    </li>

                    <li>
                      <Link to={baseUrl + "/projects"}>
                        {t("header.navbar.realTurkey")}
                      </Link>
                      <ul>
                        {BUILDING_TYPES.map((type, index) => {
                          return (
                            <li key={index}>
                              <Link to={`/projects/${type.code}`}>
                                {type.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li>
                      <Link to={baseUrl + "/citizenship"}>
                        {t("header.navbar.turkishCitizenship")}
                      </Link>
                    </li>
                    <li>
                      <Link to={baseUrl + "/realestateresidence"}>
                        الإقامة العقارية
                      </Link>
                    </li>
                    <li>
                      <Link to={baseUrl + "/blog"}>
                        {t("header.navbar.blog")}
                      </Link>
                    </li>
                    <li>
                      <Link to={baseUrl + "/about"}>
                        {t("header.navbar.about")}
                      </Link>
                    </li>
                    {/* <li>
                      <Link to={baseUrl + "/contact"}>
                        {t("header.navbar.contact")}
                      </Link>
                    </li> */}
                  </ul>
                </nav>
              </div>
              <div className="header-action">
                <Link to={baseUrl + "/contact"} className="header-btn">
                  <div className="icon-holder">
                    <i className="far fa-envelope"></i>
                  </div>
                  {t("header.navbar.getInTouch")}
                </Link>
                <div className="mainmenu">
                  <nav id="menu">
                    <ul className="dropdown">
                      {/* <li>
                        <Link
                          to={baseUrl + "/"}
                          onClick={onClick}
                          className="lang"
                        >
                          <i className="fas fa-globe"></i>
                        </Link>
                        <ul>
                          {LANG_SPECS.map((lang, index) => {
                            return (
                              <li key={index}>
                                <Link
                                  to={`/`}
                                  key={lang.code}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    i18n.changeLanguage(lang.code);
                                  }}
                                >
                                  {lang.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
