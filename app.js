
const transactionForm = document.getElementById('transactionForm');
const balanceElement = document.getElementById('balance');
const incomeElement = document.getElementById('income');
const expenseElement = document.getElementById('expense');

let balance = 0;
let income = 0;
let expense = 0;

transactionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;

    if (amount > 0) {
        balance += amount;
        income += amount;
    } else {
        balance += amount;
        expense -= amount;
    }

    balanceElement.textContent = `$${balance.toFixed(2)}`;
    incomeElement.textContent = `$${income.toFixed(2)}`;
    expenseElement.textContent = `$${expense.toFixed(2)}`;

    transactionForm.reset();
});