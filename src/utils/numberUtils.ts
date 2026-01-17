/**
 * Safely parses a string to a float number
 * @param value - The string value to parse
 * @param defaultValue - The default value if parsing fails
 * @returns The parsed number or default value
 */
export const parseFloatSafe = (value: string, defaultValue: number = 0): number => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? defaultValue : parsed;
};

/**
 * Formats a number to a specified number of decimal places
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted number string
 */
export const formatNumber = (value: number, decimals: number = 2): string => {
  return value.toFixed(decimals);
};

/**
 * Formats a number as currency with rupee symbol
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number, decimals: number = 2): string => {
  return `₹${formatNumber(value, decimals)}`;
};

/**
 * Formats a percentage value
 * @param value - The percentage value
 * @param includeSign - Whether to include +/- sign (default: true)
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted percentage string
 */
export const formatPercentage = (
  value: number,
  includeSign: boolean = true,
  decimals: number = 2
): string => {
  const sign = includeSign && value >= 0 ? "+" : "";
  return `${sign}${formatNumber(value, decimals)}%`;
};

/**
 * Determines if a value is positive (>= 0)
 * @param value - The value to check
 * @returns True if positive or zero
 */
export const isPositive = (value: number): boolean => {
  return value >= 0;
};

/**
 * Gets the directional arrow for a numeric value
 * @param value - The value to check
 * @returns Up arrow for positive, down arrow for negative
 */
export const getDirectionalArrow = (value: number): string => {
  return value >= 0 ? "▲" : "▼";
};
