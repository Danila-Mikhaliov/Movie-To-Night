export function createCardMenu (event) {
  const cardMenu = event.target.parentNode
  const cardMenuActive = document.createElement('div')
  cardMenuActive.classList.add('card-content-menu-active')

  const btnAddDrop = document.createElement('button')
  btnAddDrop.type = 'button'
  btnAddDrop.classList = 'card-btn-add-drop card__btn'
  btnAddDrop.innerText = 'Add to desk'

  const btnComplain = document.createElement('button')
  btnComplain.type = 'button'
  btnComplain.classList = 'card-btn-complain card__btn'
  btnComplain.innerText = 'Complain'

  cardMenu.append(cardMenuActive)
  cardMenuActive.append(btnAddDrop, btnComplain)
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
