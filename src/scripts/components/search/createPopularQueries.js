import { handlerSearch } from './handlerSearch.js'

export async function createPopularQueries (data, containerQueries, input) {
  const queriesList = document.createElement('ul')
  queriesList.className = 'queries__list'

  const queriesListItem = document.createElement('li')
  queriesListItem.className = 'queries__list-item'

  const queriesBtn = document.createElement('button')

  queriesBtn.innerText = data

  queriesList.append(queriesBtn)

  queriesList.append(queriesListItem)
  containerQueries.append(queriesList)

  queriesBtn.addEventListener('click', () => {
    input.value = data
    handlerSearch(undefined, data)
  })
}
