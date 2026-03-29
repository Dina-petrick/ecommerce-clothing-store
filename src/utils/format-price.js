export const formatPrice = (value) =>
  typeof value === 'number' ? `$${value}` : value;
