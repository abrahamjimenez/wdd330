const expenses = [{description: "item1", amount: "15"}, {description: "item2", amount: "10"}]

let runningTotal = 0

function expenseTemplate(expense) {
	runningTotal += parseInt(expense.amount)
	return `<tr>
            <td>$${expense.description}</td>
            <td>$${expense.amount}</td>
            <td>$${runningTotal}</td>
          </tr>`
}

export function renderExpenseList() {
	runningTotal = 0
	const outputEl = document.querySelector(".outputBody")
	const html = expenses.map(expenseTemplate)
	outputEl.innerHTML = html.join('')
}