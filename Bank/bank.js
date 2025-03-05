"use strict";
let balance = 35000;
let index = 10;
const main = document.querySelector("main");

const open = document.querySelector(".open");
const pin = document.querySelector(".pin");
const user = document.querySelector(".user");
const transfer = document.querySelector("#trans-am");
const reciever = document.querySelector("#trans-to");
const send = document.querySelector(".send");
const loan = document.querySelector("#trans-am2");
const recieve = document.querySelector(".send2");
const total = document.querySelector(".sum");
const credites = document.querySelector(".credited");
const debit = document.querySelector(".debited");
const interest_rev = document.querySelector(".interest");
const owner = document.querySelector("#owner");
const passwords = document.querySelector("#trans-am3");
const close = document.querySelector(".send3");
const record1 = document.querySelector(".type1");
const record2 = document.querySelector(".type2");
const transaction = document.querySelector(".transaction");
const sort = document.querySelector(".sort");
const account1 = {
  owner: "Dagmawi Antehun",
  pin: 2017,
  movements: [2000, -400, 6000, -3000, -500, 600, 9000],
  interestRate: 0.03,
};
const account2 = {
  owner: "Siyum Teshome",
  pin: 2016,
  movements: [4000, -900, 1000, -2000, -700, 600, 1500],
  interestRate: 0.022,
};
const account3 = {
  owner: "Meron Esayas",
  pin: 2015,
  movements: [-1000, 600, 3000, -3000, 15000, 600, -4000],
  interestRate: 0.01,
};
const account4 = {
  owner: "Fikir Antehun",
  pin: 2002,
  movements: [9000, -200, 16000, -7000, -2500, 6000, 15000],
  interestRate: 0.05,
};
const accounts = [account1, account2, account3, account4];
//creating a username and total balance for each account
accounts.forEach((acc) => {
  acc.userName = acc.owner
    .split(" ")
    .map((acct) => acct.slice(0, 1))
    .join("");
});
let currentAccount;
const start = function () {
  const username = user.value;
  const password = Number(pin.value);
  currentAccount = accounts.find(
    (acco) => acco.userName === username && password === acco.pin
  );
  currentAccount
    ? (main.style.opacity = 100)
    : alert("Wrong username or password");
  user.value = pin.value = "";
  movement(currentAccount);
};
const movement = (account, sort = false) => {
  transaction.innerHTML = "";

  const move = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  account.balance = move.reduce((accum, value) => accum + value);
  total.textContent = account.balance;
  move.forEach((mov, i) => {
    const type = mov > 0 ? "type2" : "type1";
    const types = mov > 0 ? "deposite" : "withdrawal";
    const html = `<div class="record1 type1">
          <div class="round ${types}"><span class="order">${
      i + 1
    }</span> ${types.toUpperCase()}</div>
          <div class="date">10/11/2024</div>
          <div><strong class="amount">${Math.abs(mov)}$</strong></div>
        </div>`;
    transaction.insertAdjacentHTML("afterbegin", html);
    const IN = currentAccount.movements
      .filter((acc) => acc > 0)
      .reduce((acc, value) => acc + value, 0);
    const out = -currentAccount.movements
      .filter((acc) => acc < 0)
      .reduce((acc, value) => acc + value, 0);
    credites.textContent = IN;
    debit.textContent = out;
    interest_rev.textContent = account.balance * account.interestRate;
  });
};
const trans_money = function () {
  const recieverAccount = accounts.find(
    (acc) => acc.userName === reciever.value && reciever.value !== user.value
  );
  recieverAccount.movements.push(Number(transfer.value));
  currentAccount.movements.push(-Number(transfer.value));
  movement(currentAccount);
};
const recieve_loan = function () {
  if (
    currentAccount.movements.some((move) => move >= Number(loan.value) * 0.1)
  ) {
    currentAccount.movements.push(Number(loan.value));
    movement(currentAccount);
  }
};
const remove = () => {
  if (
    owner.value === currentAccount.userName &&
    Number(passwords.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );

    accounts.splice(index, 1);
    main.style.opacity = 0;
    owner.value = passwords.value = "";
  }
};
open.addEventListener("click", start);
send.addEventListener("click", trans_money);
recieve.addEventListener("click", recieve_loan);
close.addEventListener("click", remove);
let sorted = false;
sort.addEventListener("click", function () {
  movement(currentAccount, !sorted);
  sorted = !sorted;
});
const inter_rev = document.querySelector(".interest");
interest = balance * 0.07;
inter_rev.textContent = Math.trunc(interest);

console.log(accounts);
console.log(account4);
