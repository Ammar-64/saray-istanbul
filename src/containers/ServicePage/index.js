import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ServiceList from "../../components/ServiceList";
import Footer from "../../components/footer";
import citizenshipImg1 from "../../img/citizenshipImg1.jpg";
import { useTranslation } from "react-i18next";

const ServicePage = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={t("citizenShip.header")} bg={citizenshipImg1} />
      <ServiceList />
      <Footer />
    </Fragment>
  );
};
export default ServicePage;
