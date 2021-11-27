import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import Img1 from "../../img/project-details.jpg";
import Img2 from "../../img/plan.png";
import Img3 from "../../img/24-hours.png";
import Img4 from "../../img/group.png";
import Img5 from "../../img/best-price.png";
import Img6 from "../../img/bedroom.jpg";
import Img7 from "../../img/hallroom.jpg";
import Img8 from "../../img/kitchen.jpg";

import "./style.css";
const URL = "http://localhost:1337";

const ProjectSingle = ({ project }) => {
  const { i18n } = useTranslation();
  const [radioValue, setRadioValue] = useState("outer");

  const radios = [
    { name: "Outer Images", value: "outer" },
    { name: "Inner Images", value: "inner" },
  ];

  const settings = {
    customPaging: function (i) {
      let imgPath =
        radioValue === "outer"
          ? project.outerImages[i] && project.outerImages[i].url
          : project.InnerImages[i] && project.InnerImages[i].url;
      console.log(imgPath);
      return (
        <a>
          <img src={URL + imgPath} width="100px" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb slick-dots-modified",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: i18n.language === "ar" ? true : false,
    arrows: true,
  };

  return (
    <section className="project-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  className={idx % 2 ? "outerButton" : "innerButton"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
            <Slider {...settings} className="slick-slider-container">
              {project.outerImages &&
                project[
                  radioValue === "outer" ? "outerImages" : "InnerImages"
                ].map((image) => (
                  <div className="project-details-top">
                    <div className="project-details-top-img">
                      {/* <div className="slider-container">{imagesSlider}</div> */}
                      <img src={URL + image.url} alt={image.name} />
                    </div>
                    <div className="project-details-top-box">
                      <h3>Project Details</h3>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="project-details-top-box-text">
                            <h5>Project</h5>
                            <p>Interior</p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="project-details-top-box-text">
                            <h5>Location</h5>
                            <p>UAE</p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="project-details-top-box-text">
                            <h5>Year</h5>
                            <p>2020</p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="project-details-top-box-text">
                            <h5>Clients</h5>
                            <p>John Doe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>

            <div className="project-details-top-text">
              <h2>Best Interior Ideas</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content <Link to="/">Interior-Design</Link> of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still
                in their <Link to="/">Modern-Building</Link>. Various versions
                have evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </p>
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their{" "}
                <Link to="/">Modern-Building</Link>. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </p>
              <p>
                We do the best desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="project-overview">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img2} alt="img" />
                    <h5>Project size</h5>
                    <p>5200 sq ft</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img3} alt="img" />
                    <h5>Project time</h5>
                    <p>62 Days</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img4} alt="img" />
                    <h5>People worked</h5>
                    <p>18</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img5} alt="img" />
                    <h5>Project cost</h5>
                    <p>4800$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-details-type">
              <div className="row">
                <div className="col-md-4">
                  <div className="details-box">
                    <div className="project-box project-details-box">
                      <img src={Img6} alt="img" />
                      <p>BEDROOM</p>
                    </div>
                    <div className="project-details-box-meta-text">
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum'
                      </p>
                      <Link to="/">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="details-box">
                    <div className="project-box project-details-box">
                      <img src={Img7} alt="img" />
                      <p>HALLROOM</p>
                    </div>
                    <div className="project-details-box-meta-text">
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum'
                      </p>
                      <Link to="/">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="details-box">
                    <div className="project-box project-details-box">
                      <img src={Img8} alt="img" />
                      <p>KITCHEN</p>
                    </div>
                    <div className="project-details-box-meta-text">
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum'
                      </p>
                      <Link to="/">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSingle;
