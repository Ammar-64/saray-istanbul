import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogSingleCard from "../BlogSingleCard";
import { useTranslation } from "react-i18next";
import { BASEURL } from "../../constants/baseurl";
import Loading from "../Loading";

// import blog1 from "../../img/news-1.png";
// import blog2 from "../../img/news-2.png";

import "./style.css";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const baseLangUrl = "";

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetch(`${BASEURL}/blogs?populate=*&_locale=${lang}`);
      const projects = await data.json();
      if (!!projects.data) {
        const blogs = projects.data.map((blog) => ({
          ...blog.attributes,
          id: blog.id,
        }));
        setBlogs(blogs);
      }

      //console.log("lang", lang);
      //console.log(blogs);
      setBlogs(blogs);
    };
    lang !== "projects" && fetchBlogs();
  }, [lang]);
  if (!blogs.length > 0) {
    return <Loading />;
  }
  return (
    <section className="latest-news-area" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading">
              <h3 className="sub-title">{t("home.blogSection.latesNews")}</h3>
              <h2 className="section-title">
                {t("home.blogSection.thoughtsOnThings")}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs
            .map((blog) => (
              <div className="col-md-6">
                <BlogSingleCard blog={blog} />
              </div>
            ))
            .slice(0, 2)}
          {/* <Link to="/blog-single" className="news-box">
              <div className="news-img">
                <img src={blog1} alt="img" />
              </div>
              <div className="news-text">
                <p className="news-date">Planning - 21.04.2020</p>
                <h3>Modern Architecture Buildings</h3>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/blog-single" className="news-box">
              <div className="news-img">
                <img src={blog2} alt="img" />
              </div>
              <div className="news-text">
                <p className="news-date">Planning - 18.04.2020</p>
                <h3>Luxurious And Ultra Modern Homes</h3>
              </div>
            </Link>
          </div> */}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center news_more">
              <Link to={`${baseLangUrl}/blog`} className="cta-btn btn-fill">
                {t("home.blogSection.exploreMore")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
