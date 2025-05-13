import "./nota.css";
import { ClipboardPenLine } from "lucide-react";

export default function Nota({ title, date, time, note }) {
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
      </div>
    </div>
  );
}
