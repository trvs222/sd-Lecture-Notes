/**
                        NOTES
 *  Console log is only used to display info to the developer,
    not used to get data from the function
 *   Return statements are data we can use and work with.
 *  Functions will not work unless called.
 * 
 */


/*function declaration() {
    return "this is a function"

}

let displayData = declaration()
*/

function greetUser(userName) {
    return `Hello user, ${userName}`

}

console.log(greetUser("User"))
/**
 * (1) argumement is a  value that is being used in a parameter
 * functions can have any amount of parameters, even 0
 * parameters are like doors to let arguemnts into the functions
 */

let user1 = "Paul"
let user2 = "David"
let user3 = "Kyle"
let user4 = "Edwin"

console.log(greetUser(user1))
console.log(greetUser(user2))
console.log(greetUser(user3))
console.log(greetUser(user4))

function caps(string) {
    return string.toUppercase()

}
 
/**
 * arrow functions
 * Can only have one parameter if not closed by ()
 * can have retrun statement ONLY without useing { }
 * 
 */


let greetEveryone = () => console.log("hello Class!")

let greetPerson = name => console.log(`Hello, ${name}`)
greetPerson("Trevor")


let sendEmail = (email, name) => {
    let greet = "hi"
    return `${greet}: ${name}:`

}
console.log(sendEmail("innocent@gmail.com", "Trevor"))
/*
    Create an arrow function expression named tipCalculator.
    It will take a pre-tax bill, sales tax, and tip percentage as parameters.
    It will return a string interpolated bill total and tip amount.
*/


let tipCalc = (preTax, salesTax, tip) => {

 let bill = preTax + (preTax * (salesTax / 100))
let totalTip = bill * (tip / 100)
let total = bill + totalTip

return `Your bill total is ${total} with a tip being${totalTip.toFixed(1)}`
}
console.log(tipCalc(100, 7, 20))

