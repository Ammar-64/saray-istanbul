import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

// import projectImg1 from "../../img/project-4.jpg";
// import projectImg2 from "../../img/project-5.jpg";
// import projectImg3 from "../../img/project-6.jpg";
// import projectImg4 from "../../img/project-7.jpg";
// import projectImg5 from "../../img/project-8.jpg";
// import projectImg6 from "../../img/project-9.jpg";
// import projectImg7 from "../../img/project-10.jpg";
// import projectImg8 from "../../img/project-11.jpg";
// import projectImg9 from "../../img/project-12.jpg";
// import projectImg10 from "../../img/project-13.jpg";
import ProjectSingleCard from "../ProjectSingleCard";
import { BASEURL } from "../../constants/baseurl";
import Loading from "../Loading";
import "./style.css";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [originalProjects, setOriginalProjects] = useState([]);
  const [cityList, setCityList] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  // const location = useLocation();
  // const city = location.pathname.split("-")[1] || "";
  const [priceList, setPriceList] = useState([]);
  const filterPrice = (e) => {
    console.log(e.target.name);
    const low = e.target.name === "low" && e.target.innerText;
    const high = e.target.name === "high" && e.target.innerText;
    e.preventDefault();
    if (low) {
      setProjects(projects.filter((project) => project.price >= Number(low)));
      setPriceList(priceList.filter((price) => price >= Number(low)));
    } else if (high) {
      setProjects(projects.filter((project) => project.price <= Number(high)));
      setPriceList(priceList.filter((price) => price <= Number(low)));
    }
  };
  const filterCity = (e) => {
    const city = e.target.name;
    e.preventDefault();
    setProjects(originalProjects.filter((project) => project.city === city));
  };
  const resetFilters = (e) => {
    e.preventDefault();
    setProjects(originalProjects);
    setPriceList(originalProjects.map((project) => project.price));
  };
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetch(
        `${BASEURL}/projects?populate=*&_locale=${lang}`
      );
      const res = await data.json();
      const projects = res.data.map((project) => ({
        ...project.attributes,
        id: project.id,
      }));
      console.log(res);
      console.log("lang", lang);
      console.log(projects);
      setProjects(projects);
      setOriginalProjects(projects);
      setPriceList(projects.map((project) => project.price));
      const allCities = projects.map((project) => project.city);
      setCityList([...new Set(allCities)]);
    };
    lang !== "projects" && fetchProjects();
  }, [lang]);

  if (!projects.length > 0) {
    return <Loading />;
  }
  return (
    <section className="projects-area projects-page-area">
      <div className="container">
        <div className="row filter-bar">
          <div className="col-lg-5 col-md-7 d-flex justify-content-start align-items-center">
            <span>{t("projectList.filterByPrice")}</span>
            <DropdownButton
              title={t("projectList.startingFrom")}
              className="filter-button"
            >
              {priceList.map((price) => (
                <Dropdown.Item
                  eventKey={price}
                  name={"low"}
                  onClick={filterPrice}
                >
                  {price}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <span>{t("projectList.and")} </span>
            <DropdownButton
              title={t("projectList.endingAt")}
              className="filter-button"
            >
              {priceList.map((price) => (
                <Dropdown.Item
                  eventKey={price}
                  name="high"
                  onClick={filterPrice}
                >
                  {price}
                </Dropdown.Item>
              ))}
              {/* </Dropdown.Menu> */}
            </DropdownButton>
          </div>
          <div className="col-md-2 col-lg-4 d-flex justify-content-start align-items-center">
            <Button onClick={resetFilters}>{t("projectList.reset")}</Button>
          </div>
          <div className="col-md-3 d-flex justify-content-end align-items-center">
            <span>{t("projectList.filterByCity")}</span>
            <DropdownButton
              title={t("projectList.city")}
              className="filter-button"
            >
              {cityList.map((city) => (
                <Dropdown.Item eventKey={city} name={city} onClick={filterCity}>
                  {city}
                </Dropdown.Item>
              ))}
              {/* </Dropdown.Menu> */}
            </DropdownButton>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h3 className="sub-title">{t("projectList.projects")}</h3>
                  <h2 className="section-title">{t("projectList.featured")}</h2>
                </div>
                <div className="projectsFilters"></div>
              </div>
            </div>

            <div className="row align-items-center justify-content-between">
              {projects.map((project) => (
                <div className="col-md-5  col-sm-6">
                  <ProjectSingleCard project={project} />
                </div>
              ))}
              ;{/* {projects} */}
              {/* <div className="col-md-5  col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg1} alt="img" />
                    <h3>
                      CONCERT HALL
                      <br /> IN NEW WORK
                    </h3>
                    <p>ARCHITECTURE</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg2} alt="img" />
                    <h3>
                      MODERN INTERIOR
                      <br /> IN AUSTRALIA
                    </h3>
                    <p>INTERIOR</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg3} alt="img" />
                    <h3>
                      DRAWING ROOM
                      <br /> IN LAS VEGAS
                    </h3>
                    <p>INTERIOR</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg4} alt="img" />
                    <h3>
                      SWIMMING POOL
                      <br /> IN ROMANIA
                    </h3>
                    <p>HOUSE PLANNING</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg5} alt="img" />
                    <h3>
                      MODERN OFFICE
                      <br /> IN LOS ANGELS
                    </h3>
                    <p>INTERIOR</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg6} alt="img" />
                    <h3>
                      MASTER KITCHEN
                      <br /> IN DHAKA
                    </h3>
                    <p>ARCHITECTURE</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg7} alt="img" />
                    <h3>
                      MODERN RESTURENT
                      <br /> IN BAHRAIN
                    </h3>
                    <p>INTERIOR</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg8} alt="img" />
                    <h3>
                      MODERN HALL ROOM
                      <br /> IN AUSTRALIA
                    </h3>
                    <p>ARCHITECTURE</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg9} alt="img" />
                    <h3>
                      MODERN HOUSE
                      <br /> IN PARIS
                    </h3>
                    <p>ARCHITECTURE</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  <Link to="/projects-single">
                    <img src={projectImg10} alt="img" />
                    <h3>
                      MODERN HOTEL
                      <br /> IN BAHRAIN
                    </h3>
                    <p>FURNITURE DESIGN</p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectList;
