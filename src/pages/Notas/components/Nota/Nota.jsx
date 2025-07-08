import "./nota.css";
import { ClipboardPenLine, Trash2 } from "lucide-react";

export default function Nota({ title, date, time, note, onDelete }) {
  return (
    <div className="nota">
      <div className="nota-header">
        <h2>
          <ClipboardPenLine /> {title}
        </h2>
        <p>
          {date}, {time}
        </p>
      </div>
      <div className="nota-main">
        <p>{note}</p>
        <button className="delete-button" onClick={onDelete}>
          <Trash2 size={16} /> Eliminar
        </button>
      </div>
    </div>
  );
}
