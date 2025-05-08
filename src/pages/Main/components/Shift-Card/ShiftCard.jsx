import "./shift-card.css";

export default function ShiftCard({ backColor, textColor }) {
  return (
    <div className="shift" style={{ backgroundColor: backColor }}>
      <div className="shift-content">
        <div className="shift-header">
          <strong style={{ color: textColor }}>2 de Mayo, 10:00hs</strong>
          <div className="shift-badge" style={{ backgroundColor: textColor }}>
            Proximo
          </div>
        </div>
        <p>Médico clínico (Dr Suarez)</p>
      </div>
    </div>
  );
}
