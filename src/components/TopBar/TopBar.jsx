import { useState } from "react";
import ElderlyPersonsList from "./components/Elderly-Person-List/ElderlyPersonsList";
import "./top-bar.css";
import { Moon, PanelRightClose, Sun, Menu } from "lucide-react";
import { fetchPersons } from "../../api/personas";
import { useQuery } from "@tanstack/react-query";
import { usePersonaMayor } from "../../context/PersonaMayorContext";

export default function TopBar({ page, theme, setTheme, toggleSidebar }) {
  const [showList, setShowList] = useState(false);
  const { personaActiva } = usePersonaMayor();
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const { data: personas } = useQuery({
    queryKey: ["personas"],
    queryFn: fetchPersons,
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
              : personaActiva
              ? `🤶 ${personaActiva.nombre}`
              : "Elegí tu Persona Mayor"}
          </button>
        </div>
      </div>

      {showList && <ElderlyPersonsList persons={personas} />}
    </div>
  );
}
