import "./side-bar.css";
import { Link } from "react-router-dom";
import {
  House,
  Users,
  CalendarClock,
  Pill,
  NotepadText,
  HeartHandshake,
  Bot,
} from "lucide-react";

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
              <Link to="/">
                <House /> Inicio
              </Link>
            </li>

            <li>
              <Link to="/personas-mayores">
                <Users /> Personas Mayores
              </Link>
            </li>

            <li>
              <Link to="/turnos">
                <CalendarClock /> Turnos
              </Link>
            </li>

            <li>
              <Link to="/medicacion">
                <Pill /> Medicaciones
              </Link>
            </li>

            <li>
              <Link to="/notas">
                <NotepadText /> Notas
              </Link>
            </li>

            <li>
              <Link to="/familiares">
                <HeartHandshake /> Familiares
              </Link>
            </li>
            <li>
              <a href="">
                <Bot /> Bot de WhatsApp
              </a>
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
