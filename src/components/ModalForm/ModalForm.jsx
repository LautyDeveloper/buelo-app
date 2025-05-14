import { Children } from "react";
import "./modal-form.css";

export default function ModalForm({
  title,
  parragraph,
  children,
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-header-text">
            <h1>{title}</h1>
            <p>{parragraph}</p>
          </div>
          <p onClick={onClose}>X</p>
        </div>

        <div className="modal-form-container">{children}</div>
        <button>Guardar</button>
      </div>
    </div>
  );
}
