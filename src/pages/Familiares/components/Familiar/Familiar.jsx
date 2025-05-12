import "./familiar.css";

export default function Familiar({ name, imageUrl }) {
  return (
    <div className="familiar">
      <div className="familiar-image">
        <img src={imageUrl} alt="" />
      </div>
      <h2>{name}</h2>
      <div className="familiar-footer">
        <ul>
          <li>
            <b>Relacion:</b> Hijo
          </li>

          <li>
            <b>Rol:</b> Familiar
          </li>
        </ul>
      </div>
    </div>
  );
}
