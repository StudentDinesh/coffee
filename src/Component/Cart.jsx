import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Cart = ({ cartItems, removeFromCart }) => {
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item, index) => ({ ...acc, [index]: 1 }), {})
  );

  const increaseQuantity = (index) => {
    setQuantities((prev) => ({ ...prev, [index]: prev[index] + 1 }));
  };

  const decreaseQuantity = (index) => {
    setQuantities((prev) => ({ ...prev, [index]: Math.max(1, prev[index] - 1) }));
  };

  const totalAmount = cartItems.reduce((total, item, index) => {
    return total + item.price * quantities[index];
  }, 0);

  return (
    <div className="cart-container">
      <h2 style={{ color: '#3d2b1f' }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <span>{quantities[index]}</span>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
