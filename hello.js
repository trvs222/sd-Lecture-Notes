//  console.log("Hello World")
function randomNum(min, max) {
   let range = max - min + 1
  
    return Math.floor(Math.random() * range) + min
  }
/*
    Set 7 to 8 variables:
    fName; lName; houseNumber; aptNumber (if applicable); street; city; state; post code; and concatenate them together to create your address stamp.
    Assign all of these values to console log to a new variable called myAddress
*/

let firstname = "Trevor"
let lastname = "Stokes"
let age = 21
let address = "123 Speed Drive"
let zipcode = 11111
let state = "VT"
let doorcolor = "Red"

let myAddress = firstname + lastname + "is " + age + "at " + address + zipcode + state + " and he has a red door.";
console.log(myAddress)