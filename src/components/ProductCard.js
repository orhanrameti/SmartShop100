import React from "react";
import { useNavigate } from "react-router-dom";
 import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); 

  const handleShopNow = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate(`/products/${product.id}`);
    } else {
      navigate("/login");
    }
  };

  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: "250px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <div className="mt-auto d-grid gap-2">
          <button className="btn btn-primary" onClick={handleShopNow}>
            View Product
          </button>
          <button className="btn btn-outline-success" onClick={handleAddToCart}>
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
