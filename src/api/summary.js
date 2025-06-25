export async function fetchPersonSummary(personId) {
  const res = await fetch(`http://localhost:3000/summary?personId=${personId}`);

  if (!res.ok) throw new Error("Error al obtener resumen de la persona");

  return await res.json();
}