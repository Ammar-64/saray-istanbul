import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import BlogList from "../../components/BlogList";
import Footer from "../../components/footer";
import blogPageImg from "../../img/blog.jpg";
import { useTranslation } from "react-i18next";

const BlogsPage = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={t("header.navbar.blog")} bg={blogPageImg} />
      <BlogList />
      <Footer />
    </Fragment>
  );
};
export default BlogsPage;
