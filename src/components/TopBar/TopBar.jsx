import { useState } from "react";
import ElderlyPersonsList from "./components/Elderly-Person-List/ElderlyPersonsList";
import "./top-bar.css";

const fakePersons = [
  { name: "Santiago Aquino" },
  { name: "Gladys Marinatto" },
  { name: "Jose Kenny" },
];

export default function TopBar({ page, theme, setTheme }) {
  const [showList, setShowList] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleList = () => {
    setShowList((prev) => !prev);
  };

  return (
    <div className="topbar-container">
      <div className="topbar-content">
        <h1>{page}</h1>
        <button onClick={toggleTheme}>
          Cambiar a {theme === "light" ? "oscuro" : "claro"}
        </button>
        <button onClick={toggleList}>
          {window.innerWidth < 768 ? "🤶" : "🤶 Lucrecia Bacigalupo"}
        </button>
      </div>

      {/* Acá va la lista, afuera del content, pegada al header */}
      {showList && <ElderlyPersonsList persons={fakePersons} />}
    </div>
  );
}
