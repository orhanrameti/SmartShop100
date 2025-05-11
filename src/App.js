import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from "./components/Footer";
import About from './pages/About';
import Checkout from './pages/Checkout';
import './App.css';
import Contact from "./pages/Contact";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    
    const registeredStatus = localStorage.getItem("isRegistered") === "true";
    const profileData = JSON.parse(localStorage.getItem("profile"));
    setIsRegistered(registeredStatus);
    setProfile(profileData);
  }, []);

  const handleRegister = (profileData) => {
    
    localStorage.setItem("isRegistered", "true");
    localStorage.setItem("profile", JSON.stringify(profileData));
    setIsRegistered(true);
    setProfile(profileData);
  };

  const handleLogout = () => {
    
    localStorage.removeItem("isRegistered");
    localStorage.removeItem("profile");
    setIsRegistered(false);
    setProfile(null);
  };

  return (
    <Router>
      
      <Navbar isRegistered={isRegistered} profile={profile} handleLogout={handleLogout} />
      <div className="main-content">
        <Routes>
          
          <Route
            path="/"
            element={<Home isRegistered={isRegistered} />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route
            path="/register"
            element={<RegisterPage handleRegister={handleRegister} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



