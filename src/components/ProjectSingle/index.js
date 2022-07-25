import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { BASEURL } from "../../constants/baseurl";
import { BASEURL_IMG } from "../../constants/baseurl";
import ProjectSingleCard from "../ProjectSingleCard";
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

import "./style.css";

const ProjectSingle = ({ project }) => {
  const { t, i18n } = useTranslation();

  const [radioValue, setRadioValue] = useState("outer");
  const [chartData, setChartData] = useState({});
  const [landMarks, setLandMarks] = useState([]);
  const [relatedProjects, setRelatedProjects] = useState([]);

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
          ? project.outerImages.data[i] &&
            project.outerImages.data[i].attributes.url
          : project.innerImages.data[i] &&
            project.innerImages.data[i].attributes.url;
      return (
        <a href="/" onClick={(e) => e.preventDefault()}>
          <img src={imgPath} width="100px" alt="project" />
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
  // const chartData = project.chart && project.chart;
  const genderChartData = chartData.gender && {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "#People Gender",
        data: [chartData.gender.male, chartData.gender.female],
        backgroundColor: ["#8f434d", "#4A798F"],
      },
    ],
  };
  const meritalChartData = chartData.maritalStatus && {
    labels: ["Married", "Single"],
    datasets: [
      {
        label: "#People Gender",
        data: [
          chartData.maritalStatus.married,
          chartData.maritalStatus.Unmarried,
        ],
        backgroundColor: ["#4A798F", "#8f434d"],
      },
    ],
  };
  const educationChartData = chartData.education && {
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
          chartData.education.midSchool,
          chartData.education.elementarySchool,
          chartData.education.uneducated,
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
  const agesChartData = chartData.age && {
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
          chartData.age.from0to14,
          chartData.age.from15to24,
          chartData.age.from25to34,
          chartData.age.from35to44,
          chartData.age.from45to54,
          chartData.age.from55to64,
          chartData.age.above65,
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
  useEffect(() => {
    if (!!project.chart) {
      if (!!project.chart.data) {
        const fecthCharts = async () => {
          const res = await fetch(
            `${BASEURL}/charts/${project.chart.data.id}?populate=*`
          );
          const data = await res.json();
          const chart = data.data.attributes;

          setChartData(chart);
        };
        fecthCharts();
      }
    }
    if (project.landmarks) {
      const fetchLandMarks = async () => {
        const res = await fetch(
          `${BASEURL}/projects/${project.id}?populate[landmarks][populate]=img&populate[related_projects][populate]=mainImage&_locale=${i18n.language}`
        );
        const data = await res.json();
        const landMarksData = data.data.attributes.landmarks.data;
        const realtedProjectsData =
          data.data.attributes.related_projects.data.length > 0 &&
          data.data.attributes.related_projects.data.map((project) => ({
            ...project.attributes,
            id: project.id,
          }));

        setRelatedProjects(realtedProjectsData);
        setLandMarks(landMarksData);
      };
      fetchLandMarks();
    }
    window.scrollTo(0, 0);
  }, [i18n.language, project.chart, project.id, project.landmarks]);

  if (!project.name) {
    return <Loading />;
  }
  return (
    <section className="project-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row slick-slider-container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-12 slick-slider-div-wrapper">
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
                        radioValue === "outer" ? "outerImages" : "innerImages"
                      ].data.map((image) => (
                        <div className="project-details-top">
                          <div className="project-details-top-img">
                            <img
                              src={image.attributes.url}
                              alt={image.attributes.name}
                            />
                          </div>
                        </div>
                      ))}
                  </Slider>
                </div>
              </div>
            </div>

            <div className="project-details-top-text">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-overview my-5">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-4">
                    <div className="project-overview-box">
                      <i className={`fas fa-dollar-sign h2 perkIcon`} />
                      <p>
                        {project.price &&
                          project.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        $
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="project-overview-box">
                      <i className={`fas fas fa-passport h2 perkIcon`} />
                      <p>
                        {project.advantages.suitableForCitiziship ? (
                          <i class="fas fa-check"></i>
                        ) : (
                          <i class="fas fa-times"></i>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="project-overview-box">
                      <i className={`fas fa-map-marker-alt h2 perkIcon`} />
                      <p>{project.location}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="project-overview-box">
                      <i className={`fas fa-home h2 perkIcon`} />
                      <p>
                        {project.advantages.readyToUse &&
                          t("singleProjectPage.readyToUse")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {project.information && (
              <div className="project-details my-5">
                <h2>{t("singleProjectPage.projectDetails")}</h2>
                <ul className="row">
                  {project.information.split("\n").map((info, idx) => (
                    <li key={idx} className="col-md-6">
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.perks && (
              <div className="project-overview">
                <div className="row justify-content-center">
                  {project.perks.data.map((perk, idx) => {
                    return (
                      <div className="col-lg-3 col-4">
                        <div className="project-overview-box">
                          <i className={`fas ${perk.icon} h2 perkIcon`} />

                          <p>{perk.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {project.Blueprints.data && (
              <div>
                <hr />
                <div className="project-overview">
                  <div className="row justify-content-center">
                    {project.Blueprints?.data?.map((image, idx) => {
                      return (
                        <div className="col-lg-3 col-4">
                          <img
                            src={image.attributes.url}
                            alt={image.attributes.name}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {landMarks.length > 0 && (
              <div>
                <hr />
                <div className="project-land-mark">
                  <h2>{t("singleProjectPage.landMarks")}</h2>
                  <div className="row justify-content-center">
                    {landMarks.map((landMark, idx) => (
                      <div className="col-md-6 d-flex justify-content-center">
                        <div
                          className="service-box service-box-modified"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <div className="service-icon">
                            <i
                              className={landMark.attributes.img}
                              alt="img"
                            ></i>
                          </div>
                          <div className="service-text">
                            <h3>{landMark.attributes.name}</h3>
                            <p>{landMark.attributes.description}</p>
                          </div>
                          <img
                            className="landmarkImg"
                            src={`${
                              BASEURL_IMG +
                              landMark.attributes.img.data.attributes.url
                            }`}
                            alt="img"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {!!project.chart.data && (
              <div>
                <hr />
                <div className="project-charts">
                  <h2>
                    {t("singleProjectPage.informationAbout")}{" "}
                    {project.chart.data.attributes.name}
                    {project.projectLocation}
                  </h2>
                  <div className="row justify-content-center">
                    <div className="col-md-6 justify-content-center d-flex my-5">
                      <div className="col-md-8">
                        {genderChartData && <Doughnut data={genderChartData} />}
                      </div>
                    </div>
                    <div className="col-md-6 justify-content-center d-flex my-5">
                      <div className="col-md-8">
                        {meritalChartData && (
                          <Doughnut data={meritalChartData} />
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 justify-content-center d-flex my-5">
                      {educationChartData && <Bar data={educationChartData} />}
                    </div>

                    <div className="col-md-6 justify-content-center d-flex my-5">
                      {agesChartData && <Bar data={agesChartData} />}
                    </div>
                  </div>
                </div>
              </div>
            )}
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
            {relatedProjects.length > 0 && (
              <div>
                <hr />
                <div className="project-details-type">
                  <h2>{t("singleProjectPage.realtedProjects")}</h2>
                  <div className="row d-flex justify-content-around">
                    {relatedProjects.map((project) => (
                      <div className="col-md-4">
                        <div className="details-box">
                          <ProjectSingleCard project={project} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSingle;
