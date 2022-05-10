import React from "react";
import HeroSocial from "../HeroSocial";

import "./style.css";

const PageTitle = (props) => {
  return (
    <section
      className="breadcrumb-area"
      style={{ backgroundImage: `url(${props.bg})` }}
    >
      <HeroSocial />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-text">
              {/* <p className="news-date">Published {blog.publishDate}</p> */}
              <h1>{props.pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
