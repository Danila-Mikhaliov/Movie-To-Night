import { renderDesk } from '../components/renderDesk.js'

export function getDropdown () {
  const deskName = localStorage.getItem('DESK') || 'Home'
  const dropdown = document.querySelector('.dropdown')
  const select = dropdown.querySelector('.dropdown__select')
  const caret = dropdown.querySelector('.select__caret')
  const menu = dropdown.querySelector('.dropdown__menu')
  const options = dropdown.querySelectorAll('.menu__item')
  const selected = dropdown.querySelector('.select__selected')

  selected.innerHTML = deskName
  options.forEach((el) => {
    if (el.innerHTML === deskName) {
      el.classList.add('active')
    }
  })

  select.addEventListener('click', toggleDropdown)

  function toggleDropdown () {
    select.classList.toggle('select-clicked')
    caret.classList.toggle('select__caret-rotate')
    menu.classList.toggle('dropdown__menu-open')
  }

  function handleCloseDropdown (option) {
    option.addEventListener('click', () => {
      const input = document.getElementById('inputId')
      const text = option.innerText
      selected.innerText = text
      select.classList.remove('select-clicked')
      caret.classList.remove('select__caret-rotate')
      menu.classList.remove('dropdown__menu-open')

      input.value = ''

      localStorage.setItem('DESK', text)
      renderDesk()
    })
  }
  function handleSelectItemDropdown (option) {
    option.classList.remove('active')
    option.classList.add('active')
  }

  options.forEach((option) => handleCloseDropdown(option))
  options.forEach((option) => handleSelectItemDropdown(option))
}
