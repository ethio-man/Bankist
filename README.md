# Bankist - Simple Banking App

Welcome to **Bankist**, a friendly and interactive banking simulation built with JavaScript. This application allows users to perform basic banking operations such as checking balance, transferring money, receiving loans, and closing accounts, all within a straightforward UI.

---

## Table of Contents

- [Features](#features)
- [Accounts & Credentials](#accounts--credentials)
- [Usage](#usage)
- [Code Structure](#code-structure)

---

## Features

- **User Login:** Secure login using username and PIN.
- **Balance Management:** View and track your current account balance.
- **Money Transfer:** Send money to other accounts.
- **Loan Requests:** Apply for and receive loans.
- **Transaction History:** See credited and debited transactions.
- **Account Closure:** Close your account with proper credentials.
- **Interest Calculation:** Automatic interest rate calculation and display.


## Accounts & Credentials

The following demo accounts are available:

| Owner             | Username | PIN  | Interest Rate |
|-------------------|----------|------|---------------|
| Dagmawi Antehun   | dagm     | 2017 | 1.3%          |
| Siyum Teshome     | siyum    | 2016 | 0.9%          |
| Meron Esayas      | meron    | 2015 | 1.6%          |
| Fikir Antehun     | fikir    | 2002 | 1.4%          |

> **Note:** Usernames are generated as the first name (lowercase) of each owner.

---

## Usage

### Login

- Enter your **username** (first name, lowercase) and **PIN** to log in.

### Transfer Money

- Enter the amount to transfer.
- The balance and transaction history will update accordingly.

### Request a Loan

- Enter the loan amount and submit.
- Your balance and credited transactions will be updated.

### Close Account

- Enter your **username** and **PIN** to close your account.

---

## Code Structure

The main logic is in [`Bank/bank.js`](Bank/bank.js):

- **Account Data:** Four sample accounts with owners, PINs, movements, and interest rates.
- **DOM Interactions:** Uses `document.querySelector` to interact with UI elements.
- **Event Listeners:** Handles login, transfer, loan, and account closure via click events.
- **Transaction Handling:** Functions for handling money transfer, loan request, and account closure.
- **Interest Calculation:** Interest is calculated and displayed based on the balance.

