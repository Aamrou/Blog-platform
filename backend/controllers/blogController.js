const Blog = require("../models/Blog");
const User = require("../models/User");

exports.createBlog = async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const newBlog = new Blog({ title, content, author });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate("author", "username");
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        await Blog.findByIdAndDelete(id);
        res.json({ message: "Blog deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
