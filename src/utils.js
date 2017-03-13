/*
 * Format a number as a price string
 * eg/ 123456.666 => $123,345.66
 */
export function formatPrice(x, leading='$') {
  x = x || 0;
  return leading + x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
