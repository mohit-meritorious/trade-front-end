export function formatNumberWithCommas(number = 0) {
  return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
