import React from "react";
import { Link } from "react-router-dom";
import bg from "../../img/breadcrumb-bg.jpg";
import HeroSocial from "../HeroSocial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { BASEURL } from "../../constants/baseurl";

const PageTitle = (props) => {
  const settings = {
    dots: true,
    // dotsClass: "slick-dots slick-thumb",
    infinite: true,
    arrwo: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {props.project.outerImages &&
        props.project.outerImages.map((image) => (
          <div
            className="breadcrumb-project-area"
            style={{ backgroundImage: `url(${BASEURL + image.url})` }}
          >
            <HeroSocial />
            <div style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="breadcrumb-inn"
                    style={{ backgroundImage: `url(${BASEURL + image.url})` }}
                  >
                    <h1>{props.pageTitle}</h1>
                    <ul>
                      <li className="home">
                        <Link to="/">
                          <span className="fas fa-home" />
                        </Link>
                      </li>
                      <li>{props.pagesub}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default PageTitle;
