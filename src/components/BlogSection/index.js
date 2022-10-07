import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogSingleCard from "../BlogSingleCard";
import { useTranslation } from "react-i18next";
import { BASEURL } from "../../constants/baseurl";
import Loading from "../Loading";

import "./style.css";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const baseLangUrl = "";

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetch(`${BASEURL}/blogs?populate=*&_locale=${lang}`);
      const blogsResp = await data.json();
      if (!!blogsResp.data) {
        const blogs = blogsResp.data.map((blog) => ({
          ...blog.attributes,
          id: blog.id,
        }));
        setBlogs(blogs);
      }
    };
    fetchBlogs();

    // lang !== "projects" && fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <div className="col-md-6" key={blog.id}>
                <BlogSingleCard blog={blog} />
              </div>
            ))
            .slice(0, 2)}
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
