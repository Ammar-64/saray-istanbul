import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import BlogList from "../../components/BlogList";
import Footer from "../../components/footer";
import blogPageImg from "../../img/blogPageImg.jpg";

const BlogsPage = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"BLOG"} pagesub={"Blog Byasi"} bg={blogPageImg} />
      <BlogList />
      <Footer />
    </Fragment>
  );
};
export default BlogsPage;
