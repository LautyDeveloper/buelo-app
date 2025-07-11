import "./App.css";
import Home from "./pages/Main/Home.jsx";
import PersonasMayores from "./pages/Personas-Mayores/PersonasMayores.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Turnos from "./pages/Turnos/Turnos.jsx";
import Notas from "./pages/Notas/Notas.jsx";
import Familiares from "./pages/Familiares/familiares.jsx";
import "./styles/themes.css";
import { useEffect, useState } from "react";
import Medicaciones from "./pages/Medicacion/Medicaciones.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ElderlyPersonProvider } from "./context/ElderlyPersonContext.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import NotificationDisplay from "./components/NotificationDisplay/NotificationDisplay.jsx";
import { ConfirmationModalProvider } from "./context/ConfirmationModalContext.jsx"; // Import ConfirmationModalProvider
import ConfirmationModal from "./components/Modal/ConfirmationModal.jsx"; // Import ConfirmationModal
import Login from "./pages/Auth/Login/login.jsx";

function App() {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    // <ConfirmationModalProvider>
    //   <NotificationProvider>
    //     <ElderlyPersonProvider>
    //       <QueryClientProvider client={queryClient}>
    //         <BrowserRouter>
    //           <NotificationDisplay />
    //           <ConfirmationModal />
    //           <Routes>
    //             <Route
    //               path="/"
    //               element={<Home theme={theme} setTheme={setTheme} />}
    //             />
    //             <Route
    //               path="/personas-mayores"
    //               element={
    //                 <PersonasMayores theme={theme} setTheme={setTheme} />
    //               }
    //             />
    //             <Route
    //               path="/turnos"
    //               element={<Turnos theme={theme} setTheme={setTheme} />}
    //             />
    //             <Route
    //               path="/medicacion"
    //               element={<Medicaciones theme={theme} setTheme={setTheme} />}
    //             />
    //             <Route
    //               path="/notas"
    //               element={<Notas theme={theme} setTheme={setTheme} />}
    //             />
    //             <Route
    //               path="/familiares"
    //               element={<Familiares theme={theme} setTheme={setTheme} />}
    //             />
    //           </Routes>
    //         </BrowserRouter>
    //       </QueryClientProvider>
    //     </ElderlyPersonProvider>
    //   </NotificationProvider>
    // </ConfirmationModalProvider>
    <Login />
  );
}

export default App;
