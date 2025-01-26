import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; // Import API instance for backend communication
import "../styles.css"; // Optional: Link your custom styles if needed

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Clear any previous errors

        // Check if fields are filled
        if (!email || !password) {
            setError("Both email and password are required.");
            return;
        }

        try {
            setLoading(true);

            // Call backend API to authenticate user
            const { data } = await API.post("/auth/login", { email, password });

            // Store the token in localStorage
            localStorage.setItem("token", data.token);

            // Optionally, store the user details if needed
            localStorage.setItem("user", JSON.stringify(data.user));

            setLoading(false);

            // Redirect to the home page
            navigate("/");
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.message || "Invalid credentials.");
        }
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="login-form">
                {error && <p className="error">{error}</p>}

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

                <button type="submit" disabled={loading}>
                    {loading ? "Logging In..." : "Login"}
                </button>

                <p className="redirect">
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;

