export function createModal (overlay, arr) {
  const modal = document.createElement('div')
  modal.className = 'modal-select-desk'

  const modalTitle = document.createElement('h2')
  modalTitle.className = 'modal__title'
  modalTitle.innerText = 'Complain'

  const modalForm = document.createElement('form')
  modalForm.className = 'modal__form'

  const modalList = document.createElement('ul')
  modalList.className = 'modal__list'

  const list = arr.map(({ title, id }) => {
    const item = document.createElement('li')
    item.className = 'modal-list__item'
    item.innerText = title

    const checkbox = document.createElement('input')
    checkbox.className = 'modal-list__item-checkbox'
    checkbox.type = 'checkbox'
    checkbox.id = id

    item.prepend(checkbox)

    return item
  })

  const modalSendBtn = document.createElement('button')
  modalSendBtn.type = 'button'
  modalSendBtn.className = 'modal__send-btn'
  modalSendBtn.innerText = 'Send'

  modalSendBtn.addEventListener('click', () => {
    //  valueComplain дальше понадобится для того чтобы знать какие чекбоксы были нажаты
    // const checkboxes = document.querySelectorAll('.modal-list__item-checkbox')
    // const valueComplain = new Array(...checkboxes).filter((el) => el.checked).map((el) => el.id)
    overlay.remove()
  })

  modalForm.append(modalList, modalSendBtn)
  modalList.append(...list)
  modal.append(modalTitle, modalForm)
  return modal
}
