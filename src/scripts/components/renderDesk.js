import { renderCard } from './renderCard.js'
export const globalObj = {}

export function renderDesk (res = globalObj.result) {
  const desk = localStorage.getItem('DESK') || 'Home'
  if (desk === 'Home') {
    renderCard(res)
    return
  }
  const arrayIds = JSON.parse(localStorage.getItem(desk)) || []
  renderCard(res.filter(({ id }) => arrayIds.includes(id)))
}
