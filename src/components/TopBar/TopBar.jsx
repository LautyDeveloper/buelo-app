import { useState } from "react";
import ElderlyPersonsList from "./components/Elderly-Person-List/ElderlyPersonsList";
import { useState } from "react";
import ElderlyPersonsList from "./components/Elderly-Person-List/ElderlyPersonsList";
import "./top-bar.css";
import { Moon, Sun, Menu } from "lucide-react"; // PanelRightClose was unused

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
    <div className="topbar-container d-grid place-items-center p-4">
      <div className="topbar-content d-flex justify-content-between align-items-center w-100 h-100">
        <h1 className="fs-1-5rem font-weight-600 text-primary d-flex justify-content-center align-items-center gap-1">
          <i className="hamburger-btn" onClick={toggleSidebar}>
            <Menu />
          </i>
          {page}
        </h1>
        <div className="buttons-container d-flex gap-4">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn d-grid place-items-center border-radius-md"
            // Specific styles for theme-toggle-btn (size, border, bg) will remain in CSS
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <button
            onClick={() => setShowList((prev) => !prev)}
            className="btn btn-primary d-grid place-items-center fs-2rem" // fs-2rem for mobile icon, overridden in MQ
            // Desktop specific styles (width: auto, padding, font-size, color) in CSS media query
          >
            {window.innerWidth < 768 ? "🤶" : "🤶 Lucrecia Bacigalupo"}
          </button>
        </div>
      </div>

      {showList && <ElderlyPersonsList persons={fakePersons} />}
    </div>
  );
}
