import { createCard } from '../components/createCard.js'
const container = document.querySelector('.container')

export function renderCard (array) {
  container.innerHTML = ''
  array.forEach(({ name, avatar, image, id }) => createCard(name, avatar, image, id))
}
