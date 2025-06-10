import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles/themes.css'; // Theme variables
import './styles/global.css'; // Global styles and utilities

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
