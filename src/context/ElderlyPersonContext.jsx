// src/context/PersonaMayorContext.jsx
import { createContext, useContext, useState } from "react";

const ElderlyPersonContext = createContext();

export function ElderlyPersonProvider({ children }) {
  const [activePerson, setActivePerson] = useState(null);

  return (
    <ElderlyPersonContext.Provider value={{ activePerson, setActivePerson }}>
      {children}
    </ElderlyPersonContext.Provider>
  );
}

export function useElderlyPerson() {
  return useContext(ElderlyPersonContext);
}
