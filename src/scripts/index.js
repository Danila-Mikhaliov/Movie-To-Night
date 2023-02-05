import '../styles/styles.scss'

const dropdown = document.querySelector('.dropdown')
const select = dropdown.querySelector('.dropdown__select')
const caret = dropdown.querySelector('.select__caret')
const menu = dropdown.querySelector('.dropdown__menu')
const options = dropdown.querySelectorAll('.menu__item')
const selected = dropdown.querySelector('.select__selected')

select.addEventListener('click', () => {
  select.classList.toggle('select-clicked')
  caret.classList.toggle('select__caret-rotate')
  menu.classList.toggle('dropdown__menu-open')
})

options.forEach((option) => {
  option.addEventListener('click', () => {
    selected.innerText = option.innerText
    select.classList.remove('select-clicked')
    caret.classList.remove('select__caret-rotate')
    menu.classList.remove('dropdown__menu-open')
  })

  options.forEach((option) => {
    option.classList.remove('active')
  })
  option.classList.add('active')
})
