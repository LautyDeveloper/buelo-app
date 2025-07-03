export const fetchElderlyPersons = async () => {
  const res = await fetch("http://localhost:3000/elderly-persons");
  if (!res.ok) throw new Error("Error fetching Persons");
  return res.json();
};
