import '../styles/styles.scss'
import { getDropdown } from './components/dropdown-menu.js'
import { createCard } from './components/createCard.js'
window.addEventListener('DOMContentLoaded', () => {
  getDropdown(IMG)
})

const IMG = 'https://assets.codepen.io/12005/windmill.jpg'
const IMG2 = 'https://assets.codepen.io/12005/suspension-bridge.jpg'
const IMG3 = 'https://assets.codepen.io/12005/snowy.jpg'
const IMG4 = 'https://assets.codepen.io/12005/bristol-balloons1.jpg'
const IMG5 = 'https://assets.codepen.io/12005/dog-balloon.jpg'
createCard(IMG2)
createCard(IMG3)
createCard(IMG4)
createCard(IMG5)
createCard(IMG2)
createCard(IMG2)

createCard(IMG2)
createCard(IMG3)
createCard(IMG4)
createCard(IMG5)
createCard(IMG2)
createCard(IMG2)
createCard(IMG2)
createCard(IMG3)
createCard(IMG4)
createCard(IMG5)
createCard(IMG2)
createCard(IMG2)

// const allCartMenu = document.querySelectorAll('.card-content-menu')
// allCartMenu.forEach((item) => {
//   item.addEventListener('click', createCardMenu)
// })

// function createCardMenu (event) {
//   const cardMenu = event.target.parentNode
//   const cardMenuActive = document.createElement('div')
//   cardMenuActive.classList.add('card-content-menu-active')

//   const btnAddDrop = document.createElement('button')
//   btnAddDrop.type = 'button'
//   btnAddDrop.classList = 'card-btn-add-drop card__btn'
//   btnAddDrop.innerText = 'Add to desk'

//   const btnComplain = document.createElement('button')
//   btnComplain.type = 'button'
//   btnComplain.classList = 'card-btn-complain card__btn'
//   btnComplain.innerText = 'Complain'

//   cardMenu.append(cardMenuActive)
//   cardMenuActive.append(btnAddDrop, btnComplain)
//   cardMenuActive.addEventListener('click', () => closeCardMenu(event, cardMenuActive))
// }
// function closeCardMenu (event, element) {
//   if (event.target === element.id) {
//     return
//   }
//   element.remove()
// }

// const container = document.querySelector('.container')

// function createCard (img) {
//   const card = document.createElement('div')
//   card.classList = 'card'
//   card.id = Date.now()

//   const cardImage = document.createElement('img')
//   cardImage.src = img
//   cardImage.classList = 'card-image'
//   cardImage.alt = 'A windmill'

//   const cardContentMenu = document.createElement('div')
//   cardContentMenu.classList = 'card-content-menu'
//   cardContentMenu.addEventListener('click', createCardMenu)
//   const cardMenuDots = document.createElement('div')
//   cardMenuDots.classList = 'card-content-menu__dots'

//   const cardAuthor = document.createElement('div')
//   cardAuthor.classList = 'card-author'

//   const cardAuthorIcon = document.createElement('img')
//   cardAuthorIcon.classList = 'card-author-icon'
//   cardAuthorIcon.src = './test.jpg'

//   const cardAuthorName = document.createElement('p')
//   cardAuthorName.classList = 'card-author-name'
//   cardAuthorName.innerText = 'Author name'

//   cardAuthor.append(cardAuthorIcon, cardAuthorName)
//   card.append(cardImage, cardContentMenu, cardAuthor)
//  cardContentMenu.append(cardMenuDots)
//   container.append(card)
// }
