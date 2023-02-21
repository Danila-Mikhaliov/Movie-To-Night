import { globalObj, renderDesk } from '../renderDesk.js'

export async function handlerSearch (event, value) {
  const cardsContainer = document.querySelector('.container')
  const notFoundBlock = document.createElement('div')
  notFoundBlock.innerHTML = 'Not Found'
  const searchValue = event?.target?.value || value
  const filtredCard = globalObj.result?.filter((task) => task.title.toLowerCase().includes(searchValue.toLowerCase()))

  cardsContainer.innerHTML = ''
  if (filtredCard.length > 0) {
    renderDesk(filtredCard)
  } else {
    cardsContainer.append(notFoundBlock)
  }
}
