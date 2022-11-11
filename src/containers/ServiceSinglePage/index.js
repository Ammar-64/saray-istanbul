import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ServiceSingle from "../../components/ServiceSingle";
import Footer from "../../components/footer";

const ServiceSinglePage = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"الإقامة العقارية"} pagesub={"الإقامة العقارية"} />
      <ServiceSingle />
      <Footer />
    </Fragment>
  );
};
export default ServiceSinglePage;
