import '../styles/styles.scss'
import { createDropdownSearch } from './components/search/createDropdownSearch'
import { getDropdown } from './components/dropdown-menu.js'
import { createCard, container } from './components/createCard.js'

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

export const globalObj = {}

async function getCards () {
  const load = document.querySelector('.spinner')
  load.toggleAttribute('hidden', false)
  const result = await getData()
    .then((arr) => arr.sort(() => Math.random() - 0.5))
    .finally(() => load.toggleAttribute('hidden', true))
  globalObj.result = result

  renderDesk(result)
}

function renderCard (array) {
  container.innerHTML = ''
  array.forEach(({ name, avatar, image, id }) => createCard(name, avatar, image, id))
}

export function renderDesk (res = globalObj.result) {
  const desk = localStorage.getItem('DESK') || 'Home'
  if (desk === 'Home') {
    renderCard(res)

    return
  }

  const arrayIds = JSON.parse(localStorage.getItem(desk)) || []

  renderCard(res.filter(({ id }) => arrayIds.includes(id)))
}
getCards()
createDropdownSearch()
