"use strict";
class FixedDeposit {
    customerName;
    principalAmount;
    interestRate;
    tenureYears;
    constructor(name, amount, rate, years) {
        this.customerName = name;
        this.principalAmount = amount;
        this.interestRate = rate ?? 6.5;
        this.tenureYears = years ?? 1;
    }
    calculateMaturity() {
        const interest = (this.principalAmount * this.interestRate * this.tenureYears) / 100;
        return this.principalAmount + interest;
    }
    displayDetails() {
        console.log(`---FD Receipt---`);
        console.log(`Customer: ${this.customerName}`);
        console.log(`Principal: ${this.principalAmount}`);
        console.log(`Rate: ${this.interestRate}`);
        console.log(`Tenure: ${this.tenureYears}`);
        console.log(`Maturity Amount: ${this.calculateMaturity()}`);
        console.log(`----------------\n`);
    }
}
const standardFD = new FixedDeposit("Monika", 10000);
const seniorCitizenFD = new FixedDeposit("Pravallika", 10000, 7.5, 2);
standardFD.displayDetails();
seniorCitizenFD.displayDetails();
seniorCitizenFD.principalAmount = 110000;
console.log(`Updated Maturity for Pravallika: ${seniorCitizenFD.calculateMaturity()}`);
