export async function fetchMedications(personId) {
  const res = await fetch(
    `http://localhost:3000/medications?personId=${personId}`
  );
  if (!res.ok) throw new Error("Error al obtener medicaciones");
  return res.json();
}
