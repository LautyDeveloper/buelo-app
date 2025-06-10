import { Children } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./modal-form.css";

export default function ModalForm({
  title,
  parragraph,
  children,
  isOpen,
  onClose,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal d-flex flex-column justify-content-between align-items-center gap-6 border-radius-md py-3 px-4 max-w-700 h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="modal-header w-100 d-flex justify-content-between align-items-start">
              <div className="modal-header-text d-flex flex-column justify-content-center align-items-center gap-2 text-center">
                <h1 className="fs-1-6rem font-weight-800 text-primary">{title}</h1>
                <p className="fs-1rem text-secondary">{parragraph}</p>
              </div>
              <p onClick={onClose} className="fs-1-5rem font-weight-800 text-primary" style={{ cursor: 'pointer' }}>X</p>
            </div>

            <div className="modal-form-container w-100 d-grid place-items-center">{children}</div>
            <button className="btn btn-primary btn-block modal-custom-button fs-1-3rem font-weight-700">Guardar</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
