import "./medicine-card.css";

export default function MedicineCard({ medicine }) {
  return (
    <div className="medicine">
      <div className="medicine-content">
        <div className="medicine-header">
          <strong>
            {medicine.nombre_medicacion} {medicine.dosis}
          </strong>
          <div className="medicine-badge">Proximo</div>
        </div>
        <p>
          {medicine.horarios.split(", ")} - {medicine.frecuencia}
        </p>
      </div>
    </div>
  );
}
