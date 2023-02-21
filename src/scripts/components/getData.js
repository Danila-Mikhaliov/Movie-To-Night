const URL = 'https://63e2831e109336b6cb097eba.mockapi.io/api/pinterest/pinterest-clone'
export function getData () {
  const data = fetch(URL)
    .then((response) => response.json())
    .then((user) => user)
  return data
}
