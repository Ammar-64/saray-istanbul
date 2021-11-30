import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./style.css";

const MobileMenu = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isOpen, setIsOpen] = useState(0);
  const [t, i18n] = useTranslation();

  const baseUrl = "/" + i18n.language;
  const menus = [
    {
      id: 1,
      title: t("header.navbar.home"),
      link: "/home",
    },

    {
      id: 2,
      title: t("header.navbar.about"),
      link: "/about",
    },

    {
      id: 3,
      title: t("header.navbar.realTurkey"),
      link: "/projects",
      submenu: [
        {
          id: 31,
          title: t("header.navbar.realIstanbul"),
          link: "/projects",
        },
      ],
    },
    {
      id: 4,
      title: t("header.navbar.turkishCitizenship"),
      link: "/service",
      submenu: [
        {
          id: 41,
          title: t("header.navbar.turkishCitizenship"),
          link: "/service",
        },
        {
          id: 42,
          title: t("header.navbar.turkishCitizenship"),
          link: "/service",
        },
      ],
    },
    {
      id: 7,
      title: t("header.navbar.blog"),
      link: "/blog",
      // submenu: [
      // {
      //   id: 71,
      //   title: "Portfolio",
      //   link: "/portfolio",
      // },
      // {
      //   id: 75,
      //   title: "Team",
      //   link: "/team",
      // },
      // {
      //   id: 76,
      //   title: "Faq",
      //   link: "/faq",
      // },
      // {
      //   id: 79,
      //   title: "Contact",
      //   link: "/contact",
      // },
      // {
      //   id: 70,
      //   title: "Error",
      //   link: "/404",
      // },
      // ],
    },

    {
      id: 88,
      title: t("header.navbar.contact"),
      link: "/contact",
    },
  ];
  const menuHandler = () => {
    setIsMenuShow(!isMenuShow);
  };

  const setIsOpenMenu = (id) => {
    setIsOpen(id === isOpen ? 0 : id);
  };

  return (
    <div className="responsiveMenu">
      <nav
        id="mobileMenu"
        className={`mobileMenu ${isMenuShow ? "active" : ""}`}
      >
        <ul className="responsivemenu">
          {menus.map((item) => {
            return (
              <li key={item.id}>
                {item.submenu ? (
                  <p
                    onClick={() => setIsOpenMenu(item.id)}
                    aria-expanded={isMenuShow}
                  >
                    {item.title}
                    {item.submenu ? "" : ""}
                  </p>
                ) : (
                  <Link to={baseUrl + item.link}>{item.title}</Link>
                )}

                {item.submenu ? (
                  <Collapse in={item.id === isOpen}>
                    <ul className="sub-menu">
                      {item.submenu.map((submenu) => (
                        <li key={submenu.id}>
                          <Link className="active" to={baseUrl + submenu.link}>
                            {submenu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Collapse>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className={`spinner-master ${isMenuShow ? "active" : ""}`}
        onClick={menuHandler}
      >
        <div id="spinner-form" className="spinner-spin">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
