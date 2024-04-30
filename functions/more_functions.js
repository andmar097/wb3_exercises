"use strict"

function displayMailingLabel (name, address, city, state, zip){

console.log(name);
console.log(address);
console.log(`${city}, ${state}, ${zip}`);


}

function addNumbers (num1, num2) {
    let result = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + result);

}

function displayReceipt(totalDue, amountPaid) {
    let changeDue = amountPaid - totalDue
    console.log("Total Due: $" + totalDue.toFixed(2) + " Amount Paid: $" + amountPaid.toFixed(2) + " Change Due: $" + changeDue.toFixed(2));
    if (changeDue >= 0) {
        console.log(`Change Due: $${changeDue}`);
    } else {
        console.log(`Looks like you still owe us: $${Math.abs(changeDue)}`);
    }


}


//use the above functions
displayMailingLabel("andrea", "1234 Conch Shell Street", "Mesquite", "Texas", 75150)
displayMailingLabel("jungkook", "42 Hangang-daero", "Yongsan-gu", "Seoul", 78250)
displayMailingLabel("xavi", "49 E Hadley St", "Pheonix", "Arizona", 85008)

addNumbers(5,7)
addNumbers(12,24)
addNumbers(36,17)

displayReceipt(25.50, 50.00)
displayReceipt(25.50, 25.50)
displayReceipt(25.50, 15.50)