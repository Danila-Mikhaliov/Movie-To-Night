import { createCardMenu } from './createCardMenu.js'
const container = document.querySelector('.container')

export function createCard (img) {
  const card = document.createElement('div')
  card.className = 'card'
  card.id = Date.now() * Math.random()

  const cardImage = document.createElement('img')
  cardImage.src = img
  cardImage.className = 'card-image'
  cardImage.alt = 'A windmill'

  const cardContentMenu = document.createElement('button')
  cardContentMenu.className = 'card-content-menu'
  cardContentMenu.addEventListener('click', createCardMenu)

  const cardAuthor = document.createElement('div')
  cardAuthor.className = 'card-author'

  const cardAuthorIcon = document.createElement('img')
  cardAuthorIcon.className = 'card-author-icon'
  cardAuthorIcon.src = './test.jpg'

  const cardAuthorName = document.createElement('p')
  cardAuthorName.className = 'card-author-name'
  cardAuthorName.innerText = 'Author name'

  cardAuthor.append(cardAuthorIcon, cardAuthorName)
  card.append(cardImage, cardContentMenu, cardAuthor)

  container.append(card)
}
