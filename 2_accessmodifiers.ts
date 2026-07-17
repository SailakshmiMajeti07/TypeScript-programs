class DigitalWallet{
  public holderName:string;
  private balance:number;
  private secretPin:number;
  protected loyaltyPoints:number=0;
  constructor(name:string,initialDeposit:number,pin:number){
    this.holderName=name;
    this.balance=initialDeposit;
    this.secretPin=pin;
  }
  public withdrawMoney(amount:number,enteredPin:number):void{
    if(this.verifyPin(enteredPin)){
      if(this.balance>=amount){
        this.balance-=amount;
        console.log(`₹${amount} withdrawn successfully. Remaining balance: ₹${this.balance}`);
      }else{
        console.log("Inadequate funds in your wallet!");
      }
    }else{
      console.log("Incorrect PIN.Transaction declined.");
    }
}
private verifyPin(Pin:number):boolean{
    return this.secretPin===Pin;
}
}
class PremiumWallet extends DigitalWallet{
  public addBonus():void{
    this.loyaltyPoints+=100;
    console.log(`Bonus added! Total points: ${this.loyaltyPoints}`);
  }
}
const myWallet=new DigitalWallet("Monika",5000,1234);
console.log(`Welcome,${myWallet.holderName}!`); 
myWallet.withdrawMoney(2000,1234);
