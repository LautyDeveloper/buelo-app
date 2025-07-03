// src/context/ConfirmationModalContext.jsx
import React, { createContext, useContext, useState, useCallback } from 'react';

const ConfirmationModalContext = createContext();

const initialModalProps = {
  title: '',
  message: '',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  onConfirm: () => {},
  onCancel: () => {}, // Optional: if specific cancel logic is needed beyond just closing
};

export function ConfirmationModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState(initialModalProps);

  const showConfirmation = useCallback((props) => {
    setModalProps({ ...initialModalProps, ...props });
    setIsModalOpen(true);
    // Returns a promise that resolves on confirm, rejects on cancel
    return new Promise((resolve, reject) => {
      setModalProps(prevProps => ({
        ...prevProps,
        // Augment onConfirm and onCancel to resolve/reject the promise
        onConfirm: () => {
          if (props.onConfirm) props.onConfirm();
          resolve(true);
          setIsModalOpen(false);
        },
        onCancel: () => {
          if (props.onCancel) props.onCancel();
          resolve(false); // Resolve with false for cancellation
          setIsModalOpen(false);
        }
      }));
    });
  }, []);

  const hideConfirmation = useCallback(() => {
    // This is typically called by the modal itself when closed via X or Esc
    // If called directly, it means a cancel action.
    if (modalProps.onCancel) {
        modalProps.onCancel(); // Call the stored onCancel
    }
    setIsModalOpen(false);
    setModalProps(initialModalProps); // Reset props
  }, [modalProps]);

  return (
    <ConfirmationModalContext.Provider
      value={{ isModalOpen, modalProps, showConfirmation, hideConfirmation }}
    >
      {children}
    </ConfirmationModalContext.Provider>
  );
}

export function useConfirmationModal() {
  const context = useContext(ConfirmationModalContext);
  if (!context) {
    throw new Error(
      'useConfirmationModal must be used within a ConfirmationModalProvider'
    );
  }
  return context;
}
