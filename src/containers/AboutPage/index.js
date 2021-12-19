import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Feature from "../../components/feature";
import Partners from "../../components/partners";
import Expertise from "../../components/expertise";
import Team from "../../components/team";
import Footer from "../../components/footer";
import aboutPageImg from "../../img/aboutPageImg.jpg";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={t("header.navbar.about")} bg={aboutPageImg} />
      <Feature />
      <Partners />
      <Expertise />
      <Team />
      <Footer />
    </Fragment>
  );
};
export default AboutPage;
