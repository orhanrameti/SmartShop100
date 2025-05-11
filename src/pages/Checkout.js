import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css"; 

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
    const [shippingAddress, setShippingAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [showCreditCardModal, setShowCreditCardModal] = useState(false);
    const [showPayPalModal, setShowPayPalModal] = useState(false);
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [addressDetails, setAddressDetails] = useState({
        fullName: "",
        street: "",
        city: "",
        postalCode: "",
        country: "",
    });
    const [cardDetails, setCardDetails] = useState({
        firstName: "",
        lastName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });
    const [paypalDetails, setPaypalDetails] = useState({
        email: "",
        password: "",
    });

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handlePlaceOrder = () => {
        if (!shippingAddress || !paymentMethod) {
            alert("Please select a shipping address and payment method.");
            return;
        }

        setIsPlacingOrder(true);

        setTimeout(() => {
            setIsPlacingOrder(false);
            setOrderPlaced(true);
            clearCart();
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }, 4000);
    };

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
        if (method === "Credit Card") {
            setShowCreditCardModal(true);
        } else if (method === "PayPal") {
            setShowPayPalModal(true);
        }
    };

    const handleAddressSubmit = () => {
        if (!addressDetails.fullName || !addressDetails.street || !addressDetails.city || !addressDetails.postalCode || !addressDetails.country) {
            alert("Please fill in all address details.");
            return;
        }
        setShippingAddress(addressDetails);
        setShowAddressModal(false);
        alert("Address saved successfully!");
    };

    const handleCreditCardSubmit = () => {
        if (!cardDetails.firstName || !cardDetails.lastName || !cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv) {
            alert("Please fill in all credit card details.");
            return;
        }
        setPaymentMethod("Credit Card");
        setShowCreditCardModal(false);
        alert("Credit card details saved successfully!");
    };

    const handlePayPalSubmit = () => {
        if (!paypalDetails.email || !paypalDetails.password) {
            alert("Please fill in all PayPal details.");
            return;
        }
        setPaymentMethod("PayPal");
        setShowPayPalModal(false);
        alert("PayPal details saved successfully!");
    };

    if (isPlacingOrder) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3">Placing your order...</p>
                </div>
            </div>
        );
    }

    if (orderPlaced) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="text-center">
                    <h1 className="text-success">Thank you for your purchase!</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="mb-4">Checkout</h1>
            <div className="row">
                
                <div className="col-md-8">
                    <h3>Order Summary</h3>
                    <ul className="list-group mb-4">
                        {cart.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{item.title}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>

                    
                    <h3>Shipping Address</h3>
                    {shippingAddress ? (
                        <div className="mb-4">
                            <p>
                                <strong>{shippingAddress.fullName}</strong>
                            </p>
                            <p>{shippingAddress.street}</p>
                            <p>
                                {shippingAddress.city}, {shippingAddress.postalCode}
                            </p>
                            <p>{shippingAddress.country}</p>
                            <button
                                className="btn btn-link"
                                onClick={() => setShowAddressModal(true)}
                            >
                                Edit Address
                            </button>
                        </div>
                    ) : (
                        <button
                            className="btn btn-link"
                            onClick={() => setShowAddressModal(true)}
                        >
                            Add your address
                        </button>
                    )}

                    
                    <h3>Payment Method</h3>
                    {paymentMethod ? (
                        <div className="mb-4">
                            <p>
                                <strong>Selected Method:</strong> {paymentMethod}
                            </p>
                            <button
                                className="btn btn-link"
                                onClick={() => setPaymentMethod("")}
                            >
                                Change Payment Method
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentMethod"
                                    id="creditCard"
                                    value="Credit Card"
                                    onChange={(e) => handlePaymentMethodChange(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="creditCard">
                                    Credit Card
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentMethod"
                                    id="paypal"
                                    value="PayPal"
                                    onChange={(e) => handlePaymentMethodChange(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="paypal">
                                    PayPal
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentMethod"
                                    id="cashOnDelivery"
                                    value="Cash on Delivery"
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="cashOnDelivery">
                                    Cash on Delivery
                                </label>
                            </div>
                        </>
                    )}
                </div>

                
                <div className="col-md-4">
                    <h3>Total</h3>
                    <p className="fs-4">${calculateTotal()}</p>
                    <button className="btn btn-success w-100" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </div>
            </div>

           
            {showAddressModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Enter Shipping Address</h3>
                        <div className="mb-3">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="John Doe"
                                value={addressDetails.fullName}
                                onChange={(e) => setAddressDetails({ ...addressDetails, fullName: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Street Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="123 Main St"
                                value={addressDetails.street}
                                onChange={(e) => setAddressDetails({ ...addressDetails, street: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>City</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="New York"
                                value={addressDetails.city}
                                onChange={(e) => setAddressDetails({ ...addressDetails, city: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Postal Code</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="10001"
                                value={addressDetails.postalCode}
                                onChange={(e) => setAddressDetails({ ...addressDetails, postalCode: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Country</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="USA"
                                value={addressDetails.country}
                                onChange={(e) => setAddressDetails({ ...addressDetails, country: e.target.value })}
                            />
                        </div>
                        <button className="btn btn-primary me-2" onClick={handleAddressSubmit}>
                            Save
                        </button>
                        <button className="btn btn-secondary" onClick={() => setShowAddressModal(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            
            {showCreditCardModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Enter Credit Card Details</h3>
                        <div className="mb-3">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="John"
                                value={cardDetails.firstName}
                                onChange={(e) => setCardDetails({ ...cardDetails, firstName: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Doe"
                                value={cardDetails.lastName}
                                onChange={(e) => setCardDetails({ ...cardDetails, lastName: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Card Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="1234 5678 9012 3456"
                                value={cardDetails.cardNumber}
                                onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Expiry Date</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="MM/YY"
                                value={cardDetails.expiryDate}
                                onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>CVV</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="123"
                                value={cardDetails.cvv}
                                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                            />
                        </div>
                        <button className="btn btn-primary me-2" onClick={handleCreditCardSubmit}>
                            Save
                        </button>
                        <button className="btn btn-secondary" onClick={() => setShowCreditCardModal(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            
            {showPayPalModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Enter PayPal Details</h3>
                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="example@example.com"
                                value={paypalDetails.email}
                                onChange={(e) => setPaypalDetails({ ...paypalDetails, email: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="********"
                                value={paypalDetails.password}
                                onChange={(e) => setPaypalDetails({ ...paypalDetails, password: e.target.value })}
                            />
                        </div>
                        <button className="btn btn-primary me-2" onClick={handlePayPalSubmit}>
                            Save
                        </button>
                        <button className="btn btn-secondary" onClick={() => setShowPayPalModal(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
