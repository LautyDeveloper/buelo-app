export function formatDateTime(dateStr) {
  const fecha = new Date(dateStr);
  const date = fecha.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
  });
  const time = fecha.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return { date, time };
}
