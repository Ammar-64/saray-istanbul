import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ProjectSingle from "../../components/ProjectSingle";
import Testimonial from "../../components/testimonial";
import Footer from "../../components/footer";
import { BASEURL, BASEURL_IMG } from "../../constants/baseurl";

const ProjectPage = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`${BASEURL}/projects/${id}?populate=*`);
      const data = await res.json();
      const project = { ...data.data.attributes, id: data.data.id };
      //console.log(project);
      setProject(project);
    };
    fetchProject();
  }, [id]);

  //console.log(
  //   project.projectMainImage && `${BASEURL + project.projectMainImage.url}`
  // );
  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={project.projectName}
        bg={project.mainImage && `${project.mainImage.data.attributes.url}`}
        project={project}
      />
      <ProjectSingle project={project} />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
