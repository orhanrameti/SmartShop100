import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      
      navigate("/login", { state: { from: `/products/${id}` } });
    }
  }, [navigate, id]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <h4 className="text-primary">${product.price}</h4>
          <p>{product.description}</p>

          <button
            className="btn btn-success me-3"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          <Link to="/products" className="btn btn-outline-secondary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
