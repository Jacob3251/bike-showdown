import React from "react";
import useBlogs from "../../hooks/useBlogs";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useBlogs();
  return (
    <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="">
        {blogs.map((blog) => (
          <BlogCard blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
