import { useState } from "react";
import ElderlyPersonsList from "./components/Elderly-Person-List/ElderlyPersonsList";
import "./top-bar.css";
import { PanelRightClose } from "lucide-react";

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
          <button className="hamburger-btn" onClick={toggleSidebar}>
            ☰
          </button>
          {page}
        </h1>
        <button onClick={toggleTheme}>{theme === "light" ? "🌑" : "☀️"}</button>
        <button onClick={() => setShowList((prev) => !prev)}>
          {window.innerWidth < 768 ? "🤶" : "🤶 Lucrecia Bacigalupo"}
        </button>
      </div>

      {showList && <ElderlyPersonsList persons={fakePersons} />}
    </div>
  );
}
