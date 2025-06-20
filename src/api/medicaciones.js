export async function fetchMedicaciones(personaId) {
  const res = await fetch(
    `http://localhost:3000/medicaciones?personaId=${personaId}`
  );
  if (!res.ok) throw new Error("Error al obtener medicaciones");
  return res.json();
}
