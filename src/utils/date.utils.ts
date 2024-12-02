/**
 * Parses a string to a `Date`.
 * @param dateStr The string containing the date. It needs to follow the format
 * `dd/MM/yyyy hh:mm:ss`.
 */
export function parseDate(dateStr: string) {
  const [date, time] = dateStr.split(" ");
  const [day, month, year] = date.split("/");
  const isoDate = `${year}-${month}-${day}T${time ?? "00:00:00"}`;

  return new Date(isoDate);
}

export function isSameDay(a: Date, b: Date) {
  return a.toISOString().split("T")[0] === b.toISOString().split("T")[0];
}
