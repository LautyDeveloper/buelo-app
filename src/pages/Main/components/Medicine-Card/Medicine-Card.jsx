import "./medicine-card.css";

export default function MedicineCard() {
  return (
    <div className="medicine">
      <div className="medicine-content">
        <div className="medicine-header">
          <strong>Lorsatan 5mg</strong>
          <div className="medicine-badge">Proximo</div>
        </div>
        <p>12:00 y 20:00, Todos los Dias.</p>
      </div>
    </div>
  );
}
