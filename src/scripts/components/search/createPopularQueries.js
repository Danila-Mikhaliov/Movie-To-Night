import { handlerSearch } from './handlerSearch.js'

export async function createPopularQueries (data, queriesList, input) {
  const queriesListItem = document.createElement('li')
  queriesListItem.className = 'queries__list-item'

  const queriesBtn = document.createElement('button')
  queriesBtn.className = 'queries__list-item-button'

  queriesBtn.innerText = data

  queriesList.append(queriesBtn)

  queriesList.append(queriesListItem)

  queriesBtn.addEventListener('click', () => {
    input.value = data
    handlerSearch(undefined, data)
  })
}
