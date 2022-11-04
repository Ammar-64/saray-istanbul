import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    phone: "",
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

    const { name, phone, error } = state;

    if (name === "") {
      error.name = "Please enter your name";
    }

    if (phone === "") {
      error.notes = "Please enter your phone number";
    }

    if (error) {
      setState({
        error,
      });
    }
    if (error.name === "" && error.phone === "") {
      setState({
        name: "",
        phone: "",
        error: {},
      });
    }
  };

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-10">
        <div className="contact-form " style={{ padding: "30px" }}>
          <div className="site-heading" data-aos="fade-up">
            {/* <h3 className="sub-title">{t("contactUsPage.getQuote")}</h3> */}
            <h2 className="section-title">
              {t("contactUsPage.freeConsultancy")}
            </h2>
          </div>
          <form onSubmit={subimtHandler} className="form">
            <div className="row">
              <div className="col-12">
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
              <div className="col-12">
                <div className="form-field">
                  <input
                    value={state.phone}
                    onChange={changeHandler}
                    type="number"
                    name="phone"
                    placeholder={t("contactUsPage.contactForm.phone")}
                  />
                  <p>{state.error.lastname ? state.error.lastname : ""}</p>
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
