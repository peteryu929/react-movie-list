export function autoSizeFont(str) {
  if (str.length < 18) {
    return "15px";
  } else if (str.length < 24) {
    return "14px";
  } else if (str.length < 32) {
    return "13px";
  } else {
    return "12px";
  }
}
