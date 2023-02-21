import '../styles/styles.scss'
import { createDropdownSearch } from './components/search/createDropdownSearch'
import { getDropdown } from './components/dropdown-menu.js'
import { getCards } from './components/getCards.js'

function initApp () {
  window.addEventListener('DOMContentLoaded', () => {
    getDropdown()
  })
  getCards()
  createDropdownSearch()
}

initApp()
