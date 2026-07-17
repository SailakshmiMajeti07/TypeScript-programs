function greet(name:string):string{
  return `Namaste,${name}`;
}

function getLocation(city:string="Hyderabad"):string{
  return `Location: ${city}`;
}
function sendAlert(phoneNumber:number,message?:string):void{
  console.log(`Sending SMS to ${phoneNumber}...`);
  if(message){
    console.log(`Content: ${message}`);
  }
}
function calculateTotalScores(...scores:number[]):number{
  return scores.reduce((total,score)=>total+score,0);
}

console.log(greet("Prabhas"));
console.log(getLocation());
console.log(getLocation("Vijayawada"));
sendAlert(9876543210);
sendAlert(9876543210,"Movie starts now!");

const total=calculateTotalScores(85,90,78,92);
console.log(`Total Scores: ${total}`);