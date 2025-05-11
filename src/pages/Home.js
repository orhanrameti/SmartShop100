import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ isRegistered }) {
    const [currentBackground, setCurrentBackground] = useState(0);
    const navigate = useNavigate();

    const backgrounds = [
        require("../assets/website/back7.jpeg"),
        require("../assets/website/back4.jpg"),
        require("../assets/website/back6.avif"),
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [backgrounds.length]);

    return (
        <div
            className="hero-section d-flex align-items-center justify-content-center text-white"
            style={{
                backgroundImage: `url('${backgrounds[currentBackground]}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                color: "#fff",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                transition: "background-image 1s ease-in-out",
            }}
        >
            <div className="container text-center">
                <h1 className="display-3 fw-bold">Welcome to SmartShop</h1>
                <p className="lead fs-4">Discover the latest products with just one click!</p>
                <div className="mt-4">
                    <a href="/products" className="btn btn-primary btn-lg me-3">
                        Browse Products
                    </a>
                    {!isRegistered && (
                        <button
                            className="btn btn-lg"
                            onClick={() => navigate("/register")}
                            style={{
                                background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "30px",
                                padding: "0.8rem 2rem",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                            }}
                        >
                            Register
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
