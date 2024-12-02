/**
 * Generates an array of numbers starting from 0.
 * @param length The length of the array.
 */
export function range(length: number): number[];
/**
 * Generates an array of numbers starting from the `start` until the `end` (exclusive).
 * @param start The first value of the array. (inclusive)
 * @param end The last value of the array. (exclusive)
 */
export function range(start: number, end: number): number[];
export function range(start: number, end?: number): number[] {
  // If end is not defined, consider `start` to be the length of the array starting with zero.
  if (!end) return Array.from({ length: start }, (_, i) => i);
  // If end is defined, calculates the length and starts the array from the `start` value.
  return Array.from({ length: end - start }, (_, i) => i + start);
}
