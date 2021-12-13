import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

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
import { useTranslation } from "react-i18next";
const baseRouteUrl = "/:locale(ar|en|tr)?";

const AllRoute = () => {
  const { i18n } = useTranslation();
  // const { pathname } = useLocation();
  // console.log(useLocation());
  console.log(i18n.language);
  useEffect(() => {
    i18n.changeLanguage(window.location.pathname.split("/")[1]);
  }, [useLocation]);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={baseRouteUrl + "/"} component={Homepage} />
          <Route path={baseRouteUrl + "/home"} component={Homepage} />
          <Route path={baseRouteUrl + "/about"} component={AboutPage} />
          <Route path={baseRouteUrl + "/projects"} component={ProjectPage} />
          <Route
            path={baseRouteUrl + "/projects-istanbul"}
            component={ProjectPage}
          />
          <Route
            path={baseRouteUrl + "/projects-bursa"}
            component={ProjectPage}
          />
          <Route
            exact
            path={baseRouteUrl + "/project/:id"}
            component={ProjectSinglePage}
          />
          <Route path={baseRouteUrl + "/service"} component={ServicePage} />
          <Route
            path={baseRouteUrl + "/service-single"}
            component={ServiceSinglePage}
          />
          <Route path={baseRouteUrl + "/portfolio"} component={PortfolioPage} />
          <Route path={baseRouteUrl + "/team"} component={TeamPage} />
          <Route path={baseRouteUrl + "/faq"} component={FaqPage} />
          <Route path={baseRouteUrl + "/contact"} component={ContactPage} />
          <Route path={baseRouteUrl + "/404"} component={ErrorPage} />
          <Route path={baseRouteUrl + "/blog"} component={BlogPage} />
          <Route
            path={baseRouteUrl + "/blog-single/:id"}
            component={BlogSinglePage}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default AllRoute;
