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
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="modal-header">
              <div className="modal-header-text">
                <h1>{title}</h1>
                <p>{parragraph}</p>
              </div>
              <p onClick={onClose}>X</p>
            </div>

            <div className="modal-form-container">{children}</div>
            <button>Guardar</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
