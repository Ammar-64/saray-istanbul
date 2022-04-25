import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import BlogSingle from "../../components/BlogSingle";
import Footer from "../../components/footer";
import { BASEURL } from "../../constants/baseurl";
import { BASEURL_IMG } from "../../constants/baseurl";
import Loading from "../../components/Loading";

const ContactPage = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  //console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${BASEURL}/blogs/${id}?populate=*`);
      const blog = await res.json();
      //console.log(blog);
      const blogData = { ...blog.data.attributes, id: blog.data.id };
      //console.log(blogData);
      setBlog(blogData);
    };
    fetchData();
  }, [id]);
  //console.log(blog);
  if (!blog) {
    return <Loading />;
  }
  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={blog.title}
        bg={`${blog.img && `${BASEURL_IMG + blog.img.data.attributes.url}`}`}
      />
      <BlogSingle blog={blog} />
      <Footer />
    </Fragment>
  );
};
export default ContactPage;
