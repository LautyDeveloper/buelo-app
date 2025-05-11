import "./nota.css";

export default function Nota({ title, date, time, note }) {
  return (
    <div className="nota">
      <div className="nota-header">
        <h2>{title}</h2>
        <p>
          {date}, {time}
        </p>
      </div>
      <div className="nota-main">
        <p>{note}</p>
      </div>
    </div>
  );
}
