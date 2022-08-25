const primaryHeaderEl = document.querySelector(`[data-primary-header]`)
const btnPrimaryToggleEl = document.querySelector(`[data-btn-primary-toggle]`)
const btnPledgeEls = document.querySelectorAll(`[data-btn-pledge]`)

const btnBackProjectEl = document.querySelector(`[data-btn-back-project]`)
const btnClosePledgeModalEl = document.querySelector(
  `[data-btn-close-pledge-modal]`
)
const modalPledgesEl = document.querySelector(`[data-modal-pledges]`)

const pledgesEl = document.querySelector(`[data-pledges]`)
const pledgesFormEl = document.querySelector(`[data-form-pledges]`)
const pledgeRadioEl = document.querySelectorAll(`input[name="pledge"]`)

const btnContinueEls = document.querySelectorAll(`[data-btn-continue]`)

const modalThankYouEl = document.querySelector(`[data-modal-thank-you]`)
const btnCloseThankYouModalEl = document.querySelector(
  `[data-btn-close-thank-you-modal]`
)

const openAttribute = `data-open`
const selectedAttribute = `data-selected`

btnPrimaryToggleEl.addEventListener(`click`, (e) => {
  primaryHeaderEl.toggleAttribute(openAttribute)
})

btnPledgeEls.forEach((el) => {
  el.addEventListener(`click`, (e) => {
    modalPledgesEl.setAttribute(openAttribute, true)
  })
})

btnBackProjectEl.addEventListener(`click`, (e) => {
  modalPledgesEl.setAttribute(openAttribute, true)
})

btnClosePledgeModalEl.addEventListener(`click`, (e) => {
  modalPledgesEl.removeAttribute(openAttribute)
})

pledgeRadioEl.forEach((el) => {
  el.addEventListener(`click`, (e) => {
    const selectedPledge = e.target.value

    document.querySelectorAll(`[data-selected]`).forEach((el) => {
      el.removeAttribute(selectedAttribute)
    })

    document
      .querySelector(`[data-key="${selectedPledge}"]`)
      .setAttribute(selectedAttribute, true)
  })
})

btnContinueEls.forEach((el) => {
  el.addEventListener(`click`, (e) => {
    modalPledgesEl.removeAttribute(openAttribute)
    modalThankYouEl.setAttribute(openAttribute, true)
  })
})

btnCloseThankYouModalEl.addEventListener(`click`, (e) => {
  modalThankYouEl.removeAttribute(openAttribute)
})
