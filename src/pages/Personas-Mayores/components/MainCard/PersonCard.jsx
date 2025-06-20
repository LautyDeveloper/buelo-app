import "./person-card.css";
import PersonaMayorModal from "../Persona-Mayor-Modal/PersonaMayorModal";
import { useState } from "react";

export default function PersonCard({
  image,
  name,
  familiar,
  age,
  dni,
  nTramite,
  nAfiliado,
  os,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="person-card">
      <div className="person-card-header">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <div className="text-container">
          <strong>{name}</strong>
          <div className="text-footer">
            <p>{age} Años</p>
            <p>{familiar} Familiares a Cargo</p>
          </div>
        </div>
      </div>
      <button onClick={() => setModalOpen(true)}>Ver Mas</button>
      <PersonaMayorModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        name={name}
        age={age}
        familiar={familiar}
        dni={dni}
        nTramite={nTramite}
        os={os}
        nAfiliado={nAfiliado}
      />
    </div>
  );
}
