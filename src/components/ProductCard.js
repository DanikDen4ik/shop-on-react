// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <p>Size: {product.size}</p>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;
