export function setDataToLocalStorage (arr, key) {
  localStorage.setItem(key, JSON.stringify(arr))
}
