import React from "react";
import ContactForm from "../ContactFrom";
import { useTranslation } from "react-i18next";
import "./style.css";

const Contactpage = () => {
  const { t } = useTranslation();
  return (
    <section className="contact-page-area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-10">
            <div className="contact-form ">
              <div className="site-heading" data-aos="fade-up">
                {/* <h3 className="sub-title">{t("contactUsPage.getQuote")}</h3> */}
                <h2 className="section-title">
                  {t("contactUsPage.freeConsultancy")}
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-5 col-sm-6">
            <div className="contact-page-left">
              <h3>{t("contactUsPage.contactInfo")}</h3>
              <div className="contact-info">
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="contact-info-text">
                    <h5>{t("contactUsPage.headOffice")}</h5>
                    <p>
                      {t("contactUsPage.address")}
                      <br />
                      {t("contactUsPage.address2")}
                      <br />
                      {t("contactUsPage.city")}
                    </p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-phone-alt" />
                  </div>
                  <div className="contact-info-text">
                    <h5>{t("contactUsPage.phone")}</h5>
                    <p dir="ltr">0090 553 877 7222</p>
                    <p dir="ltr">0090 212 812 6709</p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <h5>{t("contactUsPage.email")}</h5>
                    <p>info@sarayistanbul.com.tr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-6">
            <div className="contact-page-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.531679544261!2d28.918523815615764!3d41.03550077929799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba6f1c44ad0d%3A0x6e0f09afe7e953c6!2sAxis%20%C4%B0stanbul!5e0!3m2!1sen!2snl!4v1639440901069!5m2!1sen!2snl"
                width="600"
                height="450"
                // style="border:0;"
                title="googleMap"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
