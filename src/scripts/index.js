import '../styles/styles.scss'
import { getDropdown } from './components/dropdown-menu.js'

window.addEventListener('DOMContentLoaded', () => {
  getDropdown()
})

const allCartMenu = document.querySelectorAll('.card__content-menu')
allCartMenu.forEach((item) => {
  item.addEventListener('click', createCardMenu)
})

function createCardMenu (event) {
  const cardMenu = event.target.parentNode
  const cardMenuActive = document.createElement('div')
  cardMenuActive.classList.add('card__content-menu-active')

  const btnAddDrop = document.createElement('button')
  btnAddDrop.type = 'button'
  btnAddDrop.classList = 'menu__add-drop menu__btn'
  btnAddDrop.innerText = 'Добавить на доску'

  const btnComplain = document.createElement('button')
  btnComplain.type = 'button'
  btnComplain.classList = 'menu__complain menu__btn'
  btnComplain.innerText = 'Пожаловаться'

  cardMenu.append(cardMenuActive)
  cardMenuActive.append(btnAddDrop, btnComplain)
  cardMenuActive.addEventListener('click', () => closeCardMenu(event, cardMenuActive))
}
function closeCardMenu (event, element) {
  if (event.target === element.id) {
    return
  }
  element.remove()
}
