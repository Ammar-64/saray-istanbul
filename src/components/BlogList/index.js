import React, { useState, useEffect } from "react";
import BlogSingleCard from "../BlogSingleCard";
import { useTranslation } from "react-i18next";
import { BASEURL } from "../../constants/baseurl";
import Loading from "../Loading";

import "./style.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetch(`${BASEURL}/blogs?populate=*&_locale=${lang}`);
      const projects = await data.json();
      const blogs = projects.data.map((blog) => ({
        ...blog.attributes,
        id: blog.id,
      }));
      setBlogs(blogs);
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
