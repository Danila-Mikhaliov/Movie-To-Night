import { createPopularQueries } from './createPopularQueries.js'
import { handlerSearch } from './handlerSearch.js'

const POPULAR_IMAGE = ['Cars', 'Memes', 'Sport', 'Movie', 'Abstract']

export function createDropdownSearch () {
  const input = document.querySelector('.header-search__input')
  input.id = 'inputId'

  const containerQueries = document.createElement('div')
  containerQueries.className = 'container__queries'
  containerQueries.id = 'dropdownId'
  containerQueries.style.display = 'none'
  input.after(containerQueries)

  const queriesTitle = document.createElement('h2')
  queriesTitle.className = 'queries__title'
  queriesTitle.innerText = 'Popular queries'
  const queriesList = document.createElement('ul')
  queriesList.className = 'queries__list'

  containerQueries.append(queriesTitle, queriesList)

  POPULAR_IMAGE.forEach((text) => {
    createPopularQueries(text, queriesList, input)
  })

  input.addEventListener('focus', () => {
    containerQueries.style.display = 'block'
  })

  const closeDropdown = (e) => {
    if (e.target.parentNode.id !== containerQueries.id && e.target.id !== input.id) {
      containerQueries.style.display = 'none'
    }
  }

  input.addEventListener('input', (e) => {
    containerQueries.style.display = e.target.value.length > 0 ? 'none' : 'block'
    handlerSearch(e)
  })

  window.addEventListener('click', closeDropdown)
}
