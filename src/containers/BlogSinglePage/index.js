import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import BlogSingle from "../../components/BlogSingle";
import Footer from "../../components/footer";
import { BASEURL } from "../../constants/baseurl";
import Loading from "../../components/Loading";

const ContactPage = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${BASEURL}/blogs/${id}`);
      const blog = await res.json();
      setBlog(blog);
    };
    fetchData();
  }, [id]);
  console.log(blog);
  if (!blog) {
    return <Loading />;
  }
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={blog.title} pagesub={"Blog Details"} />
      <BlogSingle blog={blog} />
      <Footer />
    </Fragment>
  );
};
export default ContactPage;
