import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Message sent:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
                Have questions or need help? Feel free to reach out to us using the form below or through our contact details.
            </p>

            {submitted ? (
                <div className="thank-you-message">
                    <h2>Thank you for reaching out!</h2>
                    <p>We will get back to you as soon as possible.</p>
                </div>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-submit">
                        Send Message
                    </button>
                </form>
            )}

            <div className="contact-details">
                <h2>Our Contact Details</h2>
                <p>
                    <strong>Email:</strong> support@smartshop.com
                </p>
                <p>
                    <strong>Phone:</strong> +1 234 567 890
                </p>
                <p>
                    <strong>Address:</strong> 123 SmartShop Street, Tech City, USA
                </p>
            </div>
        </div>
    );
}

export default Contact;