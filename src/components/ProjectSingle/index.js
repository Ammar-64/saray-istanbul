import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { BASEURL } from "../../constants/baseurl";
import ProjectSingleCard from "../ProjectSingleCard";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
  TelegramIcon,
} from "react-share";
import Img1 from "../../img/project-details.jpg";
import Img2 from "../../img/plan.png";
import Img3 from "../../img/24-hours.png";
import Img4 from "../../img/group.png";
import Img5 from "../../img/best-price.png";
import Img6 from "../../img/bedroom.jpg";
import Img7 from "../../img/hallroom.jpg";
import Img8 from "../../img/kitchen.jpg";

import "./style.css";

const ProjectSingle = ({ project }) => {
  const { t, i18n } = useTranslation();
  const [radioValue, setRadioValue] = useState("outer");
  const projectURL = window.location.href;
  const radios = [
    { name: t("singleProjectPage.outerImages"), value: "outer" },
    { name: t("singleProjectPage.innerImages"), value: "inner" },
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
          <img src={BASEURL + imgPath} width="100px" alt="project image" />
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
    arrows: false,
  };

  return (
    <section className="project-details-area">
      <div className="container">
        <div className="row"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
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
            </div>
            <Slider {...settings} className="slick-slider-container">
              {project.outerImages &&
                project[
                  radioValue === "outer" ? "outerImages" : "InnerImages"
                ].map((image) => (
                  <div className="project-details-top">
                    <div className="project-details-top-img">
                      {/* <div className="slider-container">{imagesSlider}</div> */}
                      <img src={BASEURL + image.url} alt={image.name} />
                    </div>
                    <div className="project-details-top-box">
                      <h3>{t("singleProjectPage.singleProjectPage")}</h3>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="project-details-top-box-text">
                            <h5>{t("singleProjectPage.location")}</h5>
                            <p>{project.projectLocation}</p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="project-details-top-box-text">
                            <h5>{t("singleProjectPage.projectArea")}</h5>
                            <p>
                              {project.areaInSquareMeter}{" "}
                              {t("singleProjectPage.areaUnit")}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="project-details-top-box-text">
                            <h5>
                              {t("singleProjectPage.suitableForCitizenship")}
                            </h5>
                            <p>
                              {project.porjectInformation
                                .suitableForCitiziship ? (
                                <i className="fas fa-passport" />
                              ) : (
                                <i className="fas fa-X" />
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="project-details-top-box-text">
                            <h5>
                              {t("singleProjectPage.readyForRegestration")}
                            </h5>
                            <p>
                              {project.porjectInformation
                                .readyForRegestration ? (
                                <i className="fas fa-file-signature" />
                              ) : (
                                <i className="fas fa-X" />
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>

            <div className="project-details-top-text">
              <h2>{project.projectName} </h2>
              <p>{project.projectDescription}</p>
              <p>{project.projectInfo}</p>
            </div>
            <div className="d-flex justify-content-start socialDiv">
              <p className="socialShare">{t("singleProjectPage.share")}</p>
              <FacebookShareButton url={projectURL}>
                <FacebookIcon size={45} />
              </FacebookShareButton>
              <TwitterShareButton url={projectURL}>
                <TwitterIcon size={45} />
              </TwitterShareButton>
              <WhatsappShareButton url={projectURL}>
                <WhatsappIcon size={45} />
              </WhatsappShareButton>
              <EmailShareButton url={projectURL}>
                <EmailIcon size={45} />
              </EmailShareButton>
              <TelegramShareButton url={projectURL}>
                <TelegramIcon size={45} />
              </TelegramShareButton>
            </div>
            <div className="project-overview">
              <div className="d-flex justify-content-around flex-wrap">
                {project.projectPerks &&
                  project.projectPerks.split(" - ").map((perk, idx) => {
                    let perkProp = perk.split("::");
                    return (
                      <div className="mx-2">
                        <div className="project-overview-box">
                          <i className={`fas ${perkProp[1]} h2 perkIcon`} />
                          {/* <img src={Img2} alt="img" /> */}
                          {/* <h5>Project size</h5> */}
                          <p>{perkProp[0]}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="project-details-type">
              <div className="row d-flex justify-content-around">
                {project.relatedProjects &&
                  project.relatedProjects.map((project) => (
                    <ProjectSingleCard project={project} />
                  ))}
                {/* <div className="col-md-4">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSingle;
