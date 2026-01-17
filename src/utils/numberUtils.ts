export const parseFloatSafe = (
  value: string,
  defaultValue: number = 0
): number => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? defaultValue : parsed;
};

export const formatNumber = (value: number, decimals: number = 2): string => {
  return value.toFixed(decimals);
};

export const formatCurrency = (value: number, decimals: number = 2): string => {
  return `₹${formatNumber(value, decimals)}`;
};

export const formatPercentage = (
  value: number,
  includeSign: boolean = true,
  decimals: number = 2
): string => {
  const sign = includeSign && value >= 0 ? "+" : "-";
  return `${sign}${formatNumber(value, decimals)}%`;
};

export const isPositive = (value: number): boolean => {
  return value >= 0;
};

export const getDirectionalArrow = (value: number): string => {
  return value >= 0 ? "▲" : "▼";
};
