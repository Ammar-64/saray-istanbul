import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import ProjectPage from "../ProjectPage";
import ProjectSinglePage from "../ProjectSinglePage";
import ServicePage from "../ServicePage";
import ServiceSinglePage from "../ServiceSinglePage";
import PortfolioPage from "../PortfolioPage";
import TeamPage from "../TeamPage";
import FaqPage from "../FaqPage";
import ContactPage from "../ContactPage";
import ErrorPage from "../ErrorPage";
import BlogPage from "../BlogPage";
import BlogSinglePage from "../BlogSinglePage";
import PrivacyPolicy from "../../components/PrivacyPolicy";

const AllRoute = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route path={"/home"} component={Homepage} />
          <Route path={"/about"} component={AboutPage} />
          <Route path={"/projects"} component={ProjectPage} />
          <Route path={"/projects-istanbul"} component={ProjectPage} />
          <Route path={"/projects-bursa"} component={ProjectPage} />
          <Route exact path={"/project/:id"} component={ProjectSinglePage} />
          <Route path={"/citizenship"} component={ServicePage} />
          <Route path={"/realestateresidence"} component={ServiceSinglePage} />
          <Route path={"/portfolio"} component={PortfolioPage} />
          <Route path={"/team"} component={TeamPage} />
          <Route path={"/faq"} component={FaqPage} />
          <Route path={"/contact"} component={ContactPage} />
          <Route path={"/404"} component={ErrorPage} />
          <Route path={"/blog"} component={BlogPage} />
          <Route path={"/privacy-policy"} component={PrivacyPolicy} />
          <Route path={"/blog-single/:id"} component={BlogSinglePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default AllRoute;
