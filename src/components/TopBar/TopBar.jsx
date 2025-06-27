import { useState } from "react";
import ElderlyPersonsList from "./components/Elderly-Person-List/ElderlyPersonsList";
import "./top-bar.css";
import { Moon, PanelRightClose, Sun, Menu } from "lucide-react";
import { fetchElderlyPersons } from "../../api/elderly-persons.js";
import { useQuery } from "@tanstack/react-query";
import { useElderlyPerson } from "../../context/ElderlyPersonContext.jsx";

export default function TopBar({ page, theme, setTheme, toggleSidebar }) {
  const [showList, setShowList] = useState(false);
  const { activePerson } = useElderlyPerson();
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const { data: persons } = useQuery({
    queryKey: ["personas"],
    queryFn: fetchElderlyPersons,
  });

  return (
    <div className="topbar-container">
      <div className="topbar-content">
        <h1>
          <i className="hamburger-btn" onClick={toggleSidebar}>
            <Menu />
          </i>
          {page}
        </h1>
        <div className="buttons-container">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <button onClick={() => setShowList((prev) => !prev)}>
            {window.innerWidth < 768
              ? "🤶"
              : activePerson
              ? `🤶 ${activePerson.nombre}`
              : "Elegí tu Persona Mayor"}
          </button>
        </div>
      </div>

      {showList && (
        <ElderlyPersonsList
          persons={persons}
          onSelect={() => setShowList(false)} // 👈 esto cierra la lista al hacer clic
        />
      )}
    </div>
  );
}
