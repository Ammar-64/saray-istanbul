import React, { useEffect, useState } from "react";
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

import "./style.css";

const BlogSingle = ({ blog }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const { t } = useTranslation();
  const projectURL = window.location.href;

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      const data = await fetch(
        `${BASEURL}/blogs/${blog.id}?populate[related_blogs][populate]=img`
      );
      const projects = await data.json();
      if (!!projects && !!projects.data) {
        const blogs = projects.data.attributes.related_blogs.data.map(
          (blog) => ({
            ...blog.attributes,
            id: blog.id,
          })
        );
        setRelatedBlogs(blogs);
      }
    };
    fetchRelatedBlogs();
  }, [blog]);
  if (!blog.img) {
    return <Loading />;
  }
  return (
    <section className="blog-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="blog-left">
              <div className="blog-left-content">
                <div className="blog-info"></div>
                <h2>{blog.title}</h2>
                <p>{blog.firstParagraph}</p>
                <div className="row justify-content-center my-5">
                  <div className="col-lg-6">
                    <div className="news-img news-page-img">
                      <img src={`${blog.img.data.attributes.url}`} alt="img" />
                    </div>
                  </div>
                </div>
                <p>{blog.secondParagraph}</p>
                <div className="row justify-content-center my-5">
                  <div className="col-lg-6">
                    {blog.img2.data && (
                      <div className="news-img news-page-img">
                        <img
                          src={`${blog.img2.data.attributes.url}`}
                          alt="img"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <p>{blog.thirdParagraph}</p>
                <p>-{blog.author}</p>
                <div className="blog-left-content-share">
                  <h3>{t("blog.sharePost")}</h3>
                  <ul>
                    <li className="blog-social-media-icon">
                      <FacebookShareButton url={projectURL}>
                        <i className="fab fa-facebook-f" />
                      </FacebookShareButton>
                    </li>
                    <li className="blog-social-media-icon">
                      <TwitterShareButton url={projectURL}>
                        <i className="fab fa-twitter" />
                      </TwitterShareButton>
                    </li>
                    <li className="blog-social-media-icon">
                      <WhatsappShareButton url={projectURL}>
                        <i className="fab fa-whatsapp" />
                      </WhatsappShareButton>
                    </li>
                    <li className="blog-social-media-icon">
                      <TelegramShareButton url={projectURL}>
                        <i className="fab fa-telegram" />
                      </TelegramShareButton>
                    </li>
                    <li className="blog-social-media-icon">
                      <EmailShareButton url={projectURL}>
                        <i className="far fa-envelope" />
                      </EmailShareButton>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-left-related-post">
                {relatedBlogs.length > 0 && (
                  <div>
                    <h3>{t("blog.relatePosts")}</h3>
                    <div className="row justify-content-center">
                      {relatedBlogs.map((blog, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                          <BlogSingleCard blog={blog} key={index} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
