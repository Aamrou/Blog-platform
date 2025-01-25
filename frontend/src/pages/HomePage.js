import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
const [searchQuery, setSearchQuery] = useState("");

const handleSearch = async () => {
    const { data } = await API.get(`/blogs?q=${searchQuery}`);
    setBlogs(data);
};

return (
    <div>
        <input
            type="text"
            placeholder="Search blogs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        {blogs.map((blog) => (
            <div key={blog._id}>
                <h2>{blog.title}</h2>
                <p>By {blog.author.username}</p>
            </div>
        ))}
    </div>
);


const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const { data } = await API.get("/blogs");
            setBlogs(data);
        };
        fetchBlogs();
    }, []);

    return (
        <div className="home">
            <h1>All Blogs</h1>
            {blogs.map((blog) => (
                <div key={blog._id} className="blog-card">
                    <h2>{blog.title}</h2>
                    <p>By {blog.author.username}</p>
                    {blog.imageUrl && <img src={`http://localhost:5000${blog.imageUrl}`} alt="Blog Header" />}
                    <Link to={`/blogs/${blog._id}`}>Read More</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
