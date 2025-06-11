export const fetchTurnos = async () => {
  const res = await fetch("http://localhost:3000/turnos");
  if (!res.ok) throw new Error("Error fetching turnos");
  return res.json();
};
