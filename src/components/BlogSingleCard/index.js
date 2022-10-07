import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const BlogSingleCard = ({ blog }) => {
  const baseUrl = "";

  if (!blog.headerImage.data) {
    return null;
  }
  return (
    <div className="col-lg-12">
      <Link
        to={`${baseUrl}/blog-single/${blog.id}`}
        onClick={window.scrollTo(0, 0)}
        className="news-box"
        data-aos="fade-up"
      >
        <div className="news-img">
          <img
            src={`${blog.headerImage.data.attributes.url}`}
            alt={blog.title}
          />
        </div>
        <div className="news-text">
          {/* <p className="news-date">Published {blog.publishDate}</p> */}
          <h3>{blog.title}</h3>
        </div>
      </Link>
    </div>
  );
};
export default BlogSingleCard;
