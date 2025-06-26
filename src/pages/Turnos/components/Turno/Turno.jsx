import "./turno.css";
import { CalendarClock } from "lucide-react";

export default function Turno({
  date,
  time,
  especiality,
  profesional,
  spot,
  isNext,
}) {
  return (
    <div className="turno">
      <div className="turno-header">
        <div className="turno-header-principal">
          <h2>
            <CalendarClock /> {date}, {time}
          </h2>
          {isNext && <div className="turno-header-badge">Próximo</div>}
        </div>
        <p>{especiality}</p>
      </div>
      <div className="turno-main">
        <ul>
          <li>
            <b>Profesional:</b> {profesional}
          </li>
          <li>
            <b>Lugar:</b> {spot}
          </li>
        </ul>
      </div>
    </div>
  );
}
