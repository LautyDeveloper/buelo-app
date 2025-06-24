export async function fetchMedications(personaId) {
  const res = await fetch(
    `http://localhost:3000/medications?personaId=${personaId}`
  );
  if (!res.ok) throw new Error("Error al obtener medicaciones");
  return res.json();
}
