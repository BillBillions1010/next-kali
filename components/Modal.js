// components/Modal.js
import { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Go to shop</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>This is a simple modal. You can add your content here.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;