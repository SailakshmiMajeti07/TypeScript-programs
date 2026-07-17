"use strict";
let flexibleValue = 10;
flexibleValue = "Now I am a string";
flexibleValue = true;
let mysteryValue = "Hello Monika";
if (typeof mysteryValue == "string") {
    console.log("Length of unknown string: ", mysteryValue.length);
}
function logNotification(message) {
    console.log("ALERT: ", message);
}
logNotification("Environmnent Setup Complete!");
