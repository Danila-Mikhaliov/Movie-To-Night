export function checkLocalStorage (key) {
  if (localStorage.getItem(key) !== null) {
    return JSON.parse(localStorage.getItem(key))
  } else {
    return []
  }
}
