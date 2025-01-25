const express = require("express");
const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add a comment
router.post("/:blogId", authMiddleware, async (req, res) => {
    const { blogId } = req.params;
    const { content } = req.body;

    try {
        const blog = await Blog.findById(blogId);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        blog.comments.push({ user: req.user.id, content });
        await blog.save();

        res.status(201).json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get comments for a blog
router.get("/:blogId", async (req, res) => {
    const { blogId } = req.params;

    try {
        const blog = await Blog.findById(blogId).populate("comments.user", "username");
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        res.json(blog.comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
