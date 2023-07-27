import React, { useState, Fragment } from "react";
import Header from "../../components/header";
import Hero from "../../components/hero";
import About from "../../components/about";
import ServiceSection from "../../components/ServiceSection";
// import Tour from "../../components/tour";
// import Partners from "../../components/partners";
import ProjectSection from "../../components/ProjectSection";
import Testimonial from "../../components/testimonial";
import BlogSection from "../../components/BlogSection";
import Footer from "../../components/footer";
import Modal from "../../components/Modal";
import HeroSocialHorizontal from "../../components/HeroSocialHorizontal";
// import ContactForm from "../../components/ContactFrom";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <Fragment>
      <Header />
      <Hero />
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <HeroSocialHorizontal />
      <About />
      <ServiceSection />

      {/* <Partners /> */}
      <ProjectSection />
      {/* <Tour /> */}
      <Testimonial />
      <BlogSection />

      <Footer />
    </Fragment>
  );
};
export default HomePage;
