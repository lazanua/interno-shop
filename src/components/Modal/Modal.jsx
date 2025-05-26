import React from "react";
import "./index.scss";
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Остановка всплытия события клика, чтобы клик по контенту не закрывал окно
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
