import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import FloatingText from './components/FloatingText';


const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar openCart={() => setIsCartOpen(true)} />
      <ProductList />
      <FloatingText /> 
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </CartProvider>
  );
};

export default App;
