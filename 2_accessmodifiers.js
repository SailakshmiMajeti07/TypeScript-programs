"use strict";
class DigitalWallet {
    holderName;
    balance;
    secretPin;
    loyaltyPoints = 0;
    constructor(name, initialDeposit, pin) {
        this.holderName = name;
        this.balance = initialDeposit;
        this.secretPin = pin;
    }
    withdrawMoney(amount, enteredPin) {
        if (this.verifyPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`₹${amount} withdrawn successfully. Remaining balance: ₹${this.balance}`);
            }
            else {
                console.log("Inadequate funds in your wallet!");
            }
        }
        else {
            console.log("Incorrect PIN.Transaction declined.");
        }
    }
    verifyPin(Pin) {
        return this.secretPin === Pin;
    }
}
class PremiumWallet extends DigitalWallet {
    addBonus() {
        this.loyaltyPoints += 100;
        console.log(`Bonus added! Total points: ${this.loyaltyPoints}`);
    }
}
const myWallet = new DigitalWallet("Monika", 5000, 1234);
console.log(`Welcome,${myWallet.holderName}!`);
myWallet.withdrawMoney(2000, 1234);
