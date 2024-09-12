import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Modal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Modal;
