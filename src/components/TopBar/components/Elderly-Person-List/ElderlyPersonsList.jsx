import "./elderly-persons-list.css";
import { useElderlyPerson } from "../../../../context/ElderlyPersonContext.jsx";

export default function ElderlyPersonsList({ persons }) {
  const { setActivePerson } = useElderlyPerson();

  return (
    <div className="elderly-persons-list">
      <ul>
        {persons.map((person) => (
          <li key={person.id} onClick={() => setActivePerson(person)}>
            🤶 {person.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}
