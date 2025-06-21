export const fetchElderlyPersons = async () => {
  const res = await fetch("http://localhost:3000/personas-mayores");
  if (!res.ok) throw new Error("Error fetching Persons");
  return res.json();
};
