// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4 rounded-lg"
      />
      <h2 className="font-semibold text-lg mb-2 text-gray-800">{product.title}</h2>
      <p className="text-green-600 font-bold text-xl mb-2">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
