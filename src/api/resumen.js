export async function fetchResumenPersona(personaId) {
  const res = await fetch(`http://localhost:3000/resumen?personaId=${personaId}`);

  if (!res.ok) throw new Error("Error al obtener resumen de la persona");

  return await res.json();
}