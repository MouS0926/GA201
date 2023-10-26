"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bankaccount_1 = require("./src/models/bankaccount");
const account = new bankaccount_1.BankAccount("ICDF2345", "Roshni Roy", 12);
account.deposit(1200);
console.log(`Cuurent Balance : ${account.getBalance()}`);
