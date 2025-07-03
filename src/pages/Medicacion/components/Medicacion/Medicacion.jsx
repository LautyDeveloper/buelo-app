import "./Medicacion.css";

export default function Medicacion({
  name,
  frecuency,
  dosis,
  schedules,
  isNext,
}) {
  return (
    <div className="medicacion">
      <div className="medicacion-header">
        <div className="header-top">
          <h2>{name}</h2>
          {isNext && <div className="badge">Próximo</div>}
        </div>
        <p>
          {frecuency}, {dosis}
        </p>
      </div>
      <div className="medicacion-body">
        <strong>Horarios:</strong>
        <div className="schedules-container">
          {schedules.map((schedule) => {
            return <div className="schedule">{schedule}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
