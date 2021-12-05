import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ProjectList from "../../components/ProjectList";
import Footer from "../../components/footer";
import projectPageImg from "../../img/projectPageImg.jpg";

const ProjectPage = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={"PROJECTS"}
        pagesub={"Projects"}
        bg={projectPageImg}
      />
      <ProjectList />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
