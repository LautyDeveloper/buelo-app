import "./elderly-persons-list.css";
import { useElderlyPerson } from "../../../../context/ElderlyPersonContext.jsx";

export default function ElderlyPersonsList({ persons, onSelect }) {
  const { setActivePerson } = useElderlyPerson();

  return (
    <div className="elderly-persons-list">
      <ul>
        {persons.map((person) => (
          <li
            key={person.id}
            onClick={() => {
              setActivePerson(person);
              onSelect?.(); // <-- Ejecuta la función si está definida
            }}
          >
            🤶 {person.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}
