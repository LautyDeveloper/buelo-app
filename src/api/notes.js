export async function fetchNotes(personId) {
  const res = await fetch(
    `http://localhost:3000/notes?personId=${personId}`,
  );
  if (!res.ok) throw new Error("Error al obtener Notas");
  return res.json();
}
