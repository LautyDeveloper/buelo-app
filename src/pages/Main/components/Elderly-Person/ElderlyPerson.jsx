import "./elderly-person.css";

export default function ElderlyPerson({ person }) {
  return (
    <div className="elderly-person">
      <div className="elderly-person-img-container">
        <img src="" alt="" className="elderly-person-img" />
      </div>
      <div className="elderly-person-info">
        <h2>{person.nombre}</h2>
        <div className="elderly-person-footer">
          <p>{person.edad} Años</p>
          <p>{person.cantidad_familiares} Familiares a Cargo</p>
        </div>
      </div>
    </div>
  );
}
