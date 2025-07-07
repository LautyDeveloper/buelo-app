export async function fetchMedications(personId) {
  const res = await fetch(
    `http://localhost:3000/medications?personId=${personId}`
  );
  if (!res.ok) throw new Error("Error al obtener medicaciones");
  return res.json();
}

export async function addMedication(medicationData) {
  const res = await fetch("http://localhost:3000/medications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(medicationData),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Error al crear medicación");
  }

  return res.json();
}

export async function deleteMedication(id) {
    const res = await fetch(`http://localhost:3000/medications/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error al eliminar Medicacion");
  return res.json();
}