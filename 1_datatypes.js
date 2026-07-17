"use strict";
let userName = "Monika";
let userAge = 19;
let isStudent = true;
console.log("Data Type of UserName is --> ", typeof userName);
console.log("Data Type of UserAge is  --> ", typeof userAge);
console.log("Data Type of isStudent --> ", typeof isStudent);
function displayUserProfile(name, age, isStudent) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Is Student: ${isStudent}`);
}
displayUserProfile(userName, userAge, isStudent);
