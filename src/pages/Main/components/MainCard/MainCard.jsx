import "./main-card.css";
import { useState } from "react";
import ModalForm from "../../../../components/ModalForm/ModalForm";

export default function MainCard({
  icon,
  title,
  phrase,
  backColor,
  textColor,
  labelButton,
  url,
  children,
  form,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="main-card">
      <div className="main-card-header" style={{ backgroundColor: backColor }}>
        <h1 style={{ color: textColor }}>
          {icon} {title}
        </h1>
        <p>{phrase}</p>
      </div>
      <div className="main-card-content">
        {children}
        <div className="main-card-footer">
          <a className="see-all-btn" href={url}>
            {labelButton}
          </a>
          <button onClick={() => setModalOpen(true)} className="add-btn">
            +
          </button>
        </div>
      </div>
      <ModalForm
        title={"Agregar Nuevo Turno"}
        parragraph={
          "Completa los detalles del Turno. Indicando los siguientes datos"
        }
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        {form}
      </ModalForm>
    </div>
  );
}
