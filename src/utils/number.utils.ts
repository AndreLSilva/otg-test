type CouldBeNumber = number | string | null | undefined;

/**
 * Safely parses a number.
 * @param value The value containing the number to be parsed.
 * @returns Returns the number or `undefined` if the provided value cannot be parsed.
 */
export function parseNumber(value: CouldBeNumber): number | undefined;
/**
 * Safely parses a number.
 * @param value The value containing the number to be parsed.
 * @param fallback A fallback number to use if the provided values doesn't contain a valid number.
 * @returns Returns the number or `undefined` if the provided value cannot be parsed.
 */
export function parseNumber(value: CouldBeNumber, fallback: number): number;
export function parseNumber(value: CouldBeNumber, fallback?: number) {
  if (value === undefined || value === null) return fallback;
  const parsedValue = typeof value === "number" ? value : Number(value);

  if (Number.isNaN(parsedValue)) return fallback;
  return parsedValue;
}

/**
 * Formats a number.
 * @param value The number to be formatted. Can be either a number, or a value that, when parsed,
 * contains a number.
 * @returns A string containing the formatted number.
 */
export function formatNumber(value: CouldBeNumber) {
  const parsed = parseNumber(value);
  if (parsed === undefined) return "";
  return Intl.NumberFormat("pt-BR").format(parsed);
}
