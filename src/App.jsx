import "./App.css";
import Home from "./pages/Main/Home.jsx";
import PersonasMayores from "./pages/Personas-Mayores/PersonasMayores.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personas-mayores" element={<PersonasMayores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
