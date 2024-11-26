// src/pages/CartPage.js
import React from 'react';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>
                {item.name} - ${item.price} x {item.quantity}
              </p>
              <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Grand Total: ${grandTotal}</h3>
    </div>
  );
};

export default CartPage;
