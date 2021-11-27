import React from "react";
import Logo from "../../img/logo_saray.png";
import MobileMenu from "../../components/MobileMenu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

import "./style.css";

const Header = () => {
  const [t, i18n] = useTranslation();

  const LANG_SPECS = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "ar",
      name: "العربية",
    },
    {
      code: "tr",
      name: "Türkçe",
    },
  ];

  const onClick = (e) => {
    e.preventDefault();
  };

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
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown">
                    <li>
                      <Link to="/">{t("header.navbar.home")}</Link>
                    </li>
                    <li>
                      <Link to="/about">{t("header.navbar.about")}</Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        {t("header.navbar.projects")}
                      </Link>
                      <ul>
                        <li>
                          <Link to="/projects">
                            {t("header.navbar.realEstateTurkey")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/projects-single">Project Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        {t("header.navbar.turkishNationality")}
                      </Link>
                      <ul>
                        <li>
                          <Link to="/service">
                            {t("header.navbar.turkishNationality")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-single">Service Details</Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <Link to="/" onClick={onClick}>
                        {t("header.navbar.investmentOpportunities")}
                      </Link>
                      <ul>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link to="/404">Error</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to="/" onClick={onClick}>
                        {t("header.navbar.blog")}
                      </Link>
                      <ul>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/blog-single">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">{t("header.navbar.contact")}</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action">
                <Link to="/contact" className="header-btn">
                  <div className="icon-holder">
                    <i className="far fa-envelope"></i>
                  </div>
                  {t("header.navbar.getInTouch")}
                </Link>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="none"
                    id="dropdown-basic"
                    className="languageIcon"
                  >
                    <i class="fas fa-globe"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {LANG_SPECS.map((lang) => {
                      return (
                        <Dropdown.Item
                          className="dropdownButton"
                          as="button"
                          key={lang.code}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                          }}
                        >
                          {lang.name}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
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
