import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },

  {
    id: 2,
    title: "About",
    link: "/about",
  },

  {
    id: 3,
    title: "Project",
    link: "/projects",
    submenu: [
      {
        id: 31,
        title: "Project",
        link: "/projects",
      },
      {
        id: 32,
        title: "Project Details",
        link: "/projects-single",
      },
    ],
  },
  {
    id: 4,
    title: "Service",
    link: "/service",
    submenu: [
      {
        id: 41,
        title: "Service",
        link: "/service",
      },
      {
        id: 42,
        title: "Service Details",
        link: "/service-single",
      },
    ],
  },
  {
    id: 7,
    title: "Pages",
    link: "/",
    submenu: [
      {
        id: 71,
        title: "Portfolio",
        link: "/portfolio",
      },
      {
        id: 75,
        title: "Team",
        link: "/team",
      },
      {
        id: 76,
        title: "Faq",
        link: "/faq",
      },

      {
        id: 79,
        title: "Contact",
        link: "/contact",
      },
      {
        id: 70,
        title: "Error",
        link: "/404",
      },
    ],
  },

  {
    id: 5,
    title: "Blog",
    link: "/blog",
    submenu: [
      {
        id: 51,
        title: "Blog",
        link: "/blog",
      },
      {
        id: 52,
        title: "Blog Single",
        link: "/blog-single",
      },
    ],
  },
  {
    id: 88,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isOpen, setIsOpen] = useState(0);
  const [t, i18n] = useTranslation();

  const baseUrl = "/" + i18n.language;

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
