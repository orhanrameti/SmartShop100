import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with", email, password);

    
    localStorage.setItem("isLoggedIn", "true");

    
    const redirectTo = location.state?.from || "/products";
    navigate(redirectTo);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Log in to your account</h3>
        <form onSubmit={handleLogin}>
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Log In
          </button>
        </form>

        <div className="mt-3 text-center">
          <span className="text-muted">Don't have an account? </span>
          <span
            className="text-primary fw-semibold"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
