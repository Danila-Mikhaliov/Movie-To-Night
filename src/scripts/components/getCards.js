import { getData } from './getData.js'
import { renderDesk, globalObj } from './renderDesk.js'

export async function getCards () {
  const load = document.querySelector('.spinner')
  load.toggleAttribute('hidden', false)
  const result = await getData()
    .then((arr) => arr.sort(() => Math.random() - 0.5))
    .finally(() => load.toggleAttribute('hidden', true))
  globalObj.result = result
  renderDesk(result)
}
