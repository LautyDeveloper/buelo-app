export async function fetchShifts(personaId) {
  const res = await fetch(
    `http://localhost:3000/shifts?personaId=${personaId}`
  );
  if (!res.ok) throw new Error("Error al obtener turnos");
  return res.json();
}
