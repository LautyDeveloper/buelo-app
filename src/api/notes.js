export async function fetchNotes(personId) {
  const res = await fetch(
    `http://localhost:3000/notes?personId=${personId}`,
  );
  if (!res.ok) throw new Error("Error al obtener Notas");
  return res.json();
}

export async function addNote(noteData) {
  const res = await fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteData),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Error al crear Nota");
  }

  return res.json();
}

export async function deleteNote(id) {
    const res = await fetch(`http://localhost:3000/notes/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error al eliminar Nota");
  return res.json();
}