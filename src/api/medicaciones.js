export const fetchMedicaciones = async () => {
  const res = await fetch("http://localhost:3000/medicaciones");
  if (!res.ok) throw new Error("Error fetching Meidcations");
  return res.json();
};
