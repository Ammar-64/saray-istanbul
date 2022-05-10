import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../constants/baseurl";
import { useTranslation } from "react-i18next";
import ProjectSingleCard from "../ProjectSingleCard";
import Loading from "../Loading";

import "./style.css";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const baseLangUrl = "";
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(
        `${BASEURL}/projects?populate=mainImage&_locale=${lang}`
      );
      const data = await res.json();
      const projectsData =
        data.data.length > 0
          ? data.data.map((project) => ({
              ...project.attributes,
              id: project.id,
            }))
          : [];

      setProjects(projectsData);
    };
    lang !== "projects" && fetchProjects();
  }, [lang]);
  if (!projects.length > 0) {
    return <Loading />;
  }
  return (
    <section className="projects-area pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="site-heading">
              <h3 className="sub-title">
                {t("home.projectsSection.projects")}
              </h3>
              <h2 className="section-title">
                {t("home.projectsSection.featuredWork")}
              </h2>
            </div>

            <div className="project-box" data-aos="fade-up">
              <ProjectSingleCard project={projects[0]} />
            </div>

            <div className="text-center mt-5 d-lg-block d-none">
              <Link to={`${baseLangUrl}/projects`} className="cta-btn btn-fill">
                {t("home.projectsSection.moreProjects")}
              </Link>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="project-box" data-aos="fade-up">
              <ProjectSingleCard project={projects[1]} />
            </div>
            <div className="project-box" data-aos="fade-up">
              <ProjectSingleCard project={projects[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
