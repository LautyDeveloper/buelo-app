import "./elderly-persons-list.css";

export default function ElderlyPersonsList({ persons }) {
  return (
    <div className="elderly-persons-list">
      <ul>
        {persons.map((person, index) => {
          return <li key={index}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
}
