export async function fetchShifts(personId) {
  const res = await fetch(
    `http://localhost:3000/shifts?personId=${personId}`
  );
  if (!res.ok) throw new Error("Error al obtener turnos");
  return res.json();
}

export async function addShift(shiftData) {
  const res = await fetch("http://localhost:3000/shifts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shiftData),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Error al crear turno");
  }

  return res.json(); // esto devuelve el turno creado
}
