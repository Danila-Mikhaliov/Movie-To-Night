const allCartMenu = document.querySelectorAll('.card-content-menu')
allCartMenu.forEach((item) => {
  item.addEventListener('click', createCardMenu)
})

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
  cardMenuActive.addEventListener('click', () => closeCardMenu(event, cardMenuActive))
}
function closeCardMenu (event, element) {
  if (event.target === element.id) {
    return
  }
  element.remove()
}
