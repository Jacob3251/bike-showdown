import React from "react";

const BlogCard = (props) => {
  const { heading, body } = props.blog;
  return (
    <div className="mx-12 my-8">
      <h1 className="text-left font-bold font-sans text-2xl">{heading}</h1>
      <p className="text-left">{body}</p>
    </div>
  );
};

export default BlogCard;
