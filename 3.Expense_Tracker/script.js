const transactionText = document.getElementById("name");        //'text' input 값
const transactionAmount = document.getElementById("amount");    //'amount' input 값
const addTransactionBtn = document.getElementById("add-btn");   // 'add transaction' button
const transactionHistory = document.querySelector(".history");  // history를 보여주는 <ul>

const balance = document.getElementById("total-balance");       // 총 금액
const incTrace = document.getElementById("inc-trace");          // 입금 금액
const expTrace = document.getElementById("exp-trace");          // 출금 금액

const EXPENSE_TRACKER = "expenseTracker";                       // loacalStorage의 key 
const localStorageTransactions = JSON.parse(
    localStorage.getItem(EXPENSE_TRACKER)
);

// localStorage에 값이 있는 경우, 값을 parse하고 없는 경우 빈 배열을 생성
let transactions
    = localStorage.getItem(EXPENSE_TRACKER) !== null ? localStorageTransactions : [];

// history의 각 항목에 id를 생성
function makeHistoryId() {
    return Math.floor(Math.random() * 10000);
}

// 새로운 transaction에 대한 정보를 저장하고, 업데이트
function getTrackerInfo(event) {
    event.preventDefault();

    const id = makeHistoryId();
    const text = document.getElementById("name");
    const amount = document.getElementById("amount");

    const transaction = {
        id: id,
        text: text.value,
        amount: amount.value
    };

    transactions.push(transaction);

    updateValues();

    printTrackerHistory(transaction);

    updateLocalStorage();

    // input 초기화
    text.value = "";
    amount.value = "";
}

// 총 금액(total-balance), Trace의 값을 업데이트
function updateValues() {
    let trimBalance = balance.innerText.substring(1, balance.innerHTML.length - 1);
    let updateBalance = (parseFloat(trimBalance) + parseFloat(amount.value)).toFixed(2);
    balance.innerText = `$${updateBalance}`;

    if (amount.value > 0) {
        let trimIncTrace = incTrace.innerText.substring(1, incTrace.innerHTML.length - 1);
        let updateIncTrace = (parseFloat(trimIncTrace) + parseFloat(amount.value)).toFixed(2);
        incTrace.innerText = `$${updateIncTrace}`;
    } else {
        let trimExpTrace = expTrace.innerText.substring(1, expTrace.innerHTML.length - 1);
        let updateExpTrace = (parseFloat(trimExpTrace) - parseFloat(amount.value)).toFixed(2);
        expTrace.innerText = `$${updateExpTrace}`;
    }
}

// DOM에 새로운 history 목록을 추가
function printTrackerHistory(transaction) {
    const li = document.createElement("li");
    const sign = transaction.amount < 0 ? '-$' : '+$';

    li.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    li.innerHTML = `${transaction.text}
                        <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn">x</button>`;
    transactionHistory.appendChild(li);
}

// localStorage에 추가된 정보를 업데이트
function updateLocalStorage() {
    localStorage.setItem(EXPENSE_TRACKER, JSON.stringify(transactions));
}

// 화면 초기화
function init() {
    transactionHistory.innerHTML = "";

    transactions.forEach(printTrackerHistory);

    // updateValues();
}

init();

addTransactionBtn.addEventListener("click", getTrackerInfo);
