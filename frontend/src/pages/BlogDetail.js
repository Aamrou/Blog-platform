import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";
import CommentSection from "../components/CommentSection";
const [likes, setLikes] = useState([]);

const toggleLike = async () => {
    try {
        const { data } = await API.post(`/likes/${id}`);
        setLikes(data);
    } catch (err) {
        console.error(err);
    }
};

return (
    <div>
        {/* Existing BlogDetail code */}
        <button onClick={toggleLike}>
            {likes.includes(currentUser.id) ? "Unlike" : "Like"} ({likes.length})
        </button>
    </div>
);



const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            const { data } = await API.get(`/blogs/${id}`);
            setBlog(data);
        };
        fetchBlog();
    }, [id]);

    const handleDelete = async () => {
        try {
            await API.delete(`/blogs/${id}`);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    if (!blog) return <p>Loading...</p>;

    return (
        <div className="blog-detail">
            <h1>{blog.title}</h1>
            {blog.imageUrl && <img src={`http://localhost:5000${blog.imageUrl}`} alt="Blog Header" />}
            <p>{blog.content}</p>
            <p>By {blog.author.username}</p>
            <button onClick={handleDelete}>Delete Blog</button>
        </div>
    );
};
const blogdetail = () => {
    return (
        <div className="blog-detail">
            <h1>{blog.title}</h1>
            {blog.imageUrl && <img src={`http://localhost:5000${blog.imageUrl}`} alt="Blog Header" />}
            <p>{blog.content}</p>
            <p>By {blog.author.username}</p>

            <CommentSection blogId={id} />
        </div>
    );
};


export default BlogDetail;


