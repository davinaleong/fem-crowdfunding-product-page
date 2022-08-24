const primaryHeaderEl = document.querySelector(`[data-primary-header]`)
const btnPrimaryToggleEl = document.querySelector(`[data-btn-primary-toggle]`)

const btnBackProjectEl = document.querySelector(`[data-btn-back-project]`)
const btnClosePledgeModalEl = document.querySelector(
  `[data-btn-close-pledge-modal]`
)
const modalPledgesEl = document.querySelector(`[data-modal-pledges]`)

const pledgesEl = document.querySelector(`[data-pledges]`)
const pledgesFormEl = document.querySelector(`[data-pledges-form]`)
const pledgeRadioEl = document.querySelectorAll(`input[name="pledge"]`)

btnPrimaryToggleEl.addEventListener(`click`, (e) => {
  primaryHeaderEl.toggleAttribute(`data-open`)
})

btnBackProjectEl.addEventListener(`click`, (e) => {
  modalPledgesEl.setAttribute(`data-open`, true)
})

btnClosePledgeModalEl.addEventListener(`click`, (e) => {
  modalPledgesEl.removeAttribute(`data-open`)
})

pledgeRadioEl.forEach((el) => {
  el.addEventListener(`click`, (e) => {
    const selectedPledge = e.target.value

    document.querySelectorAll(`[data-selected]`).forEach((el) => {
      el.removeAttribute(`data-selected`)
    })

    document
      .querySelector(`[data-key="${selectedPledge}"]`)
      .setAttribute(`data-selected`, true)
  })
})
