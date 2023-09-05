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
          <ContactForm />

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
                    <p>info@akarturkist.com.tr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-6">
            <div className="contact-page-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.7942719924536!2d28.769111787581735!3d41.11718389742609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caaf2e5ea617b1%3A0x74ec2375ec9098e8!2zQmHFn2FrxZ9laGlyLCBBZG5hbiBNZW5kZXJlcyBCdWx2YXJpIE5vOjU1LCAzNDQ4MCBCYcWfYWvFn2VoaXIvxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1sen!2suk!4v1689868398619!5m2!1sen!2suk"
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
