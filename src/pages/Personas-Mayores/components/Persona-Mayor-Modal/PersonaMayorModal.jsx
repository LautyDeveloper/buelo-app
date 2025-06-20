import { motion, AnimatePresence } from "framer-motion";
import "./persona-mayor-modal.css";

export default function PersonaMayorModal({
  isOpen,
  onClose,
  name,
  age,
  familiar,
  dni,
  nTramite,
  os,
  nAfiliado,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="persona-mayor-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="persona-mayor-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="persona-mayor-modal-header">
              <div className="header-content">
                <img src="" alt="" />
            <div className="header-text">
              <h2>{name}</h2>
              <div className="text-footer">
                <p>{age} Años</p>
                <p>{familiar} Familiares a Cargo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="persona-mayor-content">
          <ul>
            <li>
              <b>DNI:</b>
              {dni}
            </li>
            <li>
              <b>N° Tramite:</b>
              {nTramite}
            </li>
            <li>
              <b>O.S:</b>
              {os}
            </li>
            <li>
              <b>N° Afiliado:</b>
              {nAfiliado}
            </li>
          </ul>
        </div>
        <div className="persona-mayor-footer">
          <button>Eliminar</button>
          <button>Guardar</button>
          <p onClick={onClose}>Salir</p>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
