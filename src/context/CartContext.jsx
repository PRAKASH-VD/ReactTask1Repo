// src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if product already exists in cart
    if (!cart.some(item => item.id === product.id)) {
      setCart(prevCart => [...prevCart, product]);
    } else {
      alert("Item already added to the cart");
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Calculate total cart value
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
