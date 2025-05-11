import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CartPage() {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    
    const total = cart.reduce((acc, item) => {
        const price = item.price || 0; 
        const quantity = item.quantity || 0; 
        return acc + price * quantity;
    }, 0);

    if (cart.length === 0) {
        return (
            <div className="container py-5 text-center">
                <h3>Your cart is empty 🛒</h3>
                <p>Browse products and add the ones you like.</p>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Your Cart</h2>
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.image} alt={item.title} width="50" className="me-2" />
                                    {item.title.slice(0, 40)}...
                                </td>
                                <td>${(item.price || 0).toFixed(2)}</td> 
                                <td>{item.quantity || 0}</td> 
                                <td>${((item.price || 0) * (item.quantity || 0)).toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h4 className="text-end mt-4">Total: ${total.toFixed(2)}</h4> 
            
            
            <div className="text-end mt-3">
                <button
                    className="btn btn-primary"
                    onClick={() => navigate('/checkout')}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default CartPage;
