import "./App.css";
import Home from "./pages/Main/Home.jsx";
import PersonasMayores from "./pages/Personas-Mayores/PersonasMayores.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Turnos from "./pages/Turnos/Turnos.jsx";
import Notas from "./pages/Notas/Notas.jsx";
import Familiares from "./pages/Familiares/Familiares.jsx";
import "./styles/themes.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personas-mayores" element={<PersonasMayores />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/familiares" element={<Familiares />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
