const primaryToggle = document.querySelector(`[data-primary-toggle]`)
const primaryHeader = document.querySelector(`[data-primary-header]`)

primaryToggle.addEventListener(`click`, (e) => {
  primaryHeader.toggleAttribute(`data-open`)
})
