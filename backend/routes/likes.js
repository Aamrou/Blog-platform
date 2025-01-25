const express = require("express");
const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Like a blog
router.post("/:blogId", authMiddleware, async (req, res) => {
    const { blogId } = req.params;

    try {
        const blog = await Blog.findById(blogId);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        if (!blog.likes.includes(req.user.id)) {
            blog.likes.push(req.user.id);
        } else {
            blog.likes = blog.likes.filter((userId) => userId.toString() !== req.user.id);
        }

        await blog.save();
        res.json(blog.likes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
