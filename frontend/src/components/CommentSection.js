import React, { useState, useEffect } from "react";
import API from "../api";

const CommentSection = ({ blogId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const fetchComments = async () => {
            const { data } = await API.get(`/comments/${blogId}`);
            setComments(data);
        };
        fetchComments();
    }, [blogId]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post(`/comments/${blogId}`, { content: newComment });
            setComments(data.comments);
            setNewComment("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h3>Comments</h3>
            {comments.map((comment) => (
                <div key={comment._id}>
                    <strong>{comment.user.username}:</strong>
                    <p>{comment.content}</p>
                </div>
            ))}

            <form onSubmit={handleCommentSubmit}>
                <textarea
                    placeholder="Add a comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CommentSection;
