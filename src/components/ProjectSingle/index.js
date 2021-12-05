import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { BASEURL } from "../../constants/baseurl";
import ProjectSingleCard from "../ProjectSingleCard";
import { useLocation } from "react-router-dom";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
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
  console.log(useLocation());
  const [radioValue, setRadioValue] = useState("outer");

  const projectURL = window.location.href;
  const radios = [
    { name: t("singleProjectPage.outerImages"), value: "outer" },
    { name: t("singleProjectPage.innerImages"), value: "inner" },
  ];
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
  );

  const settings = {
    customPaging: function (i) {
      let imgPath =
        radioValue === "outer"
          ? project.outerImages[i] && project.outerImages[i].url
          : project.InnerImages[i] && project.InnerImages[i].url;
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
  const chartData = project.chart && project.chart;
  const genderChartData = chartData && {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "#People Gender",
        data: [chartData.gender.male, chartData.gender.female],
        backgroundColor: ["#8f434d", "#4A798F"],
      },
    ],
  };
  const meritalChartData = chartData && {
    labels: ["Married", "Single"],
    datasets: [
      {
        label: "#People Gender",
        data: [
          chartData.meritalStatus.married,
          chartData.meritalStatus.notMarried,
        ],
        backgroundColor: ["#4A798F", "#8f434d"],
      },
    ],
  };
  const educationChartData = chartData && {
    labels: [
      "university",
      "highSchool",
      "middleSchool",
      "primary",
      "unEducated",
    ],
    datasets: [
      {
        label: "#People Gender",
        data: [
          chartData.education.university,
          chartData.education.highSchool,
          chartData.education.middleSchool,
          chartData.education.elementarySchool,
          chartData.education.unEducated,
        ],
        backgroundColor: [
          "#DB7D8A",
          "#DBD993",
          "#8f434d",
          "#4A798F",
          "#67B6DB",
        ],
      },
    ],
  };
  const agesChartData = chartData && {
    labels: [
      "between0and14",
      "between15and24",
      "between25and34",
      "between35and44",
      "between45and54",
      "above65",
    ],
    datasets: [
      {
        label: "#People Gender",
        data: [
          chartData.Ages.between0and14,
          chartData.Ages.between15and24,
          chartData.Ages.between25and34,
          chartData.Ages.between35and44,
          chartData.Ages.between45and54,
          chartData.Ages.between55and65,
          chartData.Ages.above65,
        ],
        backgroundColor: [
          "#DB7D8A",
          "#DBD993",
          "#8f434d",
          "#4A798F",
          "#67B6DB",
          "#8d8d8e",
        ],
      },
    ],
  };

  console.log(project);
  return (
    <section className="project-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row slick-slider-container">
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

              <Slider {...settings}>
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
                              <p>{project.price}</p>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="project-details-top-box-text">
                              <h5>{t("singleProjectPage.projectArea")}</h5>
                              <p>
                                {project.porjectInformation.readyToUse}
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
            </div>
            <div className="row" style={{ height: "5%" }}></div>
            <div className="project-details-top-text">
              <h2>{project.projectName}</h2>
              <p>{project.projectDescription}</p>
              <p>{project.projectInfo}</p>
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
            <hr />
            <div className="project-land-mark">
              <h2>Landmarks</h2>
              <div className="row justify-content-center">
                {project.land_marks &&
                  project.land_marks.map((landMark, idx) => (
                    <div className="col-md-6">
                      <div
                        className="service-box service-box-modified"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <div className="service-icon">
                          {/* <img src={serviceIcon1} alt="img" /> */}
                          <i className={landMark.img} alt="img"></i>
                        </div>
                        <div className="service-text">
                          <h3>{landMark.name}</h3>
                          <p>{landMark.description}</p>
                          {/* <Link to="/service-single" className="cta-btn btn-border">
                         Read More
                       </Link> */}
                        </div>
                        <img
                          className="landmarkImg"
                          src={`${BASEURL + landMark.img.url}`}
                          alt="img"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <hr />
            <div className="project-charts">
              <h2>Information about {project.projectLocation}</h2>
              <div className="row justify-content-center">
                <div className="col-md-6 justify-content-center d-flex my-5">
                  <div className="col-md-8">
                    {genderChartData && <Doughnut data={genderChartData} />}
                  </div>
                </div>
                <div className="col-md-6 justify-content-center d-flex my-5">
                  <div className="col-md-8">
                    {meritalChartData && <Doughnut data={meritalChartData} />}
                  </div>
                </div>
                <div className="col-md-6 justify-content-center d-flex my-5">
                  {/* <div className="col-md-8"> */}
                  {educationChartData && <Bar data={educationChartData} />}
                </div>
                {/* </div> */}
                <div className="col-md-6 justify-content-center d-flex my-5">
                  {/* <div className="col-md-8"> */}
                  {agesChartData && <Bar data={agesChartData} />}
                </div>
                {/* </div> */}
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-start socialDiv">
              <p className="socialShare">{t("singleProjectPage.share")}</p>
              <FacebookShareButton url={projectURL} quote={project.quote}>
                <FacebookIcon size={45} />
              </FacebookShareButton>
              <TwitterShareButton url={projectURL} title={project.quote}>
                <TwitterIcon size={45} />
              </TwitterShareButton>
              <WhatsappShareButton url={projectURL} title={project.quote}>
                <WhatsappIcon size={45} />
              </WhatsappShareButton>
              <EmailShareButton url={projectURL}>
                <EmailIcon size={45} />
              </EmailShareButton>
              <TelegramShareButton url={projectURL} title={project.quote}>
                <TelegramIcon size={45} />
              </TelegramShareButton>
            </div>
            <hr />
            <div className="project-details-type">
              <h2>Related Projects</h2>
              <div className="row d-flex justify-content-around">
                {project.related_projects &&
                  project.related_projects.map((project) => (
                    <div className="col-md-4">
                      <div className="details-box">
                        <ProjectSingleCard project={project} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* 
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
            {/* </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSingle;
