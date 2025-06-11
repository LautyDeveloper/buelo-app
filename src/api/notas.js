export const fetchNotas = async () => {
  const res = await fetch("http://localhost:3000/notas");
  if (!res.ok) throw new Error("Error fetching Notes");
  return res.json();
};
