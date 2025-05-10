import "./person-card.css";

export default function PersonCard({ image, name, familiar, age }) {
  return (
    <div className="person-card">
      <div className="person-card-header">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <div className="text-container">
          <strong>{name}</strong>
          <div className="text-footer">
            <p>{age} Años</p>
            <p>{familiar} Familiares a Cargo</p>
          </div>
        </div>
      </div>
      <button>Ver Mas</button>
    </div>
  );
}
