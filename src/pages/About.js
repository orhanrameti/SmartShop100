import React from "react";
import './About.css'; 

const About = () => {
    return (
        <div className="about-page">
            <div className="container mt-5">
                <h1 className="mb-4">About SmartShop</h1>
                <p>
                    Welcome to <strong>SmartShop</strong>, your ultimate destination for online shopping! 
                    Our mission is to provide you with a seamless and enjoyable shopping experience, offering a wide range of products at competitive prices.
                </p>

                <h2 className="mt-5">Our Vision</h2>
                <p>
                    At SmartShop, we envision a world where shopping is effortless and accessible to everyone. 
                    We aim to bridge the gap between customers and the products they love by providing a platform that is fast, reliable, and user-friendly.
                </p>

                <h2 className="mt-5">Why Choose Us?</h2>
                <ul>
                    <li><strong>Wide Range of Products:</strong> From electronics to fashion, we have it all.</li>
                    <li><strong>Competitive Prices:</strong> We offer the best deals to ensure you get value for your money.</li>
                    <li><strong>Customer Support:</strong> Our dedicated team is here to assist you 24/7.</li>
                    <li><strong>Secure Payments:</strong> Your transactions are safe with us.</li>
                    <li><strong>Fast Delivery:</strong> Get your orders delivered to your doorstep in no time.</li>
                </ul>

                <h2 className="mt-5">Our Story</h2>
                <p>
                    SmartShop was founded with the idea of simplifying the shopping process. 
                    We started as a small team of passionate individuals who wanted to create a platform that caters to the needs of modern shoppers. 
                    Today, we are proud to serve thousands of customers worldwide, helping them find the products they need with just a few clicks.
                </p>

                <h2 className="mt-5">Contact Us</h2>
                <p>
                    Have questions or need assistance? Feel free to reach out to us:
                </p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:info@smartshop.com">info@smartshop.com</a></li>
                    <li><strong>Phone:</strong> +383 44 123 456</li>
                    <li><strong>Address:</strong> Prishtina, Kosovo</li>
                </ul>

                <h2 className="mt-5">Join Us</h2>
                <p>
                    Become a part of the SmartShop family today! Whether you're a customer looking for the best deals or a seller wanting to reach a wider audience, 
                    we have something for everyone. Sign up now and start your journey with us.
                </p>
            </div>
        </div>
    );
};

export default About;