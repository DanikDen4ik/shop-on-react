// src/components/ProductFilter.js
import React from 'react';

const ProductFilter = ({ selectedSize, onSizeChange }) => (
  <div>
    <label>
      Filter by size:
      <select value={selectedSize} onChange={(e) => onSizeChange(e.target.value)}>
        <option value="">All</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
    </label>
  </div>
);

export default ProductFilter;
