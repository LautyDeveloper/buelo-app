import { useState } from "react";
import ElderlyPersonsList from "./components/Elderly-Person-List/ElderlyPersonsList";
import "./top-bar.css";
import { Moon, PanelRightClose, Sun, Menu } from "lucide-react";

const fakePersons = [
  { name: "Santiago Aquino" },
  { name: "Gladys Marinatto" },
  { name: "Jose Kenny" },
];

export default function TopBar({ page, theme, setTheme, toggleSidebar }) {
  const [showList, setShowList] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

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
            {window.innerWidth < 768 ? "🤶" : "🤶 Lucrecia Bacigalupo"}
          </button>
        </div>
      </div>

      {showList && <ElderlyPersonsList persons={fakePersons} />}
    </div>
  );
}
