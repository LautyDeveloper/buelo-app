import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles/themes.css'; // Theme variables

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
