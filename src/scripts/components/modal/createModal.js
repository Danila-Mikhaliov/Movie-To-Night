import { selectDeskList } from './modalArrayList.js'

export function createModal (overlay, arr) {
  const modal = document.createElement('div')
  modal.className = 'modal-select-desk'
  modal.id = event.target.parentNode.id

  const modalTitle = document.createElement('h2')
  modalTitle.className = 'modal__title'
  modalTitle.innerText = 'Complain'

  const modalForm = document.createElement('form')
  modalForm.className = 'modal__form'

  const modalList = document.createElement('ul')
  modalList.className = 'modal__list'

  const list = arr.map(({ title, subtitle, id }) => {
    const modalListItem = document.createElement('li')
    modalListItem.className = 'modal__list-item'

    const checkbox = document.createElement('input')
    checkbox.className = 'modal__list-item-checkbox'
    checkbox.type = 'checkbox'
    checkbox.id = id

    const label = document.createElement('label')
    label.className = 'modal__list-item-name'
    label.innerText = title

    if (subtitle) {
      const labelSubtitle = document.createElement('div')
      labelSubtitle.className = 'modal__list-item-subtitle'
      labelSubtitle.innerText = `${subtitle}`

      modalListItem.append(checkbox, label, labelSubtitle)
      return modalListItem
    } else {
      modalListItem.append(checkbox, label)
      return modalListItem
    }
  })

  const btnsModal = document.createElement('div')
  btnsModal.className = 'modal__btn-content'

  const modalSendBtn = document.createElement('button')
  modalSendBtn.className = 'modal__send-btn'
  modalSendBtn.innerText = 'Send'

  const modalCloseBtn = document.createElement('button')
  modalCloseBtn.className = 'modal__close-btn'
  modalCloseBtn.innerText = 'Close'
  modalCloseBtn.addEventListener('click', () => {
    overlay.remove()
  })

  btnsModal.append(modalSendBtn, modalCloseBtn)

  modalSendBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.modal__list-item-checkbox')
    const cardId = modal.id
    new Array(...checkboxes)
      .filter((el) => el.checked)
      .map((el) => {
        const [item] = selectDeskList.filter(({ id }) => el.id === id)

        return item?.title
      })
      .forEach((key) => {
        const desk = JSON.parse(localStorage.getItem(key)) || []
        desk.push(cardId)
        localStorage.setItem(key, JSON.stringify(desk))
      })
    overlay.remove()
  })
  modalList.append(...list)
  modalForm.append(modalList, btnsModal)
  modal.append(modalTitle, modalForm)
  return modal
}
