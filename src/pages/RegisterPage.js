import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        
        const profileData = {
            name: name,
            email: email,
        };

        localStorage.setItem("profile", JSON.stringify(profileData));
        localStorage.setItem("isRegistered", "true");

        
        navigate("/");
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: "100%", maxWidth: "450px" }}>
                <h3 className="text-center mb-4">Create a new account</h3>
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Register
                    </button>
                </form>

                <div className="mt-3 text-center">
                    <span className="text-muted">Already have an account? </span>
                    <span
                        className="text-primary fw-semibold"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/login")}
                    >
                        Log in here
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
