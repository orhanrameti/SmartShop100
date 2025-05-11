import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { useCart } from "../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ isRegistered, profile, handleLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{ fontSize: "1.8rem" }}>
          SmartShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontSize: "1.2rem" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" style={{ fontSize: "1.2rem" }}>
                Product List
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 position-relative">
            <DarkMode />

            {isRegistered && profile ? (
              <div className="position-relative">
                <FaUser
                  size={24}
                  title="Account Opened"
                  style={{ cursor: "pointer", color: "#007bff" }}
                  onClick={handleProfileClick}
                />
                {showDropdown && (
                  <div
                    className="dropdown-menu show position-absolute end-0 mt-2 shadow"
                    style={{
                      minWidth: "200px",
                      padding: "10px",
                      background: "#fff",
                      borderRadius: "8px",
                    }}
                  >
                    <p className="mb-2">
                      <strong>Name:</strong> {profile.name}
                    </p>
                    <p className="mb-2">
                      <strong>Email:</strong> {profile.email}
                    </p>
                    <hr className="dropdown-divider" />
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                      style={{ cursor: "pointer" }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : null}

            <button
              onClick={handleCartClick}
              className="btn btn-outline-primary position-relative"
              title="Cart"
            >
              <FaCartShopping />
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
