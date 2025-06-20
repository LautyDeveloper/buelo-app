function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatDate(dateBD) {
  const fecha = new Date(dateBD);
  const day = fecha.toLocaleDateString("es-AR", { day: "2-digit" });
  const month = fecha.toLocaleDateString("es-AR", { month: "long" });

  return { date: `${day} de ${capitalize(month)}` };
}

export function formatTime(timeBD) {
  const fecha = new Date(`1970-01-01T${timeBD}`); // evita errores con solo la hora
  let time = fecha.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  time = time
    .replace("a. m.", "A.M.")
    .replace("p. m.", "P.M.")
    .replace("a. m.", "A.M.")
    .replace("p. m.", "P.M.");

  return { time };
}

export function formatDateTime(dateStr) {
  const fecha = new Date(dateStr);
  const { date } = formatDate(fecha);
  const { time } = formatTime(fecha.toTimeString().slice(0, 5)); // "HH:MM"
  return { date, time };
}
