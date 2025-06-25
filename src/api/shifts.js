export async function fetchShifts(personId) {
  const res = await fetch(
    `http://localhost:3000/shifts?personId=${personId}`
  );
  if (!res.ok) throw new Error("Error al obtener turnos");
  return res.json();
}
