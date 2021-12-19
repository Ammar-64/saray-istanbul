import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "../Sidebar";
import BlogSingleCard from "../BlogSingleCard";
import { useTranslation } from "react-i18next";
import { BASEURL } from "../../constants/baseurl";
import Loading from "../Loading";

// import blog1 from "../../img/news-1.png";
// import blog2 from "../../img/news-2.png";

import "./style.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetch(`${BASEURL}/blogs?_locale=${lang}`);
      const projects = await data.json();
      console.log("lang", lang);
      console.log(projects);
      setBlogs(projects);
    };
    lang !== "projects" && fetchBlogs();
  }, [lang]);
  if (!blogs.length > 0) {
    return <Loading />;
  }
  return (
    <section className="blog-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="blog-left">
              <div className="row">
                {blogs.map((blog) => (
                  <div className="col-lg-6 col-md-6" key={blog.id}>
                    <BlogSingleCard blog={blog} />
                  </div>
                ))}
                {/* <div className="col-lg-12">
                  <Link
                    to="/blog-single"
                    className="news-box"
                    data-aos="fade-up"
                  >
                    <div className="news-img">
                      <img src={blog1} alt="img" />
                    </div>
                    <div className="news-text">
                      <p className="news-date">Planning - 21.04.2020</p>
                      <h3>Modern Architecture Buildings</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-12">
                  <Link
                    to="/blog-single"
                    className="news-box"
                    data-aos="fade-up"
                  >
                    <div className="news-img">
                      <img src={blog2} alt="img" />
                    </div>
                    <div className="news-text">
                      <p className="news-date">Planning - 20.04.2020</p>
                      <h3>Luxurious And Ultra Modern Homes</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-12">
                  <Link
                    to="/blog-single"
                    className="news-box"
                    data-aos="fade-up"
                  >
                    <div className="news-img">
                      <img src={blog1} alt="img" />
                    </div>
                    <div className="news-text">
                      <p className="news-date">Planning - 19.04.2020</p>
                      <h3>Architecture potenti fringilla pretium</h3>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center blog-left">
                    <Link to="/blog" className="cta-btn btn-fill">
                      Explore More
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <Sidebar /> */}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
