import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ProjectSingle from "../../components/ProjectSingle";
import Testimonial from "../../components/testimonial";
import Footer from "../../components/footer";
import { BASEURL } from "../../constants/baseurl";

const ProjectPage = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`${BASEURL}/projects/${id}`);
      const project = await res.json();
      console.log(project);
      setProject(project);
    };
    fetchProject();
  }, []);

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={"PROJECT DETAILS"}
        pagesub={"Project Details"}
        project={project}
      />
      <ProjectSingle project={project} />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
