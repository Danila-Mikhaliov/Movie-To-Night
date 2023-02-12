import '../styles/styles.scss'
import { getDropdown } from './components/dropdown-menu.js'
import { createCard } from './components/createCard.js'
window.addEventListener('DOMContentLoaded', () => {
  getDropdown()
})

const URL = 'https://63e2831e109336b6cb097eba.mockapi.io/api/pinterest/pinterest-clone'

async function getCards () {
  const load = document.querySelector('.spinner')
  load.toggleAttribute('hidden', false)
  const result = await fetch(URL)
    .then((response) => response.json())
    .then((user) => (user))
    .finally(() => load.toggleAttribute('hidden', true))
  result.forEach(({ name, avatar, image, id }) => createCard(name, avatar, image, id))
}
getCards()
