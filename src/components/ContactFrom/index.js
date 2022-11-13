import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BASEURL } from "../../constants/baseurl";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    // subject: "",
    phoneNumber: "",
    // events: "",
    message: "",
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
    console.log(state);
  };

  const subimtHandler = (e) => {
    e.preventDefault();
    console.log(state);
    const { name, email, phoneNumber, message, error } = state;

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (phoneNumber === "") {
      error.email = "Please enter your phone";
    }
    // if (subject === "") {
    //   error.subject = "Please enter your subject";
    // }
    // if (events === "") {
    //   error.events = "Select your event list";
    // }
    if (message === "") {
      error.message = "Please enter your note";
    }

    if (error) {
      setState({
        error,
      });
    }
    console.log(state);
    if (
      error.name === "" &&
      error.email === "" &&
      error.phoneNumber === "" &&
      // error.subject === "" &&
      // error.events === "" &&
      error.message === ""
    ) {
      console.log("test");
      contact(state);
      alert(`شكراً لاهتمامك ${name} سنتواصل معك قريباً`);
      setState({
        name: "",
        email: "",
        // subject: "",
        // events: "",
        phoneNumber: "",
        message: "",
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
                    value={state.phoneNumber}
                    onChange={changeHandler}
                    type="number"
                    name="phoneNumber"
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
                    onChange={changeHandler}
                    value={state.message}
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
