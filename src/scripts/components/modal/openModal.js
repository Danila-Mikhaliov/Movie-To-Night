import { createModal } from './createModal.js'
import { complainList, selectDeskList } from './modalArrayList.js'

export function openModal (e) {
  const modalOverlay = document.createElement('div')
  modalOverlay.classList.add('modal-overlay')

  const parent = e.target.parentNode

  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.id = parent.id

  modalOverlay.append(modal)
  document.body.appendChild(modalOverlay)
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      e.target.remove()
    }
  })
  const path = e.target.dataset.card

  if (path === 'one') {
    modal.append(createModal(modalOverlay, selectDeskList))
  } else if (path === 'two') {
    modal.append(createModal(modalOverlay, complainList))
  }
}
