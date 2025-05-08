import "./side-bar.css";

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo-container">
        <h1>🤶 Buelo App</h1>
      </div>
      <div className="sidebar-nav-container">
        <nav>
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>

            <li>
              <a href="">Personas Mayores</a>
            </li>

            <li>
              <a href="">Turnos</a>
            </li>

            <li>
              <a href="">Medicacion</a>
            </li>

            <li>
              <a href="">Notas</a>
            </li>

            <li>
              <a href="">Familiares</a>
            </li>
            <li>
              <a href="">Bot de WhatsApp</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="account-container">
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
