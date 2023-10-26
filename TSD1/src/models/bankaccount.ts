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
            this.transactions.push({
               type:'deposit',
               amount:amount,
               timestamp:new Date()
            })
            console.log(`Deposited ${amount},New Balance:${this.balance}`);
            
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
                this.transactions.push({
                    type:'withdrawal',
                    amount:amount,
                    timestamp:new Date()
                 })

                 console.log(`Withdrawn ${amount},New Balance:${this.balance}`);
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


