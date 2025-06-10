import "./person-card.css";
import PersonaMayorModal from "../Persona-Mayor-Modal/PersonaMayorModal";
import { useState } from "react";

export default function PersonCard({ image, name, familiar, age }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="person-card w-100 border-radius-md d-flex flex-column justify-content-around align-items-center">
      <div className="person-card-header d-flex flex-column justify-content-between align-items-center w-100 gap-4">
        <div className="image-container d-grid place-items-center">
          <img src={image} alt={name} />
        </div>
        <div className="text-container w-90 d-flex flex-column justify-content-between align-items-center gap-2">
          <strong className="fs-1-8rem" style={{ color: 'var(--elderlyPersonColor)' }}>{name}</strong>
          {/* fs-1-8rem is not standard, consider adjusting to fs-1-6rem or keeping in CSS if specific */}
          <div className="text-footer w-90 d-flex flex-row align-items-center justify-content-between fs-1-2rem text-secondary">
            <p>{age} Años</p>
            <p>{familiar} Familiares a Cargo</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn person-card-button w-90 fs-1-3rem font-weight-600"
        // .btn provides base styling, .person-card-button for specific background and color if not .btn-primary
      >
        Ver Mas
      </button>
      <PersonaMayorModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        name={name}
        age={age}
        familiar={familiar}
        dni={"123456789"}
        nTramite={"123456789"}
        os={"PAMI"}
        nAfiliado={"123456789"}
      />
    </div>
  );
}
