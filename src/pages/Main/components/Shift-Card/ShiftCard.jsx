import { formatDateTime, formatTime } from "../../../../utils/formatDateTime";
import "./shift-card.css";

export default function ShiftCard({ turno, isNext }) {
  const { date } = formatDateTime(turno.dia);
  const { time } = formatTime(turno.hora);
  return (
    <div className="shift">
      <div className="shift-content">
        <div className="shift-header">
          <strong>
            {date}, {time}
          </strong>
          {isNext && <span className="shift-badge">Próximo</span>}
        </div>
        <p>
          {turno.especialidad} ({turno.profesional})
        </p>
      </div>
    </div>
  );
}
