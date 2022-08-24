const primaryHeaderEl = document.querySelector(`[data-primary-header]`)
const btnPrimaryToggleEl = document.querySelector(`[data-btn-primary-toggle]`)

const btnBackProjectEl = document.querySelector(`[data-btn-back-project]`)
const btnClosePledgeModalEl = document.querySelector(
  `[data-btn-close-pledge-modal]`
)
const modalPledgesEl = document.querySelector(`[data-modal-pledges]`)

const pledgesEl = document.querySelector(`[data-pledges]`)
const pledgesFormEl = document.querySelector(`[data-pledges-form]`)

btnPrimaryToggleEl.addEventListener(`click`, (e) => {
  primaryHeaderEl.toggleAttribute(`data-open`)
})

btnBackProjectEl.addEventListener(`click`, (e) => {
  modalPledgesEl.setAttribute(`data-open`, true)
})

btnClosePledgeModalEl.addEventListener(`click`, (e) => {
  modalPledgesEl.removeAttribute(`data-open`)
})

const { pledges } = data

let pledgesHtml = ``
let pledgesModalHtml = ``

pledges.forEach((pledge, index) => {
  const { key, title, amount, description, count } = pledge
  let notAvailable = ``
  let btnLabel = `Select Reward`
  if (count <= 0) {
    notAvailable = `data-not-available`
    btnLabel = `Out of Stock`
  }

  let pledgeModalText = ``
  let pledgeModalAmount = ``

  if (amount > 0) {
    pledgesHtml += `
    <div class="pledge" ${notAvailable}>
        <div class="pledge-header">
            <h3 class="fw-bold">${title}</h3>
            <p class="text-primary-400">Pledge $${amount} or more</p>
        </div>

        <div class="pledge-content">
            <p class="text-neutral-600">${description}</p>
        </div>

        <div class="pledge-amount text-neutral-600">
            <div class="text-neutral-900 fw-bold fs-700">${count}</div>
            <div>left</div>
        </div>

        <div class="pledge-controls">
            <button class="btn btn-primary" type="button">
                ${btnLabel}
            </button>
        </div>
    </div>
    `

    pledgeModalText = `<p class="text-primary-400">Pledge $${amount} or more</p>`
    pledgeModalAmount = `
    <div class="pledge-amount text-neutral-600">
        <div class="text-neutral-900 fw-bold fs-700">${count}</div>
        <div>left</div>
    </div>
    `
  }

  pledgesModalHtml += `
    <div class="pledge-modal" ${notAvailable}>
        <div class="pledge-modal-body">
            <div class="pledge-modal-header">
                <input
                    type="radio"
                    name="pledge"
                    id="pledge${index}"
                    value="${key}"
                    class="visually-hidden"
                />
                <label for="pledge${index}" class="pledge-radio">&nbsp;</label>

                <h3 class="fw-bold">${title}</h3>
                ${pledgeModalText}
            </div>
            <div class="pledge-modal-content">
                <p class="text-neutral-500">${description}</p>
            </div>
            ${pledgeModalAmount}
        </div>
        <div class="pledge-modal-footer">
            <p class="text-neutral-500">Enter your pledge</p>
            <div class="pledge-modal-controls">
                <div class="pledge-input-group">
                    <div class="text-neutral-500 fw-bold">$</div>
                    <input
                        type="number"
                        name="amount"
                        class="pledge-input"
                        min="0"
                        step="0.01"
                    />
                </div>
                <button class="btn btn-primary" type="button">
                    Continue
                </button>
            </div>
        </div>
    </div>
    `
})

pledgesEl.innerHTML = pledgesHtml
pledgesFormEl.innerHTML = pledgesModalHtml
