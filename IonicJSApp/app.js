const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");

const cancelBin = document.querySelector('#btn-cancel');
const confirnBtn = document.querySelector("#btn-confirm");

const expensesList = document.querySelector("#expenses-list");
const totalExpOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

confirnBtn.addEventListener('click', () => {
    console.log("this works !");
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <=0 || enteredReason <= 0 || enteredReason.trim().length <= 0) {
        let alert = document.createElement('ion-alert');
        alert.header = 'Invalid Value';
        alert.message = "Expense Reason is empty !";
        alert.buttons = ['OK'];
        document.body.appendChild(alert);
        alert.present();
        return;
    }

    console.log(enteredReason, enteredAmount);
    const newItem = document.createElement("ion-item");
    newItem.textContent = enteredReason + ": $" + enteredAmount;
    totalExpenses += +enteredAmount;
    totalExpOutput.textContent = totalExpenses;

    expensesList.appendChild(newItem);
});