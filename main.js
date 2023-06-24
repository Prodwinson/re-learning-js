const expenses = []

function newExpenses(name, date, amount) {
    this.name = name
    this.date = date
    this.amount = amount
}

function addToExpenses() {
    const name = document.querySelector("#input-name").value
    const date = document.querySelector("#input-date").value
    const amount = document.querySelector("#input-amount").value

    const newItem = new newExpenses(name, date, amount)

    expenses.push(newItem)
    console.log(expenses)

    render()
}

const btn = document.querySelector("#btn")
btn.addEventListener('click', () => {
    addToExpenses()
})

function render() {
    const table = document.querySelector("#table")
    const tr = document.createElement("tr")
    tr.innerText = ""
    for (let index = 0; index < expenses.length; index++) {
        const item = expenses[index];

        const td1 = document.createElement("td")
        td1.innerText = `${item.name}`
        const td2 = document.createElement("td")
        td2.innerText = `${item.date}`
        const td3 = document.createElement("td")
        td3.innerText = `${item.amount}`
        const td4 = document.createElement("td")

        const removeBtn = document.createElement("input")
        removeBtn.type = "checkbox"
        td4.appendChild(removeBtn)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        table.appendChild(tr)
    }
}

