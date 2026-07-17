"use strict";
class BankBranch {
    static bankName = "HDFC Bank";
    static totalAccountsCreated = 0;
    accountNumber;
    accountHolder;
    constructor(name, accNo) {
        this.accountHolder = name;
        this.accountNumber = accNo;
        BankBranch.totalAccountsCreated++;
    }
    static getBankPolicy() {
        console.log(`Welcome to ${this.bankName}. All FDs are subject to market risks.`);
    }
    showAccount() {
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Acc No: ${this.accountNumber}`);
    }
}
console.log(BankBranch.bankName);
BankBranch.getBankPolicy();
const user1 = new BankBranch("Monika", "HDFC12345");
const user2 = new BankBranch("Pravallika", "HDFC67890");
console.log(user1.accountNumber);
console.log(`Total Accounts in System: ${BankBranch.totalAccountsCreated}`);
