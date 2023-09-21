/*
Check the allow input inbox
If true
	display the input

get any existing expenses from local storage
render expenses

when the "enter" button is clicked:
	get the stuff out of the input form
	format stuff
	insert stuff into list of expenses
	update local storage
	update total spent
	rerender expense list
*/

import {renderExpenseList} from "./expenseTracker.mjs";

const allowCheck = document.querySelector("#allowInput")
console.dir(allowCheck)

function toggleInputForm() {
	const inputForm = document.querySelector("#input")
	if (allowCheck.checked) {
		inputForm.classList.remove("hide")
	} else {
		inputForm.classList.add("hide")
	}
}

toggleInputForm()
renderExpenseList()

allowCheck.addEventListener('click', toggleInputForm)