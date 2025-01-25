import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import API from "../api";

const BlogForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        if (image) formData.append("image", image);

        try {
            await API.post("/blogs", formData);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1>Create Blog</h1>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <ReactQuill value={content} onChange={setContent} />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button type="submit">Publish</button>
        </form>
    );
};

export default BlogForm;


