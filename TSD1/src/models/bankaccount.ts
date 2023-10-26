import { Transaction } from "../interfaces/transaction";

// interface Transaction{
//     type:String,
//     amount:Number,
//     timestamp:Date
// }

export class BankAccount{
private accountNumber:String;
private accountHolder:String;
private balance:number;
private transactions:Transaction[]

    constructor(accountNumber:String,accountHolder:String,initialBalance:number=0  ){
        this.accountNumber=accountNumber
        this.accountHolder=accountHolder
        this.balance=initialBalance
        this.transactions=[]

    }

    deposit(amount:number){
        if(amount > 0)
        {
            this.balance += amount

            const currentTransaction={
                type:'withdrawal',
                amount:amount,
                timestamp:new Date()
            }

            this.transactions.push(currentTransaction)
            console.log(`Deposited ${amount} at ${currentTransaction.timestamp},New Balance:${this.balance}`);
            
        }
        else{
            console.log("invalid amount");
            
        }
    }


    withdraw(amount: number){
        if(amount>0)
        {
            if(this.balance>=amount)
            {
                this.balance-=amount
                const currentTransaction={
                    type:'withdrawal',
                    amount:amount,
                    timestamp:new Date()
                }

                this.transactions.push(currentTransaction)

                 console.log(`Withdrawn ${amount} at ${currentTransaction.timestamp},New Balance:${this.balance}`);
            }
            else{
                console.log(`insufficient balance`);
                
            }
        }
        else{
            console.log("invalid amount");
        }
    }
    getBalance(){
        return this.balance
       
        
    }

}


