"use strict";
let balance = 35000;
let IN = 0,
  out = 0,
  interest = 0;
let index = 10;
const overlay = document.querySelector(".overlay");
const open = document.querySelector(".open");
const pin = document.querySelector(".pin");
const user = document.querySelector(".user");
const transfer = document.querySelector("#trans-am");
const send = document.querySelector(".send");
const loan = document.querySelector("#trans-am2");
const recieve = document.querySelector(".send2");
const total = document.querySelector(".sum");
const credites = document.querySelector(".credited");
const debit = document.querySelector(".debited");
const interest_rev = document.querySelector(".interest");
const owner = document.querySelector("#owner");
const password = document.querySelector("#trans-am3");
const close = document.querySelector(".send3");
const record1 = document.querySelector(".type1");
const record2 = document.querySelector(".type2");
const transaction = document.querySelector(".transaction");

const account1 = {
  owner: "Dagmawi Antehun",
  pin: 2017,
  movements: [2000, -400, 6000, -3000, -500, 600, 9000],
  interestRate: 1.3,
};
const account2 = {
  owner: "Siyum Teshome",
  pin: 2016,
  movements: [4000, -900, 1000, -2000, -700, 600, 1500],
  interestRate: 0.9,
};
const account3 = {
  owner: "Meron Esayas",
  pin: 2015,
  movements: [-1000, 600, 3000, -3000, -500, 600, -4000],
  interestRate: 1.6,
};
const account4 = {
  owner: "Fikir Antehun",
  pin: 2002,
  movements: [9000, -200, 16000, -7000, -2500, 6000, 15000],
  interestRate: 1.4,
};
const accounts = [account1, account2, account3, account4];
accounts.forEach((acc) => {
  acc.userName = acc.owner.split(" ");
});
//****** */
overlay.classList.remove("overlay");
const start = function () {
  const username = user.value;
  const password = pin.value;
  const currentAccount = accounts.find((acco) => acco.userName === username);
  console.log(currentAccount);
  if (username === "dagm" && password === "2017") {
    //i made a temporary adjustment in this line ,line 8 (the overlay statement ) should be here
  }
};
const trans_money = function () {
  const amount = transfer.value;
  out += Number(amount);
  balance -= amount;
  total.textContent = balance;
  debit.textContent = out;
  const child = record1.cloneNode(true);
  transaction.prepend(child);
  const tran_typ = document.querySelector(".order");
  const tran_am = document.querySelector(".amount");
  tran_typ.textContent = index;
  tran_am.textContent = amount + "$";
  index += 1;
};
const recieve_loan = function () {
  const amount = loan.value;
  IN += Number(amount);
  balance += Number(amount);
  total.textContent = balance;
  credites.textContent = IN;
  const child = record2.cloneNode(true);
  transaction.prepend(child);
  const lon_ord = document.querySelector(".order2");
  const lon_am = document.querySelector(".amount2");
  lon_ord.textContent = index;
  lon_am.textContent = amount + "$";
};
const finish = () => {
  if (owner.value === "dagm" && password.value === "2017") {
    overlay.classList.add("overlay");
  }
};
open.addEventListener("click", start);
send.addEventListener("click", trans_money);
recieve.addEventListener("click", recieve_loan);
close.addEventListener("click", finish);
const inter_rev = document.querySelector(".interest");
interest = balance * 0.07;
inter_rev.textContent = Math.trunc(interest);
console.log(account1);
