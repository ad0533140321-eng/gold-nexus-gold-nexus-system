/**
 * Formats a weight in grams to a human-readable string.
 * @param grams Weight in grams (number or string)
 * @returns Formatted string (e.g., "31.1 g", "1 kg")
 */
export function formatWeight(grams: number | string | any): string {
  const g = typeof grams === 'number' ? grams : parseFloat(grams);

  if (isNaN(g)) return 'N/A';

  if (g >= 1000) {
    return `${(g / 1000).toFixed(2).replace(/\.00$/, '')} kg`;
  }

  return `${g.toFixed(2).replace(/\.00$/, '')} g`;
}
