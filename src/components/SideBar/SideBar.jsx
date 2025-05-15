import "./side-bar.css";
import { Link } from "react-router-dom";

export default function SideBar({ isOpen }) {
  return (
    <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
      <div className="sidebar-logo-container">
        <h1>🤶 Buelo App</h1>
      </div>
      <div className="sidebar-nav-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>

            <li>
              <Link to="/personas-mayores">Personas Mayores</Link>
            </li>

            <li>
              <Link to="/turnos">Turnos</Link>
            </li>

            <li>
              <a href="">Medicacion</a>
            </li>

            <li>
              <Link to="/notas">Notas</Link>
            </li>

            <li>
              <Link to="/familiares">Familiares</Link>
            </li>
            <li>
              <a href="">Bot de WhatsApp</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-account-container">
        <div className="account-info-container">
          <img src="" alt="" />
          <div className="account-text">
            <h2>Nombre</h2>
            <p>Rol</p>
          </div>
        </div>
      </div>
    </div>
  );
}
