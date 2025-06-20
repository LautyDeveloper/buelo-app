import { formatDateTime, formatTime } from "../../../../utils/formatDateTime";
import "./shift-card.css";

export default function ShiftCard({ turno }) {
  const { date } = formatDateTime(turno.dia);
  const { time } = formatTime(turno.hora);
  return (
    <div className="shift">
      <div className="shift-content">
        <div className="shift-header">
          <strong>
            {date}, {time}
          </strong>
          <div className="shift-badge">Proximo</div>
        </div>
        <p>
          {turno.especialidad} ({turno.profesional})
        </p>
      </div>
    </div>
  );
}
