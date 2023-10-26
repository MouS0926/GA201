"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
// interface Transaction{
//     type:String,
//     amount:Number,
//     timestamp:Date
// }
class BankAccount {
    constructor(accountNumber, accountHolder, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.transactions = [];
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({
                type: 'deposit',
                amount: amount,
                timestamp: new Date()
            });
            console.log(`Deposited ${amount},New Balance:${this.balance}`);
        }
        else {
            console.log("invalid amount");
        }
    }
    withdraw(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                this.transactions.push({
                    type: 'withdrawal',
                    amount: amount,
                    timestamp: new Date()
                });
                console.log(`Withdrawn ${amount},New Balance:${this.balance}`);
            }
            else {
                console.log(`insufficient balance`);
            }
        }
        else {
            console.log("invalid amount");
        }
    }
    getBalance() {
        return this.balance;
    }
}
exports.BankAccount = BankAccount;
