let userName:string="Monika";
let userAge:number=19;
let isStudent:boolean=true;

console.log("Data Type of UserName is --> ",typeof userName);
console.log("Data Type of UserAge is  --> ",typeof userAge);
console.log("Data Type of isStudent --> ",typeof isStudent);

function displayUserProfile(name:string,age:number,isStudent:boolean):void{
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Is Student: ${isStudent}`);
}

displayUserProfile(userName,userAge,isStudent);