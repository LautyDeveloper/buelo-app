import "./login.css";
import formAsideImage from "../media/form-aside-image.png";
export default function Login() {
  return (
    <div className="container">
      <div className="login-form-container">
        <div className="form-container">
          <h1>Iniciar Sesion</h1>
          <form action="">
            <div className="inputs-container">
              <input type="text" placeholder="Nombre de Usuario" />
              <input type="text" placeholder="Contraseña" />
            </div>
            <input type="submit" value="INICIAR SESION" />
          </form>
          <div className="other-options">
            <strong>O, Inicia sesion con:</strong>
            <div className="options">
              <div className="option">Google</div>
              <div className="option">Facebook</div>
              <div className="option">AppleID</div>
            </div>
          </div>
        </div>
        <div className="aside-container">
          <div className="aside-header">
            <p>🤶</p>
            <p>BueloApp</p>
          </div>
          <p>El bienestar de tus abuelos, en manos de toda la familia</p>
          <div className="aside-image">
            <img src={formAsideImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
