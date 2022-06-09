/*let firstname = "Trevor"
console.log(firstname)

let lastname;
lastname = "Stokes"
console.log(lastname)

let age = 31
console.log(age)
/*

/*
    Set 7 to 8 variables:
    fName; lName; houseNumber; aptNumber (if applicable); street; city; state; post code; and concatenate them together to create your address stamp.
    Assign all of these values to console log to a new variable called myAddress
*/

let firstname = "Trevor"
let lastname = "Stokes"
let age = 21
let address = "123 Speed Drive"
let zipcode = "05495"
let town = "Burlington"
let state = "VT"
let doorcolor = "Red"
let myAddress = `${firstname} ${lastname} is ${age} at \n${address} ${zipcode} ${town}, ${state}\n and he has a ${doorcolor} door`
//let myAddress = firstname + " " + lastname + " is " + age + " at " + address + " " + zipcode + " " + town + ", " +  state + " and he has a green door.";
console.log(myAddress)
