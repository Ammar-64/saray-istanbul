import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BASEURL } from "../../constants/baseurl";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    phoneNumber: "",
    error: {},
  });
  const { t } = useTranslation();

  const contact = async (formData) => {
    const res = await fetch(`${BASEURL}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Name: formData.name,
          Email: formData.email,
          PhoneNumber: formData.phoneNumber,
          Message: formData.message,
        },
      }),
    });
    return res;
  };

  const changeHandler = (e) => {
    const error = state.error;
    error[e.target.name] = "";

    setState({ ...state, [e.target.name]: e.target.value, error });
  };

  const subimtHandler = (e) => {
    e.preventDefault();

    const { name, phoneNumber, error } = state;

    if (name === "") {
      error.name = "Please enter your name";
    }

    if (phoneNumber === "") {
      error.phoneNumber = "Please enter your phone number";
    }

    if (error) {
      setState({
        error,
      });
    }
    if (error.name === "" && error.phoneNumber === "") {
      contact(state);
      alert(`شكراً لاهتمامك ${name} سنتواصل معك قريباً`);
      setState({
        name: "",
        phoneNumber: "",
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
            <h2 className="section-title">{t("contactUsPage.letUsCall")}</h2>
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
                    value={state.phoneNumber}
                    onChange={changeHandler}
                    type="number"
                    name="phoneNumber"
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
