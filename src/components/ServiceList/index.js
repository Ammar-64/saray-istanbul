import React from "react";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import Sidebar from "../Sidebar";
// import { BASEURL } from "../../constants/baseurl";

// import citizenshipImg1 from "../../img/citizenshipImg1.jpg";
// import Img1 from "../../img/blpl-1.jpg";
// import serviceImg2 from "../../img/service-bg-2.jpg";
// import serviceImg3 from "../../img/service-bg-3.jpg";
// import serviceIcon1 from "../../img/service-icon-1.png";
// import serviceIcons2 from "../../img/service-icon-2.png";
// import serviceIcon3 from "../../img/service-icon-3.png";

import "./style.css";

const ServiceList = () => {
  const { t } = useTranslation();
  const requirements = [
    ...t("citizenShip.requiredDocs", { returnObjects: true }),
  ];
  const familyRequirments = [
    ...t("citizenShip.familyRequirments", { returnObjects: true }),
  ];
  return (
    <section className="blog-page-area">
      <div className="container">
        <div className="row">
          <div>
            <div className="blog-left">
              <div className="row">
                <div className="col-lg-12">
                  {/* <div className="news-img">
                    <img src={citizenshipImg1} alt="img" />
                  </div> */}
                </div>
              </div>
              <div className="blog-left-content">
                <div className="blog-info">
                  {/* <div className="b_info_flex">
                    <div className="blog-info-img">
                      <img src={Img1} alt="img" />
                    </div>
                    <div className="blog-info-date">
                      <p>
                        <i className="far fa-calendar-alt" />
                        {t("citizenShip.publishDate")}
                      </p>
                    </div>
                  </div> */}
                  {/* <div className="blog-info-comments">
                    <p>
                      <i className="far fa-comments" />
                      Comments (20)
                    </p>
                  </div> */}
                </div>
                <p>{t("citizenShip.intro")}</p>
                <p>{t("citizenShip.firstParagraph")}</p>
                
                <div className="requirements">
                  <h3>{t("citizenShip.header1")}</h3>
                  <br />
                  <ol>
                    {requirements.map((el) => (
                      <li>{el}</li>
                    ))}
                  </ol>
                </div>
                <div className="requirements">
                  <h3>{t("citizenShip.header2")}</h3>
                  <br />
                  <ol>
                    {familyRequirments.map((el) => (
                      <li>{el}</li>
                    ))}
                  </ol>
                </div>
               

                {/* <div className="blog-left-content-share">
                  <h3>{t("blog.sharePost")}</h3>
                  <ul>
                    <li>
                      <FacebookShareButton url={projectURL}>
                        <i className="fab fa-facebook-f" />
                      </FacebookShareButton>
                    </li>
                    <li>
                      <TwitterShareButton url={projectURL}>
                        <i className="fab fa-twitter" />
                      </TwitterShareButton>
                    </li>
                    <li>
                      <WhatsappShareButton url={projectURL}>
                        <i className="fab fa-whatsapp" />
                      </WhatsappShareButton>
                    </li>
                    <li>
                      <TelegramShareButton url={projectURL}>
                        {/* <i className="fab fa-instagram-square" /> */}
                {/* <i className="fab fa-telegram" />
                      </TelegramShareButton>
                    </li>
                    <li>
                      <EmailShareButton url={projectURL}>
                        {/* <i className="fab fa-instagram-square" /> */}
                {/* <i className="far fa-envelope" />
                      </EmailShareButton>
                    </li>
                  </ul>
                </div>  */}
              </div>
              {/* <div className="blog-left-related-post">
                <h3>{t("blog.relatePosts")}</h3>
                <div className="row">
                  {blog.blogs &&
                    blog.blogs.map((blog, index) => (
                      <BlogSingleCard blog={blog} key={index} />
                    ))} */}
              {/* <div className="col-lg-6">
                    <Link to="/blog-single" className="news-box">
                      <div className="news-img">
                        <img src={blog1} alt="img" />
                      </div>
                      <div className="news-text">
                        <p className="news-date">Planning - 21.04.2020</p>
                        <h3>Modern Architecture Buildings</h3>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-6">
                    <Link to="/blog-single" className="news-box">
                      <div className="news-img">
                        <img src={blog2} alt="img" />
                      </div>
                      <div className="news-text">
                        <p className="news-date">Planning - 20.04.2020</p>
                        <h3>Modern Interior Design</h3>
                      </div>
                    </Link>
                  </div> */}
              {/* </div>
              </div> */}
              {/* <div className="blog-comment-area">
                <h3>
                  Comments <span>03</span>
                </h3>
                <div className="blog-comment-box">
                  <div className="blog-comment-people">
                    <img src={Img1} alt="img" />
                  </div>
                  <div className="blog-comment-text">
                    <div className="blog-comment-date">
                      <h5>STEFFAN</h5>
                      <p>
                        <i className="far fa-calendar-alt" />
                        Jan-6 2021 at 7.15pm
                      </p>
                    </div>
                    <p>
                      Asperiores, tenetur, blanditiis, quaerat odit ex
                      exercitationem pariatur quibusdam veritatis quisquam
                      laboriosam esse beatae hic perferendis velit deserunt
                      soluta iste repellendus officia in neque veniam debitis
                    </p>
                  </div>
                </div>
                <div className="blog-comment-box blog-replay-box">
                  <div className="blog-comment-people">
                    <img src={Img2} alt="img" />
                  </div>
                  <div className="blog-comment-text">
                    <div className="blog-comment-date">
                      <h5>LARAFIN ZARA</h5>
                      <p>
                        <i className="far fa-calendar-alt" />
                        Jan-6 2021 at 7.20pm
                      </p>
                    </div>
                    <p>
                      Asperiores, tenetur, blanditiis, quaerat odit ex
                      exercitationem pariatur quibusdam veritatis quisquam
                      laboriosam esse beatae hic perferendis velit deserunt
                      soluta iste repellendus officia in neque veniam debitis
                    </p>
                  </div>
                </div>
                <div className="blog-comment-box">
                  <div className="blog-comment-people">
                    <img src={Img3} alt="img" />
                  </div>
                  <div className="blog-comment-text">
                    <div className="blog-comment-date">
                      <h5>THOMASH CLEAV</h5>
                      <p>
                        <i className="far fa-calendar-alt" />
                        Jan-8 2021 at 10.45am
                      </p>
                    </div>
                    <p>
                      Asperiores, tenetur, blanditiis, quaerat odit ex
                      exercitationem pariatur quibusdam veritatis quisquam
                      laboriosam esse beatae hic perferendis velit deserunt
                      soluta iste repellendus officia in neque veniam debitis
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-leave-comment">
                <h3>Leave A Comments</h3>
                <form onSubmit={SubmitHandler}>
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="comment-form-group">
                        <input
                          type="text"
                          placeholder="Author"
                          name="username"
                        />
                        <i className="fas fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="comment-form-group">
                        <input type="email" placeholder="Email" name="email" />
                        <i className="fas fa-envelope" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="comment-form-group">
                        <input
                          type="text"
                          placeholder="Website"
                          name="Website"
                        />
                        <i className="fas fa-globe-asia" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="comment-form-text">
                        <textarea
                          placeholder="Write your comments here"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="blog-comment-submit">
                        <button className="form-button" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
          {/* <Sidebar /> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
