import React from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "../Sidebar";
import BlogSingleCard from "../BlogSingleCard";
import Loading from "../Loading";
import { useTranslation } from "react-i18next";
import { BASEURL } from "../../constants/baseurl";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

// import blog1 from "../../img/news-1.png";
// import blog2 from "../../img/news-2.png";
import Img1 from "../../img/blpl-1.jpg";
// import Img2 from "../../img/blpl-2.jpg";
// import Img3 from "../../img/blpl-3.jpg";

import "./style.css";

const BlogSingle = ({ blog }) => {
  const { t } = useTranslation();
  const projectURL = window.location.href;
  // const SubmitHandler = (e) => {
  //   e.preventDefault();
  // };
  if (!blog.blogImage) {
    return <Loading />;
  }
  return (
    <section className="blog-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="blog-left">
              <div className="row">
                <div className="col-lg-12">
                  <div className="news-img">
                    <img src={`${BASEURL}${blog.blogImage.url}`} alt="img" />
                  </div>
                </div>
              </div>
              <div className="blog-left-content">
                <div className="blog-info">
                  <div className="b_info_flex">
                    <div className="blog-info-img">
                      <img src={Img1} alt="img" />
                    </div>
                    <div className="blog-info-date">
                      <p>
                        <i className="far fa-calendar-alt" />
                        {blog.publishDate}
                      </p>
                    </div>
                  </div>
                  {/* <div className="blog-info-comments">
                    <p>
                      <i className="far fa-comments" />
                      Comments (20)
                    </p>
                  </div> */}
                </div>
                <h2>{blog.title}</h2>
                <p>{blog.firstParagraph}</p>
                <p>{blog.secondParagraph}</p>
                <p>{blog.thirdParagraph}</p>
                <p>-{blog.author}</p>
                <div className="blog-left-content-share">
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
                        <i className="fab fa-telegram" />
                      </TelegramShareButton>
                    </li>
                    <li>
                      <EmailShareButton url={projectURL}>
                        {/* <i className="fab fa-instagram-square" /> */}
                        <i className="far fa-envelope" />
                      </EmailShareButton>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-left-related-post">
                <h3>{t("blog.relatePosts")}</h3>
                <div className="row">
                  {blog.blogs &&
                    blog.blogs.map((blog, index) => (
                      <BlogSingleCard blog={blog} key={index} />
                    ))}
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
                </div>
              </div>
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

export default BlogSingle;