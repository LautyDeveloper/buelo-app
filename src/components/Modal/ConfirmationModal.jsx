// src/components/Modal/ConfirmationModal.jsx
import React from 'react';
import { useConfirmationModal } from '../../context/ConfirmationModalContext';
import './ConfirmationModal.css'; // We'll create this CSS file

export default function ConfirmationModal() {
  const { isModalOpen, modalProps, hideConfirmation } = useConfirmationModal();

  if (!isModalOpen) {
    return null;
  }

  const handleConfirm = () => {
    if (modalProps.onConfirm) {
      modalProps.onConfirm();
    }
    // hideConfirmation is now called by the onConfirm wrapper in the context
  };

  const handleCancel = () => {
    if (modalProps.onCancel) {
      modalProps.onCancel();
    }
    // hideConfirmation is now called by the onCancel wrapper in the context
  };

  return (
    <div className="confirmation-modal-overlay">
      <div className="confirmation-modal-content">
        <button className="confirmation-modal-close-btn" onClick={handleCancel}>
          &times;
        </button>
        <h2>{modalProps.title || 'Confirm Action'}</h2>
        <p>{modalProps.message || 'Are you sure?'}</p>
        <div className="confirmation-modal-actions">
          <button
            className="confirmation-modal-btn confirmation-modal-btn--cancel"
            onClick={handleCancel}
          >
            {modalProps.cancelText || 'Cancel'}
          </button>
          <button
            className="confirmation-modal-btn confirmation-modal-btn--confirm"
            onClick={handleConfirm}
          >
            {modalProps.confirmText || 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
}
