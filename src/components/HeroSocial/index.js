import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HeroSocial = () => {
  return (
    <div className="hero-social">
      <ul>
        <li>
          <Link to="/">
            <i className="fab fa-pinterest-p" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fab fa-facebook-f" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fab fa-instagram" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fab fa-twitter" />
          </Link>
        </li>
      </ul>
      <p>Follow Us</p>
    </div>
  );
};
export default HeroSocial;
