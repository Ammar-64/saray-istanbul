import React from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../constants/baseurl";
import { useTranslation } from "react-i18next";

import "./style.css";

const BlogSingleCard = ({ blog }) => {
  console.log(blog);
  const { i18n } = useTranslation();
  const baseUrl = "/" + i18n.language;
  if (!blog) {
    return null;
  }
  return (
    <div className="col-lg-12">
      <Link
        to={`${baseUrl}/blog-single/${blog.id}`}
        className="news-box"
        data-aos="fade-up"
      >
        <div className="news-img">
          <img src={`${BASEURL}${blog.blogImage.url}`} alt="img" />
        </div>
        <div className="news-text">
          <p className="news-date">Published {blog.publishDate}</p>
          <h3>{blog.title}</h3>
        </div>
      </Link>
    </div>
  );
};
export default BlogSingleCard;