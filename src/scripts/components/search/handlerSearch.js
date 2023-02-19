import { getData } from '../../index.js'
import { createCard } from '../createCard.js'

export async function handlerSearch (event, value) {
  const cardsContainer = document.querySelector('.container')
  const notFoundBlock = document.createElement('div')
  notFoundBlock.innerHTML = 'Not Found'
  const searchValue = event?.target?.value || value
  const filtredCard = await getData().then((result) => {
    return result.filter((task) => task.title.toLowerCase().includes(searchValue.toLowerCase()))
  })
  cardsContainer.innerHTML = ''
  if (filtredCard.length > 0) {
    filtredCard.forEach((task) => {
      createCard(task.name, task.avatar, task.image, task.id)
    })
  } else {
    cardsContainer.append(notFoundBlock)
  }
}
