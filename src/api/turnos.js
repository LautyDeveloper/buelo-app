export async function fetchTurnos(personaId) {
  const res = await fetch(
    `http://localhost:3000/turnos?personaId=${personaId}`
  );
  if (!res.ok) throw new Error("Error al obtener turnos");
  return res.json();
}
