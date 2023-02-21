import '../styles/styles.scss'
import { createDropdownSearch } from './components/search/createDropdownSearch'
import { getDropdown } from './components/dropdown-menu.js'
import { createCard } from './components/createCard.js'
window.addEventListener('DOMContentLoaded', () => {
  getDropdown()
})

const URL = 'https://63e2831e109336b6cb097eba.mockapi.io/api/pinterest/pinterest-clone'

export function getData () {
  const data = fetch(URL)
    .then((response) => response.json())
    .then((user) => user)
  return data
}

async function getCards () {
  const load = document.querySelector('.spinner')
  load.toggleAttribute('hidden', false)
  const result = await getData().finally(() => load.toggleAttribute('hidden', true))
  result.forEach(({ name, avatar, image, id }) => createCard(name, avatar, image, id))
}
getCards()
createDropdownSearch()

async function renderDesk (deskNumber) {
  const data = await getData() // получаем массив из mockapi
  const local = await localStorage.getItem(deskNumber) // проверка локального хранилища по номеру доски
  const result = await data.filter((i) => local.includes(i.id))
  await console.log(result)
}

// renderDesk('desk1')
// renderDesk('desk2')
renderDesk('desk3')
