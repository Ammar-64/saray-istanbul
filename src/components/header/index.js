import React from "react";
import Logo from "../../img/logo_saray.png";
import MobileMenu from "../../components/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { Dropdown } from "react-bootstrap";

import "./style.css";

const Header = () => {
  const [t, i18n] = useTranslation();
  const baseUrl = "";
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

  // const [pathname, setPathname] = useState("");
  const onClick = (e) => {
    e.preventDefault();
  };
  // const handleClick = (lang) => {
  //   i18n.changeLanguage(lang);
  //   // e.preventDefault();
  // };
  // console.log(useLocation().pathname.replace);
  console.log(useLocation().pathname.split("/")[2]);
  const path = useLocation().pathname.split("/")[2];
  // useEffect(() => {
  //   const currentPathname = window.location.pathname.split("/");
  //   currentPathname[1] = i18n.language;
  //   currentPathname.join("/");
  //   setPathname(currentPathname.join("/"));
  // }, [i18n.language]);
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
                      <Link to={baseUrl + "/about"}>
                        {t("header.navbar.about")}
                      </Link>
                    </li>
                    <li>
                      <Link to={baseUrl + "/projects"}>
                        {t("header.navbar.realTurkey")}
                      </Link>
                      {/* <ul>
                        {/* <li>
                          <Link to={baseUrl + "/projects"}>
                            {t("header.navbar.realTurkey")}
                          </Link>
                        </li> */}
                      {/*<li>
                          <Link to={baseUrl + "/projects-istanbul"}>
                            {t("header.navbar.realIstanbul")}
                          </Link>
                        </li>
                        <li>
                          <Link to={baseUrl + "/projects-bursa"}>
                            {t("header.navbar.realBursa")}
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link to={baseUrl + "/citizenship"}>
                        {t("header.navbar.turkishCitizenship")}
                      </Link>
                      {/* <ul>
                        <li>
                          <Link to={baseUrl + "/service"}>
                            {t("header.navbar.turkishCitizenship")}
                          </Link>
                        </li>
                        <li>
                          <Link to={baseUrl + "/service-single"}>
                            Service Details
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    {/* <li>
                      <Link to={baseUrl + "/" onClick={onClick}>
                        {t("header.navbar.investmentOpportunities")}
                      </Link>
                      <ul>
                        <li>
                          <Link to={baseUrl + "/contact">Contact</Link>
                        </li>
                        <li>
                          <Link to={baseUrl + "/404">Error</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to={baseUrl + "/blog"}>
                        {t("header.navbar.blog")}
                      </Link>
                      {/* <ul>
                        <li>
                          <Link to={baseUrl + "/blog"}>
                            {" "}
                            {t("header.navbar.blog")}
                          </Link>
                        </li>
                        <li>
                          <Link to={baseUrl + "/blog-single"}>
                            Blog Details
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link to={baseUrl + "/contact"}>
                        {t("header.navbar.contact")}
                      </Link>
                    </li>
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
                      <li>
                        <Link
                          to={baseUrl + "/"}
                          onClick={onClick}
                          className="lang"
                        >
                          <i class="fas fa-globe"></i>
                        </Link>
                        <ul>
                          {LANG_SPECS.map((lang) => {
                            return (
                              <li>
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
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <Dropdown>
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
                </Dropdown> */}
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
