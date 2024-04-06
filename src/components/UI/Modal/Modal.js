import React from "react";

const Modal = ({ isOpen, onClose, children, width }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center w-screen h-screen bg-opacity-50 bg-gray-900">
      <div
        className={`relative z-50 p-6 bg-black1 rounded-md shadow-lg ${
          width ? width : "w-96"
        } `}
      >
        {children}
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-xl "
          onClick={onClose}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
