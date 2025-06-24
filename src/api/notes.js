export async function fetchNotes(personaId) {
  const res = await fetch(
    `http://localhost:3000/notes?personaId=${personaId}`,
  );
  if (!res.ok) throw new Error("Error al obtener Notas");
  return res.json();
}
