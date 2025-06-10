import "./App.css";
import Home from "./pages/Main/Home.jsx";
import PersonasMayores from "./pages/Personas-Mayores/PersonasMayores.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Turnos from "./pages/Turnos/Turnos.jsx";
import Notas from "./pages/Notas/Notas.jsx";
import Familiares from "./pages/Familiares/Familiares.jsx";
import "./styles/themes.css";
import { useEffect, useState } from "react";
import Medicaciones from "./pages/Medicacion/Medicaciones.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route
          path="/personas-mayores"
          element={<PersonasMayores theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/turnos"
          element={<Turnos theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/medicacion"
          element={<Medicaciones theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/notas"
          element={<Notas theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/familiares"
          element={<Familiares theme={theme} setTheme={setTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
