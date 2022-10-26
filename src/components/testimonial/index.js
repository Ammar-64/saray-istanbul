import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { BASEURL } from "../../constants/baseurl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await fetch(
        `${BASEURL}/Testimonials?populate=*&_locale=${lang}`
      );
      const testimonialsResp = await data.json();
      if (!!testimonialsResp.data) {
        const testimonials = testimonialsResp.data.map((testimonial) => ({
          ...testimonial.attributes,
          id: testimonial.id,
        }));
        setTestimonials(testimonials);
      }
    };
    fetchTestimonials();
  }, [lang]);
  const settings = {
    dots: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-area" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading">
              <h3 className="sub-title">
                {t("testimonials.testimonialsTitle")}
              </h3>
              <h2 className="section-title">
                {t("testimonials.theySayAboutUs")}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tetimonial-slider">
              <Slider {...settings}>
                {testimonials.length > 0 &&
                  testimonials.map((testimonial) => (
                    <div className="slide" key={testimonial.id}>
                      <div className="single-testimonial">
                        <div className="testimonial-text">
                          {/* <img src={icon} alt="icon" /> */}
                          <p>{testimonial.body}</p>
                        </div>
                        <div className="testimonial-meta">
                          {testimonial.img.data && (
                            <img
                              src={testimonial.img.data.attributes.url}
                              alt={testimonial.name}
                            />
                          )}
                          <div className="testimonial-author">
                            <h4>{testimonial.name}</h4>
                            <p>{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
