import { openModal } from './modal/openModal.js'

export function createCardMenu (event) {
  const cardMenu = event.target.parentNode
  const cardMenuActive = document.createElement('div')
  cardMenuActive.id = cardMenu.id
  cardMenuActive.classList.add('card-content-menu-active')

  const btnAddDrop = document.createElement('button')
  btnAddDrop.type = 'button'
  btnAddDrop.classList = 'card-btn-add-drop card__btn'
  btnAddDrop.innerText = 'Add to desk'
  btnAddDrop.dataset.card = 'one'

  const btnComplain = document.createElement('button')
  btnComplain.type = 'button'
  btnComplain.classList = 'card-btn-complain card__btn'
  btnComplain.innerText = 'Complain'
  btnComplain.dataset.card = 'two'

  cardMenuActive.append(btnAddDrop, btnComplain)
  cardMenu.append(cardMenuActive)
  btnAddDrop.addEventListener('click', openModal)
  btnComplain.addEventListener('click', openModal)

  const closeCardMenu = (e) => {
    if (e.target.parentNode.id === cardMenu.id) {
      return
    } else {
      cardMenuActive.remove()
    }
    window.removeEventListener('click', closeCardMenu)
  }

  window.addEventListener('click', closeCardMenu)
  cardMenuActive.addEventListener('click', () => closeCardMenu(event, cardMenuActive))
}
