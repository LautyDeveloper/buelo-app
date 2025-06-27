import "./medicine-card.css";

export default function MedicineCard({ medicine, isNext }) {
  return (
    <div className={isNext ? "medicine next" : "medicine normal"}>
      <div className="medicine-content">
        <div className="medicine-header">
          <strong>
            {medicine.nombre_medicacion} {medicine.dosis}
          </strong>
          {isNext && <span className="medicine-badge">Próximo</span>}
        </div>
        <p>
          {medicine.horarios.split(", ")} - {medicine.frecuencia}
        </p>
      </div>
    </div>
  );
}
