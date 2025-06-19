import "./note-card.css";

export default function NoteCard({ note }) {
  return (
    <div className="note">
      <div className="note-content">
        <div className="note-header">
          <strong>{note.titulo}</strong>
        </div>
        <div className="note-footer">
          <p>Agregado por Lauty</p>
          <p>30/5</p>
        </div>
      </div>
    </div>
  );
}
