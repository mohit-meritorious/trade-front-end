export function formatNumberWithCommas(number = 0, allowFixed = true) {
  if (allowFixed) {
    number = number.toFixed(2);
  } else {
    number = number.toString();
  }
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
