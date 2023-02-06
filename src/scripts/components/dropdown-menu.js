export function getDropdown () {
  const dropdown = document.querySelector('.dropdown')
  const select = dropdown.querySelector('.dropdown__select')
  const caret = dropdown.querySelector('.select__caret')
  const menu = dropdown.querySelector('.dropdown__menu')
  const options = dropdown.querySelectorAll('.menu__item')
  const selected = dropdown.querySelector('.select__selected')

  select.addEventListener('click', toggleDropdown)

  function toggleDropdown () {
    select.classList.toggle('select-clicked')
    caret.classList.toggle('select__caret-rotate')
    menu.classList.toggle('dropdown__menu-open')
  }

  function handleCloseDropdown (option) {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText
      select.classList.remove('select-clicked')
      caret.classList.remove('select__caret-rotate')
      menu.classList.remove('dropdown__menu-open')
    })
  }
  function handleSelectItemDropdown (option) {
    option.classList.remove('active')
    option.classList.add('active')
  }

  options.forEach((option) => handleCloseDropdown(option))
  options.forEach((option) => handleSelectItemDropdown(option))
}
