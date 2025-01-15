import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <BlogItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;