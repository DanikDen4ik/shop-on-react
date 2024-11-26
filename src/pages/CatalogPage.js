// src/pages/CatalogPage.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import products from '../data/products';

const CatalogPage = ({ onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const filteredProducts = selectedSize
    ? products.filter((product) => product.size === selectedSize)
    : products;

  return (
    <div>
      <h2>Catalog</h2>
      <ProductFilter selectedSize={selectedSize} onSizeChange={setSelectedSize} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
