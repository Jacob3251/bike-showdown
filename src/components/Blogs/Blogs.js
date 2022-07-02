import React from "react";
import useBlogs from "../../hooks/useBlogs";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useBlogs();
  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard blog={blog}></BlogCard>
      ))}
    </div>
  );
};

export default Blogs;
