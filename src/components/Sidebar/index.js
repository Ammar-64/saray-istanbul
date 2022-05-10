import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../../img/post-1.jpg";
import Img2 from "../../img/post-2.jpg";
import Img3 from "../../img/post-3.jpg";
import Img4 from "../../img/post-4.jpg";
import Img5 from "../../img/post-5.jpg";

import "./style.css";

const Sidebar = () => {
  return (
    <div className="col-lg-4 col-md-5">
      <div className="blog-sidebar" data-aos="fade-up">
        <div className="sidebar-tags" data-aos="fade-up">
          <div className="blog-sidebar-heading">
            <h3>Tags</h3>
          </div>
          <ul>
            <li>
              <Link to="/blog">Interior</Link>
            </li>
            <li>
              <Link to="/blog">Painting</Link>
            </li>
            <li>
              <Link to="/blog">Constraction</Link>
            </li>
            <li>
              <Link to="/blog">Ingineering</Link>
            </li>
            <li>
              <Link to="/blog">Consultanty</Link>
            </li>
            <li>
              <Link to="/blog">Property</Link>
            </li>
            <li>
              <Link to="/blog">Swimming Pool</Link>
            </li>
            <li>
              <Link to="/blog">Garden</Link>
            </li>
            <li>
              <Link to="/blog">Furniture</Link>
            </li>
            <li>
              <Link to="/blog">Event</Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-gallery" data-aos="fade-up">
          <div className="blog-sidebar-heading">
            <h3>From Instagram</h3>
          </div>
          <ul>
            <li>
              <img src={Img1} alt="img" />
            </li>
            <li>
              <img src={Img2} alt="img" />
            </li>
            <li>
              <img src={Img3} alt="img" />
            </li>
            <li>
              <img src={Img4} alt="img" />
            </li>
            <li>
              <img src={Img5} alt="img" />
            </li>
            <li>
              <img src={Img1} alt="img" />
            </li>
            <li>
              <img src={Img2} alt="img" />
            </li>
            <li>
              <img src={Img3} alt="img" />
            </li>
            <li>
              <img src={Img4} alt="img" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
