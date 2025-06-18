// src/context/PersonaMayorContext.jsx
import { createContext, useContext, useState } from "react";

const PersonaMayorContext = createContext();

export function PersonaMayorProvider({ children }) {
  const [personaActiva, setPersonaActiva] = useState(null);

  return (
    <PersonaMayorContext.Provider value={{ personaActiva, setPersonaActiva }}>
      {children}
    </PersonaMayorContext.Provider>
  );
}

export function usePersonaMayor() {
  return useContext(PersonaMayorContext);
}
