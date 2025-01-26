import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; // API instance for backend communication
import "../styles.css"; // Optional: Link your custom styles if needed

const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);
            // Call backend API to register the user
            await API.post("/auth/register", { username, email, password });
            setLoading(false);

            // Redirect user to login page after successful registration
            navigate("/login");
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.message || "Something went wrong.");
        }
    };

    return (
        <div className="signup-page">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                {error && <p className="error">{error}</p>}

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Signing Up..." : "Sign Up"}
                </button>

                <p className="redirect">
                    Already have an account? <a href="/login">Log In</a>
                </p>
            </form>
        </div>
    );
};

export default SignupPage;
