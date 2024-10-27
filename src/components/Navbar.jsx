import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = ({ openCart }) => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">🛒 PRAKASH STORE</h1>
        <button
          onClick={openCart}
          className="relative bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Cart <span className="ml-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cart.length}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
