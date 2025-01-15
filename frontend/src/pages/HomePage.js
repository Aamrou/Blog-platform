import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogList from "../components/BlogList";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:5000/api/posts");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default HomePage;