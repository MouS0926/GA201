import { BankAccount } from "./src/models/bankaccount";

const account= new BankAccount("ICDF2345","Roshni Roy",12)

account.withdraw(100)
// account.deposit(200)
console.log(`Cuurent Balance : ${account.getBalance()}`);