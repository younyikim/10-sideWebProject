const transactionText = document.getElementById("name");
const transactionAmount = document.getElementById("amount");
const addTransactionBtn = document.getElementById("add-btn");
const transactionHistory = document.querySelector(".history");

addTransactionBtn.addEventListener("click", addTransaction);
