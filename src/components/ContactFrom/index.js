import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    events: "",
    notes: "",
    error: {},
  });
  const { t } = useTranslation();

  const changeHandler = (e) => {
    const error = state.error;
    error[e.target.name] = "";

    setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  const subimtHandler = (e) => {
    e.preventDefault();

    const { name, email, subject, phone, events, notes, error } = state;

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (phone === "") {
      error.email = "Please enter your phone";
    }
    if (subject === "") {
      error.subject = "Please enter your subject";
    }
    if (events === "") {
      error.events = "Select your event list";
    }
    if (notes === "") {
      error.notes = "Please enter your note";
    }

    if (error) {
      setState({
        error,
      });
    }
    if (
      error.name === "" &&
      error.email === "" &&
      error.email === "" &&
      error.phone === "" &&
      error.subject === "" &&
      error.events === "" &&
      error.notes === ""
    ) {
      setState({
        name: "",
        email: "",
        subject: "",
        events: "",
        phone: "",
        notes: "",
        error: {},
      });
    }
  };

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-10">
        <div className="contact-form ">
          <div className="site-heading" data-aos="fade-up">
            {/* <h3 className="sub-title">{t("contactUsPage.getQuote")}</h3> */}
            <h2 className="section-title">
              {t("contactUsPage.freeConsultancy")}
            </h2>
          </div>
          <form onSubmit={subimtHandler} className="form">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="form-field">
                  <input
                    value={state.name}
                    onChange={changeHandler}
                    type="text"
                    name="name"
                    placeholder={t("contactUsPage.contactForm.name")}
                  />
                  <p>{state.error.name ? state.error.name : ""}</p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="form-field">
                  <input
                    value={state.phone}
                    onChange={changeHandler}
                    type="number"
                    name="phone"
                    placeholder={t("contactUsPage.contactForm.phone")}
                  />
                  <p>{state.error.phone ? state.error.phone : ""}</p>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                <div className="form-field">
                  <input
                    onChange={changeHandler}
                    value={state.email}
                    type="email"
                    name="email"
                    placeholder={t("contactUsPage.contactForm.email")}
                  />
                  <p>{state.error.email ? state.error.email : ""}</p>
                </div>
              </div>
              {/* <div className="col-lg-6 col-sm-6">
          <div className="form-field">
            <input
              onChange={changeHandler}
              value={state.subject}
              type="text"
              name="subject"
              placeholder={t("contactUsPage.contactForm.subject")}
            />
            <p>{state.error.subject ? state.error.subject : ""}</p>
          </div>
        </div> */}
              <div className="col-lg-12 col-sm-12">
                <div className="form-field">
                  <textarea
                    name="message"
                    placeholder={t("contactUsPage.contactForm.message")}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="contact-form-action">
                  <button className="form-button" type="submit">
                    {t("contactUsPage.contactForm.send")}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
