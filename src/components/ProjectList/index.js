import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
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
  const [priceList, setPriceList] = useState([]);
  const filterPrice = (e) => {
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
      console.log(`${BASEURL}/projects?populate=*&_locale=${lang}`);
      const res = await data.json();
      const projects = res.data.map((project) => ({
        ...project.attributes,
        id: project.id,
      }));
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
              ;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectList;
