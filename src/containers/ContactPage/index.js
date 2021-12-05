import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Contactpage from "../../components/Contactpage";
import Footer from "../../components/footer";
import contactImg from "../../img/contactImg.jpg";

const ContactPage = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"CONTACT"} pagesub={"Contact"} bg={contactImg} />
      <Contactpage />
      <Footer />
    </Fragment>
  );
};
export default ContactPage;
