import React, { useState, useEffect } from "react";
import axios from "../services/api";

function BlogEditor({ postId, fetchPosts, onCancel }) {
  const [post, setPost] = useState({ title: "", content: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (postId) {
      // If postId is provided, fetch the post data for editing
      setIsEditing(true);
      fetchPostById(postId);
    } else {
      setIsEditing(false);
    }
  }, [postId]);

  const fetchPostById = async (id) => {
    try {
      const response = await axios.get(`/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post:", error.message);
    }
  };

  const handleSave = async () => {
    try {
      if (isEditing) {
        // Update an existing post
        await axios.put(`/posts/${postId}`, post);
      } else {
        // Create a new post
        await axios.post("/posts", post);
      }
      fetchPosts(); // Refresh the post list
      onCancel(); // Close the editor
    } catch (error) {
      console.error("Error saving post:", error.message);
    }
  };

  return (
    <div>
      <h2>{isEditing ? "Edit Post" : "Create New Post"}</h2>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="Enter post title"
          />
        </label>
      </div>
      <div>
        <label>
          Content:
          <textarea
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            placeholder="Write your post content here"
          />
        </label>
      </div>
      <div>
        <button onClick={handleSave}>{isEditing ? "Update" : "Create"}</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default BlogEditor;
