const primaryHeaderEl = document.querySelector(`[data-primary-header]`)
const primaryToggleEl = document.querySelector(`[data-primary-toggle]`)

const pledgesEl = document.querySelector(`[data-pledges]`)

primaryToggleEl.addEventListener(`click`, (e) => {
  primaryHeaderEl.toggleAttribute(`data-open`)
})

const { pledges } = data
let pledgesHtml = ``
pledges.forEach((pledge) => {
  const { title, amount, description, count } = pledge
  let notAvailable = ``
  let btnLabel = `Select Reward`
  if (count <= 0) {
    notAvailable = `data-not-available`
    btnLabel = `Out of Stock`
  }

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
})
pledgesEl.innerHTML = pledgesHtml
