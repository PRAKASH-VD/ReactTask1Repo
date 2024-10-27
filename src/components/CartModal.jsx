import React, { useContext } from 'react';
import Modal from 'react-modal';
import { CartContext } from '../context/CartContext';

Modal.setAppElement('#root');

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, cartTotal } = useContext(CartContext);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white rounded-lg shadow-xl max-w-lg mx-auto p-6 mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="font-semibold text-gray-700">{item.title}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center font-bold text-lg">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button
            onClick={onClose}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Close
          </button>
        </>
      )}
    </Modal>
  );
};

export default CartModal;
