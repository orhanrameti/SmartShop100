import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                            SmartShop
                        </h5>
                        <p>
                            SmartShop is your platform to discover the latest and best products with just one click. Make your shopping easier and faster!
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                            Quick Links
                        </h5>
                        <p>
                            <a href="/products" className="text-white" style={{ textDecoration: "none" }}>
                                Products
                            </a>
                        </p>
                        <p>
                            <a href="/about" className="text-white" style={{ textDecoration: "none" }}>
                                About Us
                            </a>
                        </p>
                        <p>
                            <a href="/contact" className="text-white" style={{ textDecoration: "none" }}>
                                Contact
                            </a>
                        </p>
                        <p>
                            <a href="/faq" className="text-white" style={{ textDecoration: "none" }}>
                                FAQ
                            </a>
                        </p>
                    </div>

                   
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                            Contact
                        </h5>
                        <p>
                            <i className="fas fa-home mr-3"></i> Prishtina, Kosovo
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> info@smartshop.com
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> +383 44 123 456
                        </p>
                        <p>
                            <i className="fas fa-print mr-3"></i> +383 38 123 456
                        </p>
                    </div>

                    
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                            Follow Us
                        </h5>
                        <a
                            href="https://facebook.com"
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#3b5998" }}
                            role="button"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#55acee" }}
                            role="button"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#ac2bac" }}
                            role="button"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="btn btn-primary btn-floating m-1"
                            style={{ backgroundColor: "#0077b5" }}
                            role="button"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <hr className="my-3" />

                
                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p>
                            © {new Date().getFullYear()} All Rights Reserved by:
                            <a href="/" className="text-warning" style={{ textDecoration: "none" }}>
                                <strong> SmartShop</strong>
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="text-center text-md-right">
                            <a href="/" className="text-white me-4">
                                Terms of Service
                            </a>
                            <a href="/" className="text-white">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;