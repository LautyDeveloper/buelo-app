export async function fetchNotas(personaId) {
  const res = await fetch(
    `http://localhost:3000/notas?personaId=${personaId}`,
  );
  if (!res.ok) throw new Error("Error al obtener Notas");
  return res.json();
}
