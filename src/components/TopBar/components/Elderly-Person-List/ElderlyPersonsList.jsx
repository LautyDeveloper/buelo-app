import "./elderly-persons-list.css";
import { usePersonaMayor } from "../../../../context/PersonaMayorContext.jsx";

export default function ElderlyPersonsList({ persons }) {
  const { setPersonaActiva } = usePersonaMayor();

  return (
    <div className="elderly-persons-list">
      <ul>
        {persons.map((person) => (
          <li key={person.id} onClick={() => setPersonaActiva(person)}>
            🤶 {person.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}
