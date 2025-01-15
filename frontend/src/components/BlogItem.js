import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
      <Link to={'/blog/${post._id}'}>Read More</Link>
    </div>
  );
};

export default BlogItem;