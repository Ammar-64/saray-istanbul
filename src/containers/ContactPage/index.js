import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Contactpage from "../../components/Contactpage";
import Footer from "../../components/footer";
import contactImg from "../../img/contactImg.jpg";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={t("header.navbar.contact")} bg={contactImg} />
      <Contactpage />
      <Footer />
    </Fragment>
  );
};
export default ContactPage;
