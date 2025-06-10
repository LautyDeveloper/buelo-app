import "./side-bar.css";
import { Link } from "react-router-dom";

export default function SideBar({ isOpen }) {
  return (
    <div className={`sidebar-container ${isOpen ? "open" : ""} d-flex flex-column justify-content-between align-items-center`}>
      {/* Utilities d-flex flex-column justify-content-between align-items-center are added for when it's 'open' or on desktop */}
      <div className="sidebar-logo-container w-100 d-grid place-items-center">
        <h1 className="fs-1-5rem text-primary">🤶 Buelo App</h1> {/* Adjusted font size slightly for consistency if needed, or keep specific CSS */}
      </div>
      <div className="sidebar-nav-container h-100 w-100 d-flex justify-content-end align-items-start">
        <nav className="w-auto"> {/* w-auto or specific width from CSS */}
          <ul className="h-100 d-flex flex-column justify-content-around align-items-start">
            <li>
              <Link to="/" className="text-primary fs-1-3rem">Inicio</Link>
            </li>

            <li>
              <Link to="/personas-mayores" className="text-primary fs-1-3rem">Personas Mayores</Link>
            </li>

            <li>
              <Link to="/turnos" className="text-primary fs-1-3rem">Turnos</Link>
            </li>

            <li>
              <Link to="/medicacion" className="text-primary fs-1-3rem">Medicaciones</Link>
            </li>

            <li>
              <Link to="/notas" className="text-primary fs-1-3rem">Notas</Link>
            </li>

            <li>
              <Link to="/familiares" className="text-primary fs-1-3rem">Familiares</Link>
            </li>
            <li>
              <a href="" className="text-primary fs-1-3rem">Bot de WhatsApp</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-account-container h-auto w-100 d-grid place-items-center">
        <div className="account-info-container d-flex justify-content-around align-items-center w-auto h-auto">
          <img src="" alt="" /> {/* Specific styling for img in CSS */}
          <div className="account-text d-flex flex-column justify-content-start gap-1">
            <h2 className="fs-1-3rem text-primary font-weight-normal">Nombre</h2>
            <p className="fs-1rem text-secondary">Rol</p>
          </div>
        </div>
      </div>
    </div>
  );
}
